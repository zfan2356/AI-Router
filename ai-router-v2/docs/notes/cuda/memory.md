---
title: Memory Model
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /cuda/memory/
tags:
  - cuda
---

## 一. Memory Consistency Model

内存一致性模型其实是存在于cpp中的概念, 假设当前有两个共享变量 $x$, $y$, 初始值均为0，两个thread均执行以下操作：

```cpp
// Thread 1
x = 1;      // 写操作 W1
int a = y;  // 读操作 R1

// Thread 2
y = 1;      // 写操作 W2
int b = x;  // 读操作 R2
```

如果没有内存一致性模型约束，编译器可能会对指令进行重排序，或缓存未及时同步，导致一些矛盾，例如因为thread1和thread2的视角顺序不同，导致出现`a = 0, b = 0`的结果，比较反直觉。

内存模型可以通过操作可见性顺序，来禁止某些矛盾的结果，例如在顺序一致性模型中，所有线程看到的操作顺序必须一致，必须按照某个全局顺序执行，**也就是说要保证每个线程的操作在全局顺序中保证其线程内的顺序**

在上述例子中就是，W1先于R1, W2先于R2，这样就不可能导向`a = 0, b = 0`的结果

所以在cpp中，将内存模型分为三类`Relaxd, Release, Acquire`

- `std::memory_order_relaxed`: 允许重排序

- `std::memory_order_release`: 保证该写操作前的所有操作对其他线程可见。

- `std::memory_order_acquire`: 保证该读操作后的所有操作能看到该读操作前的所有写操作。

`acquire-release`语义可以实现上述的内存一致性约束

```cpp
// Thread1
x.store(1, std::memory_order_release);      // W1: 保证之前的操作对 Thread2 可见
int a = y.load(std::memory_order_acquire);  // R1: 保证能看到 Thread2 的写操作

// Thread2
y.store(1, std::memory_order_release);      // W2
int b = x.load(std::memory_order_acquire);  // R2
```

`release-acquire`的协同作用可以视为内存屏障机制：

- `release`: “发布”一组数据到内存中

- `acquire`: “获取”这组数据，保证后续的操作能够正确的读取

接下来回到CUDA中的内存一致性模型，具体讲解可以看[PTX文档](https://docs.nvidia.com/cuda/pdf/ptx_isa_8.7.pdf)的第八节
