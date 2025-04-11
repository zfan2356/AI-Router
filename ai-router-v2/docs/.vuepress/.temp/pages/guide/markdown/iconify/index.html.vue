<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在 Markdown 文件中使用 <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 的图标。</p>
<p>主题一方面提供了<RouteLink to="/notes/theme/guide/components/icon.html"><code v-pre>&lt;Icon /&gt;</code></RouteLink> 组件来支持在 markdown 中使用图标；
另一方面，主题还提供了图标的 markdown 语法，以更简单的方式，在 Markdown 中使用图标。</p>
<p>为了更好的使用该功能，主题推荐你安装 <code v-pre>@iconify/json</code> 依赖。主题会自动解析 <code v-pre>@iconify/json</code> 中的图标数据，
将有使用的图标打包为本地资源，以获得更好的访问体验。</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template></CodeTabs><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">collect:name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span></span></code></pre>
</div><p>设置图标大小和颜色</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:name size]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:name /color]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:[collect:name size/color]:</span></span></code></pre>
</div><p><code v-pre>iconify</code> 拥有非常多的图标，这些图标被分组为不同的 <code v-pre>collect</code>，每个 <code v-pre>collect</code> 都有自己的
图标。</p>
<p>你可以从 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">https://icon-sets.iconify.design/</a> 中获取 collect 和 name。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p>输入：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ion:logo-markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span></span></code></pre>
</div><p>输出：</p>
<p><VPIcon name="ion:logo-markdown"></VPIcon></p>
<p>该语法为行内语法，因此，你可以在同一行中跟其他 markdown 语法 一起使用。</p>
<p>输入：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">github: :</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tdesign:logo-github-filled</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">修改颜色：:[tdesign:logo-github-filled /#f00]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">修改大小：:[tdesign:logo-github-filled 36px]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">修改大小颜色：:[tdesign:logo-github-filled 36px/#f00]:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">彩色图标 :[skill-icons:vscode-dark 36px]:</span></span></code></pre>
</div><p>输出：</p>
<p>github: <VPIcon name="tdesign:logo-github-filled"></VPIcon>
修改颜色：<VPIcon name="tdesign:logo-github-filled" color="#f00"></VPIcon>
修改大小：<VPIcon name="tdesign:logo-github-filled" size="36px"></VPIcon>
修改大小颜色：<VPIcon name="tdesign:logo-github-filled" size="36px" color="#f00"></VPIcon></p>
<p>彩色图标 <VPIcon name="skill-icons:vscode-dark" size="36px"></VPIcon></p>
</div></template>


