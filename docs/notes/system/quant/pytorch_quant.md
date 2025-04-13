---
title: PyTorch模型量化
author: zfan
---

在PyTorch上进行量化，实际上也离不开量化最基础的步骤，我们的目的仍然是计算`scale` 和 `zero-point`, 这就需要通过各种不同的方法，根据具体情况，计算出`abs(max(weight))` 以及 `abs(max(activation))` ，然后进行量化
