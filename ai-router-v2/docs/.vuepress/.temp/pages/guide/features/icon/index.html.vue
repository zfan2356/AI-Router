<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题支持 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 的所有图标，并提供了不同的方式来使用它们：</p>
<ul>
<li><RouteLink to="/notes/theme/config/navbar.html#%E9%85%8D%E7%BD%AE">导航栏图标</RouteLink></li>
<li><RouteLink to="/notes/theme/guide/document.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%9B%BE%E6%A0%87">侧边栏图标</RouteLink></li>
<li><a href="#%E5%9B%BE%E6%A0%87%E7%BB%84%E4%BB%B6">图标组件</a></li>
<li><RouteLink to="/notes/theme/guide/markdown/icons.html">图标语法糖</RouteLink></li>
<li><RouteLink to="/notes/theme/guide/markdown/file-tree.html">文件树图标</RouteLink></li>
<li><RouteLink to="/notes/theme/guide/code/code-tabs.html#%E5%88%86%E7%BB%84%E6%A0%87%E9%A2%98%E5%9B%BE%E6%A0%87">代码分组标题图标</RouteLink></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">主题对图标的优化</p>
<p>上述的不同的使用图标的方式，主题在内部都采取了相同的解析策略，即使您在不同的位置使用了相同的图标，
也不会重复加载相同的图标资源。</p>
<p>图标默认是通过远程请求加载，主题也非常建议您在本地项目中安装 <code v-pre>@iconify/json</code> 包，以便主题能够将图标全部解析为本地资源，
这可以有效的提高页面的访问体验。</p>
</div>
<h2 id="图标组件" tabindex="-1"><a class="header-anchor" href="#图标组件"><span>图标组件</span></a></h2>
<p>通过 <code v-pre>&lt;Icon /&gt;</code> 组件来使用图标。</p>
<p>你可以在 markdown 文件中使用该 组件。</p>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h3>
<p><code v-pre>&lt;Icon /&gt;</code> 组件接受一个 <code v-pre>name</code> 属性，用于指定图标的名称。还支持传入 <code v-pre>color</code> 和 <code v-pre>size</code> 属性来设置图标的颜色和大小。
但对于 彩色图标，<code v-pre>color</code> 属性设置无效。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td><code v-pre>string</code></td>
<td>图标名称，在 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> 可获取对应的名称</td>
</tr>
<tr>
<td>color</td>
<td><code v-pre>string</code></td>
<td>图标颜色，仅纯色图标支持设置颜色</td>
</tr>
<tr>
<td>size</td>
<td><code v-pre>number | string</code></td>
<td>设置图标大小，默认单位为 <code v-pre>px</code> ，可自定义单位</td>
</tr>
</tbody>
</table>
<p><strong>示例：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 纯色图标：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">octicon:smiley-16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 定义纯色图标的颜色和大小：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">octicon:smiley-16</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">red</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 彩色图标：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">noto:smiling-face-with-open-hands</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 定义彩色图标的大小：</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Icon</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">noto:smiling-face-with-open-hands</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2em</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span></code></pre>
</div><ul>
<li>纯色图标：<Icon name="octicon:smiley-16" /></li>
<li>定义纯色图标的颜色和大小：<Icon name="octicon:smiley-16" color="red" size="2em" /></li>
<li>彩色图标：<Icon name="noto:smiling-face-with-open-hands" /></li>
<li>定义彩色图标的大小：<Icon name="noto:smiling-face-with-open-hands" size="2em" /></li>
</ul>
<h3 id="加载图标" tabindex="-1"><a class="header-anchor" href="#加载图标"><span>加载图标</span></a></h3>
<p><code v-pre>&lt;Icon /&gt;</code> 组件默认通过 远程请求 <code v-pre>CDN</code> 获取图标资源，但这可能受到网络环境的影响，出现加载失败
或者延迟显示的情况。</p>
<p>为了解决这一问题，主题建议 在你的站点项目中安装 <code v-pre>@iconify/json</code> 包。
主题会检查当前项目是否安装了 <code v-pre>@iconify/json</code>，如果安装了该包，则主题自动解析所使用到的图标，
并处理为本地图标资源，在构建时打包到 <code v-pre>dist</code> 目录中。</p>
<p>由于 <code v-pre>@iconify/json</code> 包比较大，需要手动进行安装：</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @iconify/json</span></span></code></pre>
</div></template></CodeTabs><h2 id="markdown-语法糖" tabindex="-1"><a class="header-anchor" href="#markdown-语法糖"><span>markdown 语法糖</span></a></h2>
<p>相关内容请查看 <RouteLink to="/notes/theme/guide/markdown/icons.html">iconify-图标 语法糖</RouteLink></p>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p><RouteLink to="/notes/theme/config/theme.html#navbar">navbar</RouteLink> 配置和 <RouteLink to="/notes/theme/config/theme.html#notes">notes</RouteLink> 配置
中的 <code v-pre>icon</code> 选项，也支持传入 iconify 图标名，并且当安装了 <code v-pre>@iconify/json</code>，也会自动解析为本地图标资源。</p>
</div>
</div></template>


