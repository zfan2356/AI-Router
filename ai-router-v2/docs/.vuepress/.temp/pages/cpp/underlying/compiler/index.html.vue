<template><div><h2 id="一-简介" tabindex="-1"><a class="header-anchor" href="#一-简介"><span>一. 简介</span></a></h2>
<p>首先这里有一个表格：</p>
<table>
<thead>
<tr>
<th>分类维度</th>
<th>具体类型</th>
<th>典型代表/影响</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>硬件架构</strong></td>
<td>CPU指令集架构(ISA)</td>
<td>x86, ARM, MIPS, RISC-V, PowerPC</td>
</tr>
<tr>
<td><strong>语法风格</strong></td>
<td>汇编语法规范</td>
<td>AT&amp;T语法, Intel语法</td>
</tr>
<tr>
<td><strong>编译器/工具链</strong></td>
<td>代码生成方式</td>
<td>GCC, MSVC, Clang, NASM</td>
</tr>
<tr>
<td><strong>操作系统</strong></td>
<td>系统调用约定/ABI</td>
<td>Linux(ELF), Windows(COFF), macOS(Mach-O)</td>
</tr>
</tbody>
</table>
<p>硬件架构意思是CPU的指令集架构，比如平常见到的x86-64等等，这些可以理解为是汇编语言的种类。</p>
<p>语法风格的话其实就是汇编语言的风格，这里就不多赘述，linux x86一般是AT&amp;T风格，所以掌握AT&amp;T就可以了</p>
<p>编译器这里就专门讨论cpp的编译器，其实是一系列工具链，可能会包含一些展开/优化/编译等，最常用的就是gcc和clang</p>
<p>操作系统一般是基于硬件架构来编写的，是硬件架构的上一层封装。</p>
<p>对于每种硬件架构，都有他对应的汇编器，汇编器的作用就是将汇编语言转化为机器码，机器码就是直接在CPU上运行的代码。但是一种硬件架构可以有多种汇编器，不过至少有一点是确定的，就是如果更换平台的话，就必须要更换汇编器。</p>
<table>
<thead>
<tr>
<th>架构类型</th>
<th>汇编器代表</th>
<th>处理指令示例</th>
<th>输出格式</th>
</tr>
</thead>
<tbody>
<tr>
<td>x86/x64</td>
<td>NASM, MASM</td>
<td>mov eax, 1</td>
<td>PE/ELF</td>
</tr>
<tr>
<td>ARM/AArch64</td>
<td>GNU as (Gas)</td>
<td>mov w0, #1</td>
<td>ELF</td>
</tr>
<tr>
<td>RISC-V</td>
<td>riscv64-unknown-elf-as</td>
<td>li a0, 1</td>
<td>ELF</td>
</tr>
<tr>
<td>MIPS</td>
<td>mips-linux-gnu-as</td>
<td>li $t0, 1</td>
<td>ELF</td>
</tr>
</tbody>
</table>
<h2 id="二-编译流程" tabindex="-1"><a class="header-anchor" href="#二-编译流程"><span>二. 编译流程</span></a></h2>
<p>假如说我们当前有一个<code v-pre>hello.cpp</code>文件，内容如下</p>
<div class="language-cpp" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">iostream</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    std</span><span style="--shiki-light:#999999;--shiki-dark:#666666">::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">cout </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;&#x3C;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Hello, World!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
</div><p>下面是编译工具链的全过程，<code v-pre>g++/clang++</code>就是按照下述这个顺序，一步步展开，编译，优化的。现在<code v-pre>g++/clang++</code>更多的是一个智能的预处理调度器，比如在宏展开和头文件展开的时候，一般用的是<code v-pre>cpp</code>这种底层工具</p>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cpp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.cpp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.ii</span></span></code></pre>
</div><p>但是如果使用<code v-pre>g++ -E</code>, 它会根据上下文选择最佳处理方式，并自动配置正确的编译环境。这就是为什么在构建工具链中，我们总是使用编译器驱动而非直接调用底层工具的原因。</p>
<Mermaid id="mermaid-172" code="eJyFVW1P01AU/s6vaErmNGODgQJZlAQHMUTeApMvC1nard2KHV3aIRggQcKLEMQpBjF8AN8iickWomJkiH+Grtu/8Nx72+5ua7d+aG/vfZ5zn/Occ1uPZ1mal7IhZtmbTQlpwRvy8pwmeDsY8j7DqRLHy4LmRZCMKqU59XlYkRUVkO2i2AWXd3V11eNpg1CLKpdBQ1FWFuMpTs0ykaE2Bi6Ph3mALkbfPNPP18r5a+Nvnkzh9bjMadqQIDJZRZEZUZLlULvQJfaJYgejZVXlqRBq7+rp7U30Wu/+RSmRTYWCmaXaAMAVzABil9hPBwjyQbG7p1UAWeKrfEiwyu/u5/ru3nPh16ZZusyVDrdvihfl3XVj/Q+daSYTZVOCLCsBGN7n1c6B22GfDwg3xc/G6Ys77GwoFEJZOIStfNrQv2wYua3K0UUp/4sKqy3wSTA/xUxODUfZOhw7izHoSsbjsYwqRNmkz8f4h8n+j8Jhm6F/OCMSUCVsGrgznyREPKTIYfTegg7EmLKQtRKXJEKtsnL7YEBj9rYDpnOM3z+wAmrLvwv69caKlU0DBGuyQLb2ehMQ1JLWmGnDqjCfcCiJcXVYLrxxr0d4YmwyytKoumqIVjGm7WIQNFip77wyvhdc64GodjlMOk69dQB7wGnpGMiwSqMxSEDpfBtCOBQDofGOFB7v6MqQVLryskxUjo7OjDEjU83KbVqPy0B8clyynGgMQEi4H4x3J6WXucHIrQjRuWKl3WAohuuvC5W1Hat/SAbOSOP4Z2n/q4W03WkUo2TAA7gx/omeqgU3V0f63qHzmSHb4hwxD5618Z37kYR078eJyUiUpUF17YiF4oayhEI/NNNpOgkCydnUtzbh204Y5IRCyPotGH/AzMcqgnM2pFzu2QxOj0VZGkRnw2lRltPMJMafEJhzErL8LB1LwylAA386Xi1RM5bCz1mNrRCGcZwvnW6TT3+z5q6aBs3NaY3nC6+YquiMSD/wc/XKa+advawcXEOvuns5OjL+GH4dFIoyU06ANwnbS4Jy8xJhLTDysBlaWBLAdi4AvU4IcPhKO9/KH/dauwj51v8RZJI5vVrzMwBdVE7YNaSAFl876fLV/1E0iif65YH+dq/8L4fUvr9wNvXhNHz+neC0uxKPeg/uAa4TPzSzocJAIhbANI3XsglCQQOfD3g2xedzJMVVONlwCwaUTnhIVs/agvRcQd81a0QTa2SSxqRMJArqp2EDB6QJc6M78c05VIb/dOOfaA=="></Mermaid><p>链接过程中，可以看出不管是g++/clang++最后编译得到机器码之后，链接器是可以兼容的，可以使用GNU ld，也可以使用llvm lld，都可以。</p>
<p>接下来详细的比较一下各个阶段的产物差别：</p>
<ul>
<li>
<p><strong>预处理阶段</strong>: 不管是gcc还是clang要做的都是将头文件和宏展开，所以这一部两者产生的<code v-pre>hello.ii</code>其实区别不大，可能会在某些空白行，或者注释有差异。</p>
</li>
<li>
<p><strong>汇编阶段</strong>: 生成的<code v-pre>hello.s</code>就会有比较大的区别，首先两者会有自己的抽象AST，然后gcc会将其转化为中间产物GIMPLE三地址码形式，而clang则会直接将其转化为LLVM IR，这里gcc或者clang还有属于自己的tree-ssa或者opt汇编优化器，可以优化汇编代码。</p>
</li>
<li>
<p><strong>目标阶段</strong>: 生成<code v-pre>hello.o</code>, 这一步会将汇编使用汇编器转化为机器码，只要是相同的平台，就会遵循一致的格式，这个时候产物就在某种意义上共通了，GCC通常使用GNU的汇编器（as），而Clang可以使用自己的集成汇编器（llvm-mc）或者GNU汇编器，但是输出的目标文件格式（如ELF格式）是标准的。虽然这并不代表两者产生的机器码是相同的，但是格式是相同的话，就可以互相链接。</p>
</li>
<li>
<p><strong>链接阶段</strong>: 链接的是该平台的机器码，一般没啥差别。</p>
</li>
</ul>
<h2 id="三-性能分析" tabindex="-1"><a class="header-anchor" href="#三-性能分析"><span>三. 性能分析</span></a></h2>
<ul>
<li><strong>预处理阶段</strong>: 这里gcc和clang的差距主要是编译时间，内存占用以及输出大小，这里由于自身实现的差距，clang一般要优于gcc。</li>
</ul>
<table>
<thead>
<tr>
<th>指标</th>
<th>GCC</th>
<th>Clang</th>
<th>差异幅度</th>
</tr>
</thead>
<tbody>
<tr>
<td>编译时间</td>
<td>较慢</td>
<td>快30-50%</td>
<td>🔴 显著差异</td>
</tr>
<tr>
<td>内存占用</td>
<td>高</td>
<td>低20-30%</td>
<td>🔴 显著差异</td>
</tr>
<tr>
<td>输出大小</td>
<td>相同</td>
<td>相同</td>
<td>⚪ 无差异</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>编译阶段</strong>：
<ul>
<li>
<p>前端：构建AST，诊断信息质量，模板处理效率，这里clang也大概比gcc快一倍，特别是在模板解析过程中，clang比gcc优势大很多</p>
</li>
<li>
<p>中间表示优化：</p>
</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>优化类型</th>
<th>GCC 优势</th>
<th>Clang 优势</th>
<th>中立领域</th>
</tr>
</thead>
<tbody>
<tr>
<td>循环优化</td>
<td>简单循环展开</td>
<td>循环向量化</td>
<td>公共子表达式消除</td>
</tr>
<tr>
<td>内联决策</td>
<td>保守策略 (减少代码膨胀)</td>
<td>激进策略 (更多内联)</td>
<td>静态函数优化</td>
</tr>
<tr>
<td>常数传播</td>
<td>基础传播</td>
<td>跨函数传播</td>
<td>本地传播</td>
</tr>
<tr>
<td>SIMD向量化</td>
<td>-</td>
<td>AVX-512支持更好</td>
<td>SSE基础优化</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>汇编代码生成<code v-pre>hello.s</code>: 性能因素取决于汇编指令数，指令选择质量，以及寄存器分配。在这里clang是高指令密度，依赖链优化较好，寄存器溢出5%，gcc表现各个方面较为一般。Clang 平均生成少10-15%的指令，复杂控制流中优势明显。</p>
</li>
<li>
<p><strong>目标文件生成</strong>：性能指标是文件大小，重定位信息以及调试信息, 调试信息一般是DWARF格式，clang有更加完善的格式。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>特征</th>
<th>GCC</th>
<th>Clang</th>
<th>差异原因</th>
</tr>
</thead>
<tbody>
<tr>
<td>.o 文件大小</td>
<td>稍大</td>
<td>稍小</td>
<td>DWARF格式差异</td>
</tr>
<tr>
<td>LTO支持</td>
<td>有限</td>
<td>完善</td>
<td>LLVM模块化设计</td>
</tr>
<tr>
<td>调试信息</td>
<td>DWARF4</td>
<td>DWARF5</td>
<td>标准版本不同</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>链接阶段</strong>：链接阶段关心的性能是链接速度，内存占用以及LTO效果。GCC 默认使用 GNU ld 或 gold，Clang 可选 lld 或 mold(超快链接器)。</li>
<li>LTO技术是一种链接时的代码优化技术，会在编译时带来一些编译期性能的开销（大概多一倍），但是可以给编译后的目标文件带来较大的提升，他会保存编译时的中间表示，例如LLVM IR，然后在链接的时候对全局的代码进行优化，例如库函数跨模块内联，无用代码全局消除，全局常量传播，全程序指针分析等等，可以达到20%+的运行时提升，体积也会减少20%-40%，</li>
</ul>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># GCC 启用LTO</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">g++</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -flto</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -O3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main.cpp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> utils.cpp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app_gcc</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Clang 启用LTO</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">clang++</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -flto=thin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -O3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> main.cpp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> utils.cpp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app_clang</span></span></code></pre>
</div><ul>
<li><strong>执行阶段</strong>: 上述的各个阶段可以看出都已经产生了若干实质性的差异，这些差异最终导致Clang和GCC机器码的不同，对于CPU来说，机器码的执行逻辑是一样的，但是Clang编译出的机器码，分支预测错误率会更低，向量化计算密度更高。</li>
</ul>
<p>总结：可以看出</p>
<ol>
<li>
<p><strong>编译速度</strong>：Clang普遍快30-50%，尤其大型项目</p>
</li>
<li>
<p><strong>运行时性能</strong>：视应用类型而定</p>
</li>
<li>
<p><strong>数值计算</strong>：GCC 平均优3-5%</p>
</li>
<li>
<p><strong>分支密集</strong>：Clang 优5-10%</p>
</li>
<li>
<p><strong>向量化计算</strong>：Clang 优10-15%</p>
</li>
<li>
<p><strong>调试支持</strong>：Clang的DWARF5更强大</p>
</li>
<li>
<p><strong>内存占用</strong>：Clang生成代码通常小5-15%</p>
</li>
</ol>
<h2 id="四-补充" tabindex="-1"><a class="header-anchor" href="#四-补充"><span>四. 补充</span></a></h2>
<p>在前三节中提到了一些比较有意思的东西，在这里补充一下</p>
<h3 id="_1-指令集" tabindex="-1"><a class="header-anchor" href="#_1-指令集"><span>1. 指令集</span></a></h3>
<p>首先是指令集问题。指令集（ISA）是一组软件层面约定的和CPU硬件执行的接口，所以对于ISA来说首先需要硬件层面支持，其次OS内核也需要支持，最后需要告诉编译器生成支持该指令的代码或者在软件层面自己编写该ISA代码，前者比较通用，后者可以特定优化。</p>
<table>
<thead>
<tr>
<th>层级</th>
<th>要求</th>
<th>检测方法</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>硬件</strong></td>
<td>CPU支持该指令集</td>
<td>lscpu 查看标志位</td>
</tr>
<tr>
<td><strong>操作系统</strong></td>
<td>内核支持指令执行</td>
<td>运行时CPUID检测</td>
</tr>
<tr>
<td><strong>编译器</strong></td>
<td>支持生成该指令代码</td>
<td>编译器版本检查</td>
</tr>
<tr>
<td><strong>应用程序</strong></td>
<td>显式使用指令</td>
<td>条件编译与运行时检测</td>
</tr>
</tbody>
</table>
<p>这里有一些常用的ISA，比如x86-64一般都是AVX ISA，</p>
<table>
<thead>
<tr>
<th>平台</th>
<th>基础ISA</th>
<th>向量扩展</th>
<th>特殊功能扩展</th>
</tr>
</thead>
<tbody>
<tr>
<td>x86-64</td>
<td>AVX2</td>
<td>AVX-512</td>
<td>AMX(矩阵运算)</td>
</tr>
<tr>
<td>ARM v9</td>
<td>A64</td>
<td>SVE2(可变长向量)</td>
<td>SME(矩阵扩展)</td>
</tr>
<tr>
<td>RISC-V</td>
<td>RV64GC</td>
<td>RVV 1.0(向量扩展)</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<p>当然不同平台的指令集不同，具体需要根据平台来决定，linux可以使用下面的指令查看当前平台支持的ISA：</p>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lscpu</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Flags</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /proc/cpuinfo</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flags</span></span></code></pre>
</div><p>比如我当前是MacBook M2pro，在本地部署了个linux ubuntu docker，运行之后显示如下：</p>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Flags:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">                                fp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> asimd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> evtstrm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> aes</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pmull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sha1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sha2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> crc32</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> atomics</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fphp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> asimdhp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cpuid</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> asimdrdm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> jscvt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fcma</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lrcpc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dcpop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sha3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> asimddp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sha512</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> asimdfhm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> uscat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ilrcpc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flagm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> paca</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pacg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dcpodp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> flagm2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> frint</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> bf16</span></span></code></pre>
</div><p>可以看出涵盖了数值运算，加密算法等等一系列CPU加速指令集，可以供该平台的程序使用。现在平台架构大概就是x86, arm, risc-v这三种，具体使用ISA的时候需要根据平台来进行取舍。</p>
<h3 id="_2-汇编语法初探" tabindex="-1"><a class="header-anchor" href="#_2-汇编语法初探"><span>2. 汇编语法初探</span></a></h3>
<p>这里打算解析一下x86-64 平台上的<code v-pre>hello.s</code>文件的汇编语言含义。</p>
</div></template>


