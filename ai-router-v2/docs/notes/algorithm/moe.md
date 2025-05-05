---
title: MoE架构
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /algorithm/moe/
tags:
  - 算法
---

## Basic MoE

MoE的核心思想是, 将MLP层变化为多个Expert, 每个Expert都是一个MLP, 然后我们对输入的token进行转发, 使用某个可以更好地解决这个token问题的Expert来处理该token, 这就是最朴素的MoE

```python
import torch
from torch import nn


class BasicExpert(nn.Module):
    """
    a basic expert can be a linear
    x shape is (batch_size, seq_length, feature_in)
    trans into (bath_size, seq_length, feature_out)
    """
    def __init__(self, feature_in, feature_out):
        super().__init__()
        self.linear = nn.Linear(feature_in, feature_out)

    def forward(self, x):
        return self.linear(x)



class BaseMoE(nn.Module):
    def __init__(self, feature_in, feature_out, expert_number):
        super().__init__()
        self.experts = nn.ModuleList(
            BasicExpert(
                feature_in,
                feature_out
            ) for _ in range(expert_number)
        )
        # determine the weights of experts
        self.gate = nn.Linear(feature_in, expert_number)

    def forward(self, x):
        # x shape: (batch_size, seq_length, feature_in)
        expert_weights = self.gate(x)
        expert_out_list = [
            expert(x).unsqueeze(2) for expert in self.experts
        ] # shape is (batch_size, seq_length, 1, feature_out)

        # shape is (batch_size, seq_length, expert_number, feature_out)
        expert_output = torch.cat(expert_out_list, dim=2)

        # shape is (batch_size, seq_length, 1, expert_number)
        expert_weights = expert_weights.unsqueeze(2)

        # shape is (batch_size, seq_length, 1, feature_out)
        output = expert_weights @ expert_output
        return output.squeeze(2)

if __name__ == "__main__":
    x = torch.rand(2, 10, 512)

    basic_moe = BaseMoE(feature_in=512, feature_out=128, expert_number=2)
    out = basic_moe(x)
    print(out.shape) # x shape is (2, 10, 128)

```

当然, 现代的MoE会设置Shared Expert, 所有token首先都会流经Shared Experts, 然后再寻找最适合的Local Experts, 最后汇集在一起, 可以看出这个结构很适合parallel并行, 这就是EP并行策略(Expert Parallel), 核心思想就是将所有的Experts划分为若干Local Expert, 然后将token进行Dispatch.

综上所述, MoE架构按照顺序的话, 有如下核心结构:

- Shared Experts and Router

- Dispatch

- Local Experts Permute and GroupGemm

- Combine

接下来会一一讲解

## Shared Experts and Router

Shared Expert结构最初应该是出现在qwen2(?)的模型结构中, 作用是对于每个结果都会经过共享的experts, 然后再按照匹配程度分配到一些专属的experts上, 也就是local experts. 最后的结果会按照加权综合考虑shared experts和local experts.

Router是一个核心网络结构, 我们会根据这个结构来对tokens进行分发, 将其对应到该属于的experts中, 然后进行all2all通信. 在moe中我们一般会设定一个topk, 意味着我们一个token会对所有的experts都计算"匹配度", 然后选择最高的topk个.
