<template><div><p>当前版本包含了一些破坏性的更新，因此做一些说明。</p>
<!-- more -->
<h2 id="vuepress-plugin-md-enhance-插件迁移" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-md-enhance-插件迁移"><span>vuepress-plugin-md-enhance 插件迁移</span></a></h2>
<p>在 <RouteLink to="/3.%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E/102-103.html#vuepress-plugin-md-enhance-%E6%8F%92%E4%BB%B6%E8%BF%81%E7%A7%BB">1.0.0-rc.103</RouteLink> 版本中，
主题完成了一部分功能到 vuepress 官方插件的迁移工作。但依然还有部分功能尚未完成。</p>
<p>在当前版本更新中，主题对这项工作进行了新的推进，将 <code v-pre>markdownEnhance.include</code> 功能迁移到了
<a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-include.html" target="_blank" rel="noopener noreferrer"><code v-pre>@vuepress/plugin-markdown-include</code></a> 插件。
因此，与之关联的配置项 <code v-pre>plugins.markdownEnhance.include</code> 将被移除，并迁移到 <code v-pre>plugins.markdownInclude</code> 进行配置。</p>
<p><strong>如果你有自定义配置，请注意需要进行迁移。</strong></p>
<h2 id="功能修复" tabindex="-1"><a class="header-anchor" href="#功能修复"><span>功能修复</span></a></h2>
<h3 id="vuepress-plugin-git" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-git"><span>@vuepress/plugin-git</span></a></h3>
<p>在 <code v-pre>1.0.0-rc.119</code> 版本中，我重构了 <a href="https://ecosystem.vuejs.press/zh/plugins/development/git.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-git</a> ，使插件能够获得更多的 git 信息，如 每个文件的 创建时间，最后修改时间，作者、提交历史记录等。</p>
<p>但与此同时也引入了新的 bug，该 bug 会导致在 私有 git 托管服务中进行构建时，在不能自动获取 贡献者头像使用 sha256
自动生成临时头像时会导致构建失败。
（ <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/334" target="_blank" rel="noopener noreferrer">#334</a>,
<a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/349" target="_blank" rel="noopener noreferrer">#349</a> )</p>
<p>另外的一个 隐性问题是，如果项目的提交记录过多，拥有数千条以上的记录时，由于读取的 git log 过多会导致内存占用过高。
可能会导致构建时间过长甚至失败。</p>
<p>我在 <a href="https://github.com/vuepress/ecosystem/pull/292" target="_blank" rel="noopener noreferrer">vuepress/ecosystem#292</a> 修复了相关问题，并在
主题 <code v-pre>1.0.0-rc.120</code> 版本中进行了修复。</p>
</div></template>


