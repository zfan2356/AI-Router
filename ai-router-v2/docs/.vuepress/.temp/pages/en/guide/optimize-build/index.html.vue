<template><div><h2 id="image-optimization" tabindex="-1"><a class="header-anchor" href="#image-optimization"><span>Image Optimization <Badge type="warning" text="Experimental" /></span></a></h2>
<p>When we embed images in markdown using <code v-pre>[alt](url)</code> or <code v-pre>&lt;img src=&quot;url&quot;&gt;</code>, the page displays the images as expected.</p>
<p>However, due to different image sizes, when images are small or network conditions are good, we may not notice significant layout shifts. When images are large or network conditions are poor, the layout can change noticeably as images load, causing other content to shift.</p>
<p>This experience is not user-friendly, especially with many images on a page. Frequent layout changes can cause noticeable jitter.</p>
<p>To stabilize the layout, images must be optimized. According to <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#height" target="_blank" rel="noopener noreferrer">MDN &gt; img</a>:</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p><code v-pre>&lt;img&gt;</code> with both <code v-pre>height</code> and <code v-pre>width</code> allows the browser to calculate the image's aspect ratio before loading. This reserves space for the image, reducing or preventing layout shifts during download and rendering. Reducing layout shifts is crucial for good user experience and web performance.</p>
</div>
<p>Our theme provides a solution: automatically adding <code v-pre>width</code> and <code v-pre>height</code> attributes to <code v-pre>[alt](url)</code> or <code v-pre>&lt;img src=&quot;url&quot;&gt;</code> in markdown files.</p>
<p>Enable it by configuring <code v-pre>markdownPower</code>:</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      markdownPower</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        imageSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 'local' | 'all'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div><p>When enabled, the theme retrieves the original dimensions of images from their source URLs and adds <code v-pre>width</code> and <code v-pre>height</code> attributes.</p>
<ul>
<li><code v-pre>'local'</code>: Only adds attributes to local images.</li>
<li><code v-pre>'all'</code>: Adds attributes to both local and remote images.</li>
<li><code v-pre>true</code>: Equivalent to <code v-pre>'local'</code>.</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>For performance reasons, this feature only takes effect during production build.</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Use <code v-pre>'all'</code> cautiously. It requests all remote images during production build, which can increase build time for sites with many images. The theme optimizes this by only requesting a few KB of data to analyze dimensions and processing images concurrently.</p>
</div>
<h2 id="icon-optimization" tabindex="-1"><a class="header-anchor" href="#icon-optimization"><span>Icon Optimization</span></a></h2>
<p>Thanks to the open-source project <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a>, you can use approximately 200,000 icons in our theme.</p>
<p>However, this doesn't mean the theme needs to load all icons. You may have noticed the theme recommends installing the <code v-pre>@iconify/json</code> package locally, which requires downloading a 70Mb resource pack. Loading all icons into the documentation site would be excessively large.</p>
<p>But rest assured, the theme only loads the icon resources you actually use. This includes Iconify icons in navigation, sidebar, homepage Features, and icons used via the <code v-pre>:[collect:name]:</code> syntax or <code v-pre>&lt;Icon name=&quot;icon_name&quot; /&gt;</code> component.</p>
<p>When loading icons from local <code v-pre>@iconify/json</code>, iconify names icons by <code v-pre>[collect]:[name]</code>, with each collection containing 100 to 1000+ icons in a <code v-pre>json</code> file. Using many different <code v-pre>collect</code> icons can slow down initial loading and parsing. For example, our theme uses 54 <code v-pre>collect</code> collections with over 160 icons, taking about <code v-pre>500ms</code> to load and parse initially.</p>
<p>To optimize, the theme caches used icons on first launch. On subsequent launches, it优先从缓存加载图标， which is much faster than parsing different <code v-pre>collect</code> collections. This reduces loading time from <code v-pre>500ms</code> to <code v-pre>20ms</code> or less, also improving development server startup time!</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Using 54 <code v-pre>collect</code> collections is extreme. While <code v-pre>500ms</code> for 54 I/O reads and JSON parses seems normal, it's unexpected for only 160+ icons. Caching these icons is a good solution.</p>
</div>
</div></template>


