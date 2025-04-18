---
title: move 语义
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /cpp/move/
tags:
  - cpp
---

## 一. 右值

- 纯右值

包含字面值: `1, 2, true`, 表达式: `a + b`, 以及函数返回的非引用对象:

```cpp
A func() {
  A a;
  return a;
}
```

- 将亡值

返回 `T&&` 的函数调用

```cpp
A&& func() { return A(); }
```

转换为`T&&` 的类型转换表达式

```cpp
static_cast<T&&>(t);
```

以及 `std::move(t)`

那么右值引用其实就是对右值的引用，给右值一个续命的“引用”，使得它不会立刻被析构

## 二. 为什么需要move

move将当前的值转化为将亡值，然后进行移动构造，避免了拷贝构造带来的性能开销

## 三. 其他

1. 万能引用

2. 引用折叠

3. 完美转发
