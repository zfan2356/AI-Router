<template><div><p>除了使用本工具，你也可以直接访问 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">caniuse.com/</a> 搜索特性，
在结果页中，点击 左侧的 <code v-pre>#</code> 按钮后，浏览器的地址栏会自动跳转，例如：</p>
<p>搜索 <code v-pre>@property</code>,点击 <code v-pre>#</code> 会跳转到 <code v-pre>https://caniuse.com/mdn-css_at-rules_property</code>，
可以直接复制 <code v-pre>mdn-css_at-rules_property</code> ，粘贴到 markdown 文件中:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">caniuse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">mdn-css_at-rules_property</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h2>
<p>本工具用于帮助搜索 caniuse 中的特性。并生成 caniuse markdown 代码。</p>
<CanIUseConfig /></div></template>


<script setup>
import CanIUseConfig from '@source/.vuepress/themes/components/CanIUseConfig.vue'
</script>