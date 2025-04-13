---
title: PyTorch AutoGrad
author: zfan
createTime: 2025/04/13
permalink: /pytorch/autograd/
tags:
  - pytorch
---

在深度学习之中,我们构建的模型,其实就是`torch.nn.Module` 的组合, 然后内部不断地嵌套, 我们可以自己定制属于自己的`torch.nn.Module`, 然后内部嵌入若干子`Module`, 然后实现属于自己的forward逻辑

```python
class MyRelu(torch.nn.Module):
     def __init__(self):
          super(MyRelu, self).__init__()
     
     def forward(self, input: torch.Tensor):
          return F.relu(input)

```
这就是一个自定义的`torch.nn.Module`, 其中的计算部分是调用的`torch.nn.functional`中自带的函数. 在`functional`中存在了很多torch预先帮我们设计好的函数, 

根据pytorch的自动微分机制, 

## `torch.autograd.function`
