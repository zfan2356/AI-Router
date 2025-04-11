<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p><strong>Abbreviations</strong> refer to short forms used in Markdown, such as technical terms like <Abbreviation aria-label="World Wide Web Consortium">W3C<template #tooltip>World Wide Web Consortium</template></Abbreviation> and <Abbreviation aria-label="European Computer Manufacturers Association">ECMA<template #tooltip>European Computer Manufacturers Association</template></Abbreviation>.</p>
<p>When hovering over an abbreviation, the full term will be displayed along with its definition or explanation.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>This feature is disabled by default. Enable it in <code v-pre>theme</code> configuration:</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      abbr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2>
<p>In Markdown, define abbreviations using <code v-pre>*[ABBR]: Description</code> on separate lines. The description may include the abbreviation's definition, explanation, etc.</p>
<p>Place the abbreviation within <code v-pre>[]</code> and its description after <code v-pre>:</code>. The description supports Markdown inline syntax.</p>
<p>If the Markdown plain text contains defined abbreviations, the explanation of the abbreviation will be automatically displayed when the mouse moves over it.</p>
<p><strong>Input:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">The HTML specification is maintained by the W3C.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">HTML</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: Hyper Text Markup Language</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">W3C</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:  World Wide Web Consortium</span></span></code></pre>
</div><p><strong>Output:</strong></p>
<p>The <Abbreviation aria-label="Hyper Text Markup Language">HTML<template #tooltip>Hyper Text Markup Language</template></Abbreviation> specification is maintained by the <Abbreviation aria-label="World Wide Web Consortium">W3C<template #tooltip>World Wide Web Consortium</template></Abbreviation>.</p>
<div class="hint-container warning">
<p class="hint-container-title">Abbreviations should be standalone words or phrases. For Chinese abbreviations, add spaces around the term to ensure proper detection.</p>
</div>
</div></template>


