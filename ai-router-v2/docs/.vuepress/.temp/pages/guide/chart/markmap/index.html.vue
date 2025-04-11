<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题支持在 文章中 嵌入由 <a href="https://markmap.js.org/" target="_blank" rel="noopener noreferrer">markmap</a> 。</p>
<p>该功能由 <a href="https://plugin-md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a> 提供支持。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>主题默认不启用该功能。</p>
<p>你需要在你的项目中安装 <code v-pre>markmap-lib</code>, <code v-pre>markmap-toolbar</code> and <code v-pre>markmap-view</code>:</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-lib</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-toolbar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-view</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-lib</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-toolbar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-view</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-lib</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-toolbar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> markmap-view</span></span></code></pre>
</div></template></CodeTabs><p>然后在 <code v-pre>.vuepress/config.ts</code> 配置文件中，启用该功能：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markmap</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>以下文档 Fork 自 <a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>,
遵循 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p>
</div>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">markmap</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 在这里放置内容 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div><p>支持通过 Frontmatter 语法进行配置。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<VPDemoBasic type="markdown" title="markmap">
      <MarkMap id="markmap-0" content="eJydj81OwkAQx+99ikk0UZssJMQTWo9qoncPoumHG0BbF9tKiASCQQWJYgwRlaCCQkL8QI58iLxMt7Rv4ULgBbzszsz/N/+ZQQhxmqQfaFLEzwEoRCX6qo7xCd7EUaz6wceNEG4GJhQLZ8At/Nr5OschWA6ZZsTwe70T2bNveIge9K4wbXstbK4fyzvzUyYYNkPHskch2hSf/gtjW5p7cdL9ke1kAAKepz9dp5XmeUgmabbiPtaG3UEyCbxdLFv9Ag+C4H48WN2mIDCc1kpO9YodYhcz9OueVUSW04tzq/c2rJyKHGIagCiK+8Y4UsihQVTsUUlwfk4hexhklSgHcwtLU5B5bEgmjrEcwWwMBIgjGQIRDQLGkW7G5V0fWpSUBARIFOvgkxKzrGWYb9Fyw87eWr1PevNt9epuquQMMiBqUmwrvGeGRHBTl26142Teaa5hX7+yRd2nZ9pu//O9GwxLZ+xU2uxwf2vm1oQ="></MarkMap>
      <template #code><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">````</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">markmap</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">markmap:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  colorFreezeLevel: 2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># markmap</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">## 链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- &#x3C;https://markmap.js.org/></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- [GitHub](https://github.com/markmap/markmap)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">## 功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- 链接</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- **强调** ~~删除线~~ *斜体* ==高亮==</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- 多行</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  文字</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- `行内代码`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ```js</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    console.log('code block');</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- Katex</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">- 现在我们可以通过 `maxWidth` 选项自动换行非常非常非常非常非常非常非常非常非常非常长的内容</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">````</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></VPDemoBasic></div></template>


