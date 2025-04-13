---
title: Pipline Communication
author: zfan
---

本节主要就伪代码来演示pipline parallel如何实现, 主要参考是Megatron-LM中的distribute pp部分

[一篇讲gpipe和pipedream的文章](https://developer.aliyun.com/article/1644595)

在Megatron-LM中，pipline parallel schedule的选择是通过`get_forward_backward_func()`来实现的，会根据当前的配置选择适合的调度策略，然后完整地进行一次batch的fwd和bwd，因为调度策略分为很多，例如1F1B-interleaved, dualpipev..., 所以这里可以学习dualpipe的方式，定义一个通用的Schedule基类, 此后的调度策略通过实现这个基类来进行

```python
class BaseScheduleStrategy(ABC):
    """
    Base class for all schedule strategies
    """

    def __init__(self, *args, **kwargs):
        pass

    @classmethod
    @abstractmethod
    def initialize_pipline_distributed(cls, *args, **kwargs):
        """
        Initialize the pipline parallel distributed strategy hooks or utils
        """
        pass

    @classmethod
    @abstractmethod
    def get_stage_layer_ids(cls, num_layers: int) -> List[List[int]]:
        """
        Get the layer ids for each stage
        """
        pass

    @abstractmethod
    def __call__(self, *args, **kwargs):
        """
        Call the schedule strategy
        """
        pass
```

在实际的pp中，需要考虑更多的细节，例如tensor的释放与回收，这里我们讨论train的pp，因为对于inference来说，只需要执行fwd的过程，简单了很多。

首先我们需要明确两个点：

1. 在fwd阶段，我们需要的是上一个阶段的`input_tensor`, 然后获得`output_tensor = fwd(input_tensor)`, `output_tensor`发送给下一个stage作为`input_tensor`, 这里`input_tensor`和`output_tensor`都应该压入栈中等待fwd，发送完之后，`output_tensor`的数据其实已经不需要了，因为由下一个stage的`input_tensor`来保存，但是我们仍然需要其`grad_fn`之类的元数据来执行bwd, 所以这里进行deallocate(伪释放)，不是del, 而是替换其数据字段为一个标量。

总结：`input_tensor`: 完全保留，`output_tensor`: 保留grad_fn

2. 在bwd阶段，我们需要的是上一个阶段传来的`output_tensor_grad`, 然后根据当前阶段的`input_tensor`和`output_tensor`, 计算出`input_tensor_grad`，其中`output_tensor`已经经过伪释放，只保留了计算图信息，然后通过bwd计算出了`input_tensor_grad`, 存储在`input_tensor`中，我们需要将`input_tensor`中的`grad`取出来，send出去, 之后`input_tensor`和`output_tensor_grad`本身也就没用了，完全销毁掉。

总结: `input_tensor`: 计算完bwd之后完全释放，`output_tensor`: 计算完梯度之后完全释放，`output_tensor_grad`: 计算完梯度之后完全释放，`input_tensor_grad`, send之后完全释放
