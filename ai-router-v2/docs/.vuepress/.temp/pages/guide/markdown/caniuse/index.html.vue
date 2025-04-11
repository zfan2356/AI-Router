<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在编写文章时， 提供嵌入 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">can-i-use</a> WEB feature 各平台支持说明 的功能。</p>
<p>方便在描述某个 WEB feature 时，能更直观的表述 该特性的支持程度。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>此功能默认不启用，你可以在配置文件中启用它。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdownP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><p>在你的 文章 markdown文件中，使用以下格式：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>为了方便使用，主题提供了工具支持：<RouteLink to="/notes/tools/caniuse.html">caniuse 特性搜索</RouteLink>，你可以直接使用该工具
帮助生成 markdown 代码。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse embed_type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse embed_type{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><ul>
<li>
<p><code v-pre>feature</code></p>
<p>必填。 正确取值请参考 <a href="https://caniuse-embed.vercel.app/zh-CN" target="_blank" rel="noopener noreferrer">caniuse-embed.vercel.app</a></p>
</li>
<li>
<p><code v-pre>{browser_versions}</code></p>
<p>可选。当前特性在多个版本中的支持情况。</p>
<p>默认值为: <code v-pre>{-2,1}</code></p>
<p>格式： <code v-pre>{past,future}</code>  取值范围为 <code v-pre>-5 ~ 3</code></p>
<ul>
<li>小于<code v-pre>0</code> 表示低于当前浏览器版本的支持情况</li>
<li><code v-pre>0</code> 表示当前浏览器版本的支持情况</li>
<li>大于<code v-pre>0</code> 表示高于当前浏览器版本的支持情况</li>
</ul>
</li>
<li>
<p><code v-pre>embed_type</code></p>
<p>可选。 资源嵌入的类型。</p>
<p>类型： <code v-pre>'embed' | 'image'</code></p>
<p>默认值为：<code v-pre>'embed'</code></p>
</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>不再推荐使用 image 类型，建议使用 embed 类型，主题更换了 embed 实现技术方案，
现在的 embed 类型优势已远远超过 image 类型，加载速度更快，体积更小，交互体验更好。</p>
</div>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p><strong>获取 css 伪类选择器 <code v-pre>:dir()</code> 在各个浏览器的支持情况：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>效果：</p>
<CanIUseViewer feature="css-matches-pseudo" meta="mdrsj" past="2" future="1" /><p><strong>以图片的形式，获取 css 伪类选择器 <code v-pre>:dir()</code> 在各个浏览器的支持情况：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>效果：</p>
<ClientOnly><p><picture>
      <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-matches-pseudo.webp">
      <source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-matches-pseudo.png">
      <img src="https://caniuse.bitsofco.de/image/css-matches-pseudo.jpg" alt="Data on support for the css-matches-pseudo feature across the major browsers from caniuse.com" width="100%">
    </picture></p></ClientOnly><p><strong>获取 css 伪类选择器 <code v-pre>:dir()</code> 特定范围浏览器的支持情况：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse{-2,3}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>效果：</p>
<CanIUseViewer feature="css-matches-pseudo" meta="mmnti" past="2" future="3" /></div></template>


