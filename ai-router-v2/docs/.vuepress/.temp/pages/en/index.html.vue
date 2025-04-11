<template><div><div style="max-width: 960px;margin:0 auto;" class="home-custom-content">
<div style="text-align:center"><p><img src="https://img.shields.io/github/stars/pengzhanbo/vuepress-theme-plume" alt="GitHub Repo stars">
<img src="https://img.shields.io/npm/v/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A&amp;label=npm" alt="npm version">
<img src="https://img.shields.io/npm/dm/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A&amp;label=downloads" alt="npm downloads">
<img src="https://img.shields.io/npm/dt/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A&amp;label=downloads" alt="npm downloads">
<img src="https://img.shields.io/github/license/pengzhanbo/vuepress-theme-plume?color=32A9C3&amp;labelColor=1B3C4A" alt="github license"></p>
<p><img src="https://img.shields.io/npm/dependency-version/vuepress-theme-plume/peer/vuepress?color=32A9C3&amp;labelColor=1B3C4A" alt="peer dependency">
<img src="https://codecov.io/gh/pengzhanbo/vuepress-theme-plume/graph/badge.svg?token=W6KYBX7WO5" alt="codecov"></p>
</div><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h3>
<CodeTabs id="12" :data='[{"id":"pnpm"},{"id":"npm"},{"id":"yarn"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #title2="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span></span></code></pre>
</div></template></CodeTabs><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3>
<CodeTabs id="26" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // vuepress config...</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // theme config...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template></CodeTabs><h3 id="update-log" tabindex="-1"><a class="header-anchor" href="#update-log"><span>Update Log</span></a></h3>
<p><a href="../changelog">Changelog</a></p>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>Contributors</span></a></h3>
<Contributors
:contributors="[
'pengzhanbo',
{ github: 'huankong233', name: 'huan_kong' },
{ github: 'northword', name: 'Northword' },
'KrLite',
'shylock-wu',
'hrradev',
{ github: 'TheCoderAlex', name: 'Tang Zifeng' },
{ github: 'HydroGest', name: 'MarkChai' },
{ github: 'sunnyboy-mu', name: '小沐沐吖' },
{ github: 'zhenghaoyang24', name: 'zhenghaoyang24' },
]"
/>
</div>
</div></template>



<style>
.home-custom-content img {
  cursor: default !important;
}
</style>