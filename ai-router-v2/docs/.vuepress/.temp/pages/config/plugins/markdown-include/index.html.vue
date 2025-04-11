<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在 Markdown 文件中导入其他 markdown 文件内容。</p>
<p>关联插件：<a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-include.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-markdown-include</a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>主题默认启用 <code v-pre>markdownInclude</code>。你还可以通过配置来自定义行为。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      include</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // ... options</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 也可以在 `plugins.markdownInclude` 中配置，但不推荐</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markdownInclude</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="resolvepath" tabindex="-1"><a class="header-anchor" href="#resolvepath"><span>resolvePath</span></a></h3>
<ul>
<li>类型：<code v-pre>(path: string, cwd: string | null) =&gt; string</code></li>
<li>默认值：<code v-pre>(path) =&gt; path</code></li>
<li>详情：处理 include 文件路径。</li>
</ul>
<h3 id="deep" tabindex="-1"><a class="header-anchor" href="#deep"><span>deep</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>详情：是否启用图片 Figure 支持。</li>
</ul>
<h3 id="usecomment" tabindex="-1"><a class="header-anchor" href="#usecomment"><span>useComment</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
<li>详情：是否使用 <code v-pre>&lt;!-- @include: xxx --&gt;</code> 代替 <code v-pre>@include: xxx</code> 导入文件。</li>
</ul>
<h3 id="resolveimagepath" tabindex="-1"><a class="header-anchor" href="#resolveimagepath"><span>resolveImagePath</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
<li>详情：是否解析包含的 Markdown 文件的里的相对图像路径。</li>
</ul>
<h3 id="resolvelinkpath" tabindex="-1"><a class="header-anchor" href="#resolvelinkpath"><span>resolveLinkPath</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>true</code></li>
<li>详情：是否解析包含的 Markdown 文件的里的文件相对路径。</li>
</ul>
</div></template>


