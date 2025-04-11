<template><div><h2 id="dependency-environment" tabindex="-1"><a class="header-anchor" href="#dependency-environment"><span>Dependency Environment</span></a></h2>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v20.6.0+</a></li>
<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm 8+</a> or <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm 8+</a> or <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a></li>
</ul>
<details class="hint-container details"><summary>How to install the dependency environment?</summary>
<div class="vp-steps"><ol>
<li>
<p><strong>Please go to the <a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">Node.js Official Website</a> to download the latest stable version</strong></p>
<p>Follow the instructions to complete the installation. Generally, you only need to keep the default settings and choose Next during the installation process.</p>
</li>
<li>
<p><strong>Install PNPM</strong></p>
<p>After you have installed node.js, please open the terminal and run the following command:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span></span></code></pre>
</div><p>The theme recommends using pnpm as the project manager.</p>
</li>
<li>
<p><strong>Done</strong></p>
</li>
</ol>
</div></details>
<h2 id="command-line-installation" tabindex="-1"><a class="header-anchor" href="#command-line-installation"><span>Command Line Installation</span></a></h2>
<p>The theme provides a command line tool to help you build a basic project. You can run the following command to start the installation wizard.</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume@latest</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume@latest</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume@latest</span></span></code></pre>
</div></template></CodeTabs><p>After starting the wizard, you only need to answer a few simple questions:</p>
<div class="language-ansi has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="ansi" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">┌</span><span style="--shiki-light:#2993a3;--shiki-light-font-weight:bold;--shiki-dark:#5eaab5;--shiki-dark-font-weight:bold">  Welcome to VuePress and vuepress-theme-plume !</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Select a language to display / 选择显示语言</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Simplified Chinese</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Where do you want to initialize VuePress? </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  ./my-project</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Site name: </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  My Vuepress Site</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Site description: </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  My Vuepress Site Description</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Use multiple languages? </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  No</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Select the default language for the site </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Simplified Chinese</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Use TypeScript? </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Select the bundler tool </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Vite</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Deployment method: </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Custom</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Initialize git repository? </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  Install dependencies? </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span><span style="--shiki-light:#393a3480;--shiki-dark:#dbd7ca77">  Yes</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">◇</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">   🎉  Creation successful! </span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">│</span></span>
<span class="line"><span style="--shiki-light:#aaaaaa;--shiki-dark:#777777">└</span><span style="--shiki-light:#393a34;--shiki-dark:#dbd7caee">  🔨  Start with the following commands:</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">      cd ./my-project</span></span>
<span class="line"><span style="--shiki-light:#1e754f;--shiki-dark:#4d9375">      pnpm run docs:dev</span></span></code></pre>
<div class="collapsed-lines"></div></div><details class="hint-container details"><summary>How to use the command line tool?</summary>
<p>Taking the Windows system as an example, you can use the following methods to start the CMD command line tool:</p>
<ol>
<li>Press the <code v-pre>Win + R</code> keys to open the &quot;Run&quot; dialog.</li>
<li>Enter <code v-pre>cmd</code> and press the Enter key. (You can also enter <code v-pre>powershell</code> to open PowerShell)</li>
</ol>
<p>Note that <code v-pre>cmd</code> may not be in the directory you expect. You can use the following command to switch to the correct directory:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">D:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # This command switches to the D: drive, enter other drives according to the actual situation</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> open-source</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Enter the open-source directory under D:</span></span></code></pre>
</div><p>Now, you can create a basic project by entering <code v-pre>pnpm create vuepress-theme-plume@latest</code> here.</p>
<p>The created project will be located in the <code v-pre>D:\open-source\my-project</code> directory.</p>
</details>
<h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation"><span>Manual Installation</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">Note</p>
<ul>
<li>When using <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a>, you need to install <code v-pre>vue</code> as a peer-dependency.</li>
<li>When using <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn 2+</a>, you need to set <code v-pre>nodeLinker: 'node-modules'</code> in the <code v-pre>.yarnrc.yml</code> file.</li>
</ul>
</div>
<p>To use this theme, you need to first create a new project and install <code v-pre>vuepress@next</code> and this theme.</p>
<div class="vp-steps"><ul>
<li>
<h3 id="create-a-new-folder-and-enter-the-directory" tabindex="-1"><a class="header-anchor" href="#create-a-new-folder-and-enter-the-directory"><span>Create a new folder and enter the directory</span></a></h3>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-blog</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-blog</span></span></code></pre>
</div></li>
<li>
<h3 id="initialize-the-project" tabindex="-1"><a class="header-anchor" href="#initialize-the-project"><span>Initialize the project</span></a></h3>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span></code></pre>
</div></template></CodeTabs></li>
<li>
<h3 id="install-related-dependencies" tabindex="-1"><a class="header-anchor" href="#install-related-dependencies"><span>Install related dependencies</span></a></h3>
<p>Install <code v-pre>vuepress@next</code> and <code v-pre>vuepress-theme-plume</code> as local dependencies.</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install theme and bundler</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install theme and bundler</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install vuepress</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress@next</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Install theme and bundler</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -D</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress-theme-plume</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @vuepress/bundler-vite@next</span></span></code></pre>
</div></template></CodeTabs><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>The current version of the theme has been adapted to <code>vuepress@{{ vuepressVersion }}</code>. You should install this version of VuePress. Versions higher or lower than this may have potential compatibility issues.</p>
</div>
</li>
<li>
<h3 id="add-script-in-package-json" tabindex="-1"><a class="header-anchor" href="#add-script-in-package-json"><span>Add <code v-pre>script</code> in <code v-pre>package.json</code></span></a></h3>
<CodeTabs id="145" :data='[{"id":"package.json"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-node"/><span>package.json</span></template><template #tab0="{ value, isActive }"><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">  "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">scripts</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">docs:dev</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress dev docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">docs:build</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress build docs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></template></CodeTabs><p><code v-pre>vuepress</code> defaults to placing the documentation source code in the <code v-pre>docs</code> directory.</p>
</li>
<li>
<h3 id="add-the-default-temporary-and-cache-directories-to-the-gitignore-file" tabindex="-1"><a class="header-anchor" href="#add-the-default-temporary-and-cache-directories-to-the-gitignore-file"><span>Add the default temporary and cache directories to the <code v-pre>.gitignore</code> file</span></a></h3>
<CodeTabs id="158" :data='[{"id":".gitignore"},{"id":"sh"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-git"/><span>.gitignore</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-shell"/><span>sh</span></template><template #tab0="{ value, isActive }"><div class="language-txt" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>.temp</span></span>
<span class="line"><span>.cache</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node_modules</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.temp</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.cache</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span></span></code></pre>
</div></template></CodeTabs></li>
<li>
<h3 id="configure-the-theme-in-docs-vuepress-config-js-ts" tabindex="-1"><a class="header-anchor" href="#configure-the-theme-in-docs-vuepress-config-js-ts"><span>Configure the theme in <code v-pre>docs/.vuepress/config.{js,ts}</code></span></a></h3>
<CodeTabs id="171" :data='[{"id":"docs/.vuepress/config.ts"}]'><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-typescript"/><span>docs/.vuepress/config.ts</span></template><template #tab0="{ value, isActive }"><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/bundler-vite</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // Don't forget to set the default language</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">zh-CN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // more...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  bundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></template></CodeTabs><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Whether or not you need to use <strong>multiple languages</strong>, you should configure the correct value for the <code v-pre>lang</code> option in VuePress. The theme needs to determine the language environment text based on the <code v-pre>lang</code> option.</p>
</div>
</li>
<li>
<h3 id="create-a-new-readme-md-file-in-the-docs-directory" tabindex="-1"><a class="header-anchor" href="#create-a-new-readme-md-file-in-the-docs-directory"><span>Create a new <code v-pre>README.md</code> file in the <code v-pre>docs</code> directory</span></a></h3>
<p>Declare the home page configuration.</p>
<CodeTabs id="189" :data='[{"id":"README.md"}]'><template #title0="{ value, isActive }"><VPIcon name="flat-color-icons:info"/><span>README.md</span></template><template #tab0="{ value, isActive }"><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
</div></template></CodeTabs></li>
<li>
<h3 id="start-your-documentation-site-on-the-local-server" tabindex="-1"><a class="header-anchor" href="#start-your-documentation-site-on-the-local-server"><span>Start your documentation site on the local server</span></a></h3>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docs:dev</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docs:dev</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docs:dev</span></span></code></pre>
</div></template></CodeTabs><p>Vuepress will start a hot-reload development server at <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a>. When you modify your Markdown files, the content in the browser will also update automatically.</p>
</li>
<li>
<h3 id="done" tabindex="-1"><a class="header-anchor" href="#done"><span>Done</span></a></h3>
</li>
</ul>
</div><h2 id="update-the-theme" tabindex="-1"><a class="header-anchor" href="#update-the-theme"><span>Update the Theme</span></a></h2>
<p>You can run the following command directly in your project to check for available updates:</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dlx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vp-update</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dlx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vp-update</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vp-update</span></span></code></pre>
</div></template></CodeTabs></div></template>


<script setup>
const vuepressVersion = __VUEPRESS_VERSION__
</script>