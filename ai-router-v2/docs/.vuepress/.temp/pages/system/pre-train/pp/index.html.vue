<template><div><p>本节主要就伪代码来演示pipline parallel如何实现, 主要参考是Megatron-LM中的
distribute pp部分</p>
<p><a href="https://developer.aliyun.com/article/1644595" target="_blank" rel="noopener noreferrer">一篇讲gpipe和pipedream的文章</a></p>
<p>在Megatron-LM中，pipline parallel schedule的选择是通
过<code v-pre>get_forward_backward_func()</code>来实现的，会根据当前的配置选择适合的调度策略，然
后完整地进行一次batch的fwd和bwd，因为调度策略分为很多，例如1F1B-interleaved,
dualpipev..., 所以这里可以学习dualpipe的方式，定义一个通用的Schedule基类, 此后的
调度策略通过实现这个基类来进行</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> BaseScheduleStrategy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">ABC</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    """</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    Base class for all schedule strategies</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    """</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> **</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kwargs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">classmethod</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> initialize_pipline_distributed</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cls</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> **</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kwargs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        Initialize the pipline parallel distributed strategy hooks or utils</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">classmethod</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> get_stage_layer_ids</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cls</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> num_layers</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> int</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> -></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> List</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">List</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]]:</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        Get the layer ids for each stage</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> __call__</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> **</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kwargs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        Call the schedule strategy</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">        """</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        pass</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际的pp中，需要考虑更多的细节，例如tensor的释放与回收，这里我们讨论train的
pp，因为对于inference来说，只需要执行fwd的过程，简单了很多。</p>
<p>首先我们需要明确两个点：</p>
<ol>
<li>在fwd阶段，我们需要的是上一个阶段的<code v-pre>input_tensor</code>, 然后获
得<code v-pre>output_tensor = fwd(input_tensor)</code>, <code v-pre>output_tensor</code>发送给下一个stage作
为<code v-pre>input_tensor</code>, 这里<code v-pre>input_tensor</code>和<code v-pre>output_tensor</code>都应该压入栈中等待fwd，
发送完之后，<code v-pre>output_tensor</code>的数据其实已经不需要了，因为由下一个stage
的<code v-pre>input_tensor</code>来保存，但是我们仍然需要其<code v-pre>grad_fn</code>之类的元数据来执行bwd, 所
以这里进行deallocate(伪释放)，不是del, 而是替换其数据字段为一个标量。</li>
</ol>
<p>总结：<code v-pre>input_tensor</code>: 完全保留，<code v-pre>output_tensor</code>: 保留grad_fn</p>
<ol start="2">
<li>在bwd阶段，我们需要的是上一个阶段传来的<code v-pre>output_tensor_grad</code>, 然后根据当前阶段
的<code v-pre>input_tensor</code>和<code v-pre>output_tensor</code>, 计算出<code v-pre>input_tensor_grad</code>，其
中<code v-pre>output_tensor</code>已经经过伪释放，只保留了计算图信息，然后通过bwd计算出
了<code v-pre>input_tensor_grad</code>, 存储在<code v-pre>input_tensor</code>中，我们需要将<code v-pre>input_tensor</code>中
的<code v-pre>grad</code>取出来，send出去, 之后<code v-pre>input_tensor</code>和<code v-pre>output_tensor_grad</code>本身也就没
用了，完全销毁掉。</li>
</ol>
<p>总结: <code v-pre>input_tensor</code>: 计算完bwd之后完全释放，<code v-pre>output_tensor</code>: 计算完梯度之后完全
释放，<code v-pre>output_tensor_grad</code>: 计算完梯度之后完全释放，<code v-pre>input_tensor_grad</code>, send之
后完全释放</p>
</div></template>


