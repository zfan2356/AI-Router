<template><div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>主题提供了开箱即用的配置，为 站点 启用 SEO 优化功能。
要启用它，需要进行以下配置：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://your_site_url</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><p>如需要自定义 SEO 优化，可以通过 <code v-pre>plugins.seo</code> 配置来实现。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      seo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // ... seo 配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><p>完整配置请查看 <a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/config.html" target="_blank" rel="noopener noreferrer">文档</a></p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>示例 Fork 自 <a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-seo</a>,
遵循 <a href="https://github.com/vuepress/ecosystem/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p>
</div>
<h2 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h2>
<p>主题会通过向网站 <code v-pre>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a>
和 <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p>
<p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。
诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p>
<h2 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑"><span>默认的 OGP 生成逻辑</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性名称</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>og:url</code></td>
<td style="text-align:center"><code v-pre>options.hostname</code> + <code v-pre>path</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:site_name</code></td>
<td style="text-align:center"><code v-pre>siteConfig.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:title</code></td>
<td style="text-align:center"><code v-pre>page.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:description</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code v-pre>autoDescription</code> 为 <code v-pre>true</code> 时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:type</code></td>
<td style="text-align:center"><code v-pre>&quot;article&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:image</code></td>
<td style="text-align:center"><code v-pre>options.hostname</code> + <code v-pre>page.frontmatter.image</code> || 页面的第一张图片|| 插件选项的 <code v-pre>fallbackImage</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:updated_time</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:locale</code></td>
<td style="text-align:center"><code v-pre>page.lang</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:locale:alternate</code></td>
<td style="text-align:center"><code v-pre>siteData.locales</code> 包含的其他语言</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:card</code></td>
<td style="text-align:center"><code v-pre>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:image:alt</code></td>
<td style="text-align:center"><code v-pre>page.title</code> (仅在找到图片时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:author</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.author</code> || <code v-pre>options.author</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:tag</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.tags</code> || <code v-pre>page.frontmatter.tag</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:published_time</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.date</code> || <code v-pre>page.git.createdTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:modified_time</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
</tbody>
</table>
<h2 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑"><span>默认的 JSON-LD 生成逻辑</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性名</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>@context</code></td>
<td style="text-align:center"><code v-pre>&quot;https://schema.org&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@type</code></td>
<td style="text-align:center"><code v-pre>&quot;NewsArticle&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>headline</code></td>
<td style="text-align:center"><code v-pre>page.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>image</code></td>
<td style="text-align:center">页面中的图片|| <code v-pre>options.hostname</code> + <code v-pre>page.frontmatter.image</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>datePublished</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.date</code> || <code v-pre>page.git.createdTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>dateModified</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>author</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.author</code> || <code v-pre>options.author</code></td>
</tr>
</tbody>
</table>
<h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍"><span>SEO 介绍</span></a></h2>
<p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，
以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最
前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。
所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做
一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。
搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li>
<p><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> (<strong>O</strong>pen <strong>G</strong>raph <strong>Pr</strong>otocal)</p>
<p>本插件完美支持该协议，会自动生成符合该协议的 <code v-pre>&lt;meta&gt;</code> 标签。</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a></p>
<p>本插件会为文章类页面生成 NewsArticle 类标签。</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a></p>
<p>RDFa 主要标记 HTML 结构。</p>
</li>
<li>
<p><a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.Org</a></p>
<p>结构标记的 Schema 定义站点</p>
</li>
</ul>
</div></template>


