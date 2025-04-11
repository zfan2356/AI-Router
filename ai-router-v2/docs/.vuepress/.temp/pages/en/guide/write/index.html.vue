<template><div><p>VuePress supports the complete <RouteLink to="/en/notes/theme/guide/markdown/basic.html">Markdown syntax</RouteLink>,
and uses <a href="https://dev.to/paulasantamaria/introduction-to-yaml-125f" target="_blank" rel="noopener noreferrer">YAML</a>
to define frontmatter page metadata, such as title and creation time.</p>
<p>The theme also provides <RouteLink to="/en/notes/theme/guide/markdown/extensions.html">extensions</RouteLink> for Markdown syntax. You can also write HTML directly in
Markdown, or use Vue components.</p>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<p>You can customize each page in VuePress by setting values in the frontmatter.
Frontmatter is the part at the top of your file between <code v-pre>---</code>.</p>
<CodeTabs id="12" :data='[{"id":"post.md"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-markdown"/><span>post.md</span></template><template #tab0="{ value, isActive }"><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Article Title</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2024/09/08 22:53:34</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /article/9eh4d6ao/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">The page content is after the second </span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">---</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span></span></code></pre>
</div></template></CodeTabs><details class="hint-container details"><summary>What is frontmatter?</summary>
<p>Frontmatter is a <a href="https://dev.to/paulasantamaria/introduction-to-yaml-125f" target="_blank" rel="noopener noreferrer">YAML</a> formatted configuration content, placed at the top of the markdown file, separated by <code v-pre>---</code>.</p>
<p>You can read <RouteLink to="/en/4.Tutorials/frontmatter.html">this article</RouteLink> to learn how to write frontmatter correctly.</p>
</details>
<h2 id="auto-generated-frontmatter" tabindex="-1"><a class="header-anchor" href="#auto-generated-frontmatter"><span>Auto-Generated Frontmatter</span></a></h2>
<p>By default, the theme will help generate some <code v-pre>frontmatter</code> configurations for markdown files in the source directory after starting the development service.
These configurations include: <strong>title</strong>, <strong>creation time</strong>, and <strong>permalink</strong>.</p>
<p>On one hand, this can reduce the repetitive work of content creators; on the other hand, these configurations also provide prerequisite support for other features of the theme.</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Title</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2024/09/08 22:53:34</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /article/9eh4d6ao/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>Title</span></a></h3>
<p>The theme defaults to using the file name as the article title. When parsing the file name, the file name named according to the <a href="#file-naming-convention">file naming convention</a> such as <code v-pre>1.My Article.md</code>, the parts <code v-pre>1.</code> and <code v-pre>.md</code> will be trimmed, and the final article title will be <code v-pre>My Article</code>.</p>
<h3 id="creation-time" tabindex="-1"><a class="header-anchor" href="#creation-time"><span>Creation Time</span></a></h3>
<p>The theme defaults to using the file creation time as the article creation time, and formats it as <code v-pre>yyyy/MM/dd HH:mm:ss</code>.</p>
<h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>Permalink</span></a></h3>
<p><strong>Permalink</strong> refers to the access address after the article is published. Once this address is generated, it will not change unless you manually modify it, even if the file path or file name changes.</p>
<p>Preparing <strong>permalink</strong> in advance is quite valuable. On one hand, it can help improve the SEO of the site and avoid frequent changes to the included addresses; on the other hand, the theme uses a set of specifications to generate <strong>permalink</strong>, which makes the link style of the entire site consistent.</p>
<ul>
<li>
<p><strong>Blog Articles</strong></p>
<p>For blog articles, the default prefix for permalink is <code v-pre>/article/</code>, and then a random string of length <code v-pre>8</code> is generated using <a href="https://github.com/ai/nanoid" target="_blank" rel="noopener noreferrer"><code v-pre>nanoid</code></a> for concatenation as the article's permalink, such as <code v-pre>/article/9eh4d6ao/</code>.</p>
<p>The link prefix can also be replaced by modifying <RouteLink to="/en/notes/theme/config/basic.html#article">Theme Configuration &gt; article</RouteLink>.</p>
</li>
<li>
<p><strong>Notes</strong></p>
<p>For notes, the theme uses a more flexible custom solution. You can declare different link prefixes for notes in <RouteLink to="/en/notes/theme/config/notes.html#configuration">notes &gt; note.link</RouteLink>, and then use <a href="https://github.com/ai/nanoid" target="_blank" rel="noopener noreferrer"><code v-pre>nanoid</code></a> to generate a random string of length <code v-pre>8</code> for concatenation as the permalink for note articles.</p>
</li>
</ul>
<h3 id="disabling-auto-generation" tabindex="-1"><a class="header-anchor" href="#disabling-auto-generation"><span>Disabling Auto-Generation</span></a></h3>
<p>You may not want the theme to do extra auto-generation and prefer to have full control. This is completely fine, and the theme supports controlling the behavior of auto-generating frontmatter through configuration.
You can easily achieve this through <RouteLink to="/en/notes/theme/config/basic.html#autofrontmatter">Theme Configuration &gt; autoFrontmatter</RouteLink>.</p>
<CodeTabs id="83" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Completely disable all auto-generation</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // autoFrontmatter: false,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Control partial auto-generation</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    autoFrontmatter</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Whether to generate permalink</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Whether to generate creation time</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// Whether to generate title</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h2 id="conventions" tabindex="-1"><a class="header-anchor" href="#conventions"><span>Conventions</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">Note</p>
<p>The following content is based on the file structure in <RouteLink to="/en/notes/theme/guide/quick-start/project-structure.html">Project Structure</RouteLink>.</p>
</div>
<p>Writing articles with this theme is very easy. You can create <code v-pre>Markdown</code> files with any name you like in the <code v-pre>docs</code> directory according to your personal naming preferences.</p>
<h3 id="folder-naming-convention" tabindex="-1"><a class="header-anchor" href="#folder-naming-convention"><span>Folder Naming Convention</span></a></h3>
<p>For folder naming in <code v-pre>docs</code>, the theme has a simple set of conventions.</p>
<ul>
<li>The folder name will serve as the <code v-pre>category</code>, i.e., <strong>category</strong>.</li>
<li>Multi-level directories are allowed, and subdirectories will be sub-items of the parent directory's category.</li>
<li>If the directory name is declared in <RouteLink to="/en/notes/theme/config/notes.html">Theme Configuration notes</RouteLink> for notes article management, it will not be used as a category directory by default.</li>
</ul>
<p>Since folder names will serve as category names and are not sorted in theme configuration, for scenarios where sorting is needed, use the following rule for naming:</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> /</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\d</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77">\.</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB">\s\S</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// That is, number + . + category name</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// For example: 1.Frontend</span></span></code></pre>
</div><p>The number will serve as the basis for <strong>sorting</strong>. If there is no number, the default sorting rule will be applied.</p>
<p><strong>Example:</strong></p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">1.Frontend</span></span>
<ul>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">1.HTML</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">2.CSS</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">3.JavaScript</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">2.Backend</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Operations-And-Maintenance</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div><p>The theme will generate a category page based on the directory structure.</p>
<h3 id="file-naming-convention" tabindex="-1"><a class="header-anchor" href="#file-naming-convention"><span>File Naming Convention</span></a></h3>
<ul>
<li>
<p><strong>Blog Articles</strong></p>
<p>For the names of <strong>blog articles</strong>, the theme has no specific conventions, and you can name them arbitrarily. The default sorting rule for blog articles is based solely on file creation time.
You can also use <RouteLink to="/en/notes/theme/config/frontmatter/article.html#sticky">frontmatter &gt; sticky</RouteLink> to configure whether the article is stickied.</p>
</li>
<li>
<p><strong>Notes</strong></p>
<p>For the names of markdown files in <strong>notes</strong>, the same rules as <a href="#folder-naming-convention">Folder Naming Convention</a> still apply.
This can provide a basis for sorting the <RouteLink to="/en/notes/theme/config/notes.html#auto-generated-sidebar">auto-generated sidebar</RouteLink> for notes.</p>
</li>
</ul>
<h2 id="article-writing" tabindex="-1"><a class="header-anchor" href="#article-writing"><span>Article Writing</span></a></h2>
<p>You can start writing your own articles by creating Markdown files in <code v-pre>docs</code> using <code v-pre>markdown</code> syntax.
For the supported features of markdown extensions, please refer to <RouteLink to="/en/notes/theme/guide/markdown/extensions.html">this document</RouteLink>.</p>
<p>Since the theme defaults to auto-generating a <code v-pre>title</code> for the article's <code v-pre>frontmatter</code>, the main part of the article content should start with <code v-pre>h2</code>, i.e., <code v-pre>## Secondary Heading</code>. If you have disabled <code v-pre>autoFrontmatter.title</code>, you should start with <code v-pre>h1</code>, i.e., <code v-pre># Primary Heading</code>.</p>
<h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags"><span>Tags</span></a></h3>
<p>You can add tags to an article through <code v-pre>frontmatter.tags</code>.</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> My Article</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Tag 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Tag 2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></div></template>


