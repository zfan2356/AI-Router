<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>In Markdown, you can use the <code v-pre>file-tree</code> container to display a directory structure with file icons and collapsible subdirectories.</p>
<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2>
<p>In the <code v-pre>::: file-tree</code> container, use the built-in <strong>Markdown unordered list syntax</strong> to specify the organization of files and directories.
Use nested list items to create subdirectories; if you want a directory to not display specific content, simply add a slash <code v-pre>/</code> at the end of the list item.</p>
<p>The following syntax can be used to customize the appearance of the file tree:</p>
<ul>
<li>Highlight files or directories by bolding their names, e.g., <code v-pre>**README.md**</code></li>
<li>Add annotations to files or directories by appending additional text after the name</li>
<li>Use <code v-pre>...</code> or <code v-pre>…</code> as names to add placeholder files and directories.</li>
<li>Adding <code v-pre>icon=&quot;simple&quot;</code> or <code v-pre>icon=&quot;colored&quot;</code> after <code v-pre>:::file-tree</code> can switch to simple icons or colored icons, with colored icons being the default.</li>
</ul>
<p><strong>Input:</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: file-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> docs</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> .vuepress</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> page1.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> theme  A </span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold">theme</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> directory</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> client</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> components</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">      -</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold">Navbar.vue</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">**</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> composables</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">      -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> useNavbar.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> styles</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">      -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> navbar.css</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> node/</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> package.json</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> pnpm-lock.yaml</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> …</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-docs"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">.vuepress</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">config.ts</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-markdown"></VPIcon><span class="name">page1.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="flat-color-icons:info"></VPIcon><span class="name">README.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-theme"></VPIcon><span class="name">theme</span><span class="comment"> A <strong>theme</strong> directory</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-client"></VPIcon><span class="name">client</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-component"></VPIcon><span class="name">components</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-vue"></VPIcon><span class="name focus"><strong>Navbar.vue</strong></span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-hook"></VPIcon><span class="name">composables</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">useNavbar.ts</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:folder-type-style"></VPIcon><span class="name">styles</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-css"></VPIcon><span class="name">navbar.css</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-typescript"></VPIcon><span class="name">config.ts</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="folder" :expanded="false" :empty="true"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">node</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-node"></VPIcon><span class="name">package.json</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-light-pnpm"></VPIcon><span class="name">pnpm-lock.yaml</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:file-type-git"></VPIcon><span class="name">.gitignore</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="flat-color-icons:info"></VPIcon><span class="name">README.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><span class="name">…</span></span></FileTreeItem>
</ul>
</div><h2 id="using-simple-icons" tabindex="-1"><a class="header-anchor" href="#using-simple-icons"><span>Using Simple Icons</span></a></h2>
<p><strong>Input:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: file-tree icon="simple"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> docs</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> .vuepress</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">    -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> config.ts</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> page1.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">  -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> README.md</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> package.json</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="vp-file-tree"><ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">docs</span></span>
<ul>
<FileTreeItem type="folder" :expanded="true" :empty="false"><span class="tree-node folder"><VPIcon name="vscode-icons:default-folder"></VPIcon><span class="name">.vuepress</span></span>
<ul>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">config.ts</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">page1.md</span></span></FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">README.md</span></span></FileTreeItem>
</ul>
</FileTreeItem>
<FileTreeItem type="file" :expanded="false" :empty="true"><span class="tree-node file"><VPIcon name="vscode-icons:default-file"></VPIcon><span class="name">package.json</span></span></FileTreeItem>
</ul>
</div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>You can configure the default icon type for the file tree in the <code v-pre>plugins.mdPower.fileTree</code> option:</p>
<CodeTabs id="216" :data='[{"id":".vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      fileTree</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">simple</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 'simple' | 'colored'</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template></CodeTabs><div class="hint-container tip">
<p class="hint-container-title">Worried that colored icons will affect the build package size?</p>
<p>You don't need to worry. The colored icons for the file tree are also parsed from <code v-pre>iconify</code>. We recommend that you install the <code v-pre>@iconify/json</code> project locally.
The theme will automatically parse the icon data from <code v-pre>@iconify/json</code> into local icon resources. Even if you use them multiple times on different pages, including the navbar, sidebar, icon components, etc., the same icon will only exist as one resource!</p>
<p>Each colored icon is approximately between <code v-pre>1kb ~ 2kb</code> in size. Even if your file tree uses 100+ different icons, the impact on the final build package size will not be significant.</p>
</div>
</div></template>


