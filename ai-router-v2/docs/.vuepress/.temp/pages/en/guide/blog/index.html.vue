<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>By default, the theme will treat all md files in the <RouteLink to="/en/notes/theme/guide/quick-start/project-structure.html#documentation-source-directory">documentation source directory</RouteLink> as blog posts, except for specific directories (e.g., the <code v-pre>notes</code> directory, which is used for notes).</p>
<p>The theme will also categorize blog posts based on the directory structure of the md files, using the <strong>directory name</strong> as the <strong>category</strong> of the blog post.</p>
<p>The theme will automatically generate a blog post list page with the link address <code v-pre>/blog/</code>, displaying all blog posts and relevant information about the blogger.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>The blog feature is enabled by default in the theme, and you usually do not need to perform additional configurations.</p>
<CodeTabs id="19" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Disable the blog feature</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // blog: false,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    blog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       * Configure included files via glob string,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       * by default, it reads all `.md` files in the source directory, but excludes directories used for notes in the `notes` configuration.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      include</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">**/*.md</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // If you want to only read articles from a specific directory in the source directory, such as the `blog` directory, you can configure it as:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // include: ['blog/**/*.md'],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       * Configure excluded files via glob string, relative to the source directory</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      exclude</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.vuepress/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">**/README.md</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // Disable pagination</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // pagination: false,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // Number of articles displayed per page</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      pagination</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">15</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h2 id="blogger-information" tabindex="-1"><a class="header-anchor" href="#blogger-information"><span>Blogger Information</span></a></h2>
<p>The theme supports displaying basic information about the blogger.</p>
<div
  style="width: 310px;margin: 0 auto;padding: 20px 20px 1px;text-align:center;border-radius: 4px;
  background-color: var(--vp-c-bg-soft);transition: background-color var(--vp-t-color);"
>
  <VPBlogProfile />
</div>
<h3 id="configuration-1" tabindex="-1"><a class="header-anchor" href="#configuration-1"><span>Configuration</span></a></h3>
<p>You can set the blogger's avatar and other related information through the <code v-pre>profile</code> attribute.</p>
<CodeTabs id="37" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your Name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Description text, motto/signature</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/blogger.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      location</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your Location</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      organization</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your Organization</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      circle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Whether the avatar is circular</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Whether the personal information is on the left or right, 'left' | 'right'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Social links</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    social</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      { </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">github</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://github.com/vuepress-theme-plume  </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // ... more</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h2 id="article-metadata" tabindex="-1"><a class="header-anchor" href="#article-metadata"><span>Article Metadata</span></a></h2>
<p>You can configure the display of blog post metadata, such as title, author, date, tags, etc. This data is configured through <code v-pre>frontmatter</code>.</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Article Title</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2024/01/01 00:00:00</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tag2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p>Among them, <code v-pre>title</code> / <code v-pre>createTime</code> will be automatically filled in by the theme when creating a new md file, and you can modify them at will.</p>
<p>The following are the available <code v-pre>frontmatter</code> properties in blog posts.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td><code v-pre>string</code></td>
<td>Automatically filled in with the filename</td>
<td>Article title</td>
</tr>
<tr>
<td>createTime</td>
<td><code v-pre>string</code></td>
<td>Current time</td>
<td>Article creation time</td>
</tr>
<tr>
<td>tags</td>
<td><code v-pre>string[]</code></td>
<td><code v-pre>[]</code></td>
<td>Article tags</td>
</tr>
<tr>
<td>sticky</td>
<td><code v-pre>boolean | number</code></td>
<td>false</td>
<td>Whether to pin the article, if it's a number, the larger the number, the higher the pinning priority</td>
</tr>
<tr>
<td>draft</td>
<td><code v-pre>boolean</code></td>
<td>false</td>
<td>Whether it's a draft, draft articles will not be displayed</td>
</tr>
<tr>
<td>cover</td>
<td><code v-pre>string</code></td>
<td><code v-pre>''</code></td>
<td>Article cover image</td>
</tr>
<tr>
<td>coverStyle</td>
<td><code v-pre>BlogPostCoverStyle</code></td>
<td><code v-pre>null</code></td>
<td>Article cover image style</td>
</tr>
<tr>
<td>excerpt</td>
<td><code v-pre>boolean | string</code></td>
<td>''</td>
<td>Article excerpt, by default generated via <code v-pre>&lt;!-- more --&gt;</code> comment, passing a string indicates custom content, and it will no longer be extracted from the main text</td>
</tr>
</tbody>
</table>
<p>In addition to the above fields, you can also use the fields in the <RouteLink to="/en/notes/theme/config/frontmatter/basic.html">general frontmatter configuration</RouteLink> to flexibly control the behavior of the current page.</p>
<h2 id="article-excerpt" tabindex="-1"><a class="header-anchor" href="#article-excerpt"><span>Article Excerpt</span></a></h2>
<p>If you want to add an excerpt to an article, you can use the <code v-pre>&lt;!-- more --&gt;</code> comment to mark it. Any content before this comment will be considered as the excerpt.</p>
<p><strong>Example:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Title</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">This content will be used as the excerpt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- more --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">This content will not be used as the excerpt</span></span></code></pre>
</div><p>You can also use <code v-pre>frontmatter.excerpt</code> to control whether the article displays an excerpt and to customize the excerpt content.</p>
<ul>
<li><code v-pre>frontmatter.excerpt</code> defaults to <code v-pre>false</code>, indicating that the excerpt is not displayed, and the <code v-pre>&lt;!-- more --&gt;</code> comment will be ignored.</li>
<li>When <code v-pre>frontmatter.excerpt</code> is of type <code v-pre>string</code>, it indicates custom excerpt content, and the <code v-pre>&lt;!-- more --&gt;</code> comment will be ignored.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Title</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">excerpt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Custom excerpt content</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p>You can use different methods to control the excerpt of the article as needed.</p>
<div class="hint-container tip">
<p class="hint-container-title">The theme more strongly recommends using the <code v-pre>&lt;!-- more --&gt;</code> comment to add excerpts</p>
</div>
<h2 id="article-cover-image" tabindex="-1"><a class="header-anchor" href="#article-cover-image"><span>Article Cover Image</span></a></h2>
<p>On the blog post list page, the theme supports adding cover images to articles and supports different layouts and flexible size configurations.</p>
<p>To add a cover image to a blog post, you can configure <code v-pre>cover</code> in <code v-pre>frontmatter</code>:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Title</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /images/cover.jpg</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p><strong>Cover images</strong> only support absolute paths or remote paths. When using an absolute path, the image is loaded from the <code v-pre>.vuepress/public</code> directory.</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">.vuepress</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-public"></VPIcon><span class="name">public</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-images"></VPIcon><span class="name">images</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-image"></VPIcon><span class="name">cover.jpg</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">config.ts</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">article.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</div><p>The default effect is as follows:</p>
<div style="background-color: var(--vp-c-bg-alt); padding: 20px 24px;transition: var(--vp-t-color)">
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ' }"
  :index="1"
/>
</div>
<p>You can also adjust the layout position and aspect ratio of the cover image:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Article Title</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">coverStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> left</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 300</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p>The effect is as follows:</p>
<div style="background-color: var(--vp-c-bg-alt); padding: 20px 24px;transition: var(--vp-t-color)">
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ', coverStyle: { layout: 'left', ratio: '16:9', width: 300 } }"
  :index="1"
/>
</div>
<p>When an article has no excerpt, it may look a bit empty. To address this, you can use <code v-pre>compact: true</code> to make the cover image fit the container edges, making the overall layout more compact:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Article Title</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">coverStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> left</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 300</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  compact</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p>The effect is as follows:</p>
<div style="background-color: var(--vp-c-bg-alt); padding: 20px 24px;transition: var(--vp-t-color)">
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ',
  coverStyle: { layout: 'left', ratio: '16:9', width: 300, compact: true } }"
  :index="1"
/>
</div>
<div class="hint-container warning">
<p class="hint-container-title">compact: true only takes effect when the article has no excerpt</p>
</div>
<p>You can also set the cover image above the title, which becomes a large image style:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Article Title</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /images/cover.jpg</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">coverStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> top</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 16:9</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 300</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><p>The effect is as follows:</p>
<div style="background-color: var(--vp-c-bg-alt); padding: 20px 24px;transition: var(--vp-t-color)">
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ',
  coverStyle: { layout: 'top', ratio: '16:9', width: 300 } }"
  :index="1"
/>
</div>
<h3 id="preset-configuration" tabindex="-1"><a class="header-anchor" href="#preset-configuration"><span>Preset Configuration</span></a></h3>
<p>Although the theme supports using different configurations for each article's cover image, for the sake of overall layout style and to simplify configuration, the theme also supports preset configurations for cover images:</p>
<CodeTabs id="325" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    blog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // Configure the layout position of the cover image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // postCover: 'left',</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      postCover</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        ratio</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">16:9</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">300</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        compact</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> BlogPostCoverLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">odd-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">odd-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">top</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> BlogPostCoverStyle</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * The position of the blog post cover image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  layout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">BlogPostCoverLayout</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * The aspect ratio of the blog post cover image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">4:3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  ratio</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">${</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">${</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * The width of the cover image, only effective when layout is 'left' or 'right'</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> 240</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * Whether to use compact mode, in compact mode, the cover image fits the container edges</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  compact</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may have noticed that in the preset configuration's <code v-pre>layout</code>, there are also two configurations supported: <code v-pre>odd-left</code> and <code v-pre>odd-right</code>.</p>
<ul>
<li><code v-pre>odd-left</code>: Indicates that odd items are on the left and even items are on the right</li>
<li><code v-pre>odd-right</code>: Indicates that odd items are on the right and even items are on the left</li>
</ul>
<p>For example, the effect of <code v-pre>odd-left</code> is as follows:</p>
<div style="background-color: var(--vp-c-bg-alt); padding: 20px 24px;display: flex;flex-direction: column;gap: 24px;transition: var(--vp-t-color)">
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ',
  coverStyle: { layout: 'odd-left', ratio: '16:9', width: 300, compact: true } }"
  :index="0"
/>
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ',
  coverStyle: { layout: 'odd-left', ratio: '16:9', width: 300,compact: true } }"
  :index="1"
/>
<VPPostItem
  :post="{ path: '/article/ecxnxxd0/', title: 'Article Title',
  categoryList: [{id:'65f30c',sort:4,name:'Tutorial'}], createTime: '2024/09/18 09:19:36',
  lang:'zh-CN', excerpt:'', cover: 'https://api.pengzhanbo.cn/wallpaper/bing  ',
  coverStyle: { layout: 'odd-left', ratio: '16:9', width: 300, compact: true } }"
  :index="2"
/>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Note</p>
<p>When on narrow screens of mobile devices, for visual effect considerations, the <code v-pre>layout</code> configuration is forcibly reset to <code v-pre>top</code>.</p>
</div>
<h2 id="tag-page-category-page-and-archive-page" tabindex="-1"><a class="header-anchor" href="#tag-page-category-page-and-archive-page"><span>Tag Page, Category Page, and Archive Page</span></a></h2>
<p>In addition to automatically generating the <strong>blog post list page</strong>, the theme will also automatically generate <strong>tag pages</strong>, <strong>category pages</strong>, and <strong>archive pages</strong>.</p>
<p>The tag page can filter and display blog posts based on tags, with the default address being <code v-pre>/blog/tags/</code></p>
<p>The category page can display blog posts based on the original directory structure, with the default address being <code v-pre>/blog/categories/</code></p>
<p>The archive page archives articles based on their creation time, with the default address being <code v-pre>/blog/archives/</code></p>
<h2 id="internationalization-support" tabindex="-1"><a class="header-anchor" href="#internationalization-support"><span>Internationalization Support</span></a></h2>
<p>If internationalization is enabled, the blog list page will display the blog list of the corresponding language directory based on different languages. That is, the article list of each language is kept independent.</p>
<p>Specifically, if one of your blog posts has different language versions, ensure that the same directory file structure and filename exist under different language directories. When switching languages, the theme can correctly switch to the corresponding language article.</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">en</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">my-article.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">fr</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">my-article.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">my-article.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div><h2 id="setting-the-blog-as-the-homepage" tabindex="-1"><a class="header-anchor" href="#setting-the-blog-as-the-homepage"><span>Setting the Blog as the Homepage</span></a></h2>
<p>By default, the theme separates the <strong>homepage</strong> and the <strong>blog page</strong>.</p>
<p>However, for users who want to build only a blog site, it might be a better choice to directly set the blog page as the <strong>homepage</strong>.</p>
<p>The theme provides two ways to set the blog as the homepage to meet different scenario needs:</p>
<ul>
<li><strong>Method One: Configure the <code v-pre>pageLayout</code> attribute of the homepage to <code v-pre>blog</code></strong></li>
</ul>
<CodeTabs id="438" :data='[{"id":"docs/README.md"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-markdown"/><span>docs/README.md</span></template><template #tab0="{ value, isActive }"><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pageLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> blog</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></template></CodeTabs><p>This configuration will directly apply the blog layout to the page, displaying the blog post list.</p>
<p>This is the simplest way to modify the homepage to a blog page, but the downside is the lack of flexibility.</p>
<ul>
<li><strong>Method Two: Configure the <code v-pre>pageLayout</code> attribute of the homepage to <code v-pre>home</code>, and add a homepage area type of <code v-pre>type: blog</code></strong></li>
</ul>
<CodeTabs id="456" :data='[{"id":"docs/README.md"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-markdown"/><span>docs/README.md</span></template><template #tab0="{ value, isActive }"><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pageLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> home</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> blog</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></template></CodeTabs><p>With this method, you can not only add a blog post list to the homepage but also flexibly add different content to other areas of the page.</p>
<p>For example, configure the first screen as <code v-pre>banner</code>, followed by the blog post list:</p>
<CodeTabs id="467" :data='[{"id":"docs/README.md"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-markdown"/><span>docs/README.md</span></template><template #tab0="{ value, isActive }"><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pageLayout</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> home</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">config</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> banner</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> blog</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></template></CodeTabs><p>For more customization configurations, please refer to <RouteLink to="/en/notes/theme/guide/custom/custom-home.html">Customize the Homepage</RouteLink>.</p>
<p>After using the above two methods to configure the homepage as the blog page, since the theme still generates the blog post list page with the address <code v-pre>/blog/</code> by default, this results in duplicate functional pages. Therefore, you need to <RouteLink to="/en/notes/theme/config/basic.html#blog">Theme Configuration &gt; Blog Configuration</RouteLink> to <strong>disable the automatic generation of the blog post list page</strong>:</p>
<p>(You can also modify the link addresses of the category page/tag page/archive page)</p>
<CodeTabs id="481" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    blog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      postList</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Prevent the generation of the blog post list page</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // tagsLink: '/blog/tags/',</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // categoriesLink: '/blog/categories/',</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // archiveLink: '/blog/archives/',</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs></div></template>


<script setup lang="ts">
import VPBlogProfile from 'vuepress-theme-plume/components/Blog/VPBlogProfile.vue'
import VPPostItem from 'vuepress-theme-plume/components/Blog/VPPostItem.vue'
</script>