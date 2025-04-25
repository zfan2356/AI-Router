---
title: Gemm
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /cuda/gemm/
tags:
  - cuda
---

## Cutlass: Fast GEMM with WGMMA

[part1](https://research.colfax-intl.com/cutlass-tutorial-wgmma-hopper/)

[part2](https://research.colfax-intl.com/cutlass-tutorial-design-of-a-gemm-kernel/)

[part3](https://research.colfax-intl.com/cutlass-tutorial-persistent-kernels-and-stream-k/)

## GEMM

这里选择先使用triton来示范如何写一个当前业界较为先进的一版gemm, 随后会再使用cuda写一遍.

[gemm triton guide](https://triton-lang.org/main/getting-started/tutorials/03-matrix-multiplication.html)

[gemm triton guide2](https://triton-lang.org/main/getting-started/tutorials/09-persistent-matmul.html)

一款高吞吐的gemm, 需要具备以下一些特点

- block-level matrix devide: 按照块来分治, 对于每个块, 我们会使用tensor core来进行计算

- persistent kernel: 我们会启动sm个block, 循环式地处理每块数据, 这样会避免多block调度和创建的开销, 也能更好地利用和控制sm.

- L2 cache: 为了更好地利用L2 cache, 我们会对调度的block进行重排, 详情请阅读上面的gemm triton guide, 事实上虽然在cuda编程的范式上, 我们理解每个block是完全并行执行的, 他们也享有独立的shared memory和reg等, 但是实际上会受限于sm的数量和资源, 并非会变成完全意义上的并行, 这也就是为什么上述的对于矩阵block的re-ordering可以让L2 cache更加友好的原因.

- TMA & WGMMA: hopper的新特性, 可以快速异步地搬运数据.

接下来我们详细地写一个triton gemm kernel来演示一下如何利用上述的优化.

我们首先会定义一些超参数, 这些超参数直接影响着kernel的吞吐, 又随着硬件而变化, 依赖于triton, 我们可以直接使用`triton.autotune()`来让triton帮我们选择吞吐最高的超参数

```python
def gemm_get_configs(pre_hook=None):
  return [
      triton.Config(
          {"BLOCK_M": BLOCK_M, "BLOCK_N": BLOCK_N, "BLOCK_K": BLOCK_K, "GROUP_SIZE_M": 8},
          num_stages=s,
          num_warps=w,
          pre_hook=pre_hook,
      ) for BLOCK_M in [128] for BLOCK_N in [128, 256] for BLOCK_K in [64, 128] for s in [3, 4] for w in [4, 8]
  ]


@triton.autotune(
    configs=gemm_get_configs(),
    key=["M", "N", "K"],
)
@triton.jit(launch_metadata=_gemm_launch_metadata)
def _gemm_kernel():
```

对于L2-cache的re-order, 官方教程中是对M维度划分了group, K维度采取的是完整的K, 然后按照列来逐个处理block.

```python
# re-order for l2 cache
num_blocks_in_group = GROUP_SIZE * num_n_blocks
group_id = pid // num_blocks_in_group
first_block = group_id * GROUP_SIZE
group_size_m = min(num_m_blocks - first_block, GROUP_SIZE)

block_m = first_block + (pid % group_size_m)
block_n = (pid % num_blocks_in_group) // group_size_m
```

完整代码如下

[triton gemm kernel code](https://github.com/zfan2356/cuda_kernel_guide/blob/main/triton/gemm.py)

那么我们如何使用cuda来实现一版gemm呢

这里可以参考deep gemm的实现

首先我们来实现一下scheduler, 这是对应L2 cache re-order的部分, 帮助我们调度需要计算的block.

```cpp

```
