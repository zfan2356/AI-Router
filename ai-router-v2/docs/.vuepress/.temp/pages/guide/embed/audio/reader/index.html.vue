<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题支持在文档中嵌入 音频阅读 。</p>
<p>该功能由 <RouteLink to="/notes/theme/config/plugins/markdown-power.html">vuepress-plugin-md-power</RouteLink> 提供支持。</p>
<p><strong>音频阅读</strong> 并不是一个音乐播放器，它仅是在内容中嵌入一个（ <AudioReader src="https://sensearch.baidu.com/gettts?lan=en&amp;spd=3&amp;source=alading&amp;text=audio"></AudioReader> ）按钮，点击后播放一段音频。</p>
<p>它适合用于播放一些短时间的音频，比如 <strong>单词标音</strong> 。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>该功能默认不启用。你需要在主题配置中开启。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      audioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法"><span>markdown 语法</span></a></h2>
<p>音频嵌入 markdown 语法是一个 行内语法，因此你可以在 markdown 的任何地方中使用。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">audioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p>添加配置项：</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">audioReader type="audio/mpeg" title="title" autoplay start-time="0" end-time="10" volume="0.7"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p><strong>配置说明：</strong></p>
<ul>
<li><code v-pre>type</code>：音频类型，格式如：<code v-pre>audio/mpeg</code> ,
默认根据音频链接地址的文件扩展名推断，如果链接地址中不包含扩展名，请手动声明。</li>
<li><code v-pre>title</code>： 音频标题，显示在音频图标之前。</li>
<li><code v-pre>autoplay</code>：是否自动播放，不建议启用。</li>
<li><code v-pre>start-time</code>：音频起始播放时间点，单位为 秒。</li>
<li><code v-pre>end-time</code>：音频结束播放时间点，单位为 秒。</li>
<li><code v-pre>volume</code>：音频播放音量，范围为 <code v-pre>0 ~ 1</code> 。</li>
</ul>
<h2 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件"><span>全局组件</span></a></h2>
<p>主题提供了全局组件 <code v-pre>&lt;AudioReader /&gt;</code> 以支持更灵活丰富的使用方式。</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>字段</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td><code v-pre>string</code></td>
<td>必填，音频播放地址</td>
</tr>
<tr>
<td>type</td>
<td><code v-pre>string</code></td>
<td>选填，音频格式，默认从 <code v-pre>src</code> 中截取</td>
</tr>
<tr>
<td>autoplay</td>
<td><code v-pre>boolean</code></td>
<td>选填，是否自动播放，不建议启用</td>
</tr>
<tr>
<td>startTime</td>
<td><code v-pre>number</code></td>
<td>选填，音频起始播放时间点，单位为 秒</td>
</tr>
<tr>
<td>endTime</td>
<td><code v-pre>number</code></td>
<td>选填，音频结束播放时间点，单位为 秒</td>
</tr>
<tr>
<td>volume</td>
<td><code v-pre>number</code></td>
<td>选填，音频播放音量，范围为 <code v-pre>0 ~ 1</code></td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">audio 美 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ˈɔːdioʊ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> @</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">audioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">/audio/audio.mp3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<p>audio 美 [ˈɔːdioʊ] <AudioReader src="https://sensearch.baidu.com/gettts?lan=en&amp;spd=3&amp;source=alading&amp;text=audio"></AudioReader></p>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">audio 美 @</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">audioReader title="[ˈɔːdioʊ]"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline">/audio/audio.mp3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span></code></pre>
</div><p><strong>输出：</strong></p>
<p>audio 美 <AudioReader src="https://sensearch.baidu.com/gettts?lan=en&amp;spd=3&amp;source=alading&amp;text=audio">[ˈɔːdioʊ]</AudioReader></p>
<p><strong>输入：</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">audio 美 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">AudioReader</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/audio/audio.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ˈɔːdioʊ</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">AudioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
</div><p><strong>输出：</strong></p>
<p>audio 美 <AudioReader src="https://sensearch.baidu.com/gettts?lan=en&spd=3&source=alading&text=audio">[ˈɔːdioʊ]</AudioReader></p>
</div></template>


