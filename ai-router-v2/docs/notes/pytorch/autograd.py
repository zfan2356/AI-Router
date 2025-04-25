import torch

import torch.nn.functional as F

class MyRelu(torch.nn.Module):
     def __init__(self):
          super(MyRelu, self).__init__()
     
     def forward(self, input: torch.Tensor):
          return F.relu(input)


class _MyExp(torch.autograd.Function):
     @staticmethod
     def forward(ctx, input: torch.Tensor):
          output = input.exp()
          ctx.save_for_backward(output)
          return output

     @staticmethod
     def backward(ctx, grad_output: torch.Tensor):
          output, = ctx.saved_tensors
          return grad_output * output

def my_exp(input: torch.Tensor):
     return _MyExp.apply(input)




          