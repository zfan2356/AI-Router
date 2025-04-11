---
title: 类型推导
author: zfan
createTime: 2025/04/11 22:07:39
permalink: /cpp/type/
tags:
  - cpp
---

## 一. 模板类型推导

模板类型推导主要使用以下模板和调用来解释

```cpp
template <typename T>
void f(param_type param);

f(expr);
```

主要还是几个规则的记忆，具体的底层原理可能在后面的章节会有讲解，对于模板类型推
导，主要是以下几种模板定义以及三种实参定义的全连接组合

```cpp
// 如果形参是ref
// 规则: 传入ref会先忽略ref, 然后实参与param type进行模式匹配来决定T
template <typename T>
void ref_f(T& param);

// 如果形参是ref-to-const
// 规则: 传入的实参会忽略const和ref, 然后
template <typename T>
void const_ref_f(const T& param);

// 如果形参是通用引用
// 规则: 如果expr是左值, T和param type都会被推导为左值引用
// 如果expr是右值, 就正常推导
template <typename T>
void universal_ref_f(T&& param);

// 形参既不是指针也不是引用
// 规则: 无论传递什么, param都会成为它的一份copy, 同时也会有上面
// 规则的一些特性, 顶层const会去除
template <typename T>
void f(T param);

int main() {
  int x = 10;
  const int cx = 20;
  const int& crx = 30;

  ref_f(x);    // T: int, param: int&
  ref_f(cx);   // T: const int, param: const int&
  ref_f(crx);  // T: const int, param: const int&

  const_ref_f(x);    // T: int, param: const int&
  const_ref_f(cx);   // T: int, param: const int&
  const_ref_f(crx);  // T: int, param: const int&

  universal_ref_f(x);    // T: int&, param: int&
  universal_ref_f(cx);   // T: const int&, param: const int&
  universal_ref_f(crx);  // T: const int&, param: const int&
  universal_ref_f(29);   // T: int, param: int&&

  f(x);    // T: int, param: int
  f(cx);   // T: int, param: int
  f(crx);  // T: int, param: int
  const char* const ptr = "hello, world!";
  f(ptr);  // T: const char*, param: const char*
}
```

另外数组和函数会退化为指针

总结：

- 模板类型推导时，ref实参会去掉ref
- 对于通用引用的推导，左值实参会被特殊对待‘
- 对于传值类型推导，`const/volatile`实参会被认为是`non-const/non volatile`
- 数组或者函数名实参会退化为指针，除非他们被用于初始化引用

## 二. auto类型推导

auto类型推导有很多和模板类型推导一致

```cpp
// 以下一些和模板类型推导一致
auto x = 27;          // int
const auto cx = x;    // const int
const auto& crx = x;  // const int&

auto&& uref1 = x;    // int&
auto&& uref2 = cx;   // const int&
auto&& uref3 = crx;  // const int&
auto&& uref4 = 27;   // int&&

const char name[] = "hello, world!";
auto arr1 = name;   // const char*
auto& arr2 = name;  // const char (&)[14]
```

但是也有一些不同，例如如下的一些x，都会被初始化为int

```cpp
int x1 = 123;
int x2(123);
int x3 = {27};
int x4{27};
```

但是auto就不行

```cpp
auto x1 = 123;    // int
auto x2(123);     // int
auto x3 = {123};  // std::initializer_list<int>
auto x4{123};     // std::initializer_list<int>

template <typename T>
void f(T param);
f({123});  // 无法编译通过

template <typename T>
void initial_list_f(std::initializer_list<T> init_list);
initial_list_f({123});  // 可以正常推导
```

c++14允许auto用于函数返回值并会被推导，而且c++14的lambda函数也允许在形参声明中使
用auto

总结：

- `auto`类型推导通常和模板类型推导相同，但是`auto`类型推导假定花括号初始化代
  表`std::initializer_list<int>`, 而模板类型推导就不行.

## 三. decltype

作用是获取类型

```cpp
const int i = 0;               // decltype(i): const int
bool f(const std::string& s);  // decltype(s): const std::string&, decltype(f):
                               // bool(const std::string&)

struct Point {
  int x, y;
};  // decltype(x): int

std::string s;
if (f(s)) {
}  // decltype(f(s)): bool

std::vector<int> v(12);  // decltype(v[0]): int&
```

decltype有一个比较重要的作用就是在模板中标识返回值类型, 但是c++14可以自动推导
lambda表达式返回值，编译器将会从函数实现中推导出函数的返回类型。

```cpp
template <typename Container, typename Index>
auto authAndAccess(Container& c, Index i) -> decltype(c[i]) {
  return c[i];
}
```

但是在之前的auto推导中我们得知，推导会去掉表达式的引用性ref, 针对我们这个函数而
言，返回的`c[i]` 就无法作为左值来使用，这个时候我们就需要使用decltype

```cpp
template <typename Container, typename Index>
decltype(auto) authAndAccess(Container& c, Index i) {
  return c[i];
}
```

这个时候我们`c[i]` 就可以返回 `T&` 类型，当然不光是返回值，在前一部分讨论的auto
初始化表达式类型推导的地方，也可以使用`decltype(auto)` 来"强化"auto的类型推导

但是这里带来了一些问题，我们通过传递引用的方式传递非常量左值引用，因为返回一个引
用允许用户来修改容器。这意味着我们无法给函数传递右值容器，因为右值无法绑定到左值
上，除非是const左值。

如果我们想让函数接受右值，重载是一个不错的选择

```cpp
template <typename Container, typename Index>
decltype(auto) authAndAccess(Container& c, Index i) {
  return c[i];
}

template <typename Container, typename Index>
decltype(auto) authAndAccess(Container&& c, Index i) {
  return c[i];
}
```

这里我们并不知道container中的类型是什么，那么对于一个未知对象使用传值通常会造成
不必要的拷贝，对程序的性能有极大的影响，所以这里可以使用`std::forward()`实现通用
引用，具体的内容将在后面讲解, 但是目前可以知道的是，这样可以保证传入的参数c具有
之前的左值or右值的特性，避免无意义的拷贝内存开销

```cpp
template <typename Container, typename Index>
decltype(auto) authAndAccess(Container&& c, Index i) {
  return std::forward<Container>(c)(i);
}
```

但是decltype也会产生一些意想不到的结果，例如对于左值表达式，decltype就会返回左值
引用

```cpp
decltype(auto) f1() {
  int x = 0;
  … return x;  // decltype(x）是int，所以f1返回int
}

decltype(auto) f2() {
  int x = 0;
  return (x);  // decltype((x))是int&，所以f2返回int&
}
```

显然`f2`会导致悬垂引用，引来ub
