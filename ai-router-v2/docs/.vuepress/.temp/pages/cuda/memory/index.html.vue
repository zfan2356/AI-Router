<template><div><h2 id="一-memory-consistency-model" tabindex="-1"><a class="header-anchor" href="#一-memory-consistency-model"><span>一. Memory Consistency Model</span></a></h2>
<p>内存一致性模型其实是存在于cpp中的概念, 假设当前有两个共享变量 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>, <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi></mrow><annotation encoding="application/x-tex">y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span>, 初始值均
为0，两个thread均执行以下操作：</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Thread 1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">x </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 写操作 W1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 读操作 R1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Thread 2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 写操作 W2</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 读操作 R2</span></span></code></pre>
</div><p>如果没有内存一致性模型约束，编译器可能会对指令进行重排序，或缓存未及时同步，导致
一些矛盾，例如因为thread1和thread2的视角顺序不同，导致出现<code v-pre>a = 0, b = 0</code>的结果，
比较反直觉。</p>
<p>内存模型可以通过操作可见性顺序，来禁止某些矛盾的结果，例如在顺序一致性模型中，所
有线程看到的操作顺序必须一致，必须按照某个全局顺序执行，<strong>也就是说要保证每个线程
的操作在全局顺序中保证其线程内的顺序</strong></p>
<p>在上述例子中就是，W1先于R1, W2先于R2，这样就不可能导向<code v-pre>a = 0, b = 0</code>的结果</p>
<p>所以在cpp中，将内存模型分为三类<code v-pre>Relaxd, Release, Acquire</code></p>
<ul>
<li>
<p><code v-pre>std::memory_order_relaxed</code>: 允许重排序</p>
</li>
<li>
<p><code v-pre>std::memory_order_release</code>: 保证该写操作前的所有操作对其他线程可见。</p>
</li>
<li>
<p><code v-pre>std::memory_order_acquire</code>: 保证该读操作后的所有操作能看到该读操作前的所有写
操作。</p>
</li>
</ul>
<p><code v-pre>acquire-release</code>语义可以实现上述的内存一致性约束</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Thread1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">store</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">memory_order_release</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // W1: 保证之前的操作对 Thread2 可见</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">load</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">memory_order_acquire</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // R1: 保证能看到 Thread2 的写操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Thread2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">store</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">memory_order_release</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // W2</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">load</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">memory_order_acquire</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // R2</span></span></code></pre>
</div><p><code v-pre>release-acquire</code>的协同作用可以视为内存屏障机制：</p>
<ul>
<li>
<p><code v-pre>release</code>: “发布”一组数据到内存中</p>
</li>
<li>
<p><code v-pre>acquire</code>: “获取”这组数据，保证后续的操作能够正确的读取</p>
</li>
</ul>
<p>接下来回到CUDA中的内存一致性模型，具体讲解可以
看<a href="https://docs.nvidia.com/cuda/pdf/ptx_isa_8.7.pdf" target="_blank" rel="noopener noreferrer">PTX文档</a>的第八节</p>
</div></template>


