<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>有时候，你需要将内容 划分为递进的步骤展示，你可以使用 <code v-pre>steps</code> 容器 实现。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<p>在 <code v-pre>steps</code> 容器内，使用 有序列表 （或无序列表） 来表示步骤。你可以在 容器内使用 任意 markdown 语法。</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: steps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 步骤 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  相关内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 步骤 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  相关内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p>输入：</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::: steps</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 步骤 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">   ```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">ts</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">   console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello World!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">   ```</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 步骤 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   这里是步骤 2 的相关内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 步骤 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   ::: tip</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   提示容器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   :::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">4.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 结束</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="vp-steps"><ol>
<li>
<p>步骤 1</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello World!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div></li>
<li>
<p>步骤 2</p>
<p>这里是步骤 2 的相关内容</p>
</li>
<li>
<p>步骤 3</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示容器</p>
</div>
</li>
<li>
<p>结束</p>
</li>
</ol>
</div></div></template>


