<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>提供 Markdown 增强功能。</p>
<p>关联插件：<a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a></p>
<p>默认配置：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 以下可选项在 主题中默认不启用，</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 请在主题中自行配置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // chartjs: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 图表支持</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // echarts: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // ECharts 图表支持</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // flowchart: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 流程图支持</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // markmap: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Markmap 图表支持</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // stylize: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 对行内语法进行样式化以创建代码片段</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // playground: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 交互演示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // kotlinPlayground: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Kotlin 交互演示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // vuePlayground: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // Vue 交互演示</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // sandpack: true,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // sandpack 交互演示</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>详见 <a href="https://plugin-md-enhance.vuejs.press/zh/config.html" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a></p>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>主题还未完全对 该插件提供的 所有 增强功能 进行 样式上的适配。
如果你在使用过程中遇到样式上的问题，可以在 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues" target="_blank" rel="noopener noreferrer">issue</a> 里提出。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>该插件从 <code v-pre>2.0.0-rc.53</code> 开始，移除了部分功能。主题从 <code v-pre>1.0.0-rc.103</code> 版本开始，适配至最新版。
由此带来的影响是，<code v-pre>plugins.mdEnhance</code> 中 <code v-pre>imgSize</code>/<code v-pre>imgLazyload</code>/<code v-pre>imgMark</code>/<code v-pre>figure</code>/<code v-pre>obsidianImgSize</code>/<code v-pre>katex</code>/<code v-pre>mathjax</code>/<code v-pre>tabs</code>/<code v-pre>code-tabs</code>/<code v-pre>hint</code>/<code v-pre>alerts</code>弃用。</p>
<ul>
<li><code v-pre>imgSize</code>/<code v-pre>imgLazyload</code>/<code v-pre>imgMark</code>/<code v-pre>figure</code>/<code v-pre>obsidianImgSize</code> 所实现的功能，您可以使用 <code v-pre>plugins.markdownImage</code> 重新进行配置。</li>
<li><code v-pre>katex</code> / <code v-pre>mathjax</code> 所实现的功能，您可以使用 <code v-pre>plugins.markdownMath</code> 进行配置。</li>
<li><code v-pre>tabs</code> / <code v-pre>code-tabs</code> / <code v-pre>hint</code> / <code v-pre>alerts</code> 已变更为 主题的内置功能，您无需额外的配置。</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>该插件在 <code v-pre>2.0.0-rc.60</code> 版本中，移除了 <code v-pre>include</code> 选项。主题从 <code v-pre>1.0.0-rc.120</code> 版本开始，适配至最新版。
由此带来的影响是，使用 <code v-pre>@vuepress/plugin-markdown-include</code> 插件实现相同的功能，请使用 <code v-pre>plugins.markdownInclude</code>
进行配置。</p>
</div>
</div></template>


