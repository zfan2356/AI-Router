<template><div><p>这些选项用于配置与语言相关的文本。</p>
<p>如果你的站点是以非内置语言支持以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。</p>
<h2 id="内置语言支持" tabindex="-1"><a class="header-anchor" href="#内置语言支持"><span>内置语言支持</span></a></h2>
<p>主题内置了以下语言支持，包括:</p>
<ul>
<li>简体中文 (<code v-pre>zh-CN</code>) - <code v-pre>/zh/</code></li>
<li>繁体中文 (<code v-pre>zh-TW</code>) - <code v-pre>/zh-tw/</code></li>
<li>英语 (<code v-pre>en-US</code>) - <code v-pre>/en/</code></li>
<li>法语 (<code v-pre>fr-FR</code>) - <code v-pre>/fr/</code></li>
<li>德语 (<code v-pre>de-DE</code>) - <code v-pre>/de/</code></li>
<li>俄语 (<code v-pre>ru-RU</code>) - <code v-pre>/ru/</code></li>
<li>日语 (<code v-pre>ja-JP</code>) - <code v-pre>/ja/</code></li>
</ul>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>您应该将配置写入到 <code v-pre>theme.locales</code> 中。</p>
<p>您可以在 <code v-pre>.vuepress/config.ts</code> ，或者在 <code v-pre>.vuepress/plume.config.ts</code> 中进行配置：</p>
<CodeTabs id="58" :data='[{"id":".vuepress/config.ts"},{"id":".vuepress/plume.config.ts"}]' tab-id="configs"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/plume.config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code twoslash lsp"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>theme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Vuepress theme</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@required</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>locales</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeBaseData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">locales</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> LocaleConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeLocaleData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>多语言配置</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 非内置语言的语言代码</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">      '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/xxx/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // 语言配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code twoslash lsp"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineThemeConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ThemeConfig</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>主题配置，在单独的 <code>plume.config.ts</code> 中使用的类型帮助函数</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineThemeConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> ThemeConfig</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>主题配置，在单独的 <code>plume.config.ts</code> 中使用的类型帮助函数</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>locales</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeBaseData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">locales</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> LocaleConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeLocaleData</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>多语言配置</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 非内置语言的语言代码</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/xxx/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 语言配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template></CodeTabs><p>详细配置方法请参考：<RouteLink to="/notes/theme/guide/quick-start/locales.html">国际化</RouteLink></p>
<h3 id="appearancetext" tabindex="-1"><a class="header-anchor" href="#appearancetext"><span>appearanceText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Appearance'</code></li>
<li>详情： 导航栏中的主题切换按钮的文本。</li>
</ul>
<h3 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename"><span>selectLanguageName</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p>Locale 的语言名称。</p>
<p>该配置项 <strong>仅能在主题配置的 <RouteLink to="/notes/theme/config/theme.html#locales">locales</RouteLink> 的内部生效</strong> 。它将被用作 locale 的语言名称，展示在 <em>选择语言菜单</em> 内。</p>
</li>
</ul>
<h3 id="selectlanguagetext" tabindex="-1"><a class="header-anchor" href="#selectlanguagetext"><span>selectLanguageText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单</em> 的文本。</p>
<p>如果你在站点配置中设置了多个 <RouteLink to="/notes/theme/config/theme.html#locales">locales</RouteLink> ，那么 <em>选择语言菜单</em> 就会显示在导航栏中仓库按钮的旁边。</p>
</li>
</ul>
<h3 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel"><span>selectLanguageAriaLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单 的 <code v-pre>aria-label</code> 属性。</em></p>
<p>它主要是为了站点的可访问性 (a11y) 。</p>
</li>
</ul>
<h3 id="hometext" tabindex="-1"><a class="header-anchor" href="#hometext"><span>homeText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Home'</code></p>
</li>
<li>
<p>详情： 主页链接的文本。</p>
<ul>
<li>主题默认导航栏中的首页链接的文本。</li>
<li>面包屑导航中的首页链接的文本。</li>
</ul>
</li>
</ul>
<h3 id="blogtext" tabindex="-1"><a class="header-anchor" href="#blogtext"><span>blogText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Blog'</code></p>
</li>
<li>
<p>详情： 博客链接的文本。</p>
<ul>
<li>主题默认导航栏中的博客链接的文本。</li>
<li>面包屑导航中的博客链接的文本。</li>
</ul>
</li>
</ul>
<h3 id="tagtext" tabindex="-1"><a class="header-anchor" href="#tagtext"><span>tagText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Tags'</code></p>
</li>
<li>
<p>详情： 标签链接的文本。</p>
<ul>
<li>主题默认导航栏中的标签链接的文本。</li>
<li>博客页中的标签链接的文本。</li>
<li>博客标签页中的标题。</li>
</ul>
</li>
</ul>
<h3 id="categorytext" tabindex="-1"><a class="header-anchor" href="#categorytext"><span>categoryText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Categories'</code></p>
</li>
<li>
<p>详情： 分类链接的文本。</p>
<ul>
<li>主题默认导航栏中的分类链接的文本。</li>
<li>博客页中的分类链接的文本。</li>
<li>博客分类页中的标题。</li>
</ul>
</li>
</ul>
<h3 id="archivetext" tabindex="-1"><a class="header-anchor" href="#archivetext"><span>archiveText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Archives'</code></p>
</li>
<li>
<p>详情： 归档链接的文本。</p>
<ul>
<li>主题默认导航栏中的归档链接的文本。</li>
<li>博客页中的归档链接的文本。</li>
<li>博客归档页中的标题。</li>
</ul>
</li>
</ul>
<h3 id="archivetotaltext" tabindex="-1"><a class="header-anchor" href="#archivetotaltext"><span>archiveTotalText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'{count} articles'</code></li>
<li>详情： 归档页中的总文章数的文本。</li>
</ul>
<h3 id="sidebarmenulabel" tabindex="-1"><a class="header-anchor" href="#sidebarmenulabel"><span>sidebarMenuLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Menu'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中 菜单选项的文本。</p>
</li>
</ul>
<h3 id="returntotoplabel" tabindex="-1"><a class="header-anchor" href="#returntotoplabel"><span>returnToTopLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'return to top'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中返回顶部的文本。</p>
</li>
</ul>
<h3 id="outlinelabel" tabindex="-1"><a class="header-anchor" href="#outlinelabel"><span>outlineLabel</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'On this page'</code></p>
</li>
<li>
<p>详情：</p>
<p>移动设备下的导航栏中大纲标题的文本</p>
</li>
</ul>
<h3 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext"><span>editLinkText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Edit this page'</code></li>
<li>详情： 编辑链接文本</li>
</ul>
<h3 id="latestupdatedtext" tabindex="-1"><a class="header-anchor" href="#latestupdatedtext"><span>latestUpdatedText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Latest Updated'</code></li>
<li>详情： 最近更新时间 的文本</li>
</ul>
<h3 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext"><span>contributorsText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Contributors'</code></li>
<li>详情： 贡献者的文本</li>
</ul>
<h3 id="changelogtext" tabindex="-1"><a class="header-anchor" href="#changelogtext"><span>changelogText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Changelog'</code></li>
<li>详情： 变更记录的文本</li>
</ul>
<h3 id="changelogontext" tabindex="-1"><a class="header-anchor" href="#changelogontext"><span>changelogOnText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'On'</code></li>
<li>详情： 单次变更记录的时间文本</li>
</ul>
<h3 id="changelogbuttontext" tabindex="-1"><a class="header-anchor" href="#changelogbuttontext"><span>changelogButtonText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'View All Changelog'</code></li>
<li>详情： 变更记录的按钮文本</li>
</ul>
<h3 id="copyrighttext" tabindex="-1"><a class="header-anchor" href="#copyrighttext"><span>copyrightText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Copyright'</code></li>
<li>详情： 版权所有的文本</li>
</ul>
<h3 id="copyrightauthortext" tabindex="-1"><a class="header-anchor" href="#copyrightauthortext"><span>copyrightAuthorText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Copyright Ownership:'</code></li>
<li>详情： 版权所有者的文本</li>
</ul>
<h3 id="copyrightcreationoriginaltext" tabindex="-1"><a class="header-anchor" href="#copyrightcreationoriginaltext"><span>copyrightCreationOriginalText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'This article link:'</code></li>
<li>详情： 本文链接的文本</li>
</ul>
<h3 id="copyrightcreationtranslatetext" tabindex="-1"><a class="header-anchor" href="#copyrightcreationtranslatetext"><span>copyrightCreationTranslateText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'This article translated from:'</code></li>
<li>详情： 本文翻译的文本</li>
</ul>
<h3 id="copyrightcreationreprinttext" tabindex="-1"><a class="header-anchor" href="#copyrightcreationreprinttext"><span>copyrightCreationReprintText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'This article reprint from:'</code></li>
<li>详情： 本文转载的文本</li>
</ul>
<h3 id="copyrightlicensetext" tabindex="-1"><a class="header-anchor" href="#copyrightlicensetext"><span>copyrightLicenseText</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'License under:'</code></li>
<li>详情： 版权许可证的文本</li>
</ul>
<h3 id="prevpagelabel" tabindex="-1"><a class="header-anchor" href="#prevpagelabel"><span>prevPageLabel</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Previous Page'</code></li>
<li>详情： 上一页的文本</li>
</ul>
<h3 id="nextpagelabel" tabindex="-1"><a class="header-anchor" href="#nextpagelabel"><span>nextPageLabel</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>'Next Page'</code></li>
<li>详情： 下一页的文本</li>
</ul>
<h3 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound"><span>notFound</span></a></h3>
<ul>
<li>类型： <code v-pre>NotFound | undefined</code></li>
<li>默认值： <code v-pre>undefined</code></li>
<li>详情： 404 页面配置</li>
</ul>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> NotFound</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  code</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  quote</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  linkLabel</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  linkText</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></div></template>


