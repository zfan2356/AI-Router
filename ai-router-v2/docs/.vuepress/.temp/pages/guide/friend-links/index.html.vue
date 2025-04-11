<template><div><h2 id="友情链接" tabindex="-1"><a class="header-anchor" href="#友情链接"><span>友情链接</span></a></h2>
<p>友情链接页 不会自动生成，但你可以根据需要，创建它。</p>
<p>在你的 <code v-pre>{sourceDir}/</code> 目录下，创建 任意 <code v-pre>*.md</code> 文件，比如 <code v-pre>friends.md</code> 文件。
然后在这个文件中，通过 <code v-pre>frontmatter</code> 配置它。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>friends.md</span></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">friends</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 友情链接</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 友情链接描述文本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /friends/</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">list</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pengzhanbo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/pengzhanbo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/pengzhanbo.png</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  -</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pengzhanbo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    link</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/pengzhanbo</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    avatar</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/pengzhanbo.png</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    desc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>主题会根据 配置信息 生成友情链接页。 如果未配置 <code v-pre>permalink</code> ，默认为 <code v-pre>/friends/</code>。</p>
<p>你需要自行将 友情链接页 的入口链接 配置到 <code v-pre>navbar</code> 的合适的位置中。</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<p>查看 <RouteLink to="/notes/theme/config/frontmatter/friend.html">文档</RouteLink> 更多配置信息。</p>
</div></template>


