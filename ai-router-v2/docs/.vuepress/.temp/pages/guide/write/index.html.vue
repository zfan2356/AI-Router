<template><div><p>VuePress 支持完整的 <RouteLink to="/notes/theme/guide/markdown/basic.html">Markdown 语法</RouteLink>,
以及使用 <a href="https://dev.to/paulasantamaria/introduction-to-yaml-125f" target="_blank" rel="noopener noreferrer">YAML</a>
定义 frontmatter 页面元数据，例如 标题和创建时间。</p>
<p>主题还对 Markdown 语法进行了 <RouteLink to="/notes/theme/guide/markdown/extensions.html">扩展</RouteLink> 支持。你还可以直接在
Markdown 中写 HTML ，或者使用 Vue 组件。</p>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<p>你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。
Frontmatter 是你的文件顶部在 <code v-pre>---</code> 中间的部分。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>post.md</span></div><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">---</span></span>
<span class="line diff add"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">title: 文章标题</span></span>
<span class="line diff add"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">createTime: 2024/09/08 22:53:34</span></span>
<span class="line diff add"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">permalink: /article/9eh4d6ao/</span></span>
<span class="line diff add"><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">页面内容在第二个 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 后面。</span></span></code></pre>
</div></div><details class="hint-container details"><summary>什么是 frontmatter？</summary>
<p>frontmatter 是一个 <a href="https://dev.to/paulasantamaria/introduction-to-yaml-125f" target="_blank" rel="noopener noreferrer">YAML</a> 格式的配置内容，被放置于 markdown 文件的顶部，通过 <code v-pre>---</code> 来分隔。</p>
<p>您可以阅读 <RouteLink to="/4.%E6%95%99%E7%A8%8B/frontmatter.html">这篇文章</RouteLink> 了解如何正确书写 frontmatter。</p>
</details>
<h2 id="自动生成-frontmatter" tabindex="-1"><a class="header-anchor" href="#自动生成-frontmatter"><span>自动生成 Frontmatter</span></a></h2>
<p>默认配置下，主题在启动开发服务后，会帮助为源目录中的 markdown 文件，生成一些 <code v-pre>frontmatter</code> 配置。
这些配置包括： <strong>标题</strong>, <strong>创建时间</strong> 以及 <strong>永久链接</strong>。</p>
<p>一方面，这可以减少 内容创作者 的一些重复工作；另一方面，这些配置也为主题后续的其他功能提供了前置支持。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2024/09/08 22:53:34</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /article/9eh4d6ao/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h3>
<p>主题默认 使用文件名作为文章标题。在解析 文件名 时，<a href="#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">文件命名约定</a> 所命名的文件名如
<code v-pre>1.我的文章.md</code>，其中 <code v-pre>1.</code> 和 <code v-pre>.md</code> 部分将被裁剪，最终文章标题为 <code v-pre>我的文章</code> 。</p>
<h3 id="创建时间" tabindex="-1"><a class="header-anchor" href="#创建时间"><span>创建时间</span></a></h3>
<p>主题默认使用文件创建时间作为文章创建时间，并将其格式化为 <code v-pre>yyyy/MM/dd HH:mm:ss</code>。</p>
<h3 id="永久链接" tabindex="-1"><a class="header-anchor" href="#永久链接"><span>永久链接</span></a></h3>
<p><strong>永久链接</strong> 指的是，文章发布后的 访问地址，这个地址一旦生成，只要您不手动修改它，即使文件路径、文件名发生改变也不会改变。</p>
<p>提前准备好 <strong>永久链接</strong> 是比较有价值的，一方面，它可以帮助改善 站点的 SEO，避免收录的地址频繁变动；
另一方面，主题使用一套规范 生成 <strong>永久链接</strong> ，它使得整个站点的 链接 风格一致。</p>
<ul>
<li>
<p><strong>博客文章</strong></p>
<p>对于 博客文章，默认使用 <code v-pre>/article/</code> 作为永久链接的前缀，然后使用 <a href="https://github.com/ai/nanoid" target="_blank" rel="noopener noreferrer"><code v-pre>nanoid</code></a>
生成长度为 <code v-pre>8</code> 的随机字符串进行拼接，作为文章的永久链接， 如 <code v-pre>/article/9eh4d6ao/</code>。</p>
<p>对于链接前缀，还可以通过修改 <RouteLink to="/notes/theme/config/theme.html#article">主题配置 &gt; article</RouteLink> 替换默认的 <code v-pre>/article/</code>。</p>
</li>
<li>
<p><strong>notes</strong></p>
<p>对于 notes , 主题使用更为灵活的自定义方案，你可以在 <RouteLink to="/notes/theme/config/notes.html#%E9%85%8D%E7%BD%AE">notes &gt; note.link</RouteLink> 声明不同的
note 的链接前缀，然后同样适用  <a href="https://github.com/ai/nanoid" target="_blank" rel="noopener noreferrer"><code v-pre>nanoid</code></a>
生成长度为 <code v-pre>8</code> 的随机字符串进行拼接，作为 note 文章的永久链接。</p>
</li>
</ul>
<h3 id="禁用自动生成" tabindex="-1"><a class="header-anchor" href="#禁用自动生成"><span>禁用自动生成</span></a></h3>
<p>你可能不想主题做额外的自动生成，希望由自己完全掌控。这完全没问题，主题支持通过配置来控制 自动生成 frontmatter 的行为。
通过 <RouteLink to="/notes/theme/config/theme.html#autofrontmatter">主题配置 &gt; autoFrontmatter</RouteLink> 即可轻松做到。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code twoslash lsp"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">) => </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#123;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>defineUserConfig</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">UserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> UserConfig</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>theme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Theme</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>Vuepress theme</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@required</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>plumeTheme</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ThemeOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Theme</span></code></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 完全禁用所有自动生成</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // autoFrontmatter: false,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 控制部分自动生成</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>autoFrontmatter</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">autoFrontmatter</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Omit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">AutoFrontmatterOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">frontmatter</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>自动插入 frontmatter</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: &#123;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>permalink</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">permalink</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否自动生成 permalink</p></div><div class="twoslash-popup-docs twoslash-popup-docs-tags vp-doc" vp-content=""><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@default</span><span class="twoslash-popup-docs-tag-value">true</span></span></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 是否生成永久链接</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>createTime</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">createTime</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否自动生成 createTime</p>
<p>默认读取 文件创建时间，<code>createTitme</code> 比 vuepress 默认的 <code>date</code> 时间更精准到秒</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 是否生成创建时间</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"><v-menu class="twoslash-hover" popper-class="shiki twoslash-floating vp-copy-ignore vp-code" theme="twoslash"><span>title</span><template v-slot:popper="&#123;}"><span class="twoslash-popup-container vp-copy-ignore" v-pre=""><code class="twoslash-popup-code"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> boolean</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span></code><div class="twoslash-popup-docs vp-doc" vp-content=""><p>是否自动生成 title</p>
<p>默认读取文件名作为标题</p></div></span></template></v-menu></span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 是否生成标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="约定" tabindex="-1"><a class="header-anchor" href="#约定"><span>约定</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">提示</p>
<p>以下内容，以 <RouteLink to="/notes/theme/guide/quick-start/project-structure.html">项目结构</RouteLink> 中的文件结构作为基准。</p>
</div>
<p>使用本主题编写文章是一件很轻松的事情，你可以在 <code v-pre>docs</code>目录中按照你的个人命名喜好新建任意名字的<code v-pre>Markdown</code>文件。</p>
<h3 id="文件夹命名约定" tabindex="-1"><a class="header-anchor" href="#文件夹命名约定"><span>文件夹命名约定</span></a></h3>
<p>对于 <code v-pre>docs</code> 中的文件夹命名，主题有一套简单的约定。</p>
<ul>
<li>文件夹的名称将作为 <code v-pre>category</code> 即 <strong>分类</strong>。</li>
<li>允许多级目录，子级目录将作为父目录对应的分类的子项。</li>
<li>如果目录名称 在 <RouteLink to="/notes/theme/config/notes.html">主题配置 notes</RouteLink> 中声明用于 notes 文章管理，则默认不作为 分类目录。</li>
</ul>
<p>由于文件夹名称将作为分类名称，且不在主题配置中进行排序配置，对于有排序需要的场景，使用以下规则进行命名：</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> /</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\d</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77">\.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\s\S</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 即 数字 + . + 分类名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 如： 1.前端</span></span></code></pre>
</div><p>数字将作为 <strong>排序</strong> 的依据。 如果不带数字，则以默认的规则进行排序。</p>
<p><strong>example:</strong></p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">1.前端</span></span>
<ul>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">1.html</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">2.css</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">3.javascript</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">2.后端</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">运维</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div><p>主题将根据 目录结构，生成一个 分类页。</p>
<h3 id="文件命名约定" tabindex="-1"><a class="header-anchor" href="#文件命名约定"><span>文件命名约定</span></a></h3>
<ul>
<li>
<p><strong>博客文章</strong></p>
<p>对于 <strong>博客文章</strong> 的名称，主题没有任何约定，你可以任意命名。博客文章默认排序规则仅根据文件创建时间进行排序。
你还可以通过 <RouteLink to="/notes/theme/config/frontmatter/post.html#sticky">frontmatter &gt; sticky</RouteLink> 配置文章是否置顶。</p>
</li>
<li>
<p><strong>notes</strong></p>
<p>对于 <strong>notes</strong> 中的 markdown 文件名称，依然遵循 与 <a href="#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">文件夹命名约定</a> 相同的规则。
这可以为 notes 的 <RouteLink to="/notes/theme/config/notes.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F">自动生成侧边栏</RouteLink> 提供排序依据。</p>
</li>
</ul>
<h2 id="文章写作" tabindex="-1"><a class="header-anchor" href="#文章写作"><span>文章写作</span></a></h2>
<p>你可以使用 <code v-pre>markdown</code> 语法开始在 <code v-pre>docs</code> 下新建 <code v-pre>Markdown</code> 文件，编写你自己的文章了，
关于 markdown 扩展的功能支持，请查看 <RouteLink to="/notes/theme/guide/markdown/extensions.html">这个文档</RouteLink></p>
<p>由于主题默认会为文章 的 <code v-pre>frontmatter</code> 自动生成一个 <code v-pre>title</code>，因此，文章内容的主体部分的标题，起始应该从 <code v-pre>h2</code> 即
<code v-pre>## 二级标题</code> 开始。如果您禁用了 <code v-pre>autoFrontmatter.title</code>，那么应该使用 <code v-pre>h1</code> 即 <code v-pre># 一级标题</code> 开始。</p>
<h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3>
<p>通过 <code v-pre>frontmatter.tags</code> 可以为文章添加标签。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 我的文章</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 标签 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 标签 2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></div></template>


