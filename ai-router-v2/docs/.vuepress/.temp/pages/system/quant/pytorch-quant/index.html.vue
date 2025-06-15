<template><div><p>在PyTorch上进行量化，实际上也离不开量化最基础的步骤，我们的目的仍然是计算<code v-pre>scale</code> 和 <code v-pre>zero-point</code>, 这就需要通过各种不同的方法，根据具体情况，计算出<code v-pre>abs(max(weight))</code> 以及 <code v-pre>abs(max(activation))</code> ，然后进行量化</p>
</div></template>
