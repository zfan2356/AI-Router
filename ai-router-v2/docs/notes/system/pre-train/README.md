---
title: README
createTime: 2025/04/11 22:28:04
permalink: /system/03fa33xq/
---

一个有关Pre Train的专题合集，目前的TODO LIST:

## 一. 技术杂谈

- [LLM Parallel Strategy](ai-router-v2/docs/notes/system/pre-train/model_parallel.md): 什么是数据并行/张量并行/流水线并行，以及3D混合并行

- [Pipline Parallel](ai-router-v2/docs/notes/system/pre-train/pp_communication.md)：总结pp的通信和调度算法，从零手搓一个pp调度库，集合1F1B调度以及DualPipe

- [ZeRO]():

## 二. 源码剖析

- DeepSpeed

  - [launcher+Initialize](ai-router-v2/docs/notes/system/pre-train/deepspeed/deepspeed01.md)
  - [engine]()

- Megatron

- DeepSpeed+Megatron

个人感觉比较合理的学习顺序是先学一些技术，然后去著名的开源项目之中印证自己所学，看一下具体的code是怎么写的。pre train的精髓之一就是各种parallel策略，首先需要知道何为3D并行，何为ZeRO，然后再去看项目。
