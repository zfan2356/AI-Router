---
title: Q&A
author: zfan
---

### 说出ResNet的模型结构?

<details>
<summary>answer</summary>
<p>

主要的算子: conv2d, matmul, pooling, relu, batchnorm, softmax, mul等。conv2d可以通过转换成矩阵乘法来计算，为im2col, cuDNN内部采用这样计算conv2d, 可以利用高效的矩阵乘法来计算

AI领域的优化分为三类，graph计算图层面优化，算子operator层面优化，以及运行时runtime层面优化：

- graph层面可以做一些算子fusion

- operator层面可以做一些conv2d的优化，如上述

- runtime层面主要是运行时对程序进行系统层面的优化，例如内存池

</p>
</details>

---

### Transformer encoder block的模型结构？

<details>
<summary>answer</summary>
<p>

考察的是Transformer的模型结构

</p>
</details>

---

### 写出batchnorm和softmax的公式，bathnorm由哪些小算子构成，batchnorm和softmax在什么情况下计算结果可能会出现精度问题？为什么？如何解决？

<details>
<summary>answer</summary>
<p>

batchnorm精度问题：求方差时，如果通过 $E(X)^2 - E(X^2)$ 求方差，那么当二者很相近的时候，就会出现精度损失，而且存在累加，存在舍入误差

解决方案：welford算法

softmax精度问题：x较大时，$e^x$ 容易超过float32的最大表示范围，发生溢出

解决方案：分子分母除以 $e^{max(x)}$

</p>
</details>

---

### 加速AI模型的推理速度，该从哪些角度去考虑

<details>
<summary>answer</summary>
<p>

宏观上

- 计算效率：取决于硬件的算力，以及计算的持续而不被打断
- 访存效率：取决于访存延迟和带宽
- 计算与访存相重叠
- 计算与通信相重叠

</p>
</details>

---

### 模型大小的四大评估指标是什么，举例说明对他们的理解

<details>
<summary>answer</summary>
<p>

计算量，参数量，访存量，（峰值）内存占用

- 计算量：计算次数，反映了模型对硬件计算单元的需求，单位是OPs(operations)，最常用的数据格式为float32，因此float32类型下的计算量单位为FLOPs(Floating Point Operations)，即浮点计算次数。模型的整体计算量等于模型中每个算子的计算量之和。例子：两个shape为 $(N, C, H, W)$ 的float32 tensor相加，计算量为 $N \times C \times H \times W$ FLOPs

- 参数量：，模型中的参数的综合，反映了模型站的磁盘空间。比如对于 CNN 来说，参数主要是由 Conv/FC 层的 Weight 构成，其他算子也有参数，不过较少

- 访存量：指模型计算时所需访问内存/显存的字节大小，反映了模型对内存/显存带宽的需求。访存量单位为 Bytes，表示模型计算到底需要存取多少 Bytes 的数据。例子：两个shape为 (N, C, H, W) 的float32 tensor 相加，即add，访存量为 $(2 + 1) \times N \times C \times H \times W \times sizeof(float32)$ bytes

- （峰值）内存占用：内存占用是模型运行时（训练或者推理）所占用的内存/显存大小，峰值内存占用指运行时的内存/显存占用的峰值，注意内存占用 ≠ 访存量

</p>
</details

---

### 说出加速ResNet50推理速度的一些手段

<details>
<summary>answer</summary>
<p>

- GPU cuda 算子优化，GPU算子加速库（cuDNN，cuBLAS，etc），CPU算子加速库（oneDNN）

- int8量化压缩

- 算子融合

- 静态显存管理

- 运行时优化

推理加速的整体原则：训练过程与推理过程具有不同的特点，后者可以针对硬件做更大程度的系统级别的优化。

</p>
</details>
