---
title: CUDA Dev Env
author: zfan
createTime: 2025/05/16
permalink: /cuda/env/
tags:
  - cuda
---

这是一篇杂谈, 主要讲解了如何配置一个cuda舒服的开发环境, 包括代码补全, 错误检查, (目前感觉这俩就够用了...)

插件主要使用clangd, IDE这里使用的是vscode (其实如果使用clion会省下来很多麻烦, 但是一般cuda开发都需要ssh gpu机器, 我个人习惯使用vscode shh)

虚拟环境使用micromamba/conda, 所以很多路径需要我们手动指定, 但是优点是环境干净隔离.

我们知道cuda的核心开发工具包就是nv的cudatoolkit, 这个里面包含了lib和nvcc编译器.

主要有俩方面, 一个是你的vscode需要识别到你的clangd, 在该项目的`.vscode/settings.json`下配置:

```json
{
  "clangd.path": "/path/to/your/clangd",
  "clangd.arguments": [
    "--query-driver=/path/to/your/nvcc",
    "--background-index",
    "--header-insertion=never",
    "--completion-style=detailed",
    "--enable-config"
  ],
  "clangd.fallbackFlags": ["-I${workspaceFolder}/include"]
}
```

因为我们是cuda项目, 所以需要将`--query-driver`设置为nvcc编译器路径.

接下来让clangd插件能够识别我们的项目, 现在主要有两种方式:

- 通过编写`CMakeLists.txt`来导出`compile_commands.json`, 之后`settings.json`下面的`clangd`参数指定`compile_commands.json`的路径就可以了. 方法是设置`--compile-commands-dir=${workspaceFolder}/xxx`

- 通过`.clangd`文件来告诉`clangd`我的编译选项, 编译器以及include/lib等, 比较难受的是`.clangd`文件不支持访问环境变量, 所以一般都是直接指定完整的目录, 我这里给出如下环境变量定义:

```shell
export CONDA_PREFIX=/your/conda/envs/dev
```

因为conda/micromamba在下载lib的时候, 会将其重组, 将各个库的lib目录, bin目录等重组在一起, 所以网络上设置`--cuda-path`的方法可能不适用, 因为cudatoolkit已经被打乱重组到环境中了, 这里我们假定当前的虚拟环境叫`dev`.

一般通过`conda-forge`安装的库, 路径都比较固定, 所以下面的yaml配置文件你只需改变一下你的env路径,就可以了.

```yaml
CompileFlags:
  Compiler: /your/conda/envs/dev/bin/nvcc
  Add:
    - -xcuda
    - --cuda-path=/your/conda/envs/dev
    - -I/your/conda/envs/dev/lib/python3.11/site-packages/nvidia/cuda_runtime/include
    - -I/your/conda/envs/dev/lib/python3.11/site-packages/torch/include
    - -I/your/conda/envs/dev/lib/python3.11/site-packages/torch/include/torch/csrc/api/include
    - -I/your/conda/envs/dev/targets/x86_64-linux/include
    - -D__CUDACC__
    - -lcudart
    - -std=c++20
Diagnostics:
  Suppress: [return-type-c-linkage]
```

首先我们需要设置`-xcuda`来让clang知道这是cuda代码. 其次就是cuda的库, 比如`cuda_runtime`等等, 这些都包含在`targets/x86_64-linux/include`之中, 被重组了.

接着在cuda开发之中一般都需要使用`Torch`库, 比如`at::Tensor`等等, 这类库是使用虚拟环境内的`pip`安装的, 相当于套了层娃

`-lcudart`是cuda运行时编译选项? `-D__CUDACC__`..... 其实很多选项我这里也没有很清楚, 当做挖个坑吧

上述配置在我自己的`CentOS` GPU环境机器上可以run起来, 正确地运行错误提示以及代码补全. 当然你如果有第三方库或者项目内头文件目录的依赖, 也需要在`.clangd`中加上你的-I, link起来, 当然这里只讨论补全和check, 编译是另外一回事, cuda库的编译一般是使用`setup.py`
