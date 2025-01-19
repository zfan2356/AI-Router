---
title: 大模型量化简介 
author: zfan
---

## 一. 什么是模型量化


## 二. 模型量化分类和粒度

### 1. 量化分类

量化可以分为均匀量化和非均匀量化，首先是均匀量化，这类量化其实就是每个刻度对应一个固定的gap，然后均匀地将FP32等映射到现在指定的值域上，比如int8，均匀量化适用于数据比较均匀，没有过多的异常值的类型，比如绝大部分的CV模型，resnet系列。

- 对称量化(Symmetric quant/Scale quant): 0 -> 0，这个对应的0其实是值域的中点，比如int8的0就是0，uint8的话就是127，换言之对称量化的值域的零点就是中点

- 非对称量化(Asymmetric quant/Affine quant/zero quant): 0 -> zp, zp是zero point，也就是人为指定的零点


非均匀量化，一般比较适用于LLM, 适用的场景就是数据分布非常不均匀，伴随着过多的outlier值的突出，比如6B以上的LLM

- Llm.int8(): 一篇论文，比较推荐，读一下
- AWQ

## 三. 如何做量化

首先介绍均匀量化，在量化的时候，首先我们需要选择量化的粒度

- per channel 

比如cv中的通道数，每个通道的量化参数不同

- per tensor 

粒度更大一些

- per token 

经常用在LLM量化中，每个token的hidden state共用一套量化参数

- per group

也被称为 per vector，可以作用到一个比较小的vector上，粒度更细致

### 公式

Symmetric quant: 对于对称量化，第一步总是先求scale，也就是从fp32->int8/uint8的每个单位长度的规格，然后对于原值，求映射就可以了，因为我们的0 -> 0

$$
scale = \frac{max(abs(weight))}{127}
$$
$$
wint8 = round(\frac{weight}{scale})
$$
对于uint8，scale的分母就会变成255

Asymmetric quant: 对于非对称量化，我们会多一步，先求一下scale，然后再求zero point，最后再对数据进行映射

$$
scale = \frac{abs(max(weight) - min(weight))}{127}
$$
$$
zp := -128 - round(\frac{min(weight)}{scale})
$$
$$
wint8 = clip(round(\frac{weight}{scale}) + zp, -128, 127)
$$

clip是一个截断操作，对值做一个上下界的截断，如果超出的话就取设定的上下界的值

可以发现在量化中，主要存在round误差和clip误差这两种误差


## 四. 实际应用

对于量化的过程，其实就是替代算子的过程，例如之前的conv2d的卷积操作使用的数据类型是fp32，我们采用量化的手段将其重写为处理int8数据类型的算子

例如矩阵乘法，在matmul算子中，我们需要执行矩阵乘法操作，首先我们会将输入矩阵quant成int8类型的矩阵，这里和之前算子不同的是，因为我们执行计算的时候，肯定不会一直保持在int8的值域，假如说最后计算完的矩阵的某个元素类型是int32，策略就是当计算完成之后，对于最后的数据再次执行requantization，重新映射回int8，最后写入memory，这就是int8量化算子的执行过程

我们可以写出这样的代码

```python
def quantize_per_tensor_absmax(x: torch.Tensor, n_bits=8):
    scales = x.abs().max()
    print(type(scales))
    q_max = 2**(n_bits - 1) - 1
    scales.clamp_(min=1e-5).div_(q_max)
    q_x = x / scales
    q_x = q_x.clamp_(-q_max, q_max).round_()
    return q_x, scalescales

def dequantize(q_x: torch.Tensor, scales):
    return scales * q_x
```

这里`clamp_, round_()` 是pytorch中的函数，带有下划线的意思是就地操作，而不是拷贝一份之后再操作

### 五. 如何选择

1. 选asym还是sym：

在asym下，weight和activation经过量化后，原来的fp32_weight * fp32_activation, 会经过如下的运算:

$$
\widehat{\mathbf{W}}_{\mathbf{x}} = s_w \left( \mathbf{W}_{\text{int}} - \mathbf{z}_w \right) s_x \left( \mathbf{x}_{\text{int}} - \mathbf{z}_x \right)
$$

$$
\widehat{\mathbf{W}}_{\mathbf{x}} = s_w s_x \mathbf{W}_{\text{int}} \mathbf{x}_{\text{int}} - \color{red}{s_w \mathbf{z}_w s_x \mathbf{x}_{\text{int}}} - \color{blue}{s_w s_x \mathbf{z}_x \mathbf{W}_{\text{int}}} + s_w \mathbf{z}_w s_x \mathbf{z}_x
$$

可以看出，第一项其实就是sym量化，第三项和第四项可以预先计算得出，但是第二项由于包含activation，$x_{int}$, 所以需要运行时才知道，这样就无法进行量化，所以一般采用的是
**asym activation** 和 **sym weight** , 这样$z_w = 0$, 第二项就为0

2. 选int8还是uint8

理论上，含有relu激活层的模型，activation可以使用uint8类型的量化

也需要考虑硬件，假如CPU/GPU只支持int8 * uint8的指令，那么就会采用uint8量化的activation和int8量化的weight

3. 选per channel还是per tensor

一般选择per tensor就可以满足精度要求，如果精度不达标的话，就会继续往下选择，但是注意activation不使用per channel

