<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在 markdown 中，使用 <code v-pre>::: collapse</code> 容器，包含 markdown 无序列表语法，实现 <mark>折叠面板</mark> 。</p>
<ul>
<li>支持通过 <code v-pre>accordion</code> 设置为 <mark>手风琴</mark> 模式</li>
</ul>
<h2 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h2>
<p>该功能默认不启用，你需要在 <code v-pre>theme</code> 配置中启用。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      collapse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 markdown 中，使用 <code v-pre>::: collapse</code> 容器，包含 markdown 无序列表语法，每一项为一个单独的可折叠区域。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>collapse.md</span></div><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1        </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 标题，点击控制 展开/折叠 --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                &#x3C;!-- 标题与内容必须空一行 --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  内容          </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 内容，被折叠的区域--></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div></div><p>对于列表的每一个项：</p>
<ul>
<li>
<p>从 <strong>首行开始</strong> 到 <strong>首个空行</strong>，均为 <strong>标题</strong></p>
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
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem></VPCollapse><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>在 <code v-pre>::: collapse</code> 容器语法之后，跟随配置项：</p>
<ul>
<li><code v-pre>accordion</code> ：折叠面板设置为 <mark>手风琴</mark> 模式，在手风琴模式下，只允许展开一个面板，点击其他面板会关闭之前的面板。</li>
<li><code v-pre>expand</code> ：默认展开面板，在手风琴模式下无效。</li>
</ul>
<p>在列表项，标题之前，可通过特殊标记 <code v-pre>:+</code> / <code v-pre>:-</code> 来设置当前项是否 <strong>展开 / 折叠</strong>。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem></VPCollapse><h3 id="默认全部展开" tabindex="-1"><a class="header-anchor" href="#默认全部展开"><span>默认全部展开</span></a></h3>
<p>添加 <code v-pre>expand</code> 选项，默认展开所有面板</p>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">expand</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<VPCollapse><VPCollapseItem expand :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem expand :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem></VPCollapse><h3 id="手风琴模式" tabindex="-1"><a class="header-anchor" href="#手风琴模式"><span>手风琴模式</span></a></h3>
<p>添加 <code v-pre>accordion</code> 选项，设置为手风琴模式，只允许展开一个面板，点击其他面板会关闭之前的面板</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">accordion</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPCollapse accordion><VPCollapseItem :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem :index="2"><template #title>标题 3</template><p>正文内容</p>
</VPCollapseItem></VPCollapse><h3 id="标记项为展开" tabindex="-1"><a class="header-anchor" href="#标记项为展开"><span><code v-pre>:+</code> 标记项为展开</span></a></h3>
<p>折叠面板默认全部关闭，可以使用 <code v-pre>:+</code> 标记项初始状态为展开。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem expand :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem expand :index="2"><template #title>标题 3</template><p>正文内容</p>
</VPCollapseItem></VPCollapse><h3 id="标记项为折叠" tabindex="-1"><a class="header-anchor" href="#标记项为折叠"><span><code v-pre>:-</code> 标记项为折叠</span></a></h3>
<p>折叠面板配置 <code v-pre>expand</code> 时默认全部展开，可以使用 <code v-pre>:-</code> 标记项初始状态为折叠。</p>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse expand</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标题 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  正文内容</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<VPCollapse><VPCollapseItem expand :index="0"><template #title>标题 1</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>标题 2</template><p>正文内容</p>
</VPCollapseItem><VPCollapseItem expand :index="2"><template #title>标题 3</template><p>正文内容</p>
</VPCollapseItem></VPCollapse></div></template>


