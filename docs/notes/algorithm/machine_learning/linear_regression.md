---
title: Linear Regression
author: zfan
---

# 线性回归与梯度下降
## 一. 什么是线性回归？
线性回归主要描述一个或者多个自变量与一个因变量之间的线性关系的模型

目标是为了确定一个模型函数$h(x) = \theta_0 + \theta_1x$, 使得损失函数最小，损失函数可以定义为
```math
J(\theta_0, \theta_1) = \frac{1}{2m}\sum_{i=1}^{m}{(h(x^i) - y^i)^2}
```
观察损失函数其实就是一个二元函数，我们的目标就是让$J(\theta_0, \theta_1)$ 最小，常见的数学方法就是分别对$\theta_0, \theta_1$求偏导，使其等于0，解方程，但是在计算机实现上我们有更加有趣的方法

## 二. 梯度下降
#### 1. 简介
梯度下降法其实就是用来计算函数最小值的，思路其实就是在函数上放一个“球”，然后任其自由向“谷底”滚去

对于某个函数，我们就可以使用梯度下降法，来获得它的最小值（非凸的局部最小值）

具体步骤如下：

- 钦定$\theta_0, \theta_1$初值
- 不断沿梯度改变$\theta_0, \theta_1$, 使得$J(\theta_0, \theta_1)$ 递减
- 直到找到$J(\theta_0, \theta_1)$最小值或者局部最小值

#### 2. 如何理解“沿梯度”
对于$f(x) = x^2$, 这是一个一维自变量和一维因变量的函数，如果我钦定一个$x_0$, 那么它的梯度也为一维向量
```math
\nabla f(x) = (f(x))^{'} = 2x
```
梯度向量对应着增长最快的方向，所以我们需要加一个负号，由此我们就得到了每次参数的变化公式
```math
x_j = x_{j-1} - \alpha \nabla f(x_{j-1})
```
其中，$\alpha$又被成为步长

上述是一维函数举例，那么如果我的自变量是二维的呢？
假如$f(x_0, x_1) = x_0^{2} + x_1^{2}$ 那么其实$\nabla f(x_0, x_1)$ 就是对其求偏导，亦可以视作对向量$(x_0, x_1)$ 求导，得出的梯度是一个二维向量，指向的是$(x_0, x_1)$ 增长最快的地方，可见对于一维因变量来说，梯度肯定是一个和自变量维数等同的向量，代表一个方向。

#### 3. 具体解法
回到原来的问题，我们想去用梯度下降法，来求解$J$的最小值，那么$\theta$的变化公式为
```math
\theta_i^{'} = \theta_{i}-\alpha \frac{d}{d\theta_i}J
```
接下来从代码的层面演示一下如何求解线性回归模型
首先我们需要生成一个数据集，这里我们假设$x$是一个二维向量（其实就相当于存在一个$x_0$ 和一个 $x_1$），首先要生成数据
```python
def synthetic_data(w, b, num_examples):
    """
    生成 y = Xw + b + c, 其中X为矩阵形式，每一行是一个样本，w，b为我们要回归的两个参数，c是一个干扰量
    """
    X = torch.normal(0, 1, (num_examples, len(w)))
    y = torch.matmul(X, w) + b
    y += torch.normal(0, 0.01, y.shape)
    return X, y.reshape((-1, 1))

# 真实的参数
true_w = torch.tensor([2, -3.4])
true_b = 4.2 # 这里会通过广播机制扩散

features, labels = synthetic_data(true_w, true_b, 1000)
```
这样是一个生成数据的函数，我们先定义两个真正的`true_w` 和 `true_b`, 用来生成数据，之后我们的目标其实就是随机钦定$w_0$ 和 $b_0$, 使用梯度下降来尽可能靠近`true_w` 和 `true_b`


这里采取小批量随机梯度下降，对比全量来说，可以更有效地利用硬件资源，内存占用低，同时收敛稳定
```python
def data_iter(batch_size, features, labels):
    """
    生成器函数，可以按照batch_size来分割数据，批次返回
    """
    num_examples = len(features)
    indices = list(range(num_examples))
    random.shuffle(indices)
    for i in range(0, num_examples, batch_size):
        batch_indices = indices[i:min(i + batch_size, num_examples)]
        yield features[batch_indices], labels[batch_indices]


batch_size = 10
# 定义初始值w, b
w = torch.normal(0, 0.01, size=(2, 1), requires_grad=True)
b = torch.zeros(1, requires_grad=True)
```

接下来我们定义出常用的函数：
- 计算$y$的函数$h(x)$，称之为线性回归模型`linreg`，我们需要这个值来估计损失
- 损失函数，其实就是上文提到的$J(\theta_0, \theta_1)$, 这里变成了`squared_loss()`, 没有除以样本，因为同时不除的话效果等价
- 梯度下降计算函数`sgd`, `with torch.no_grad():`是 PyTorch 中的一个上下文管理器，用于在其代码块内关闭梯度计算, 在这个上下文中，代码执行的操作不会被记录在计算图中，这些操作不会影响模型的梯度和参数更新，这样做可以有效地避免不必要的内存开销和计算，提高效率

如果对于PyTorch的梯度计算有疑问可以看我的另外一篇文章：

[pytorch中的梯度](pytorch/gradient.md)

```python
def linreg(X, w, b):
    """
    线性回归模型, 其实就是根据已知的量来计算y
    """
    return torch.matmul(X, w) + b


def squared_loss(y_hat, y):
    """
    均方损失，即上文提到的J函数
    """
    return (y_hat - y.reshape(y_hat.shape)) ** 2 / 2


def sgd(params, lr, batch_size):
    """
    小批量随机梯度下降，lr为步长, 因为反向传播计算的是总损失，所以要除以batch_size来获得平均损失
    """
    with torch.no_grad():
        for param in params:
            param -= lr * param.grad / batch_size
            param.grad.zero_()

```

接下来开始正式训练模型，进行三轮迭代，每次随机分别取出小批次数据，计算损失函数`l`, 然后反向传播计算梯度，

```python
lr = 0.03
num_epochs = 3
net = linreg
loss = squared_loss

for epoch in range(num_epochs):
    for X, y in data_iter(batch_size, features, labels):
        l = loss(net(X, w, b), y)
        l.sum().backward()
        sgd([w, b], lr, batch_size)
    with torch.no_grad():
        train_l = loss(net(features, w, b), labels)
        print(f'epoch: {epoch + 1}, train loss: {float(train_l.mean()):f}')
```

当然，这是一个从0开始实现的例子，我们使用库的话，可以得到更简洁的实现
```python
import numpy as np
import torch
from torch.utils import data
from d2l import torch as d2l
from torch import nn

true_w = torch.tensor([2, -3.4])
true_b = 1.2
# 生成数据
features, labels = d2l.synthetic_data(true_w, true_b)

def load_array(data_arrays, batch_size, is_train=True):
    """
    构造一个PyTorch数据迭代器
    """
    dataset = data.TensorDataset(*data_arrays)
    return data.DataLoader(dataset, batch_size, shuffle=is_train)

batch_size = 10
data_iter = load_array((features, labels), batch_size)

# 定义一个层，进入的维度为2，出来的维度为1
net = nn.Sequential(nn.Linear(2, 1))

# 初始参数
net[0].weight.data.normal_(mean=0.0, std=0.01)
net[1].bias.data.fill_(0)

# 均方误差
loss = nn.MSELoss()
# 随机梯度下降
trainer = torch.optim.SGD(net.parameters(), lr = 0.03)

num_epochs = 5
for epoch in range(num_epochs):
    for X, y in data_iter:
        l = loss(net(X), y)
        trainer.zero_grad()
        l.backward()
        trainer.step()
    l = loss(net(features), labels)
    print(f'epoch {epoch + 1}, loss: {l:f}')

```