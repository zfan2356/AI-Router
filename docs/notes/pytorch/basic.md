---
title: PyTorch常用函数以及方法
author: zfan
---
## 一. torch.tensor
### 1. 基础操作
意为一个张量，可以理解为多维数组，可以进行一系列操作
```python
x = torch.tensor()
# 所有元素求和
x.sum()
# 对第一维求和: [4, 6]
x.sum(dim=0)
# 对第二维求和: [3, 7]
x.sum(dim=1)
# 求平均值，也可以按照维度求，同上
x.mean()
# 数值操作，可以视为对每个元素操作
y = x * 2  # tensor([[2, 4], [6, 8]])
z = x / 2  # tensor([[0.5, 1.0], [1.5, 2.0]])
# 返回元素个数
x.numel()
```

### 2. 梯度操作
```python
# 反向传播计算梯度，通常需要一个标量
x.backward()
# 梯度清零
x.grad.zero_()
```

### 3. 转换操作
tensor的生成，变换，以及拼接分割
```python
# 生成一个0-7的一维张量
x = torch.arange(8)  
# 转换形态为2 * 4
y = x.view(2, 4)  # tensor([[0, 1, 2, 3], [4, 5, 6, 7]])
# 转换形态为2 * 4
y = x.reshape(2, 4)


a = torch.tensor([1, 2])
b = torch.tensor([3, 4])
# 按照第一维拼接
c = torch.cat((a, b), dim=0) # tensor([1, 2, 3, 4])
# 沿新维度堆叠
c = torch.stack((a, b), dim=0) # tensor([[1, 2], [3, 4]])
# 分割
x = torch.arange(10)
splits = torch.split(x, 3)
# (tensor([0, 1, 2]), tensor([3, 4, 5]), tensor([6, 7, 8]), tensor([9]))
```

### 4. 切片操作
可以访问和修改向量的特定部分
```python
x = torch.tensor([[1, 2, 3], [4, 5, 6]])
s = x[:, 1]  # tensor([2, 5]), 意为第一维取所有，第二维只取第一列（编号从0开始）
x[:, 1] = torch.tensor([20, 50])
```

### 5. 线性代数
```python
a = torch.randn(2, 3)
b = torch.randn(3, 4)
# 矩阵乘法
c = torch.matmul(a, b)  # 结果为 (2, 4) 形状的张量

```