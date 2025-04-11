<template><div><h2 id="一-右值" tabindex="-1"><a class="header-anchor" href="#一-右值"><span>一. 右值</span></a></h2>
<ul>
<li>纯右值</li>
</ul>
<p>包含字面值: <code v-pre>1, 2, true</code>, 表达式: <code v-pre>a + b</code>, 以及函数返回的非引用对象:</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">A</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> func</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  A a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><ul>
<li>将亡值</li>
</ul>
<p>返回 <code v-pre>T&amp;&amp;</code> 的函数调用</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x26;&#x26;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> func</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> return</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> A</span><span style="--shiki-light:#999999;--shiki-dark:#666666">();</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span></code></pre>
</div><p>转换为<code v-pre>T&amp;&amp;</code> 的类型转换表达式</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">static_cast&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x26;&#x26;></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">t</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>
</div><p>以及 <code v-pre>std::move(t)</code></p>
<p>那么右值引用其实就是对右值的引用，给右值一个续命的“引用”，使得它不会立刻被析构</p>
<h2 id="二-为什么需要move" tabindex="-1"><a class="header-anchor" href="#二-为什么需要move"><span>二. 为什么需要move</span></a></h2>
<p>move将当前的值转化为将亡值，然后进行移动构造，避免了拷贝构造带来的性能开销</p>
<h2 id="三-其他" tabindex="-1"><a class="header-anchor" href="#三-其他"><span>三. 其他</span></a></h2>
<ol>
<li>
<p>万能引用</p>
</li>
<li>
<p>引用折叠</p>
</li>
<li>
<p>完美转发</p>
</li>
</ol>
</div></template>


