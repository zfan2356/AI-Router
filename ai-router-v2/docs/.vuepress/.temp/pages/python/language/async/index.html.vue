<template><div><h2 id="一-多线程" tabindex="-1"><a class="header-anchor" href="#一-多线程"><span>一. 多线程</span></a></h2>
<p>对于一个任务，我们可以将其划分为两种类型：IO密集型任务，计算密集型任务</p>
<ul>
<li>IO密集型任务：代码中出现很多IO操作，例如文件读取，网络IO，数据库操作，这种操作一般不会在CPU上执行，不需要占用CPU资源</li>
<li>计算密集型任务：对于一些计算操作，程序需要在CPU上执行，来进行计算</li>
</ul>
<h3 id="为什么python中多线程的效率这么差" tabindex="-1"><a class="header-anchor" href="#为什么python中多线程的效率这么差"><span>为什么Python中多线程的效率这么差？</span></a></h3>
<h4 id="_1-对比其他语言" tabindex="-1"><a class="header-anchor" href="#_1-对比其他语言"><span>1. 对比其他语言</span></a></h4>
<p>在C++/Java中，我们创建的为”原生线程“，也就是系统级别的线程，对于此类线程，操作系统会提供线程管理器，由OS调度，实现各个核的负载均衡，也就是可以实现多核并行操作，但是Python中却不同。虽然Python创建的也是原生线程，但是由于CPython（官方解释器）的缘故，会引入一种机制：GIL（Global Interpreter Lock），这种机制由解释器实现，保证了任何时刻，只有一个线程会执行当前执行到的Python字节码，GIL是一种粗粒度的锁，为每个进程持有，所以在Python中，如果不使用多进程来运行，那么各个线程之间其实无法实现真正意义上的并行。</p>
<p>在GIL机制中，一个进程内多个线程竞争一把锁，释放锁的时机有两种，一种是进入IO阻塞状态，另一种是不间断运行了一定量的字节码 or 运行了 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 秒. 我们不纠结具体时间，而是分析这种机制，可以得出，在GIL保证下，并发<strong>也是会导致数据竞争问题</strong>。因为我们不能保证释放锁的时候一定完成了某个操作数据的语句，因为该语句不一定是原子操作。所以一把防止数据竞争的锁仍然是有必要的</p>
<h4 id="_2-对比串行" tabindex="-1"><a class="header-anchor" href="#_2-对比串行"><span>2. 对比串行</span></a></h4>
<p>分析GIL锁的释放条件，可以得出，相对于串行，Python的多线程对于IO密集型任务较为友好，因为GIL机制下，IO密集型任务会使得当前线程释放锁，去等待IO阻塞，这个时候下一个线程就可以获得锁然后去占用CPU。反之，计算密集型任务，在多核机器下，Python多线程的表现甚至差于串行，因为线程的切换也是会产生开销的。</p>
<h3 id="如何实现真正意义上的并行" tabindex="-1"><a class="header-anchor" href="#如何实现真正意义上的并行"><span>如何实现真正意义上的并行</span></a></h3>
<p>在python中，实现真正意义上的并行只能通过多进程的方式，因为GIL锁的粒度为进程，每个进程都会持有一把锁，这样我们就可以实现并行，但是多进程有诸多缺点：</p>
<ul>
<li>高开销：启动和管理进程会带来更大的开销以及更高昂的内存消耗</li>
<li>通信复杂：进程间通信需要通过管道等方式，所以更加复杂</li>
<li>兼容问题：不同OS对多进程的支持不同</li>
</ul>
<h2 id="二-async-await异步编程" tabindex="-1"><a class="header-anchor" href="#二-async-await异步编程"><span>二. async/await异步编程</span></a></h2>
<h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h3>
<p>回想一下网络的本质，其实是一个loop，我们会不断地接受请求，然后返回响应，这个时候对于单个进程来说，挨个处理会很耗时，因为网络IO也是一个比较慢的操作，这个时候epoll应运而生，可以帮助我们在单个进程中快速处理网络请求，最后演变为了async。async协程其实本质上也是在单进程中写并发代码，通过协程的方式管理并发，通过同步代码的方式写异步，异常方便。</p>
<p>对于IO阻塞，协程可以自主切换，让渡给其他协程，从而在单线程中处理大量的IO任务，适合IO密集型任务。</p>
<h3 id="_2-对比多线程" tabindex="-1"><a class="header-anchor" href="#_2-对比多线程"><span>2. 对比多线程</span></a></h3>
<p>python中，多线程和协程，本质上都是在一个进程中运行，受限于CPython，都无法实现真正意义上的并行，它们也存在诸多共同点，例如都适合处理IO密集型任务，但是也有一些不同</p>
<p>它们最大的区别就是，async其实是在一个线程中运行，但是多线程是创建更多的线程来分别去执行任务。对于协程来说，因为是基于单线程的事件循环，能更加高效的处理IO任务，而多线程因为每个线程都需要一定的内存和资源，创建和销毁都是一笔开销，会带来比较大的负担，结合线程池能得到较大的改善，但是仍然不能和async的性能作比较。</p>
<p>多线程之间的线程切换也是一笔开销，我们知道线程在执行了一定时间 or 长度的字节码之后也会释放GIL锁，这样也会产生切换开销。</p>
<p>对于多线程和协程，它们俩的共同点就是，无法很好的处理计算密集型任务，多线程是受限于CIL机制，而协程则是因为他的本质是基于epoll的IO让渡，所以对于计算型代码，也无能为力</p>
<p>到这里其实可以发现一个很简单的性质：如果我们当前代码运行机制（不论是多进程，还是多线程，亦或是async协程）可以做到IO任务的让渡，那么对于IO任务就会有很好的表现；如果可以做到多核并行，那么对于计算密集型就会有很好的表现</p>
<h3 id="_3-对比其他语言的协程" tabindex="-1"><a class="header-anchor" href="#_3-对比其他语言的协程"><span>3. 对比其他语言的协程</span></a></h3>
<p>对于Go的goroutine来说，语言底层实现了GMP机制，对于协程可以做到语言层面的调度，使得其天然支持并行，可以有效地利用多核，</p>
<h2 id="三-在python中书写并行" tabindex="-1"><a class="header-anchor" href="#三-在python中书写并行"><span>三. 在Python中书写并行</span></a></h2>
<p>对于多核处理器，如果我们的程序不能支持并行，其实是一种很大的亏损，这个时候一般如何写并行代码呢？</p>
<h3 id="_1-进程并行" tabindex="-1"><a class="header-anchor" href="#_1-进程并行"><span>1. 进程并行</span></a></h3>
<p>上文提到，对于GIL机制，最简单粗暴规避的方式就是直接实现多进程，对于每个进程，OS自然会将其调度到各个核上实现并行，在python中实现多进程，一般这个时候会使用<code v-pre>multiprocessing</code>库中的<code v-pre>Pool</code>创建进程池来实现多进程的管理。</p>
<p>在python的网络框架中，为了多个handler并行处理，也会开多个进程来负载均衡，利用多核实现并行。在python中网络框架和应用框架是解耦的，而多进程是在网络框架中实现的，这就是我们使用Django或者flask等应用框架的时候只需要实现url到handler的映射，而不需要在意handler的并行处理的原因。</p>
<p>以wsgi网络框架举例</p>
<ol>
<li>
<p>在运行wsgi时，我们首先要高效的接受请求，这个时候可以使用epoll来完成异步接受，我们首先要起一个进程，内异步接受请求，用作Nginx。</p>
</li>
<li>
<p>然后我们会开 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> 个进程，运行 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> 个应用框架，这样就可以并行的处理请求，这就 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">m + 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 个进程在使用</p>
</li>
<li>
<p>当请求到来时，假设来了1k请求，每个应用进程会分到 1k/m 个请求，然后使用async/await处理</p>
</li>
</ol>
<p>具体来讲：wsgi的master进程先通过unix socket转发请求到其他wsgi worker进程，wsgi worker进程在启动的时候调了run函数，在自己的进程里植入了应用框架的代码，wsgi worker接受到unix socket的请求后会调python函数handler，这样就实现了一个web框架的高效运转</p>
</div></template>
