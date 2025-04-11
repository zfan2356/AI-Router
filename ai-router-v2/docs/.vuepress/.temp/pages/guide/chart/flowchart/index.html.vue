<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题支持在 文章中 嵌入由 <a href="http://flowchart.js.org/" target="_blank" rel="noopener noreferrer">flowchart</a> 。</p>
<p>该功能由 <a href="https://plugin-md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a> 提供支持。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>主题默认不启用该功能。</p>
<p>你需要在你的项目中安装 <a href="http://flowchart.js.org/" target="_blank" rel="noopener noreferrer">flowchart.ts</a> 库。</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flowchart.ts</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flowchart.ts</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flowchart.ts</span></span></code></pre>
</div></template></CodeTabs><p>然后在 <code v-pre>.vuepress/config.ts</code> 配置文件中，启用该功能：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      flowchart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>以下文档 Fork 自 <a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>,
遵循 <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p>
</div>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!------- ↓ :preset 是可选的 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow:preset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 放置你的流程图代码 --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div><p>目前可用的预设:</p>
<ul>
<li>vue (默认)</li>
<li>ant</li>
<li>pie</li>
</ul>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>
<MdDemo title="Vue 主题" id="md-demo-57">
<template #default>
<FlowChart id="flowchart-59" code="eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st=>start: 开始|past:>http://www.google.com[blank]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束|future:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op1=>operation: 操作1|past</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op2=>operation: 操作2|current</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sub1=>subroutine: 子程序|invalid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond=>condition: 是/否?|approved:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2=>condition: 判断2|rejected</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">io=>inputoutput: 进行反思...|future</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st->op1(right)->cond</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(yes, right)->c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(no)->sub1(left)->op1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(yes)->io->e</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(no)->op2->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</MdDemo>
<MdDemo title="Ant 主题" id="md-demo-63">
<template #default>
<FlowChart id="flowchart-65" code="eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==" preset="ant"></FlowChart></template>
<template #code>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow:ant</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st=>start: 开始|past:>http://www.google.com[blank]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束|future:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op1=>operation: 操作1|past</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op2=>operation: 操作2|current</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sub1=>subroutine: 子程序|invalid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond=>condition: 是/否?|approved:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2=>condition: 判断2|rejected</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">io=>inputoutput: 进行反思...|future</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st->op1(right)->cond</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(yes, right)->c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(no)->sub1(left)->op1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(yes)->io->e</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(no)->op2->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</MdDemo>
<MdDemo title="Pie 主题" id="md-demo-69">
<template #default>
<FlowChart id="flowchart-71" code="eJx1UE1Lw0AQve+vyLGCSUiOgaw/RDykyTRdjbvLZtIg5NCjUEsLBRG0iCDqpXj3A/+MSfsznMQiHtrLwJuZN++9yTHkOUYGA6v+GNfPk0pHOQZ8iKgD1y3L0kmVSjNwYnV+3M8ieXbCIOQgk8Bavy+a5X01KLAwsIfDlPZCrjSYCIWSgdUspt+fd16nQ0N/x9Cv4sIYkMjyok9sqkYVKCSQy9V8/TKp32aVkKMoEwmLlUxC3laxPXLz6tbzp6Mq0tqoEST7rMUk/o9XXz421yu/MnAKMULChAq5kLpAEqcaWJuv283DVT2bNuOl4zjb5IzlaFMKr2dEOsQDuzva+epdQH5o/bX936ZUBNpovQwG7YC4ZKZdJiCUzaGF3Rp9qIU/mOynsw==" preset="pie"></FlowChart></template>
<template #code>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow:pie</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st=>start: 开始|past:>http://www.google.com[blank]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束|future:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op1=>operation: 操作1|past</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">op2=>operation: 操作2|current</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">sub1=>subroutine: 子程序|invalid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond=>condition: 是/否?|approved:>http://www.google.com</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2=>condition: 判断2|rejected</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">io=>inputoutput: 进行反思...|future</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st->op1(right)->cond</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(yes, right)->c2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(no)->sub1(left)->op1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(yes)->io->e</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c2(no)->op2->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</MdDemo>
<h2 id="流程图介绍" tabindex="-1"><a class="header-anchor" href="#流程图介绍"><span>流程图介绍</span></a></h2>
<h3 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型"><span>节点类型</span></a></h3>
<p>定义了结点形状。</p>
<h4 id="开始-结束" tabindex="-1"><a class="header-anchor" href="#开始-结束"><span>开始 &amp; 结束</span></a></h4>
<ul>
<li>
<p><code v-pre>[Variable]-&gt;start: [Text]</code></p>
<p>被用于流程开始的第一个节点。
默认文字为 <code v-pre>Start</code>.</p>
</li>
<li>
<p><code v-pre>[Variable]-&gt;end: [Text]</code></p>
<p>被用于流程结束的最后一个节点。
默认文字为 <code v-pre>End</code>.</p>
</li>
</ul>
<MdDemo title="开始 &amp; 结束" id="md-demo-105">
<template #default>
<FlowChart id="flowchart-107" code="eJwrLrG1Ky5JLCqxUni6p+Hp8m6uVFu71LwUK4Xnuyc/mzufi6u4RNculQsAZJUQyg==" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st=>start: 开始</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h4 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h4>
<p><code v-pre>[Variable]-&gt;operation: [Text]</code></p>
<MdDemo title="操作" id="md-demo-117">
<template #default>
<FlowChart id="flowchart-119" code="eJwrKMpPTi0utrXLL0gtSizJzM+zUng2uffJ3jlcqbZ2qXkpVgrPd09+Nnc+FxdUqa5dKhcAfbsWqA==" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process=>operation: 操作</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h4 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出"><span>输入输出</span></a></h4>
<p><code v-pre>[Variable]-&gt;inputoutput: [Text]</code></p>
<MdDemo title="输入输出" id="md-demo-129">
<template #default>
<FlowChart id="flowchart-131" code="eJwrKMpPTi0utrXLzCsoLckvLQGSVgov9k1+2roURLbv4kq1tUvNS7FSeL578rO587m4oFp07VK5AI5GHBw=" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process=>inputoutput: 输入输出</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h4 id="子程序" tabindex="-1"><a class="header-anchor" href="#子程序"><span>子程序</span></a></h4>
<p><code v-pre>[Variable]-&gt;subroutine: [Text]</code></p>
<MdDemo title="子程序" id="md-demo-141">
<template #default>
<FlowChart id="flowchart-143" code="eJwrKMpPTi0utrUrLk0qyi8tycxLtVJ4unbC8xXdT3f1c6Xa2qXmpVgpPN89+dnc+VxcUOW6dqlcAP5nGU4=" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process=>subroutine: 子程序</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h4 id="条件" tabindex="-1"><a class="header-anchor" href="#条件"><span>条件</span></a></h4>
<ul>
<li>
<p><code v-pre>[Variable]-&gt;condition: [Text]</code></p>
</li>
<li>
<p><code v-pre>[Variable]([yesText])-&gt;[Position]</code></p>
</li>
<li>
<p><code v-pre>[Variable]([noText])-&gt;[Position]</code></p>
</li>
</ul>
<MdDemo title="条件" id="md-demo-167">
<template #default>
<FlowChart id="flowchart-169" code="eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond=>condition: 是否执行操作?</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process=>operation: 操作</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(yes)->process->e</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cond(no)->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h4 id="平行" tabindex="-1"><a class="header-anchor" href="#平行"><span>平行</span></a></h4>
<p>定义同时开始的多个程序。</p>
<ul>
<li><code v-pre>[Variable]-&gt;parallel: [Text]</code></li>
<li><code v-pre>[Variable](path1, direction)-&gt;[Position]</code></li>
<li><code v-pre>[Variable](path1, direction)-&gt;[Position]</code></li>
</ul>
<MdDemo title="平行" id="md-demo-196">
<template #default>
<FlowChart id="flowchart-198" code="eJwrSCxKtLUDkTk5qTlWCk93bn6xsOfJ7t1PuxZyFRTlJ6cWF9va5RekFiWWZObnWSk8m9z7ZO8crlRbu9S8FCuF57snP5s7n4sLZIJGQWJJhqGOQlJ+SUl+rqauHVS/rl0qQt4IKJ7KBQB5mDEV" preset="vue"></FlowChart></template>
<template #code>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">flow</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">para=>parallel: 平行任务</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">process=>operation: 操作</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: 结束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">para(path1, bottom)->process->e</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">para(path2)->e</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span></code></pre>
</div></template>
</MdDemo>
<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h3>
<p>连接方式在流程图中节点定义后描述，使用 <code v-pre>-&gt;</code> 指定一个节点之间的链接，例如 <code v-pre>nodeVar1-&gt;nodeVar2-&gt;nodeVar3</code></p>
<p>流程可以被分开:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nodeVar1->nodeVar2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">nodeVar2->nodeVar3</span></span></code></pre>
</div><p>连接格式定义如下:</p>
<p><code v-pre>&lt;node variable name&gt;[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;[[(&lt;specification1&gt;[, &lt;specification2])]-&gt;&lt;node variable name&gt;]</code></p>
<p>在 <code v-pre>[]</code> 中的项是可选的。</p>
<h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向"><span>方向</span></a></h3>
<p>以下方向可用，并定义了连接将从节点离开的方向。如果指定符不止一个，则总是最后一个。所有节点都有默认方向，这使其成为可选规范。<code v-pre>&lt;direction&gt;</code> 的可选值为:</p>
<ul>
<li><code v-pre>left</code></li>
<li><code v-pre>right</code></li>
<li><code v-pre>top</code></li>
<li><code v-pre>bottom</code></li>
</ul>
<h3 id="节点特定说明符" tabindex="-1"><a class="header-anchor" href="#节点特定说明符"><span>节点特定说明符</span></a></h3>
<p>每个节点变量都有可选的说明符，例如方向，有些变量有特殊的说明符，具体取决于下面定义的节点类型。在 <code v-pre>()</code> 中的变量名后添加说明符，并用<code v-pre>,</code> 分隔，例如 <code v-pre>nodeVar (spec1，spec2)</code>。</p>
<ul>
<li>
<p><strong>start</strong>
<strong>operation</strong>
<strong>inputoutput</strong>
<strong>subroutine</strong></p>
<p>可选方向</p>
<p><code v-pre>startVar(&lt;direction&gt;)-&gt;nextNode</code></p>
<p><code v-pre>operationVar(&lt;direction&gt;)-&gt;nextNode</code></p>
<p><code v-pre>inputoutputVar(&lt;direction&gt;)-&gt;nextNode</code></p>
<p><code v-pre>subroutineVar(&lt;direction&gt;)-&gt;nextNode</code></p>
</li>
<li>
<p><strong>condition</strong></p>
<p>必需指定 <code v-pre>yes</code> or <code v-pre>no</code></p>
<p>可选方向</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">conditionalVar(yes, </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)->nextNode1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">conditionalVar(no, </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)->nextNode2</span></span></code></pre>
</div></li>
<li>
<p><strong>parallel</strong></p>
<p>必需指定路径方向 <code v-pre>path1</code>, <code v-pre>path2</code>, 或 <code v-pre>path3</code></p>
<p>可选方向</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">parallelVar(path1, </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)->nextNode1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">parallelVar(path2, </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)->nextNode2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">parallelVar(path3, </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">direction</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)->nextNode3</span></span></code></pre>
</div></li>
</ul>
<h3 id="网址" tabindex="-1"><a class="header-anchor" href="#网址"><span>网址</span></a></h3>
<p>可以使用 <code v-pre>:&gt;</code> 运算符将外部链接添加到节点。</p>
<p><code v-pre>[blank]</code> 指定打开新的页面</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">st=>start: Start:>http://www.google.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">blank</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e=>end: End:>http://www.yahoo.com</span></span></code></pre>
</div><h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议"><span>建议</span></a></h3>
<p>文本中可能不应该使用的符号: <code v-pre>=&gt;</code>、<code v-pre>-&gt;</code>、 <code v-pre>:&gt;</code>、<code v-pre>|</code>、<code v-pre>@&gt;</code> 和 <code v-pre>:$</code></p>
<p>如果要在流程图中强调特定路径，则可以另外定义它，如下所示:</p>
<div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})</span></span></code></pre>
</div></div></template>


