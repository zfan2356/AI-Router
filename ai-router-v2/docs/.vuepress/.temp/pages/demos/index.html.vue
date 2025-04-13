<template><div><p>:::important你可以随时通过 <a href="https://github.com/pengzhanbo/vuepress-theme-plume/edit/main/docs/demos.md" target="_blank" rel="noopener noreferrer">PR</a> 添加你的 文档 或 博客 到这个页面。</p>
<p>站点预览图片请放到 <code v-pre>docs/.vuepress/public/images/demos</code> 目录下。推荐使用远程链接，以便可以随时更新它。</p>
<p>图片请尽量使用 <code v-pre>.jpg</code> 格式，体积较大的请使用 <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">tinypng</a> 进行压缩。:::</p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h2>
<Demos :list="$frontmatter.docs" /><h2 id="博客" tabindex="-1"><a class="header-anchor" href="#博客"><span>博客</span></a></h2>
<Demos :list="$frontmatter.blog" /></div></template>


