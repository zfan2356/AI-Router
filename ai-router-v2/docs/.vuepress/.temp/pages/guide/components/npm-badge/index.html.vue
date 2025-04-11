<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>Npm 徽章组件 用于显示 npm 包信息，并提供相关的链接。</p>
<p>徽章由 <a href="https://shields.io" target="_blank" rel="noopener noreferrer">https://shields.io</a> 提供支持。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>使用该组件需要你手动导入 <code v-pre>NpmBadge</code> 或 <code v-pre>NpmBadgeGroup</code> 组件：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 在 markdown 中导入 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> NpmBadge</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume/features/NpmBadge.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> NpmBadgeGroup</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume/features/NpmBadgeGroup.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 导入后，即可在 markdown 中使用 --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 并排显示多个 npm badge --></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadgeGroup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">version,dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span></code></pre>
</div><NpmBadge name="vuepress-theme-plume" type="dm" /><NpmBadgeGroup name="vuepress-theme-plume" items="version,dm" /><h2 id="npmbadge" tabindex="-1"><a class="header-anchor" href="#npmbadge"><span><code v-pre>&lt;NpmBadge /&gt;</code></span></a></h2>
<p>单个 npm badge</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>npm 包名，为空则从 <code v-pre>repo</code> 中获取</td>
</tr>
<tr>
<td>repo</td>
<td><code v-pre>string</code></td>
<td>name 为空时必填</td>
<td><code v-pre>''</code></td>
<td>包 github 仓库地址, 格式为 <code v-pre>owner/repo</code></td>
</tr>
<tr>
<td>type</td>
<td><code v-pre>NpmBadgeType</code></td>
<td>是</td>
<td>-</td>
<td>徽章类型</td>
</tr>
<tr>
<td>theme</td>
<td><code v-pre>NpmBadgeTheme</code></td>
<td>否</td>
<td><code v-pre>'flat'</code></td>
<td>徽章主题</td>
</tr>
<tr>
<td>label</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>徽章标签</td>
</tr>
<tr>
<td>color</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>'#32A9C3'</code></td>
<td>徽章颜色</td>
</tr>
<tr>
<td>labelColor</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>'#1B3C4A'</code></td>
<td>徽章标签颜色</td>
</tr>
<tr>
<td>branch</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>'main'</code></td>
<td>仓库分支</td>
</tr>
<tr>
<td>dir</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>包所在仓库目录，适用于 monorepo 项目</td>
</tr>
</tbody>
</table>
<h3 id="types" tabindex="-1"><a class="header-anchor" href="#types"><span>Types</span></a></h3>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> NpmBadgeType</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // github</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // github source</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stars</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // github stars</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">forks</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // github forks</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">license</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // github license</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // npm</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">version</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // npm version</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // alias d18m</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">d18m</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // npm downloads last 18 months</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dw</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // npm downloads weekly</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // npm downloads monthly</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // npm downloads yearly</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> NpmBadgeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">flat</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">flat-square</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">plastic</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">for-the-badge</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">social</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<ul>
<li><code v-pre>&lt;NpmBadge repo=&quot;pengzhanbo/vuepress-theme-plume&quot; type=&quot;source&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="source" /></li>
<li><code v-pre>&lt;NpmBadge repo=&quot;pengzhanbo/vuepress-theme-plume&quot; type=&quot;stars&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="stars" /></li>
<li><code v-pre>&lt;NpmBadge repo=&quot;pengzhanbo/vuepress-theme-plume&quot; type=&quot;forks&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="forks" /></li>
<li><code v-pre>&lt;NpmBadge repo=&quot;pengzhanbo/vuepress-theme-plume&quot; type=&quot;license&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="license" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;version&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="version" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;dt&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="dt" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;d18m&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="d18m" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;dy&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="dy" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;dm&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="dm" /></li>
<li><code v-pre>&lt;NpmBadge name=&quot;vuepress-theme-plume&quot; type=&quot;dw&quot; /&gt;</code> - <NpmBadge repo="pengzhanbo/vuepress-theme-plume" type="dw" /></li>
</ul>
<h2 id="npmbadgegroup" tabindex="-1"><a class="header-anchor" href="#npmbadgegroup"><span><code v-pre>&lt;NpmBadgeGroup /&gt;</code></span></a></h2>
<p>组合多个 npm badge</p>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>npm 包名，为空则从 <code v-pre>repo</code> 中获取</td>
</tr>
<tr>
<td>repo</td>
<td><code v-pre>string</code></td>
<td>name 为空时必填</td>
<td><code v-pre>''</code></td>
<td>包 github 仓库地址, 格式为 <code v-pre>owner/repo</code></td>
</tr>
<tr>
<td>items</td>
<td><code v-pre>string | NpmBadgeType[]</code></td>
<td>否</td>
<td>-</td>
<td>徽章类型列表, 传入 <code v-pre>string</code> 时用 <code v-pre>','</code>分隔，会自动转换为 <code v-pre>NpmBadgeType[]</code></td>
</tr>
<tr>
<td>theme</td>
<td><code v-pre>NpmBadgeTheme</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>徽章主题</td>
</tr>
<tr>
<td>color</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>徽章颜色</td>
</tr>
<tr>
<td>labelColor</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>徽章标签颜色</td>
</tr>
<tr>
<td>branch</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>仓库分支</td>
</tr>
<tr>
<td>dir</td>
<td><code v-pre>string</code></td>
<td>否</td>
<td><code v-pre>''</code></td>
<td>包所在仓库目录，适用于 monorepo 项目</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<p><code v-pre>&lt;NpmBadgeGroup /&gt;</code> 支持传入 多个 <code v-pre>&lt;NpmBadge /&gt;</code> 组件。</p>
<p><code v-pre>&lt;NpmBadgeGroup /&gt;</code> 声明的 <code v-pre>Props</code> 将被注入到 <code v-pre>&lt;NpmBadge /&gt;</code> 组件中。通过这种方式来实现和简化徽章组合。</p>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadgeGroup</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  items</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stars,version,dm,source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">/></span></span></code></pre>
</div><p><strong>输出：</strong></p>
<NpmBadgeGroup repo="pengzhanbo/vuepress-theme-plume" items="stars,version,dm,source" /><p>使用 <code v-pre>&lt;slot /&gt;</code> 灵活定义徽章组合：</p>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadgeGroup</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">pengzhanbo/vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stars</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">version</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> label</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">npm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">dm</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">source</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NpmBadgeGroup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
</div><p><strong>输出：</strong></p>
<NpmBadgeGroup repo="pengzhanbo/vuepress-theme-plume">
  <NpmBadge type="stars" />
  <NpmBadge type="version" label="npm" />
  <NpmBadge type="dm" />
  <NpmBadge type="source" />
</NpmBadgeGroup></div></template>


<script setup>
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
</script>