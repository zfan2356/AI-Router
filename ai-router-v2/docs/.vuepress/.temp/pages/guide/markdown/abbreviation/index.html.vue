<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p><strong>缩写词</strong> 是指在 Markdown 中使用的简称，例如 一些专业名词如 <Abbreviation aria-label="World Wide Web Consortium">W3C<template #tooltip>World Wide Web Consortium</template></Abbreviation> 、 <Abbreviation aria-label="European Computer Manufacturers Association">ECMA<template #tooltip>European Computer Manufacturers Association</template></Abbreviation> 等。</p>
<p>在 鼠标移动到缩写词上时，显示该名词的完整名称，还可以包括缩写词的定义、解释等。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>该功能默认不启用，你需要在 <code v-pre>theme</code> 配置中启用。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      abbr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<p>在 Markdown 中，在单独的一行中使用 <code v-pre>*[缩写词]: 描述</code> 来定义缩写词，描述可以包括缩写词的定义、解释等。</p>
<p>在 <code v-pre>[]</code> 中填写缩写词，在 <code v-pre>:</code> 后面填写描述，在描述中可以使用 Markdown 内联语法。</p>
<p>Markdown 普通文本中如果包含了定义的缩写词，则鼠标移动到该缩写词时自动显示缩写词的解释。</p>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">The HTML specification is maintained by the W3C.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">HTML</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: Hyper Text Markup Language</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">W3C</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:  World Wide Web Consortium</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<p>The <Abbreviation aria-label="Hyper Text Markup Language">HTML<template #tooltip>Hyper Text Markup Language</template></Abbreviation> specification is maintained by the <Abbreviation aria-label="World Wide Web Consortium">W3C<template #tooltip>World Wide Web Consortium</template></Abbreviation>.</p>
<div class="hint-container warning">
<p class="hint-container-title">缩写词应该是独立的单词或词组。对于中文的缩写词，应该在词的左右加空格以区分。</p>
</div>
</div></template>


