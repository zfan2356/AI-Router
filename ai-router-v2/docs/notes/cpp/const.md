---
title: Const 语义
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /cpp/const/
tags:
  - cpp
---

### 一. `const`修饰变量

我们来看如下代码

```cpp
class T {
 private:
  int i;
  int* ptr;

 public:
  T(int i_, int j_) : i(i_), ptr(new int(j_)) {}
  T(const T& t) : i(t.i), ptr(new int(*t.ptr)) {}
  ~T() { delete ptr; }
};

void output(const T* t) {}

void output(T* const t) {}
```

这里的问题主要是`const T* t` 与`T* const t` 有什么区别?

> 这两种写法的区别在于`const`修饰语义.

- `const T* t` 代表的`t`是一个指向`T`对象的指针, 指针指向的对象是常量, 不能通过该指针来改变对象的属性, 意味着**对象不可变**.
- `T* const t`代表的`t`是一个常量指针, 指针本身不可变, 但是可以通过指针来改变其指向的对象`T`的属性, 意味着**指针不可变**.

当然我们也可以追求对象和指针同时不可变, 写为`const T* const t`.

### `const`修饰函数

`const`修饰的函数被称为常量函数, 是指不会修改所属类的成员变量的函数, 作用是提供类内部属性的安全访问, 保证了"只读"的行为.

```cpp
class T {
 private:
  int i;
  int* ptr;

 public:
  T(int i_, int j_) : i(i_), ptr(new int(j_)) {}
  T(const T& t) : i(t.i), ptr(new int(*t.ptr)) {}
  ~T() { delete ptr; }

  // 常成员函数
  int getValue() const { return this->i; }
  // 成员函数
  int getValue() {
    this->i++;
    return this->i;
  }
};
```

当我们生成一个常量对象时, 其就可以调用常量函数. 常量对象**只能调用常量函数**, 普通对象则都可以调用.

有一条性质比较好用, 当出现函数重载的时候, 常量对象会优先调用常量方法, 普通对象则会优先调用普通方法.

```cpp
const T t1(1, 2);
// 输出 1
std::cout << t1.getValue() << '\n';

T t2(10, 20);
// 输出 10
std::cout << t2.getValue() << '\n';
```
