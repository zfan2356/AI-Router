---
title: PyTorch中的梯度计算
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /python/pytorch/gradient/
tags:
  - pytorch
---

在机器学习中，一般是使用梯度下降来优化损失函数，梯度的计算一般是依赖pytorch的自动微分，因此这一篇文章的目标就是深入了解pytorch梯度计算的代码实现与内部原理。

### 一个简单的梯度计算例子

首先定义一个函数$f(x) = 2x^Tx$, 其中$x$ 为一个长度为4的一维张量$[x_0, x_1, x_2, x_3]$，对于这个函数来说，其实就是相当于计算$2(x_0^{2}+x_1^{2}+x_2^{2}+x_3^{2})$

我们首先创建一个一维张量$x_0$作为初始值, 其中包含了从0.0 ~ 3.0四个浮点数，在数学中可以表示为一个向量

$$
x_0 =
\begin{bmatrix}
0.0 \\
1.0 \\
2.0 \\
3.0
\end{bmatrix}
$$

```python
import torch

x0 = torch.arange(4.0)
print(x0.grad)
```

之后这段代码使得$x_0$的`requires_grad_`属性为True，这意味着PyTorch将会追踪对$x_0$ 的所有操作，来计算梯度。在初始时，`x0.grad`为`None`, 这是因为还没有进行任何梯度的计算，在梯度计算之后，`grad`这个字段就会存储`x0`的梯度，在数学上，其实就对应于某个函数$f(x)$ 关于 $x$ 的导数在 $x_0$点的值

```python
x0.requires_grad_(True) # 等价于x0=torch.arange(4.0,requires_grad=True)
print(x0.grad)
```

接下来便是重头戏，`y.backward()`, 这就是PyTorch的自动微分机制，也就是反向传播，计算$y$ 关于 $x$ 在$x_0$点的梯度，并将这个梯度存储在`x0.grad`之中，在这个具体的例子中

$$
\frac{d}{dx}f(x) = [4x_0, 4x_1, 4x_2, 4x_3]
$$

所以我们输出`x0.grad`就会等于`[0, 4, 8, 12]`

```python
y = 2 * torch.dot(x0, x0)
y.backward()
print(x0.grad)
```

这里我们就得到了 $f(x) = 2x^Tx$ 在点 $x_0$ 处相对于 $x$ 的变化率，具体来说，每个元素的梯度 $4x_i$ 表示该点$f(x)$ 对 $x_i$ 的偏导数，我们更加通俗的解释一下：

在$x = [0, 1, 2, 3], f(x) = 28$ 这个点上

- $x_0 = 0$, 表明在这个点上 $f(x)$ 对于 $x_0$ 方向的变化不敏感
- $x_1 = 4$, 表明在这个点上 $f(x)$ 对于 $x_1$ 方向的变化比较敏感，如果 $x_1$ 增加一个 $\delta$, $f(x)$ 大约增加 $4\delta$
- $x_2, x_3$ 同理，会更加敏感

梯度在机器学习很重要，因为他告诉了我们一种方式，来洞察 $f(x)$ 在 $x$ 变化时的规律

### 自动微分对向量的兼容

我们知道在使用`backward()`的时候，可以针对当前标量进行反向传播求梯度，如上述例子，所以我们如果对一个向量反向传播的时候，一般需要将其`sum()`求和，然后再反向传播，这是为什么呢？

假设我们有一个一维张量 $y$ , 我们一般计算梯度是采取的`y.sum().backward`, 但是其实我们也可以提供一个与 $y$ 同形状的`gradient`参数来计算，这个参数指定了张量 $y$ 每个元素的梯度权重。我们来对比一下这两种方式：

1. `y.sum().backward()`: 这里首先计算 $y$ 中所有元素的和，得到一个标量，然后对标量调用`backward()`
2. `y.backward(torch.ones(len(x)))`: 这里直接对 $y$ 调用`backward()`, 但是提供了一个与 $y$ 同形状的全1张量作为梯度权重，这意味着每个元素的梯度权重都是1

其实两种方法都等价于计算 $y$ 中每个元素相对于 $x$ 的偏导数，并将这些偏导数加和，在数学上，这可以表示为

$$
\frac{\partial}{\partial x_i} \sum_{j=1}^n y_j\ \ \ \ AND \ \ \ \ \sum_{j=1}^{n}\frac{\partial y_j}{\partial x_i}
$$

前者是第一种，后者是第二种，由于求导的线性特性，我们不难得出两者相等

我们再解释一下第二种计算方式`y.backward(torch.ones(len(x)))`, 设 $y = [y_1, y_2, y_3, y_4]$, 其中每个 $y_i = 2x_i^2$, 并且`gradient = [1, 1, 1, 1]`, 那么对于`y.backward(gradient)`, 实际进行的计算为：

$$
\sum_{j=1}^{n}gradient_j * \frac{\partial y_j}{\partial x_i}
= \sum_{j=1}^{n}\frac{\partial y_j}{\partial x_i}
= 4x_i
$$

我们代入具体的 $x_0 = [0, 1, 2, 3]$ 来计算，结果为

$$
x.grad = 4 * [0, 1, 2, 3] = [0, 4, 8, 12]
$$

---

总结：

1. `y.sum().backward()` 是一种更直接的方法，用于当我们只关心和的梯度的时候
2. `y.backward(gradient)` 提供了更加灵活的方式，使得我们可以按照自己的需求分配各个元素的贡献

### 反向传播起点

为什么反向传播的起点需要是一个标量呢？原因在于它的核心算法——链式法则。链式法则用于计算复合函数的导数，而在多维情况下，这需要有一个清晰定义的输出方向来应用。

在深度学习中，我们通常关注的是如何根据损失函数（一个标量）来调整网络参数。损失函数是一个标量，因为它提供了一个单一的度量，表示当前模型的表现好坏。计算这个标量相对于模型参数的梯度，就是在问：“如果我改变这个参数一点点，损失函数会如何变化？”

当你有一个向量或矩阵输出时，这个输出的每个元素可能依赖于输入的不同部分，也可能相互依赖。如果直接从这样的结构开始反向传播，就会缺乏一个统一的量度来衡量整体的变化。转换成标量后，就提供了一个明确的、单一的值，表示整个输出的「**总效应**」，从而可以应用链式法则来计算对每个输入的影响。

因此，通过将输出转换为标量，我们可以更清晰地使用链式法则来逐步回溯，计算每个参数的梯度。这就是为什么反向传播通常需要从一个标量开始的原因。
