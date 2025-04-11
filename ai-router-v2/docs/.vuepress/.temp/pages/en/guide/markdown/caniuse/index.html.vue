<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>When writing articles, you can embed the support status of <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">can-i-use</a> WEB features across platforms.</p>
<p>This makes it easier to describe the support level of a particular WEB feature.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>This feature is not enabled by default. You can enable it in the configuration file.</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdownP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><p>In your Markdown file, use the following format:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>For convenience, the theme provides a tool: <RouteLink to="/notes/tools/caniuse.html">caniuse feature search</RouteLink>, which can help generate the Markdown code.</p>
<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse embed_type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse embed_type{browser_versions}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">feature</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><ul>
<li>
<p><code v-pre>feature</code></p>
<p>Required. For correct values, refer to <a href="https://caniuse-embed.vercel.app/zh-CN" target="_blank" rel="noopener noreferrer">caniuse-embed.vercel.app</a></p>
</li>
<li>
<p><code v-pre>{browser_versions}</code></p>
<p>Optional. The support status of the feature across multiple browser versions.</p>
<p>Default value: <code v-pre>{-2,1}</code></p>
<p>Format: <code v-pre>{past,future}</code> with values ranging from <code v-pre>-5 ~ 3</code></p>
<ul>
<li>Less than <code v-pre>0</code> indicates support below the current browser version</li>
<li><code v-pre>0</code> indicates support at the current browser version</li>
<li>Greater than <code v-pre>0</code> indicates support above the current browser version</li>
</ul>
</li>
<li>
<p><code v-pre>embed_type</code></p>
<p>Optional. The type of resource embedding.</p>
<p>Type: <code v-pre>'embed' | 'image'</code></p>
<p>Default value: <code v-pre>'embed'</code></p>
</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>The use of image type is no longer recommended. Instead, use the embed type, as the theme has changed the embed implementation, offering faster loading, smaller size, and better interaction.</p>
</div>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<p><strong>Get the browser support status for the CSS pseudo-class selector <code v-pre>:dir()</code>:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>Effect:</p>
<CanIUseViewer feature="css-matches-pseudo" meta="wdgrs" past="2" future="1" /><p><strong>Get the browser support status for the CSS pseudo-class selector <code v-pre>:dir()</code> as an image:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>Effect:</p>
<ClientOnly><p><picture>
      <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-matches-pseudo.webp">
      <source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-matches-pseudo.png">
      <img src="https://caniuse.bitsofco.de/image/css-matches-pseudo.jpg" alt="Data on support for the css-matches-pseudo feature across the major browsers from caniuse.com" width="100%">
    </picture></p></ClientOnly><p><strong>Get the browser support status for the CSS pseudo-class selector <code v-pre>:dir()</code> for specific browser versions:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse{-2,3}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">css-matches-pseudo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>Effect:</p>
<CanIUseViewer feature="css-matches-pseudo" meta="yvjsv" past="2" future="3" /></div></template>


