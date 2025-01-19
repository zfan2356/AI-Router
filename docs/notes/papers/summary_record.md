---
title: paper阅读记录 
author: zfan
---


- Scaling Laws for Neural Language Models

[论文](https://arxiv.org/abs/2001.08361)

大概浏览了一下summary，$N$ 为模型参数量，$D$ 为数据集大小，$C$ 为计算量，也就是浮点数运算次数，一次前向+一次反向，$L$ 为模型性能，这里研究decode-only架构，输入输出为自然语言，$L$ 使用交叉熵来反映。作者通过实验提出来了当 $N, D, C$ 三者中的其中两者不是瓶颈的时候，另外一个与$L$呈幂律关系。