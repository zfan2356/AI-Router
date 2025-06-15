---
title: PPO
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /algorithm/llm/ppo/
tags:
  - 算法
---

## 一. PPO原理

参考文章：[通俗易懂的PPO解析](https://zhuanlan.zhihu.com/p/677607581)

文章内分为两个部分，首先是基于[DeepSpeedExample](https://github.com/deepspeedai/DeepSpeedExamples/tree/master/applications/DeepSpeed-Chat)来通俗地讲解了PPO算法，之后还有一篇PPO的理论解析. 本章主要是对其进行的完善补充，会涉及到更精细的code walkthrough, 然后还有更加基础和细致的PPO算法推导。

RL：Agent在一个Environment中，采取各种Action，目的是找到一个策略，这个策略根据当前观测到的环境状态和奖励反馈，来选择最佳的动作。

- Actor Model：**参数更新**，要训练的模型，会在Environment中采取一系列动作获得奖励。
- Critic Model：**参数更新**，作用是预估收益
- Reward Model：**参数冻结**，计算即时收益
- Reference Model：**参数冻结**，使用KL散度约束Actor模型，不使其训偏。

接下来就直接进入deepspeed-chat的源码走读环节，也会深入一些deepspeed的源码，讲解一下如何进行一次PPO RL训练。

## 二. DeepSpeed-Chat

接下来进行源码的走读，下面文章走读的master版本是这个[DeepSpeed-Chat](https://github.com/deepspeedai/DeepSpeedExamples/tree/bd47e5bc38d292f44bf183e7bda992cde36a769b)

RL训练的相关代码在application/DeepSpeed-Chat之中，大致分为三步

```shell
├── chat.py  # 一个简单的聊天脚本，调用inference/chatbot.py
├── dschat   # 一些代码实现，包括rlhf代码实现，和一些util的实现
│   ├── rlhf
│   │   ├── ppo_trainer.py
│   │   └── rlhf_engine.py
│   └── utils
│       ├── data
│       │   ├── data_utils.py
│       │   └── raw_datasets.py
│       ├── ds_utils.py
│       ├── model
│       │   ├── model_utils.py
│       │   └── reward_model.py
│       ├── module
│       │   └── lora.py
│       ├── perf.py
│       └── utils.py
├── e2e_rlhf.py   # 启动脚本，会调用training中的各个step
├── inference     # 提供一个推理服务
│   └── chatbot.py
└── training                          # 最核心的逻辑，对于每个阶段，提供了一个main.py，是具体的训练逻辑，
    ├── step1_supervised_finetuning   # 然后将训练分为若干阶段，最后在training_scripts里面启动main.py
    │   ├── evaluation_scripts
    │   │   └── run_prompt.sh
    │   ├── main.py
    │   ├── prompt_eval.py
    │   ├── training_log_output
    │   │   └── opt-1.3b-globalBatchSize128.log
    │   └── training_scripts
    │       ├── 一些单机或者多机的不同种类模型的训练启动脚本
    ├── step2_dpo_finetuning
    │   ├── main.py
    │   ├── README.md
    │   ├── training_log_output
    │   │   └── opt-350M_globalBatchSize-32.log
    │   └── training_scripts
    │       ├── 一些单机或者多机的不同种类模型的训练启动脚本
    ├── step2_reward_model_finetuning
    │   ├── evaluation_scripts
    │   │   └── run_eval.sh
    │   ├── main.py
    │   ├── rw_eval.py
    │   ├── training_log_output
    │   │   └── opt-350m_globalBatchSize-64.log
    │   └── training_scripts
    │       ├── 一些单机或者多机的不同种类模型的训练启动脚本
    └── step3_rlhf_finetuning
        ├── BenckmarkSetting.md
        ├── main.py
        ├── training_log_output
        │   └── actor_opt-1.3b_critic_opt-350m_globalBatchSize64.log
        └── training_scripts
            ├── 一些单机或者多机的不同种类模型的训练启动脚本
```

我们首先总览一下training包，里面是rlhf的step，第一个step是sft，里面是sft的逻辑，step2是reward model的ft，step3就是真正的rlft，每个step对应一个`main.py`来描述具体的逻辑，然后使用`training_scripts`来启动该step的训练。最后在最外层的`e2e_rlhf.py`里，调用training里面的scripts，这就是整个rlhf的训练过程，训练完成之后就可以使用`chat.py`调用inference相关代码，查看推理结果。

首先从training代码讲解，在training里面首先是step1：SFT。

### 1. Step1: SFT

- `main.py`

首先`parse_args`来在deepspeed的基础上新增一些选项：

```python
parser = deepspeed.add_config_arguments(parser)  # 和deepspeed的parser兼容
```

然后进入main函数，解析args，之后是distributed相关配置

```python
get_accelerator().set_device(args.local_rank)
device = torch.device(get_accelerator().device_name(), args.local_rank)
# Initializes the distributed backend which will take care of sychronizing nodes/GPUs
# torch.distributed.init_process_group(backend='nccl')
deepspeed.init_distributed()
args.global_rank = torch.distributed.get_rank()
```

之后就是deepspeed的training的config配置, `train_micro_batch_size_per_gpu`感觉就是DP，分割batch `train_batch_size`的计算方式是DP _ world_size _ gradient_accumulation_steps, gradient_accumulation_steps是一种训练优化技术，如果gradient_accumulation_steps=2的话，意味着过了2个step才会去更新参数。

```python
ds_config = get_train_ds_config(offload=args.offload,
                                dtype=args.dtype,
                                stage=args.zero_stage,
                                enable_tensorboard=args.enable_tensorboard,
                                tb_path=args.tensorboard_path,
                                tb_name="step1_model")
ds_config[
    'train_micro_batch_size_per_gpu'] = args.per_device_train_batch_size
ds_config[
    'train_batch_size'] = args.per_device_train_batch_size * torch.distributed.get_world_size(
    ) * args.gradient_accumulation_steps

# If passed along, set the training seed now.
set_random_seed(args.seed)

torch.distributed.barrier()
```

之后load tokenizer和model, `load_hf_tokenizer`以及`create_hf_model`都实现在`dschat/util`之中

```python
# load_hf_tokenizer will get the correct tokenizer and set padding tokens based on the model family
additional_special_tokens = args.eot_token if args.add_eot_token else None
tokenizer = load_hf_tokenizer(args.model_name_or_path,
                                fast_tokenizer=True,
                                add_special_tokens=additional_special_tokens)

model = create_hf_model(AutoModelForCausalLM,
                        args.model_name_or_path,
                        tokenizer,
                        ds_config,
                        dropout=args.dropout)
```

看了一下`load_hf_tokenizer`相关代码，主要是依赖tansformers库中的方法，download云端的开源tokenizer或者导入本地的tokenizer `from_pretrained`传入的参数是`model_name_or_path`, 可以指定本地的路径，但是格式需要符合Huggingface格式.

然后是一些配置选项，例如loss计算转为fp32提高精度，以及lora

```python
if args.compute_fp32_loss:
    print_rank_0(
        f"Using model {model.__class__.__name__} with loss in fp32",
        args.global_rank)
    causal_lm_model_to_fp32_loss(model)

if args.lora_dim > 0:
    model = convert_linear_layer_to_lora(model, args.lora_module_name,
                                            args.lora_dim)
    if args.only_optimize_lora:
        model = only_optimize_lora_parameters(model)
        model = make_model_gradient_checkpointing_compatible(model)
```

[ray分布式训练](https://zhuanlan.zhihu.com/p/12871616401)

[openrlhf](https://github.com/zhaochenyang20/Awesome-ML-SYS-Tutorial/blob/main/rlhf/OpenRLHF/readme.md)

[verl](https://github.com/zhaochenyang20/Awesome-ML-SYS-Tutorial/blob/main/rlhf/verl/readme.md)
