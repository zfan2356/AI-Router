---
title: Optimizer
author: zfan
createTime: 2025/06/09
permalink: /algorithm/llm/optimizer/
tags:
  - 算法
---

## 一. Optimizer

在训练的一次step之中，loss的一次反向传播，会在每个参数的grad字段累积梯度，用于更新该参数，这就是Optimizer干的事情。Optimizer会维护每个参数的一些状态，在反向传播结束之后，使用梯度更新该参数，然后开始下一次step

这里以Adam Optimizer为例，讲解一下该优化器的细节，之后引出ZeRO

Adam优化器包含三个部分，**Parameters**, **Momentum**, **Variance**, Parameters就是模型的可学习权重，Momentum是记录梯度的指数加权平均值，加速收敛并减少震荡，Variance记录梯度平方的指数加权平均值，自适应调整学习率。

可以看出，Adam优化器，会维护多出两倍的参数占用内存。Adam的公式如下

$$
\begin{align}
&m_t = \beta_1 \cdot m_{t-1} + (1 - \beta_1) \cdot g_t \\
&v_t = \beta_2 \cdot v_{t-1} + (1 - \beta_2) \cdot g_t^2 \\
&w_t = w_{t-1} - \text{lr} \cdot \frac{m_t}{\sqrt{v_t + \varepsilon}}
\end{align}
$$

$\beta_1$, $\beta_2$, $lr$ 以及 $\varepsilon$ 是训练启动时固定的超参数，$g_t$ 是梯度，

## 二. ZeRO

ZeRO是一种训练时的分片优化策略，通过将优化器状态，梯度以及参数分片到多卡上，降低显存占用。分为三个阶段

- ZeRO-1: 将Optimizer分片，也就是将 $m$ 以及 $v$ 分片到多卡上
- ZeRO-2: 将Grad分片到多卡上
- ZeRO-3: 将Parameters分片到多卡上
