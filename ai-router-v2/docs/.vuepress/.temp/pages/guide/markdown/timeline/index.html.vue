<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在 markdown 中，使用 <code v-pre>::: timeline</code> 容器，包含 markdown 无序列表语法，即可实现 <mark>时间线</mark> 的 渲染效果。</p>
<ul>
<li>支持 <mark>水平方向</mark> 和 <mark>垂直方向</mark></li>
<li>垂直方向支持 <strong>左对齐</strong>，<strong>右对齐</strong> 和 <strong>两端对齐</strong></li>
<li>支持 <strong>图标</strong> 和 <strong>线条样式</strong></li>
<li>支持 通过预设 <strong>类型</strong> 设置 <strong>颜色</strong>，支持自定义颜色</li>
</ul>
<h2 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h2>
<p>该功能默认不启用，你需要在 <code v-pre>theme</code> 配置中启用。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      timeline</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 <code v-pre>::: timeline</code> 容器中，使用 markdown 无序列表语法，列表的每一个项即 时间线上的每一个点。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>timeline.md</span></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline 配置</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  配置</span></span>
<span class="line highlighted"><wbr></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>对于列表的每一个项：</p>
<ul>
<li>
<p>从 <strong>首行开始</strong> 到 <strong>首个空行</strong>，均为 <strong>标题</strong> ，在标题后紧跟随的一行，用于 <strong>配置</strong> 当前项的行为</p>
</li>
<li>
<p><strong>首个空行之后</strong>: 正文内容</p>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">请注意添加正确的缩进</p>
</div>
<p><strong>一个简单的例子：</strong></p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-02-21 type=warning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" type="success" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-02-21" type="warning" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><div class="hint-container important">
<p class="hint-container-title">时间线默认为垂直方向</p>
</div>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p><strong>时间线</strong> 支持非常灵活且灵活的配置项，配置主要分为两个部分：</p>
<ul>
<li>
<p><strong>容器配置</strong>： 在 <code v-pre>::: timeline</code> 容器上的配置，配置项跟随在 <code v-pre>::: timeline</code> 之后，如：</p>
<p><code v-pre>::: timeline horizontal</code> 表示 渲染为 水平方向的时间线。</p>
</li>
<li>
<p><strong>列表项配置</strong>： 列表的每一个项的配置，紧跟随在标题之后的一行，如：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题                          </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--标题行--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  也是标题                      </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--标题行--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 type=success  </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--配置跟随在最后的标题行之后的单独一行，可选--></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                                &#x3C;!--空行，有正文时必须--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div></li>
</ul>
<h3 id="容器配置" tabindex="-1"><a class="header-anchor" href="#容器配置"><span>容器配置</span></a></h3>
<h4 id="horizontal" tabindex="-1"><a class="header-anchor" href="#horizontal"><span>horizontal</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>boolean</code></li>
<li><strong>默认值:</strong> <code v-pre>false</code></li>
</ul>
<p>渲染为 水平方向的时间线。</p>
<h4 id="card" tabindex="-1"><a class="header-anchor" href="#card"><span>card</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>boolean</code></li>
<li><strong>默认值:</strong> <code v-pre>false</code></li>
</ul>
<p>每个时间节点默认渲染为卡片样式（可在列表项配置中覆盖）。</p>
<h4 id="placement" tabindex="-1"><a class="header-anchor" href="#placement"><span>placement</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>'left' | 'right' | 'between'</code></li>
<li><strong>默认值:</strong> <code v-pre>'left'</code></li>
</ul>
<p>时间节点的对齐方式。<mark class="warning">仅在垂直方向时生效</mark></p>
<ul>
<li><code v-pre>left</code> : 时间轴左侧对齐</li>
<li><code v-pre>right</code> : 时间轴右侧对齐</li>
<li><code v-pre>between</code> : 时间轴两端对齐 (通过列表项配置中的 <code v-pre>placement</code> 定义位置，默认为 <code v-pre>left</code>)</li>
</ul>
<h4 id="line" tabindex="-1"><a class="header-anchor" href="#line"><span>line</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>'solid' | 'dashed' | 'dotted'</code></li>
<li><strong>默认值:</strong> <code v-pre>'solid'</code></li>
</ul>
<p>线条样式（可在列表项配置中覆盖）</p>
<h3 id="列表项配置" tabindex="-1"><a class="header-anchor" href="#列表项配置"><span>列表项配置</span></a></h3>
<h4 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>time</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>string</code></li>
<li><strong>默认值:</strong> <code v-pre>''</code></li>
</ul>
<p>时间点，可以是任何字符串，比如 <code v-pre>2025-03-20</code>， <code v-pre>Q1</code> 等。</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>'info' | 'tip' | 'success' | 'warning' | 'danger' | 'caution' | 'important'</code></li>
<li><strong>默认值:</strong> <code v-pre>'info'</code></li>
</ul>
<p>时间节点的类型。</p>
<h4 id="card-1" tabindex="-1"><a class="header-anchor" href="#card-1"><span>card</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>boolean</code></li>
<li><strong>默认值:</strong> <code v-pre>false</code> 从 容器配置 <code v-pre>card</code> 中继承</li>
</ul>
<p>当前 时间节点渲染为卡片样式。</p>
<h4 id="line-1" tabindex="-1"><a class="header-anchor" href="#line-1"><span>line</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>'solid' | 'dashed' | 'dotted'</code></li>
<li><strong>默认值:</strong> <code v-pre>'solid'</code> 从 容器配置 <code v-pre>line</code> 中继承</li>
</ul>
<p>线条样式</p>
<h4 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>string</code></li>
<li><strong>默认值:</strong> <code v-pre>''</code></li>
</ul>
<p>时间节点的图标，支持所有的 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 图标。</p>
<h4 id="placement-1" tabindex="-1"><a class="header-anchor" href="#placement-1"><span>placement</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>'left' | 'right'</code></li>
<li><strong>默认值:</strong> <code v-pre>'left'</code></li>
</ul>
<p>当 容器配置为 <code v-pre>between</code> 时，定义当前时间节点的位置。</p>
<ul>
<li><code v-pre>left</code> : 在时间轴左侧</li>
<li><code v-pre>right</code> : 在时间轴右侧</li>
</ul>
<h4 id="color" tabindex="-1"><a class="header-anchor" href="#color"><span>color</span></a></h4>
<ul>
<li><strong>类型:</strong> <code v-pre>string</code></li>
<li><strong>默认值:</strong> <code v-pre>''</code></li>
</ul>
<p>时间节点线条颜色，可以是任何有效的颜色值。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="水平方向" tabindex="-1"><a class="header-anchor" href="#水平方向"><span>水平方向</span></a></h3>
<p>在 <code v-pre>:::timeline</code> 后跟随声明 <code v-pre>horizontal</code> , 即可将时间线渲染为 水平方向。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">horizontal</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline horizontal :card="undefined"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="右对齐" tabindex="-1"><a class="header-anchor" href="#右对齐"><span>右对齐</span></a></h3>
<p>在 <code v-pre>:::timeline</code> 后跟随声明 <code v-pre>placement=&quot;right&quot;</code> , 即可将时间线渲染为 右对齐。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement="right"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined" placement="right"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="两端对齐" tabindex="-1"><a class="header-anchor" href="#两端对齐"><span>两端对齐</span></a></h3>
<p>在 <code v-pre>:::timeline</code> 后跟随声明 <code v-pre>placement=&quot;between&quot;</code> , 即可将时间线渲染为 两端对齐。</p>
<p>列表项默认位于时间线的左侧，可以通过 <code v-pre>placement=&quot;right&quot;</code> 为列表项设置右侧位置。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement="between"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement=right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement=right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined" placement="between"><VPTimelineItem time="2025-03-20" :card="undefined" placement="right"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined" placement="right"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型"><span>节点类型</span></a></h3>
<p>在列表项配置中，添加 <code v-pre>type=节点类型</code> 可以为当前节点设置节点类型。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=warning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" type="success" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="warning" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="线条风格" tabindex="-1"><a class="header-anchor" href="#线条风格"><span>线条风格</span></a></h3>
<ul>
<li>在容器配置中添加 <code v-pre>line=线条风格</code> 可以为所有节点设置默认线条风格。</li>
<li>在列表项配置中，添加 <code v-pre>line=线条风格</code> 可以为节点设置线条风格。</li>
</ul>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line="dotted"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line=dashed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line=solid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined" line="dotted"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" line="dashed" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" line="solid" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="带图标的节点" tabindex="-1"><a class="header-anchor" href="#带图标的节点"><span>带图标的节点</span></a></h3>
<p>在列表项配置中，添加 <code v-pre>icon=图标名称</code> 可以为节点添加图标。</p>
<p>图标名称支持 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 的图标名称。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline placement="between"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 placement=right </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">icon=mdi:balloon</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">icon=mdi:bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger placement=right icon=mdi:bullhorn-variant-outline</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important card=true icon="mdi:cake-variant-outline"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline :card="undefined" placement="between"><VPTimelineItem time="2025-03-20" icon="mdi:balloon" :card="undefined" placement="right"><template #icon><VPIcon name="mdi:balloon"/></template><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" icon="mdi:bookmark" :card="undefined"><template #icon><VPIcon name="mdi:bookmark"/></template><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" icon="mdi:bullhorn-variant-outline" :card="undefined" placement="right"><template #icon><VPIcon name="mdi:bullhorn-variant-outline"/></template><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" icon="mdi:cake-variant-outline" card><template #icon><VPIcon name="mdi:cake-variant-outline"/></template><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h3 id="卡片节点" tabindex="-1"><a class="header-anchor" href="#卡片节点"><span>卡片节点</span></a></h3>
<p>卡片节点可以很灵活的进行控制：</p>
<ul>
<li>在 容器配置中添加 <code v-pre>card</code> 即可使每个列表项都是卡片节点。</li>
<li>在列表项配置中，添加 <code v-pre>card=true</code> 即可为节点设置为卡片节点。</li>
<li>在列表项配置中，添加 <code v-pre>card=false</code> 即可为节点设置为非卡片节点。</li>
</ul>
<p>卡片节点的样式会受到 <code v-pre>type</code> 配置的影响。</p>
<div class="hint-container tip">
<p class="hint-container-title">在列表项配置中添加 <code v-pre>card=true</code> / <code v-pre>card=false</code> 可以覆盖容器节点的 <code v-pre>card</code> 配置</p>
</div>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline card</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">card=false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点四</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPTimeline card><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success"><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>节点四</template><p>正文内容</p>
</VPTimelineItem></VPTimeline><h2 id="自定义节点类型" tabindex="-1"><a class="header-anchor" href="#自定义节点类型"><span>自定义节点类型</span></a></h2>
<p>时间轴的节点类型是通过 CSS Variables 控制的，主题提供了以下的 CSS 变量：</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-border</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* 线条颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-border</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* 点颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* 标题文本颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* 正文文本颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-time</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* 时间文本颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-bg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       /* 图标颜色 */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-bg-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* 卡片节点的背景颜色 */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><p>比如主题内置的节点类型 <code v-pre>tip</code>:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">vp-timeline-item</span><span class="highlighted-word"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">tip</span></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><p>可以在 <RouteLink to="/notes/theme/guide/custom/style.html">自定义样式</RouteLink> 中，覆盖内置的类型，或者添加新的类型。</p>
<p><strong>示例：</strong></p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-css"/>.vuepress/styles/index.css</span></div><div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">vp-timeline-item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">your-type</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">3cf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">3cf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 252</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 255</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.314</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点一</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点二</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=your-type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> card=true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 节点三</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>节点一</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="your-type" card><template #title>节点二</template><p>正文内容</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>节点三</template><p>正文内容</p>
</VPTimelineItem></VPTimeline></div></template>



<style>
.vp-timeline-item.your-type {
  --vp-timeline-c-line: #3cf;
  --vp-timeline-c-point: #3cf;
  --vp-timeline-bg-card: rgba(60, 252, 255, 0.314);
}
</style>