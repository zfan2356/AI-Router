<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>主题提供了 Kotlin 代码演示，支持 在线运行 Kotlin 代码。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>该功能通过将 代码提交到 服务器 进行 编译并执行，且一次只能提交单个代码文件。</p>
<p>因此，请不要使用此功能 执行 过于复杂的代码，也不要过于频繁的进行执行请求。</p>
</div>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>该功能默认不启用，你可以通过配置来启用它。</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      repl</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        kotlin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>使用 <code v-pre>::: kotlin-repl</code> 容器语法 将 kotlin 代码块包裹起来。主题会检查代码块并添加执行按钮。</p>
<h3 id="只读代码演示" tabindex="-1"><a class="header-anchor" href="#只读代码演示"><span>只读代码演示</span></a></h3>
<p>kotlin 代码演示默认是只读的，不可编辑。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: kotlin-repl 自定义标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kotlin</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// your kotlin code</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><h3 id="可编辑代码演示" tabindex="-1"><a class="header-anchor" href="#可编辑代码演示"><span>可编辑代码演示</span></a></h3>
<p>如果需要在线编辑并执行，需要将代码块包裹在 <code v-pre>::: kotlin-repl#editable</code> 容器语法中</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: kotlin-repl#editable 自定义标题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kotlin</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// your kotlin code</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="打印内容" tabindex="-1"><a class="header-anchor" href="#打印内容"><span>打印内容</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: kotlin-repl</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kotlin</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Contact(val id: Int, var email: String)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">fun main(args: Array&#x3C;String>) {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    val contact = Contact(1, "mary@gmail.com")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    println(contact.id)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<CodeRepl  title="kotlin playground"><div class="language-kotlin" data-highlighter="shiki" data-ext="kotlin" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Contact</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">val</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> id: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">var</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> email: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">String</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">fun</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(args: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Array</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">String</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">>) {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    val</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> contact </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Contact</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"mary@gmail.com"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    println</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(contact.id)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>
</div></CodeRepl><h3 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>运算</span></a></h3>
<CodeRepl  title="kotlin playground"><div class="language-kotlin" data-highlighter="shiki" data-ext="kotlin" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">fun</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> mul</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(a: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, b: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">): </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">fun</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(args: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Array</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">String</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">>) {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    print</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mul</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">))</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>
</div></CodeRepl><h3 id="可编辑代码演示-1" tabindex="-1"><a class="header-anchor" href="#可编辑代码演示-1"><span>可编辑代码演示</span></a></h3>
<p><strong>输入：</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: kotlin-repl#editable</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">kotlin</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">class Contact(val id: Int, var email: String)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">fun main(args: Array&#x3C;String>) {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    val contact = Contact(1, "mary@gmail.com")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    println(contact.id)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">```</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<CodeRepl editable title="kotlin playground"><div class="language-kotlin" data-highlighter="shiki" data-ext="kotlin" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> Contact</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">val</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> id: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">var</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> email: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">String</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">fun</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(args: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">Array</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">String</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">>) {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    val</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> contact </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Contact</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"mary@gmail.com"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    println</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(contact.id)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>
</div></CodeRepl></div></template>


