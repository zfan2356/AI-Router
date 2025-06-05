---
title: PyTorch AutoGrad
author: zfan
createTime: 2025/04/13
permalink: /python/pytorch/autograd/
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
这就是一个自定义的`torch.nn.Module`, 其中的计算部分是调用的`torch.nn.functional`中自带的函数. 在`functional`中存在了很多torch预先帮我们设计好的函数, 会针对CPU或者GPU进行优化, 并且可以在计算图之中创建一个节点, 然后定义了fwd和bwd的操作.

根据pytorch的自动微分机制, bwd的时候, 其实就是沿着计算图根据链式法则进行求导. `functional`中的函数可以满足我们的一部分需求, 但是有的时候我们会有其他的要求, 这使得我们需要一个可以自己定义fwd和bwd逻辑, 在`nn.Module`中充当一个计算点的工具, 这就是`torch.autograd`之中实现的功能

## `torch.autograd.Function`

允许我们自定义计算图节点, 实现计算操作, 主要的用途是自定义函数, fuse一些重复启动的函数, 实现一些高效的GPU算子.

对于继承了`torch.autograd.Function`的函数类, 需要自己实现fwd和bwd方法, 在`nn.Module`中调用, 视为创建一个计算图节点.(当然要保证`input.requires_grad = True`), 这里补充一些会创建节点的操作: 

```python
# 数学运算
x = torch.tensor([1.0], requires_grad=True)
y = x + 2      # 创建加法节点
z = y * 3      # 创建乘法节点

# 神经网络操作
x = torch.tensor([1.0], requires_grad=True)
y = F.relu(x)  # 创建ReLU节点
z = F.linear(y, weight, bias)  # 创建线性层节点

# 张量操作
x = torch.tensor([1.0], requires_grad=True)
y = x.view(-1)  # 创建视图节点
z = y.sum()     # 创建求和节点

# 条件操作
x = torch.tensor([1.0], requires_grad=True)
y = torch.where(x > 0, x, torch.zeros_like(x))  # 会创建节点

# 索引操作
x = torch.tensor([1.0], requires_grad=True)
y = x[0]  # 会创建节点
```

那什么情况不会创建节点呢?

```python
# 不涉及梯度的操作
x = torch.tensor([1.0])  # requires_grad默认为False
y = x * 2  # 不会创建节点

with torch.no_grad():
    y = x * 2  # 不会创建节点

# 纯Python操作
x = torch.tensor([1.0], requires_grad=True)
y = x.tolist()  # 不会创建节点，因为这是Python操作

# 不改变张量数据的操作
x = torch.tensor([1.0], requires_grad=True)
y = x.detach()  # 不会创建节点，只是创建新视图
```

有的时候我们创建的节点会覆盖当前的节点:

```python
# 原地操作
x = torch.tensor([1.0], requires_grad=True)
x.add_(2)  # 会创建节点，但会修改原始张量
```

每个计算图的节点都有如下的一些属性: 他们会包含fwd和bwd所需的信息

```python
# 节点信息
print(y.grad_fn)  # 显示创建y的操作
print(y.grad_fn.next_functions)  # 显示前驱节点
print(y.is_leaf)  # 是否是叶子节点
```

回到`autograd.Function`里面, 这里允许我们实现自己的"创建计算图节点"的运算, 并且自己来优化对应的函数, 例如我们可以实现一个自己的exp运算, 这也是官方文档给出的例子:

```python
class _MyExp(torch.autograd.Function):
     @staticmethod
     def forward(ctx, input: torch.Tensor):
          output = input.exp() # 如果你有更好的exp实现方式
          ctx.save_for_backward(output)
          return output

     @staticmethod
     def backward(ctx, grad_output: torch.Tensor):
          output, = ctx.saved_tensors
          return grad_output * output

def my_exp(input: torch.Tensor):
     return _MyExp.apply(input)
```
这个函数可以实现一个需求, 那就是如果你有更好的exp实现方式, 你就可以将其替换掉, 这样就可以实现你自己定制的exp函数

fwd没啥好说的, 其实就是简单的前向计算的过程, 对于bwd来说, 每一个节点的任务, 其实就是根据`grad_output`, 计算出`grad_input`返回出去, 作为下一个节点的`grad_output`. 事实上如果当前有`nn.Parameter`参与计算, 比如linear层的weight矩阵, 那么你还需要返回一个weight的梯度. 

在backward实现中, backward的return值的数量要和forward中 ctx之后的输入值的数量一致, 要一一对应, 比如在这里, backward返回的值其实就对应了forward的input.

对于一个exp函数来说, 

