<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<div class="vp-chat">
  <div class="vp-chat-header">
    <p class="vp-chat-title">阿 B</p>
  </div>
  <div class="vp-chat-content">
    <div class="vp-chat-date"><span>2025-03-24 10:15:00</span></div>
<div class="vp-chat-message user">
      <div class="vp-chat-message-body">      
<p class="vp-chat-username">阿 B</p>
        <div class="message-content">
          <p>在文档里放聊天记录截图还是太难看了，有没有更好的方法？[doge]</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>有的，兄弟，包有的</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>但是挂聊天记录真的没问题吗？</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message user">
      <div class="vp-chat-message-body">      
<p class="vp-chat-username">阿 B</p>
        <div class="message-content">
          <p>祖安对线，战绩可查 [doge]</p>
        </div>
      </div>
    </div>
<div class="vp-chat-date"><span>2025-03-24 15:32:00</span></div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>好消息：文档支持聊天记录了！</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>坏消息：我把你挂出来了 [doge]</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message user">
      <div class="vp-chat-message-body">      
<p class="vp-chat-username">阿 B</p>
        <div class="message-content">
          <p>？？？</p>
        </div>
      </div>
    </div>
  </div>
</div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>在 Markdown 中，使用 <code v-pre>:: chat</code> 容器包裹带有特定标记的文本内容，可以在文档中显示 <mark>聊天记录</mark>。</p>
<div class="hint-container warning">
<p class="hint-container-title">这是一个大多数时候都用不上的功能，需要使用时请斟酌是否要这么做，对于涉及隐私的内容请自行过滤。</p>
</div>
<h2 id="启用" tabindex="-1"><a class="header-anchor" href="#启用"><span>启用</span></a></h2>
<p>该功能默认不启用，你需要在 <code v-pre>theme</code> 配置中启用。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      chat</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>在 <code v-pre>::: chat</code> 容器中，使用特定的标记，标识消息的发送者和发送时间，然后在文档中显示聊天记录。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: chat title="标题"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{:date}     </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 标记起始时间 --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{username}  </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 标记发送者 --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">xxx         </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 发送者的消息内容 --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{.}         </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 标记为本人发送 --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">xxx         </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- 本人的消息内容 --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><ul>
<li>
<p><code v-pre>{:date}</code> 标记起始时间 （可选）。使用 <code v-pre>{:</code> + date + <code v-pre>}</code> 标记，date 可以为常见的日期格式。</p>
<p>主题不对 <code v-pre>date</code> 做任何处理，只是简单的渲染。</p>
</li>
<li>
<p><code v-pre>{username}</code> 标记后续内容的发送者，使用 <code v-pre>{</code> + username + <code v-pre>}</code> 标记，username 可以为任意字符串。</p>
</li>
<li>
<p><code v-pre>{.}</code> 标记为本人发送</p>
</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: chat title="标题"</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{:2025-03-24 10:15:00}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{用户一}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">用户一的消息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{.}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">本人的消息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{用户二}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">用户二的消息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{.}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">本人的消息</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="vp-chat">
  <div class="vp-chat-header">
    <p class="vp-chat-title">标题</p>
  </div>
  <div class="vp-chat-content">
    <div class="vp-chat-date"><span>2025-03-24 10:15:00</span></div>
<div class="vp-chat-message user">
      <div class="vp-chat-message-body">      
<p class="vp-chat-username">用户一</p>
        <div class="message-content">
          <p>用户一的消息</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>本人的消息</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message user">
      <div class="vp-chat-message-body">      
<p class="vp-chat-username">用户二</p>
        <div class="message-content">
          <p>用户二的消息</p>
        </div>
      </div>
    </div>
<div class="vp-chat-message self">
      <div class="vp-chat-message-body">      
        <div class="message-content">
          <p>本人的消息</p>
        </div>
      </div>
    </div>
  </div>
</div></div></template>


