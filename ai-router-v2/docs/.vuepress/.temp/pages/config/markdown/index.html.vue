<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>Markdown 配置用于控制 Markdown 的行为。此配置聚合了主题为 markdown 增强的各种功能的配置。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code twoslash lsp"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>theme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Vuepress theme</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@required</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>markdown</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeFeatureOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">markdown</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> MarkdownOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>markdown 功能增强配置</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line diff add"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 在这里配置 markdown</span></span>
<span class="line diff add"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>不要和 <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a> 的 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown" target="_blank" rel="noopener noreferrer">markdown</a> 配置混淆。</p>
<p>二者是相互独立的，不要在 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown" target="_blank" rel="noopener noreferrer">VuePress &gt; markdown</a> 中配置主题的 markdown 配置,反之亦然。</p>
</div>
<p><strong>默认配置：</strong></p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-focused-lines vp-code twoslash lsp"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>theme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Vuepress theme</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@required</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>markdown</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeFeatureOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">markdown</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> MarkdownOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>markdown 功能增强配置</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>hint</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">hint</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Whether to enable hint container including</p>
<ul>
<li>important</li>
<li>info</li>
<li>note</li>
<li>tip</li>
<li>warning</li>
<li>caution</li>
<li>details</li>
</ul>
<p>是否启用提示容器</p>
<ul>
<li>important</li>
<li>info</li>
<li>note</li>
<li>tip</li>
<li>warning</li>
<li>caution</li>
<li>details</li>
</ul></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">true</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>alert</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">alert</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Wether enable gfm alerts</p>
<p>是否启用 gfm 警告</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">false</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>fileTree</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownPowerPluginOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">fileTree</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> FileTreeOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否启用 文件树 容器语法</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">false</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plot</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownPowerPluginOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">plot</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> PlotOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否启用 隐秘文本 语法</p>
<p><code>!!plot_content!!</code></p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">false</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>icons</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownPowerPluginOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">icons</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> IconsOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否启用 iconify 图标嵌入语法</p>
<p><code>:[collect:icon_name]:</code></p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">false</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>math</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">math</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> MarkdownMathPluginOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>markdown 数学公式</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123; </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>type</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownKatexPluginOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">katex</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">katex</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> },</span></span>
<span class="line has-focus"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>include</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MarkdownOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">include</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> MarkdownIncludePluginOptions</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>在 markdown 中包含其他文件</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line has-focus"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // ...option</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line has-focus"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><code v-pre>hint</code> 和 <code v-pre>alter</code> 的功能由 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-hint.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-markdown-hint</a> 插件实现。</p>
</div>
<h3 id="hint" tabindex="-1"><a class="header-anchor" href="#hint"><span>hint</span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>boolean</code></li>
<li><strong>默认值：</strong> <code v-pre>true</code></li>
<li><strong>详情：</strong> 是否启用提示容器</li>
</ul>
<h3 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>alert</span></a></h3>
<ul>
<li><strong>类型：</strong> <code v-pre>boolean</code></li>
<li><strong>默认值：</strong> <code v-pre>true</code></li>
<li><strong>详情：</strong> 是否启用 Github 风格的警告语法</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title"><code v-pre>image</code> 配置由 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-markdown-image</a> 插件实现。</p>
</div>
<h3 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | MarkdownImagePluginOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用图片增强语法</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title"><code v-pre>math</code> 配置由 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-math.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-markdown-math</a> 插件实现。</p>
</div>
<h3 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>math</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | MarkdownMathPluginOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>{ type: 'katex' }</code></li>
<li><strong>详情</strong>: 是否启用数学支持</li>
</ul>
<hr>
<h3 id="include" tabindex="-1"><a class="header-anchor" href="#include"><span>include</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title"><code v-pre>include</code> 配置由 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-include.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-markdown-include</a> 插件实现。</p>
</div>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | MarkdownIncludePluginOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用 Markdown 文件导入</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">以下配置字段由 <RouteLink to="/notes/theme/config/plugins/markdown-power.html">vuepress-plugin-md-power</RouteLink> 插件实现。</p>
</div>
<h3 id="annotation" tabindex="-1"><a class="header-anchor" href="#annotation"><span>annotation</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用内容注释</li>
</ul>
<h3 id="abbr" tabindex="-1"><a class="header-anchor" href="#abbr"><span>abbr</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用缩写语法</li>
</ul>
<h3 id="codetabs" tabindex="-1"><a class="header-anchor" href="#codetabs"><span>codeTabs</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | CodeTabsOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用代码块分组</li>
</ul>
<h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>tabs</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | TabsOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用 分组</li>
</ul>
<h3 id="npmto" tabindex="-1"><a class="header-anchor" href="#npmto"><span>npmTo</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | NpmToOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 <code v-pre>npm-to</code> 容器</li>
</ul>
<h3 id="icons" tabindex="-1"><a class="header-anchor" href="#icons"><span>icons</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | IconsOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用图标语法</li>
</ul>
<h3 id="plot" tabindex="-1"><a class="header-anchor" href="#plot"><span>plot</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | PlotOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用隐秘文本语法</li>
</ul>
<h3 id="filetree" tabindex="-1"><a class="header-anchor" href="#filetree"><span>fileTree</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | FileTreeOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>详情</strong>: 是否启用文件树容器语法</li>
</ul>
<h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline"><span>timeline</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用时间线容器语法</li>
</ul>
<h3 id="collapse" tabindex="-1"><a class="header-anchor" href="#collapse"><span>collapse</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用折叠面板容器语法</li>
</ul>
<h3 id="chat" tabindex="-1"><a class="header-anchor" href="#chat"><span>chat</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用对话记录容器</li>
</ul>
<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>demo</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Demo 容器</li>
</ul>
<h3 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf"><span>pdf</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | PdfOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 PDF 嵌入语法</li>
</ul>
<h3 id="bilibili" tabindex="-1"><a class="header-anchor" href="#bilibili"><span>bilibili</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Bilibili 视频嵌入语法</li>
</ul>
<h3 id="youtube" tabindex="-1"><a class="header-anchor" href="#youtube"><span>youtube</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 YouTube 视频嵌入语法</li>
</ul>
<h3 id="artplayer" tabindex="-1"><a class="header-anchor" href="#artplayer"><span>artPlayer</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 ArtPlayer 视频嵌入语法</li>
</ul>
<h3 id="audioreader" tabindex="-1"><a class="header-anchor" href="#audioreader"><span>audioReader</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Audio Reader 音频嵌入语法</li>
</ul>
<h3 id="codepen" tabindex="-1"><a class="header-anchor" href="#codepen"><span>codepen</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 CodePen 嵌入语法</li>
</ul>
<h3 id="codesandbox" tabindex="-1"><a class="header-anchor" href="#codesandbox"><span>codeSandbox</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 CodeSandbox 嵌入语法</li>
</ul>
<h3 id="jsfiddle" tabindex="-1"><a class="header-anchor" href="#jsfiddle"><span>jsfiddle</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 JS Fiddle 嵌入语法</li>
</ul>
<h3 id="repl" tabindex="-1"><a class="header-anchor" href="#repl"><span>repl</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | ReplOptions</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Repl 容器语法</li>
</ul>
<h3 id="caniuse" tabindex="-1"><a class="header-anchor" href="#caniuse"><span>caniuse</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Can I Use 嵌入语法</li>
</ul>
<h3 id="imagesize" tabindex="-1"><a class="header-anchor" href="#imagesize"><span>imageSize</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean | 'local' | 'all'</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 自动填充图片宽高属性</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">以下配置字段由 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a> 插件实现。</p>
</div>
<h3 id="chartjs" tabindex="-1"><a class="header-anchor" href="#chartjs"><span>chartjs</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Chart.js 图表嵌入语法</li>
</ul>
<h3 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>echarts</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 ECharts 图表嵌入语法</li>
</ul>
<h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>mermaid</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Mermaid 图表嵌入语法</li>
</ul>
<h3 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>markmap</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Markmap 图表嵌入语法</li>
</ul>
<h3 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>plantuml</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 PlantUML 图表嵌入语法</li>
</ul>
<h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>flowchart</span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>boolean</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>详情</strong>: 是否启用 Flowchart 图表嵌入语法</li>
</ul>
</div></template>


