<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>该功能由 <a href="https://ecosystem.vuejs.press/zh/plugins/features/copy-code.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-copy-code</a> 提供支持。</p>
<p>主题默认启用了代码复制功能。支持 一键复制 在 文章中 展示的代码。</p>
<p>默认情况下， 主题会为每一个 代码块 添加一个复制按钮。该按钮仅在桌面端显示。</p>
<p>当鼠标悬停在 代码块 上时，在右上角会出现一个复制按钮。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>在 <code v-pre>.vuepress/config.ts</code> 配置文件中，修改 代码复制的行为：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // copyCode: false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 禁用代码复制</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    copyCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // ...更多配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h3 id="showinmobile" tabindex="-1"><a class="header-anchor" href="#showinmobile"><span>showInMobile</span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>boolean</code></li>
<li><strong>默认值：</strong> <code v-pre>false</code></li>
</ul>
<p>是否在移动端显示复制按钮。</p>
<h3 id="ignoreselector" tabindex="-1"><a class="header-anchor" href="#ignoreselector"><span>ignoreSelector</span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>string | string[]</code></li>
<li><strong>默认值：</strong> <code v-pre>[]</code></li>
</ul>
<p>代码块中的元素选择器，用于在复制时忽略相关元素。</p>
<p>例如: <code v-pre>['.token.comment']</code> 将忽略代码块中类名为 <code v-pre>.token.comment</code> 的节点 （这会在 prismjs 中忽略注释）。</p>
<h3 id="inlineselector" tabindex="-1"><a class="header-anchor" href="#inlineselector"><span>inlineSelector</span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>string | string[] | boolean</code></li>
<li><strong>默认值：</strong> <code v-pre>false</code></li>
</ul>
<p>是否在双击时复制行内代码内容。</p>
<p><code v-pre>boolean</code>: 是否在双击时复制行内代码内容。</p>
<p><code v-pre>string[] | string</code>: 选择器，表示需要复制的行内代码内容。</p>
<h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform"><span>transform <Badge type="tip" text="仅限组合式 API" /></span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>(preElement: HTMLPreElement) =&gt; void</code></li>
<li><strong>默认值：</strong> <code v-pre>null</code></li>
</ul>
<p>一个转换器，用于在复制之前对 <code v-pre>&lt;pre&gt;</code> 中代码块内容进行修改。该选项仅在使用 <code v-pre>useCopyCode()</code> 时有效。</p>
<h2 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api"><span>组合式 API</span></a></h2>
<p>该功能的组合式 API 可以在 <code v-pre>.vuepress/client.ts</code> 中配置：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/client.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> useCopyCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/plugin-copy-code/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">() {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    useCopyCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<p>代码复制时，添加 copyright 信息</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/client.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> useCopyCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/plugin-copy-code/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">() {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    useCopyCode</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      transform</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">preElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 插入版权信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">        pre</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">innerHTML</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> `</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Copied by vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></template>


