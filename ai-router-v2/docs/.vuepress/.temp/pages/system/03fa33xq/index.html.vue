<template><div><p>一个有关Pre Train的专题合集，目前的TODO LIST:</p>
<h2 id="一-技术杂谈" tabindex="-1"><a class="header-anchor" href="#一-技术杂谈"><span>一. 技术杂谈</span></a></h2>
<ul>
<li>
<p><RouteLink to="/notes/system/pre-train/ai-router-v2/docs/notes/system/pre-train/model_parallel.html">LLM Parallel Strategy</RouteLink>: 什么是数据并行/张量并行/流水线并行，以及3D混合并行</p>
</li>
<li>
<p><RouteLink to="/notes/system/pre-train/ai-router-v2/docs/notes/system/pre-train/pp_communication.html">Pipline Parallel</RouteLink>：总结pp的通信和调度算法，从零手搓一个pp调度库，集合1F1B调度以及DualPipe</p>
</li>
<li>
<p><a href="">ZeRO</a>:</p>
</li>
</ul>
<h2 id="二-源码剖析" tabindex="-1"><a class="header-anchor" href="#二-源码剖析"><span>二. 源码剖析</span></a></h2>
<ul>
<li>
<p>DeepSpeed</p>
<ul>
<li><RouteLink to="/notes/system/pre-train/ai-router-v2/docs/notes/system/pre-train/deepspeed/deepspeed01.html">launcher+Initialize</RouteLink></li>
<li><a href="">engine</a></li>
</ul>
</li>
<li>
<p>Megatron</p>
</li>
<li>
<p>DeepSpeed+Megatron</p>
</li>
</ul>
<p>个人感觉比较合理的学习顺序是先学一些技术，然后去著名的开源项目之中印证自己所学，看一下具体的code是怎么写的。pre train的精髓之一就是各种parallel策略，首先需要知道何为3D并行，何为ZeRO，然后再去看项目。</p>
</div></template>
