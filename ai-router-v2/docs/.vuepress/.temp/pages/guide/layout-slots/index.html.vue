<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题通过 <code v-pre>&lt;Layout /&gt;</code> 和 <code v-pre>&lt;NotFound /&gt;</code> 提供了 丰富的 布局插槽，可以通过这些插槽，在 页面 的不同位置注入内容。
以便用户可以个性化的使用主题。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>以 <code v-pre>&lt;Layout /&gt;</code> 为例，首先，需要创建一个 客户端配置文件： <code v-pre>.vuepress/client.ts</code>:</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/client.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Layout</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./layouts/Layout.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  layouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code v-pre>layouts</code> 中的 <code v-pre>Layout</code> 名是固定的，这是 js 的简写语法， 实际上为 <code v-pre>Layout: Layout</code>，它是实现 布局插槽的关键。
<code v-pre>NotFound</code> 也是相同的规则。</p>
<p>你传入的其它非 <code v-pre>Layout</code> / <code v-pre>NotFound</code> 的组件，被认为是自定义布局组件。</p>
</div>
<p>然后，创建一个 <code v-pre>.vuepress/layouts/Layout.vue</code>，作为布局插槽的默认组件，在该组件中引入 当前主题的 <code v-pre>&lt;Layout /&gt;</code> 组件。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-vue"/>.vuepress/layouts/Layout.vue</span></div><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line highlighted"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">page-bottom</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">custom-content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">        自定义内容</span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">      &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">custom-content</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>也可以使用 渲染函数 实现注入内容，在 <code v-pre>.vuepress/client.ts</code> 中：</p>
<CodeTabs id="28" :data='[{"id":".vuepress/client.ts"},{"id":".vuepress/components/CustomContent.vue"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/client.ts</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-vue"/><span>.vuepress/components/CustomContent.vue</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> h</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> CustomContent</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./components/CustomContent.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  layouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: () => </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">      '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">page-bottom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: () => </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">CustomContent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-vue" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">custom-content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Custom Content</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
</div></template></CodeTabs><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h2>
<h3 id="layout-插槽" tabindex="-1"><a class="header-anchor" href="#layout-插槽"><span><code v-pre>&lt;Layout /&gt;</code> 插槽</span></a></h3>
<ul>
<li>
<p>当 <code v-pre>pageLayout: doc</code> 时：</p>
<ul>
<li><code v-pre>doc-top</code></li>
<li><code v-pre>doc-bottom</code></li>
<li><code v-pre>doc-footer-before</code></li>
<li><code v-pre>doc-before</code></li>
<li><code v-pre>doc-after</code></li>
<li><code v-pre>sidebar-nav-before</code></li>
<li><code v-pre>sidebar-nav-after</code></li>
<li><code v-pre>aside-top</code></li>
<li><code v-pre>aside-bottom</code></li>
<li><code v-pre>aside-outline-before</code></li>
<li><code v-pre>aside-outline-after</code></li>
</ul>
</li>
<li>
<p>当 <code v-pre>pageLayout: page</code> 时：</p>
<ul>
<li><code v-pre>page-top</code></li>
<li><code v-pre>page-bottom</code></li>
</ul>
</li>
<li>
<p>在 博客页 中 （包括 文章列表页、标签页、归档页 均适用）：</p>
<ul>
<li><code v-pre>blog-top</code></li>
<li><code v-pre>blog-bottom</code></li>
<li><code v-pre>blog-aside-top</code></li>
<li><code v-pre>blog-aside-bottom</code></li>
<li><code v-pre>blog-extract-before</code></li>
<li><code v-pre>blog-extract-after</code></li>
</ul>
</li>
<li>
<p>在 博客文章列表页 中：</p>
<ul>
<li><code v-pre>blog-post-list-before</code></li>
<li><code v-pre>blog-post-list-after</code></li>
<li><code v-pre>blog-post-list-pagination-after</code></li>
</ul>
</li>
<li>
<p>在 博客标签页 中：</p>
<ul>
<li><code v-pre>blog-tags-before</code></li>
<li><code v-pre>blog-tags-title-after</code></li>
<li><code v-pre>blog-tags-content-before</code></li>
<li><code v-pre>blog-tags-after</code></li>
</ul>
</li>
<li>
<p>在 博客归档页 中：</p>
<ul>
<li><code v-pre>blog-archives-before</code></li>
<li><code v-pre>blog-archives-after</code></li>
</ul>
</li>
<li>
<p>在 博客分类页 中：</p>
<ul>
<li><code v-pre>blog-categories-before</code></li>
<li><code v-pre>blog-categories-content-before</code></li>
<li><code v-pre>blog-categories-after</code></li>
</ul>
</li>
</ul>
<h3 id="notfound-插槽" tabindex="-1"><a class="header-anchor" href="#notfound-插槽"><span><code v-pre>&lt;NotFound /&gt;</code> 插槽</span></a></h3>
<ul>
<li><code v-pre>not-found</code></li>
</ul>
<h3 id="通用插槽" tabindex="-1"><a class="header-anchor" href="#通用插槽"><span>通用插槽</span></a></h3>
<p>以下插槽在 <code v-pre>&lt;Layout /&gt;</code> 和 <code v-pre>&lt;NotFound /&gt;</code> 中都支持：</p>
<ul>
<li><code v-pre>layout-top</code></li>
<li><code v-pre>layout-bottom</code></li>
<li><code v-pre>nav-bar-title-before</code></li>
<li><code v-pre>nav-bar-title-after</code></li>
<li><code v-pre>nav-bar-content-before</code></li>
<li><code v-pre>nav-bar-content-after</code></li>
<li><code v-pre>nav-screen-content-before</code></li>
<li><code v-pre>nav-screen-content-after</code></li>
<li><code v-pre>footer-content</code></li>
<li><code v-pre>bulletin-content</code></li>
</ul>
</div></template>


