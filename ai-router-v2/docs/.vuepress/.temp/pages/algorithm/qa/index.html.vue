<template><div><h3 id="说出resnet的模型结构" tabindex="-1"><a class="header-anchor" href="#说出resnet的模型结构"><span>说出ResNet的模型结构?</span></a></h3>
<details>
<summary>answer</summary>
<p>
<p>主要的算子: conv2d, matmul, pooling, relu, batchnorm, softmax, mul等。conv2d可以通过转换成矩阵乘法来计算，为im2col, cuDNN内部采用这样计算conv2d, 可以利用高效的矩阵乘法来计算</p>
<p>AI领域的优化分为三类，graph计算图层面优化，算子operator层面优化，以及运行时runtime层面优化：</p>
<ul>
<li>
<p>graph层面可以做一些算子fusion</p>
</li>
<li>
<p>operator层面可以做一些conv2d的优化，如上述</p>
</li>
<li>
<p>runtime层面主要是运行时对程序进行系统层面的优化，例如内存池</p>
</li>
</ul>
</p>
</details>
<hr>
<h3 id="transformer-encoder-block的模型结构" tabindex="-1"><a class="header-anchor" href="#transformer-encoder-block的模型结构"><span>Transformer encoder block的模型结构？</span></a></h3>
<details>
<summary>answer</summary>
<p>
<p>考察的是Transformer的模型结构</p>
</p>
</details>
<hr>
<h3 id="写出batchnorm和softmax的公式-bathnorm由哪些小算子构成-batchnorm和softmax在什么情况下计算结果可能会出现精度问题-为什么-如何解决" tabindex="-1"><a class="header-anchor" href="#写出batchnorm和softmax的公式-bathnorm由哪些小算子构成-batchnorm和softmax在什么情况下计算结果可能会出现精度问题-为什么-如何解决"><span>写出batchnorm和softmax的公式，bathnorm由哪些小算子构成，batchnorm和softmax在什么情况下计算结果可能会出现精度问题？为什么？如何解决？</span></a></h3>
<details>
<summary>answer</summary>
<p>
<p>batchnorm精度问题：求方差时，如果通过 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo stretchy="false">(</mo><mi>X</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>−</mo><mi>E</mi><mo stretchy="false">(</mo><msup><mi>X</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">E(X)^2 - E(X^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 求方差，那么当二者很相近的时候，就会出现精度损失，而且存在累加，存在舍入误差</p>
<p>解决方案：welford算法</p>
<p>softmax精度问题：x较大时，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mi>x</mi></msup></mrow><annotation encoding="application/x-tex">e^x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span></span></span> 容易超过float32的最大表示范围，发生溢出</p>
<p>解决方案：分子分母除以 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></msup></mrow><annotation encoding="application/x-tex">e^{max(x)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.888em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">x</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span></span></span></p>
</p>
</details>
<hr>
<h3 id="加速ai模型的推理速度-该从哪些角度去考虑" tabindex="-1"><a class="header-anchor" href="#加速ai模型的推理速度-该从哪些角度去考虑"><span>加速AI模型的推理速度，该从哪些角度去考虑</span></a></h3>
<details>
<summary>answer</summary>
<p>
<p>宏观上</p>
<ul>
<li>计算效率：取决于硬件的算力，以及计算的持续而不被打断</li>
<li>访存效率：取决于访存延迟和带宽</li>
<li>计算与访存相重叠</li>
<li>计算与通信相重叠</li>
</ul>
</p>
</details>
<hr>
<h3 id="模型大小的四大评估指标是什么-举例说明对他们的理解" tabindex="-1"><a class="header-anchor" href="#模型大小的四大评估指标是什么-举例说明对他们的理解"><span>模型大小的四大评估指标是什么，举例说明对他们的理解</span></a></h3>
<details>
<summary>answer</summary>
<p>
<p>计算量，参数量，访存量，（峰值）内存占用</p>
<ul>
<li>
<p>计算量：计算次数，反映了模型对硬件计算单元的需求，单位是OPs(operations)，最常用的数据格式为float32，因此float32类型下的计算量单位为FLOPs(Floating Point Operations)，即浮点计算次数。模型的整体计算量等于模型中每个算子的计算量之和。例子：两个shape为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>N</mi><mo separator="true">,</mo><mi>C</mi><mo separator="true">,</mo><mi>H</mi><mo separator="true">,</mo><mi>W</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(N, C, H, W)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mclose">)</span></span></span></span> 的float32 tensor相加，计算量为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>×</mo><mi>C</mi><mo>×</mo><mi>H</mi><mo>×</mo><mi>W</mi></mrow><annotation encoding="application/x-tex">N \times C \times H \times W</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span></span></span></span> FLOPs</p>
</li>
<li>
<p>参数量：，模型中的参数的综合，反映了模型站的磁盘空间。比如对于 CNN 来说，参数主要是由 Conv/FC 层的 Weight 构成，其他算子也有参数，不过较少</p>
</li>
<li>
<p>访存量：指模型计算时所需访问内存/显存的字节大小，反映了模型对内存/显存带宽的需求。访存量单位为 Bytes，表示模型计算到底需要存取多少 Bytes 的数据。例子：两个shape为 (N, C, H, W) 的float32 tensor 相加，即add，访存量为 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>×</mo><mi>N</mi><mo>×</mo><mi>C</mi><mo>×</mo><mi>H</mi><mo>×</mo><mi>W</mi><mo>×</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>o</mi><mi>f</mi><mo stretchy="false">(</mo><mi>f</mi><mi>l</mi><mi>o</mi><mi>a</mi><mi>t</mi><mn>32</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(2 + 1) \times N \times C \times H \times W \times sizeof(float32)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">zeo</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord">32</span><span class="mclose">)</span></span></span></span> bytes</p>
</li>
<li>
<p>（峰值）内存占用：内存占用是模型运行时（训练或者推理）所占用的内存/显存大小，峰值内存占用指运行时的内存/显存占用的峰值，注意内存占用 ≠ 访存量</p>
</li>
</ul>
</p>
</details
<hr>
<h3 id="说出加速resnet50推理速度的一些手段" tabindex="-1"><a class="header-anchor" href="#说出加速resnet50推理速度的一些手段"><span>说出加速ResNet50推理速度的一些手段</span></a></h3>
<details>
<summary>answer</summary>
<p>
<ul>
<li>
<p>GPU cuda 算子优化，GPU算子加速库（cuDNN，cuBLAS，etc），CPU算子加速库（oneDNN）</p>
</li>
<li>
<p>int8量化压缩</p>
</li>
<li>
<p>算子融合</p>
</li>
<li>
<p>静态显存管理</p>
</li>
<li>
<p>运行时优化</p>
</li>
</ul>
<p>推理加速的整体原则：训练过程与推理过程具有不同的特点，后者可以针对硬件做更大程度的系统级别的优化。</p>
</p>
</details></div></template>
