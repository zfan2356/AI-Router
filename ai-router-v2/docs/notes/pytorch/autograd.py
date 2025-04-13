import torch

import torch.nn.functional as F

class MyRelu(torch.nn.Module):
     def __init__(self):
          super(MyRelu, self).__init__()
     
     def forward(self, input: torch.Tensor):
          return F.relu(input)
