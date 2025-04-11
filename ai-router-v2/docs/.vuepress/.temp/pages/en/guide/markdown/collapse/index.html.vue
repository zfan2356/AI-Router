<template><div><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>In Markdown, the <code v-pre>::: collapse</code> container, combined with Markdown unordered list syntax, can be used to create <mark>collapsible panels</mark>.</p>
<ul>
<li>It supports setting the mode to <strong>accordion</strong> using the <code v-pre>accordion</code> option.</li>
</ul>
<h2 id="enable" tabindex="-1"><a class="header-anchor" href="#enable"><span>Enable</span></a></h2>
<p>This feature is not enabled by default. You need to enable it in the <code v-pre>theme</code> configuration.</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-typescript"/>.vuepress/config.ts</span></div><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      collapse</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">, </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  })</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">})</span></span></code></pre>
</div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>In Markdown, use the <code v-pre>::: collapse</code> container with Markdown unordered list syntax, where each item represents a separate collapsible area.</p>
<div class="code-block-title"><div class="code-block-title-bar"><span class="title"><VPIcon name="vscode-icons:file-type-markdown"/>collapse.md</span></div><div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1        </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- Title, click to control expand/collapse --></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                &#x3C;!-- There must be an empty line between the title and the content --></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Content          </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">&#x3C;!-- Content, the collapsible area --></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div></div><p>For each item in the list:</p>
<ul>
<li>From the <strong>first line</strong> to the <strong>first empty line</strong> is the <strong>title</strong>.</li>
<li><strong>After the first empty line</strong>: The main content.</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Please note the correct indentation</p>
</div>
<p><strong>A simple example:</strong></p>
<p><strong>Input:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>Output:</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem></VPCollapse><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>After the <code v-pre>::: collapse</code> container syntax, you can add configuration options:</p>
<ul>
<li><code v-pre>accordion</code>: Sets the collapsible panels to <mark>accordion</mark> mode. In accordion mode, only one panel can be expanded at a time. Clicking another panel will close the previously opened one.</li>
<li><code v-pre>expand</code>: Expands all panels by default. This option is invalid in accordion mode.</li>
</ul>
<p>Before the title of each list item, you can use special markers <code v-pre>:+</code> or <code v-pre>:-</code> to set the initial state of the item to <strong>expanded</strong> or <strong>collapsed</strong>.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>
<h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h3>
<p><strong>Input:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>Output:</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem></VPCollapse><h3 id="expand-all-by-default" tabindex="-1"><a class="header-anchor" href="#expand-all-by-default"><span>Expand All by Default</span></a></h3>
<p>Add the <code v-pre>expand</code> option to expand all panels by default.</p>
<p><strong>Input:</strong></p>
<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">expand</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
</div><p><strong>Output:</strong></p>
<VPCollapse><VPCollapseItem expand :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem expand :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem></VPCollapse><h3 id="accordion-mode" tabindex="-1"><a class="header-anchor" href="#accordion-mode"><span>Accordion Mode</span></a></h3>
<p>Add the <code v-pre>accordion</code> option to set the mode to accordion, allowing only one panel to be expanded at a time. Clicking another panel will close the previously opened one.</p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">accordion</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<VPCollapse accordion><VPCollapseItem :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem :index="2"><template #title>Title 3</template><p>Main content</p>
</VPCollapseItem></VPCollapse><h3 id="expand-items-with" tabindex="-1"><a class="header-anchor" href="#expand-items-with"><span>Expand Items with <code v-pre>:+</code></span></a></h3>
<p>By default, all collapsible panels are closed. You can use the <code v-pre>:+</code> marker to set the initial state of an item to expanded.</p>
<p><strong>Input:</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<VPCollapse><VPCollapseItem :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem expand :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem expand :index="2"><template #title>Title 3</template><p>Main content</p>
</VPCollapseItem></VPCollapse><h3 id="collapse-items-with" tabindex="-1"><a class="header-anchor" href="#collapse-items-with"><span>Collapse Items with <code v-pre>:-</code></span></a></h3>
<p>When the <code v-pre>expand</code> option is configured, all panels are expanded by default. You can use the <code v-pre>:-</code> marker to set the initial state of an item to collapsed.</p>
<p><strong>Input:</strong></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">::: collapse expand</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE" class="highlighted-word">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Title 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Main content</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<VPCollapse><VPCollapseItem expand :index="0"><template #title>Title 1</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem :index="1"><template #title>Title 2</template><p>Main content</p>
</VPCollapseItem><VPCollapseItem expand :index="2"><template #title>Title 3</template><p>Main content</p>
</VPCollapseItem></VPCollapse></div></template>


