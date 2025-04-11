<template><div><p>This guide will illustrate the file structure of a project created with VuePress and Plume, as well as how to utilize them within your project.</p>
<p>When you <RouteLink to="/en/notes/theme/guide/quick-start/usage.html#command-line-installation">create a project using the command-line tool</RouteLink>, its file structure looks like this:</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-git"></VPIcon><span class="name">.git</span></span></FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name focus"><strong>docs</strong></span><span class="comment"> # Documentation source directory</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">.vuepress</span><span class="comment"> # VuePress configuration folder</span></span>
<ul>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-public"></VPIcon><span class="name">public</span><span class="comment"># Static resources directory</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">client.ts</span><span class="comment"># Client-side configuration (optional)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">config.ts</span><span class="comment"># VuePress configuration</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">navbar.ts</span><span class="comment"># Navigation bar configuration (optional)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">notes.ts</span><span class="comment"># Notes configuration (optional)</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">plume.config.ts</span><span class="comment"># Theme configuration file  (optional)</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">notes</span><span class="comment"># Series documentation, knowledge notes</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">demo</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">foo.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">bar.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">preview</span><span class="comment"># One of the blog categories</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">markdown.md</span><span class="comment"># Blog post under the category</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">article.md</span><span class="comment"># Blog post</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="flat-color-icons:info"></VPIcon><span class="name">README.md</span><span class="comment"># Home page</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-node"></VPIcon><span class="name">package.json</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-light-pnpm"></VPIcon><span class="name">pnpm-lock.yaml</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-git"></VPIcon><span class="name">.gitignore</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="flat-color-icons:info"></VPIcon><span class="name">README.md</span></span></FileTreeItem>
</ul>
</div><div class="hint-container tip">
<p class="hint-container-title">If you created the project manually, you can also manage your project by referring to this file structure.</p>
</div>
<h2 id="documentation-source-directory" tabindex="-1"><a class="header-anchor" href="#documentation-source-directory"><span>Documentation Source Directory</span></a></h2>
<p>The <strong>documentation source directory</strong> refers to the directory where all your site's markdown files are located. This directory is generally specified when you start VuePress using the command-line tool:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D" class="highlighted-word">docs</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">#            Here, the documentation source directory is declared as </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD" class="highlighted-word">docs</span></span></code></pre>
</div><div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-node"/>package.json</span></div><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">scripts</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">docs:dev</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress dev docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                        ^^^^</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">docs:build</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress build docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                            ^^^^</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></div><p>Generally, VuePress only takes over this directory, and other files outside the source directory will be ignored.</p>
<h2 id="vuepress-directory" tabindex="-1"><a class="header-anchor" href="#vuepress-directory"><span><code v-pre>.vuepress</code> Directory</span></a></h2>
<p>The <code v-pre>.vuepress/</code> directory is the VuePress configuration folder, where you can also create your own components, customize theme styles, etc.</p>
<p><strong>In this directory:</strong></p>
<h3 id="client-ts" tabindex="-1"><a class="header-anchor" href="#client-ts"><span><code v-pre>client.ts</code></span></a></h3>
<p>Client-side configuration file, where you can extend VuePress's functionality, such as declaring new global components, etc.</p>
<CodeTabs id="158" :data='[{"id":".vuepress/client.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/client.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  enhance</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({ </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">router</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">siteData</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // app: vue app instance</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // router: vue router instance</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // siteData: vuepress site configuration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Register global components</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    app</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">component</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">MyComponent</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">MyComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666">() {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // Equivalent to the setup method on the root component of vue</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h3 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts"><span><code v-pre>config.ts</code></span></a></h3>
<p>The VuePress configuration file, where you need to make some necessary configurations, such as theme, plugins, build tools, etc.</p>
<CodeTabs id="169" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/bundler-vite</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">en-US</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // more...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  bundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h3 id="plume-config-ts" tabindex="-1"><a class="header-anchor" href="#plume-config-ts"><span><code v-pre>plume.config.ts</code></span></a></h3>
<p>Theme configuration file. Since modifying <code v-pre>.vuepress/config.ts</code> requires restarting the VuePress service each time, which is not necessary in most cases.</p>
<p>The theme moves the configurations that do not require restarting the service to here. When you modify the configuration here, the theme will be updated via hot reload.</p>
<CodeTabs id="183" :data='[{"id":".vuepress/plume.config.ts"},{"id":".vuepress/navbar.ts"},{"id":".vuepress/notes.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/plume.config.ts</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/navbar.ts</span></template><template #title2="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/notes.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> navbar</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./navbar</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> notes</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./notes</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineThemeConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  logo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/logo.svg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  profile</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Theme Plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  navbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  notes</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ... more</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineNavbarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineNavbarConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">([</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">])</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineNotesConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineNotesConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template></CodeTabs><h2 id="notes-directory" tabindex="-1"><a class="header-anchor" href="#notes-directory"><span>notes Directory</span></a></h2>
<p>The <strong>notes</strong> directory is used to store your knowledge notes, series documentation, etc.</p>
<h3 id="how-to-understand-knowledge-notes-series-documentation" tabindex="-1"><a class="header-anchor" href="#how-to-understand-knowledge-notes-series-documentation"><span>How to Understand Knowledge Notes/Series Documentation?</span></a></h3>
<p>A common scenario is that you are learning a skill and plan to record your learning experiences, key points, difficulties, etc., in your notes. In this case, you might write multiple documents for recording.</p>
<p>Alternatively, you are preparing for an interview and want to prepare interview questions and answers in advance. You might then have each question and answer as a separate document.</p>
<p>You would easily want to manage them all in a separate directory and, at the same time, be able to quickly navigate between different documents in the skill notes or between different interview questions in the generated documentation site.</p>
<p>This is a requirement that blog-type documentation cannot meet, and it is a pain point that <code v-pre>notes</code> aims to solve.</p>
<p>The above content can easily result in the following directory structure:</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">notes</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">interview</span><span class="comment"> # Interview questions</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Self-Introduction.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">My-Skills.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Projects-Worked.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">typescript</span><span class="comment"># Learning notes</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Basics</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Basic-Types.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Generics.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Advanced</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Functions.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div><p>This allows for easy management of multiple series of documents, each with its own directory structure.</p>
<h2 id="other-directories-files" tabindex="-1"><a class="header-anchor" href="#other-directories-files"><span>Other Directories/Files</span></a></h2>
<p>In the <mark>documentation source directory</mark>, other directories and files, except for <code v-pre>README.md</code> which is recognized as the <code v-pre>home page</code>, will be identified as blog posts. The directory structure will be recognized as blog categories.</p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Life</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Travel-Diary.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Study</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Exam-Notes.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">Work</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Tomato-Time.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">Miscellaneous.md</span><span class="comment"> # Articles without categories</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="flat-color-icons:info"></VPIcon><span class="name">README.md</span><span class="comment"> # Home page</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</FileTreeItem>
</ul>
</div></div></template>


