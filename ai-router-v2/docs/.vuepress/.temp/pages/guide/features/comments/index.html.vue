<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>文章评论由 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a> 提供支持。</p>
<p>主题已内置插件，你无需重新安装即可使用。</p>
<p>在本主题中，通过以下字段进行配置：</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 服务提供商</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      provider</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">''</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// "Artalk" | "Giscus" | "Twikoo" | "Waline"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 是否默认启用评论</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 其它配置，根据服务提供商进行配置</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="服务提供商" tabindex="-1"><a class="header-anchor" href="#服务提供商"><span>服务提供商</span></a></h3>
<p><a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a> 支持
<code v-pre>&quot;Artalk&quot; | &quot;Giscus&quot; | &quot;Twikoo&quot; | &quot;Waline&quot;</code> 等多种不同的评论服务提供商。</p>
<p>你可以根据自己的需求进行配置。</p>
<ul>
<li><code v-pre>Giscus</code> 是一个基于 GitHub Discussion 的评论系统，启用简便。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/giscus/" target="_blank" rel="noopener noreferrer">查看文档</a></li>
<li><code v-pre>Waline</code> 是一个 需要后端的评论系统，安全性较高。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/waline/" target="_blank" rel="noopener noreferrer">查看文档</a></li>
<li><code v-pre>Twikoo</code> 一个简洁、安全、免费的静态网站评论系统，基于 腾讯云开发。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/twikoo/" target="_blank" rel="noopener noreferrer">查看文档</a></li>
<li><code v-pre>Artalk</code> 是一款简洁的自托管评论系统，你可以在服务器上轻松部署并置入前端页面中。<a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/artalk/" target="_blank" rel="noopener noreferrer">查看文档</a></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">推荐的评论服务</p>
<ul>
<li>面向程序员和开发人员: Giscus</li>
<li>面向公众: Waline</li>
</ul>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>示例 Fork 自 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a>,
遵循 <a href="https://github.com/vuepress/ecosystem/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a> 许可证。</p>
</div>
<h2 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h2>
<p>Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便。</p>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点</p>
</li>
<li>
<p>你需要安装 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a>，使其有权限访问对应仓库。</p>
</li>
<li>
<p>在完成以上步骤后，请前往 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 获得你的设置。</p>
<p>你只需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分，
获取 <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> 和 <code v-pre>data-category-id</code> 这四个属性。</p>
</li>
</ol>
</div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<p>请配置 <code v-pre>provider: 'Giscus'</code> 并将 <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> 和 <code v-pre>data-category-id</code>
作为插件选项传入 <code v-pre>repo</code>, <code v-pre>repoId</code>, <code v-pre>category</code>, <code v-pre>categoryId</code> 。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      provider</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Giscus</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// "Artalk“ | "Giscus" | "Twikoo" | "Waline"</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      comment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      repo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your_Repo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      repoId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your_RepoId</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      category</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your_Category</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      categoryId</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Your_CategoryId</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h3>
<p>默认情况下，Giscus 使用 <code v-pre>light</code> 或 <code v-pre>dark</code> 主题 (基于夜间模式状态)。</p>
<p>如果你想在日间模式和夜间模式下自定义主题，你可以设置 <code v-pre>lightTheme</code> 和 <code v-pre>darkTheme</code> 选项，
使用内置主题关键字或以 <code v-pre>https://</code> 开头的自定义 css 链接。</p>
<h2 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h2>
<p>一个有后端的安全评论系统。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<p>如果你想要在主题中使用 Waline， 你需要先安装 <code v-pre>@waline/client</code>。</p>
<CodeTabs id="0" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' tab-id="npm-to-pnpm-yarn-npm"><template #title0="{ value, isActive }"><VPIcon name="vscode-icons:file-type-light-pnpm"/><span>pnpm</span></template><template #title1="{ value, isActive }"><VPIcon name="vscode-icons:file-type-yarn"/><span>yarn</span></template><template #title2="{ value, isActive }"><VPIcon name="logos:npm-icon"/><span>npm</span></template><template #tab0="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @waline/client</span></span></code></pre>
</div></template><template #tab1="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @waline/client</span></span></code></pre>
</div></template><template #tab2="{ value, isActive }"><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @waline/client</span></span></code></pre>
</div></template></CodeTabs><h3 id="leancloud-设置-数据库" tabindex="-1"><a class="header-anchor" href="#leancloud-设置-数据库"><span>LeanCloud 设置 (数据库)</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">登录</a> 或 <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">注册</a> <code v-pre>LeanCloud 国际版</code> 并进入 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">控制台</a></p>
</li>
<li>
<p>点击左上角 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">创建应用</a> 并起一个你喜欢的名字 (请选择免费的开发版):</p>
<p><img src="https://ecosystem.vuejs.press/assets/leancloud-1-D6GvqV4-.png" alt="创建应用" width="901" height="733"></p>
</li>
<li>
<p>进入应用，选择左下角的 <code v-pre>设置</code> &gt; <code v-pre>应用 Key</code>。你可以看到你的 <code v-pre>APP ID</code>,<code v-pre>APP Key</code> 和 <code v-pre>Master Key</code>。
请记录它们，以便后续使用。</p>
<p><img src="https://ecosystem.vuejs.press/assets/leancloud-2-B5wKvXiY.png" alt="ID 和 Key" width="1321" height="894"></p>
</li>
</ol>
</div><div class="hint-container warning">
<p class="hint-container-title">国内版需要完成备案接入</p>
<p>如果你正在使用 Leancloud 国内版 (<a href="https://leancloud.cn" target="_blank" rel="noopener noreferrer">leancloud.cn</a>)，我们推荐你切换到国际版 (<a href="https://leancloud.app" target="_blank" rel="noopener noreferrer">leancloud.app</a>)。
否则，你需要为应用额外绑定<strong>已备案</strong>的域名，同时购买独立 IP 并完成备案接入:</p>
<ul>
<li>登录国内版并进入需要使用的应用</li>
<li>选择 <code v-pre>设置</code> &gt; <code v-pre>域名绑定</code> &gt; <code v-pre>API 访问域名</code> &gt; <code v-pre>绑定新域名</code> &gt; 输入域名 &gt; <code v-pre>确定</code>。</li>
<li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li>
<li>购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)</li>
</ul>
<p><img src="https://ecosystem.vuejs.press/assets/leancloud-3-D7gbeXS0.png" alt="域名设置" width="2891" height="1259"></p>
</div>
<h3 id="vercel-部署-服务端" tabindex="-1"><a class="header-anchor" href="#vercel-部署-服务端"><span>Vercel 部署 (服务端)</span></a></h3>
<p><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel"></a></p>
<div class="vp-steps"><ol>
<li>
<p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p>
</div>
</li>
<li>
<p>输入一个你喜欢的 Vercel 项目名称并点击 <code v-pre>Create</code> 继续:</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-1.png" alt="创建项目" width="2446" height="1946"></p>
</li>
<li>
<p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-3.png" alt="deploy" width="2446" height="1946"></p>
<p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code v-pre>Go to Dashboard</code> 可以跳转到应用的控制台。</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-4.png" alt="deploy" width="2446" height="1946"></p>
</li>
<li>
<p>点击顶部的 <code v-pre>Settings</code> - <code v-pre>Environment Variables</code> 进入环境变量配置页，
并配置三个环境变量 <code v-pre>LEAN_ID</code>, <code v-pre>LEAN_KEY</code> 和 <code v-pre>LEAN_MASTER_KEY</code> 。
它们的值分别对应上一步在 LeanCloud 中获得的 <code v-pre>APP ID</code>, <code v-pre>APP KEY</code>, <code v-pre>Master Key</code>。</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-5.png" alt="设置环境变量" width="2446" height="2138"></p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>如果你使用 LeanCloud 国内版，请额外配置 <code v-pre>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p>
</div>
</li>
<li>
<p>环境变量配置完成之后点击顶部的 <code v-pre>Deployments</code> 点击顶部最新的一次部署右侧的 <code v-pre>Redeploy</code> 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-6.png" alt="redeploy" width="2446" height="2138"></p>
</li>
<li>
<p>此时会跳转到 <code v-pre>Overview</code> 界面开始部署，等待片刻后 <code v-pre>STATUS</code> 会变成 <code v-pre>Ready</code>。此时请点击 <code v-pre>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-7.png" alt="redeploy success" width="2446" height="2138"></p>
</li>
</ol>
</div><h3 id="绑定域名-可选" tabindex="-1"><a class="header-anchor" href="#绑定域名-可选"><span>绑定域名 (可选)</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>点击顶部的 <code v-pre>Settings</code> - <code v-pre>Domains</code> 进入域名配置页</p>
</li>
<li>
<p>输入需要绑定的域名并点击 <code v-pre>Add</code></p>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-8.png" alt="Add domain" width="1026" height="369"></p>
</li>
<li>
<p>在域名服务器商处添加新的 <code v-pre>CNAME</code> 解析记录</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>CNAME</td>
<td>example</td>
<td>cname.vercel-dns.com</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>等待生效，你可以通过自己的域名来访问了🎉</p>
<ul>
<li>评论系统：example.your-domain.com</li>
<li>评论管理：example.your-domain.com/ui</li>
</ul>
<p><img src="https://ecosystem.vuejs.press/images/comment/vercel-9.png" alt="success" width="785" height="138"></p>
</li>
</ol>
</div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h3>
<h4 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h4>
<p>在插件选项中设置 <code v-pre>provider: &quot;Waline&quot;</code>，同时设置服务端地址 <code v-pre>serverURL</code> 为上一步获取到的值。</p>
<p>此时，将 <code v-pre>&lt;CommentService&gt;</code> 组件放置在你网站中合适的位置 (通常是页面的底部)，即可使用 Waline 评论功能。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>你也可以传入其他 Waline 支持的选项 (除了 <code v-pre>el</code>)。详情请见 <a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/waline/config.html" target="_blank" rel="noopener noreferrer">Waline 配置</a></p>
</div>
<h3 id="评论管理-管理端" tabindex="-1"><a class="header-anchor" href="#评论管理-管理端"><span>评论管理 (管理端)</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>部署完成后，请访问 <code v-pre>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。</p>
</li>
<li>
<p>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。</p>
</li>
<li>
<p>用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。</p>
</li>
</ol>
</div></div></template>


