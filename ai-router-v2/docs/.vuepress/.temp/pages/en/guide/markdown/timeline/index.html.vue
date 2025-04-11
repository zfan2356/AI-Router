<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>In markdown, using the <code v-pre>::: timeline</code> container with markdown unordered list syntax achieves a <mark>timeline</mark> rendering effect.</p>
<ul>
<li>Supports <mark>horizontal</mark> and <mark>vertical</mark> directions</li>
<li>Vertical direction supports <strong>left alignment</strong>, <strong>right alignment</strong>, and <strong>both ends alignment</strong></li>
<li>Supports <strong>icons</strong> and <strong>line styles</strong></li>
<li>Supports preset <strong>types</strong> to set <strong>colors</strong> and custom colors</li>
</ul>
<h2 id="enablement" tabindex="-1"><a class="header-anchor" href="#enablement"><span>Enablement</span></a></h2>
<p>This feature is not enabled by default. You need to enable it in the <code v-pre>theme</code> configuration.</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      timeline</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>In the <code v-pre>::: timeline</code> container, use markdown unordered list syntax, with each list item being a point on the timeline.</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>timeline.md</span></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline Configuration</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Configuration</span></span>
<span class="line highlighted"><wbr></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>For each list item:</p>
<ul>
<li>From <strong>the first line</strong> to <strong>the first blank line</strong>, it is the <strong>title</strong>, with the line following the title used to <strong>configure</strong> the item's behavior</li>
<li><strong>After the first blank line</strong>: body content</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Please note to add the correct indentation</p>
</div>
<p><em>A simple example:</em></p>
<p><em>Input:</em></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-02-21 type=warning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Output:</em></p>
<VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" type="success" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-02-21" type="warning" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem></VPTimeline><div class="hint-container important">
<p class="hint-container-title">The timeline defaults to vertical direction</p>
</div>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>The <strong>timeline</strong> supports flexible configuration options, divided into two main parts:</p>
<ul>
<li><strong>Container configuration</strong>: Configurations on the <code v-pre>::: timeline</code> container, following <code v-pre>::: timeline</code> like <code v-pre>::: timeline horizontal</code> for horizontal timeline rendering.</li>
<li><strong>List item configuration</strong>: Configurations for each list item, following the title line like:<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title                          </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--Title line--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Also title                      </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--Title line--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 type=success  </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!--Configuration line, optional--></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                                &#x3C;!--Blank line, required if there's body content--></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div></li>
</ul>
<h3 id="container-configuration" tabindex="-1"><a class="header-anchor" href="#container-configuration"><span>Container Configuration</span></a></h3>
<h4 id="horizontal" tabindex="-1"><a class="header-anchor" href="#horizontal"><span>horizontal</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>boolean</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
</ul>
<p>Renders the timeline horizontally.</p>
<h4 id="card" tabindex="-1"><a class="header-anchor" href="#card"><span>card</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>boolean</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
</ul>
<p>Renders each timeline node as a card style (can be overridden in list item configuration).</p>
<h4 id="placement" tabindex="-1"><a class="header-anchor" href="#placement"><span>placement</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>'left' | 'right' | 'between'</code></li>
<li><strong>Default</strong>: <code v-pre>'left'</code></li>
</ul>
<p>Alignment of timeline nodes <mark class="warning">only effective in vertical direction</mark>.</p>
<ul>
<li><code v-pre>left</code>: Aligns timeline to the left</li>
<li><code v-pre>right</code>: Aligns timeline to the right</li>
<li><code v-pre>between</code>: Aligns timeline to both ends (define position via <code v-pre>placement</code> in list item configuration, default is <code v-pre>left</code>)</li>
</ul>
<h4 id="line" tabindex="-1"><a class="header-anchor" href="#line"><span>line</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>'solid' | 'dashed' | 'dotted'</code></li>
<li><strong>Default</strong>: <code v-pre>'solid'</code></li>
</ul>
<p>Line style (can be overridden in list item configuration).</p>
<h3 id="list-item-configuration" tabindex="-1"><a class="header-anchor" href="#list-item-configuration"><span>List Item Configuration</span></a></h3>
<h4 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>time</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>string</code></li>
<li><strong>Default</strong>: <code v-pre>''</code></li>
</ul>
<p>Time point, can be any string like <code v-pre>2025-03-20</code> or <code v-pre>Q1</code>.</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>'info' | 'tip' | 'success' | 'warning' | 'danger' | 'caution' | 'important'</code></li>
<li><strong>Default</strong>: <code v-pre>'info'</code></li>
</ul>
<p>Type of timeline node.</p>
<h4 id="card-1" tabindex="-1"><a class="header-anchor" href="#card-1"><span>card</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>boolean</code></li>
<li><strong>Default</strong>: <code v-pre>false</code> (inherits from container configuration)</li>
</ul>
<p>Renders the current node as a card style.</p>
<h4 id="line-1" tabindex="-1"><a class="header-anchor" href="#line-1"><span>line</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>'solid' | 'dashed' | 'dotted'</code></li>
<li><strong>Default</strong>: <code v-pre>'solid'</code> (inherits from container configuration)</li>
</ul>
<p>Line style.</p>
<h4 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>string</code></li>
<li><strong>Default</strong>: <code v-pre>''</code></li>
</ul>
<p>Icon for the timeline node, supports all <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> icons.</p>
<h4 id="placement-1" tabindex="-1"><a class="header-anchor" href="#placement-1"><span>placement</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>'left' | 'right'</code></li>
<li><strong>Default</strong>: <code v-pre>'left'</code></li>
</ul>
<p>Position of the node when container is set to <code v-pre>between</code>.</p>
<ul>
<li><code v-pre>left</code>: On the left side of the timeline</li>
<li><code v-pre>right</code>: On the right side of the timeline</li>
</ul>
<h4 id="color" tabindex="-1"><a class="header-anchor" href="#color"><span>color</span></a></h4>
<ul>
<li><strong>Type</strong>: <code v-pre>string</code></li>
<li><strong>Default</strong>: <code v-pre>''</code></li>
</ul>
<p>Color for the timeline node line, can be any valid color value.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<h3 id="horizontal-direction" tabindex="-1"><a class="header-anchor" href="#horizontal-direction"><span>Horizontal Direction</span></a></h3>
<p>Add <code v-pre>horizontal</code> after <code v-pre>:::timeline</code> to render the timeline horizontally.</p>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">horizontal</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline horizontal :card="undefined"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="right-alignment" tabindex="-1"><a class="header-anchor" href="#right-alignment"><span>Right Alignment</span></a></h3>
<p>Add <code v-pre>placement=&quot;right&quot;</code> after <code v-pre>:::timeline</code> to render the timeline right-aligned.</p>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement="right"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline :card="undefined" placement="right"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="both-ends-alignment" tabindex="-1"><a class="header-anchor" href="#both-ends-alignment"><span>Both Ends Alignment</span></a></h3>
<p>Add <code v-pre>placement=&quot;between&quot;</code> after <code v-pre>:::timeline</code> to render the timeline aligned to both ends.</p>
<p>List items default to the left side of the timeline, use <code v-pre>placement=&quot;right&quot;</code> in list item configuration to set the position to the right.</p>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement="between"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement=right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">placement=right</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline :card="undefined" placement="between"><VPTimelineItem time="2025-03-20" :card="undefined" placement="right"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined" placement="right"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="node-types" tabindex="-1"><a class="header-anchor" href="#node-types"><span>Node Types</span></a></h3>
<p>Add <code v-pre>type=node type</code> in list item configuration to set the node type.</p>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=warning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" type="success" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="warning" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="line-styles" tabindex="-1"><a class="header-anchor" href="#line-styles"><span>Line Styles</span></a></h3>
<ul>
<li>Add <code v-pre>line=line style</code> in container configuration to set the default line style for all nodes.</li>
<li>Add <code v-pre>line=line style</code> in list item configuration to set the line style for individual nodes.</li>
</ul>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line="dotted"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line=dashed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">line=solid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline :card="undefined" line="dotted"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" :card="undefined"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" line="dashed" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" line="solid" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="nodes-with-icons" tabindex="-1"><a class="header-anchor" href="#nodes-with-icons"><span>Nodes with Icons</span></a></h3>
<p>Add <code v-pre>icon=icon name</code> in list item configuration to add icons to nodes.</p>
<p>Icon names support <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">iconify</a> icon names.</p>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline placement="between"</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20 placement=right </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">icon=mdi:balloon</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">icon=mdi:bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger placement=right icon=mdi:bullhorn-variant-outline</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important card=true icon="mdi:cake-variant-outline"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline :card="undefined" placement="between"><VPTimelineItem time="2025-03-20" icon="mdi:balloon" :card="undefined" placement="right"><template #icon><VPIcon name="mdi:balloon"/></template><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success" icon="mdi:bookmark" :card="undefined"><template #icon><VPIcon name="mdi:bookmark"/></template><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" icon="mdi:bullhorn-variant-outline" :card="undefined" placement="right"><template #icon><VPIcon name="mdi:bullhorn-variant-outline"/></template><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" icon="mdi:cake-variant-outline" card><template #icon><VPIcon name="mdi:cake-variant-outline"/></template><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h3 id="card-nodes" tabindex="-1"><a class="header-anchor" href="#card-nodes"><span>Card Nodes</span></a></h3>
<p>Card nodes can be flexibly controlled:</p>
<ul>
<li>Add <code v-pre>card</code> in container configuration to make each list item a card node.</li>
<li>Add <code v-pre>card=true</code> in list item configuration to set the node as a card node.</li>
<li>Add <code v-pre>card=false</code> in list item configuration to set the node as a non-card node.</li>
</ul>
<p>The style of card nodes is affected by the <code v-pre>type</code> configuration.</p>
<div class="hint-container tip">
<p class="hint-container-title">Adding <code v-pre>card=true</code> / <code v-pre>card=false</code> in list item configuration overrides the container's <code v-pre>card</code> configuration</p>
</div>
<p>Input:</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline card</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 type=success </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">card=false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node four</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=important</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<VPTimeline card><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="success"><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="important" :card="undefined"><template #title>Node four</template><p>Body content</p>
</VPTimelineItem></VPTimeline><h2 id="custom-node-types" tabindex="-1"><a class="header-anchor" href="#custom-node-types"><span>Custom Node Types</span></a></h2>
<p>Timeline node types are controlled via CSS Variables. The theme provides the following CSS variables:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">root</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-border</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* Line color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-border</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* Point color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* Title text color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-text</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* Body text color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-time</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-text-3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   /* Time text color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-bg</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">       /* Icon color */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-bg-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> /* Card node background color */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><p>For example, the theme's built-in node type <code v-pre>tip</code>:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">vp-timeline-item</span><span class="highlighted-word"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">tip</span></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">--vp-c-tip-soft</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><p>You can override built-in types or add new ones in <RouteLink to="/en/notes/theme/guide/custom/style.html">custom styles</RouteLink>.</p>
<p>Example:</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-css"/>.vuepress/styles/index.css</span></div><div class="language-css" data-highlighter="shiki" data-ext="css" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">vp-timeline-item</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">your-type</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-line</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">3cf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-c-point</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">3cf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  --vp-timeline-bg-card</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">60</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 252</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 255</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0.314</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: timeline</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node one</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-03-20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node two</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-04-20 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">type=your-type</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> card=true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Node three</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  time=2025-01-22 type=danger</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Body content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><VPTimeline :card="undefined"><VPTimelineItem time="2025-03-20" :card="undefined"><template #title>Node one</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-04-20" type="your-type" card><template #title>Node two</template><p>Body content</p>
</VPTimelineItem><VPTimelineItem time="2025-01-22" type="danger" :card="undefined"><template #title>Node three</template><p>Body content</p>
</VPTimelineItem></VPTimeline></div></template>



<style>
.vp-timeline-item.your-type {
  --vp-timeline-c-line: #3cf;
  --vp-timeline-c-point: #3cf;
  --vp-timeline-bg-card: rgba(60, 252, 255, 0.314);
}
</style>