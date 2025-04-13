---
title: 现代cpp的一些特性
author: zfan
---

## 一. `{}` 初始化

`{}` 初始化具有如下的好处

- 可以指定容器的初始元素，例如`std::vector<int> v{1, 2, 3};`

- 可以用于为非静态数据成员指定默认初始值

```cpp
class Widget {
 private:
  int x{0};
  int y = 0;
  int z(0);  // error
};
```

- 一些不可拷贝对象(`std::atomic` ...) 可以使用`{}` 来初始化

- 最重要的一点，`{}`初始化**不允许内置类型间隐式的变窄转换**

```cpp
double x, y, z;

int t1{x + y + z};  // ERROR
int t2(x + y + z);
```

- 对于**解析问题** (most vexing parse) 有天然的免疫性，因为在c++中有规定，任何可以被解析为declaration的东西就必须解析为declaration，这就会使得以下的语句只能被解析为函数声明:

```cpp
Widget w1(
    10);  // 可以理解为w2函数declaration，也可以理解为definition，定义w2对象
```

这时使用 `{}` 会有天然的优势

---

`()` 初始化的好处

- 可以避免 `{}` 初始化对于 `std::initializer_list` 构造函数的调用

```cpp
class Widget {
 public:
  Widget(int i, bool b);
  Widget(int i, double d);
};

Widget w1(10, true);  // 1
Widget w2{10, true};  // 1
Widget w3(10, 1.1);   // 2
Widget w4{10, 1.1};   // 2
```

可以看出，如果正常的构造函数, `{}` 和 `()` 产生的效果是相同的

```cpp
class Widget {
 public:
  Widget(int i, bool b);
  Widget(int i, double d);
  Widget(std::initializer_list<long double> il);
};

Widget w1(10, true);  // 1
Widget w2{10, true};  // 3
Widget w3(10, 1.1);   // 2
Widget w4{10, 1.1};   // 3
```

`w2` 和 `w4` 会使用新添加的构造函数，即使其他的构造函数更匹配，这个时候会发生类型转换，10, true, 1,1都会被转化为 long double。

甚至普通构造函数和移动构造函数也会被劫持，这里类比vector就可以理解

## 二. `nullptr`

我们在定义空指针的时候，尽量使用nullptr, 因为0和NULL会被推断为int和整形，这在函数重载，或者模板类型推导的时候容易发生错误，对于nullptr，会被推导为std::nullptr_t, 这个类型可以隐式地转化为指向任何内置类型的指针

## 三. `using`

尽量使用using, using有一个吸引人的特性，别名声明可以模板化，但是typedef不行。这样我们在使用模板的时候，会遇到很多复杂的表述

```cpp
struct MyStruct {};

template <typename T>
using MyAllocList = std::list<T, MyAlloc<T>>;
MyAllocList<MyStruct> lw;

template <typename T>
struct MyAllocList1 {
  typedef std::list<T, MyAlloc<T>> type;
};

MyAllocList1<MyStruct>::type lw1;

template <typename T>
struct ListStruct {
  MyAllocList<T> ls;
};

template <typename T>
struct ListStruct1 {
  typename MyAllocList1<T>::type ls;
};
```

## 四. scoped enum

我们要优先使用限域enum，作用有如下

- 可以减少命名污染

- 在其作用域中，枚举名是强类型

- 可以被前置声明; 这是因为cpp会为每个enum选择一个底层的类型用来表示它，通常会选择可以表示这个enum的最小类型，但是并不总是这样，所以c++98的不限域enum总是要求定义，而不是声明，这样可以使得编译器选取最小的类型来表示这个枚举。但是不声明的话，总是不方便的，如果改变了定义，会引起整个系统重新编译。如果我们使用限域enum来进行声明的话，即使cpp文件中的定义发生改变，也不会使得头文件跟着重新编译，c++11解决类型推断的方法是，给定一个默认类型int，我们也可以重写他来制定enum的类型

限域enum避免了命名空间污染，不接受荒谬的隐式类型转换

现在假设有一个需求，我需要保存用户的三种属性，那么我们通常会使用tuple将其存起来，但是对于取值的时候，我们需要通过1，2，3这样的标号访问，这样对于值的语义并不直观

```cpp
using UserInfo = std::tuple<std::string, std::string, std::size_t>;

UserInfo user;
auto val = std::get<1>(user);
```

这个时候有一个比较好用的方法，就是通过enum将名字和字段编号关联起来以避免上述按标号的晦涩访问，那么我们就有了限域和非限域两种写法

```cpp
// 1
enum class UserInfoFields1 {
  uiName,
  uiEmail,
  uiReputation,
};

// 2
enum UserInfoFields2 {
  uiName,
  uiEmail,
  uiReputation,
};
```

对于第二种，我们可以通过下面的方法来访问数据，原理就是其中的枚举名被隐式转换为了`std::size_t`, 其中`std::size_t`是`std::get`模板实参所需要的

```cpp
auto val = std::get<uiName>(user);
```

但是对于第一种，我们如果要访问的话，就会较为冗余，其实就是因为限域enum无法进行隐式的类型转换

```cpp
auto val = std::get<static_cast<std::size_t>(UserInfoFields1::uiEmail)>(user)
```

我们可以实现一个`constexpr`函数，在编译器生效，将其类型转化为`std::size_t`, 但是更一般化地，我们可以直接返回这个枚举的底层类型

```cpp
// std::underlying_type用于获取枚举类型的底层数据类型, 要求枚举已定义
template <typename E>
constexpr typename std::underlying_type<E>::type toUType(
    E enumerator) noexcept {
  return static_cast<typename std::underlying_type<E>::type>(enumerator);
}

// cpp14
template <typename E>
constexpr std::underlying_type_t<E> toUType(E enumerator) noexcept {
  return static_cast<std::underlying_type_t<E>>(enumerator);
}

// auto 返回类型推导
template <typename E>
constexpr auto toUType(E enumerator) noexcept {
  return static_cast<std::underlying_type_t<E>>(enumerator);
}

// 限域写法
auto val = std::get<toUType(UserInfoFields::uiEmail)>(uInfo);
```

## 五. deleted

我们想要将一个函数标记为无法使用，在c++98中会将其标记为`private`, 但是这样存在诸多局限性，使用`deleted` 会有更好的效果

- 任何函数都可以标记为`deleted`，而只有成员函数可被标记为`private`

- `deleted` 可以禁止一些模板的实例化

- deleted函数不能以任何方式被调用，即使你在成员函数或者友元函数里面调用deleted函数也不能通过编译。可以在编译期检测出来，而不是链接期

## 六. override/noexcept

由于cpp中的继承重写有诸多限制，所以对于派生类的函数重写，最好加上`override`，便于编译器检查, `noexcept`也是同理，可以给我们带来更小的开销，尤其是作用于拷贝移动赋值，以及构造析构函数的时候，建议将其声明为 `noexcept`

## 七. constexpr

constexpr可以将一部分在运行时进行的计算转移到编译时进行，这样会给我们的代码带来更快的运行效率，所以我们应当尽可能地在代码中应用constexpr

## 八. const成员函数的线程安全

在cpp中，const成员函数无法修改成员变量，这是const语义保证的，但是经由mutable修饰的成员变量，是可以被const成员函数改变的，这样的话，本身const成员函数就肩负着的线程安全的逻辑意义，就被破坏，所以我们需要人为的去使用mutex等同步原语来保证const线程安全

## 九. 特殊成员函数

特殊成员函数有六个，指的是cpp会自己生成的函数，注意这些函数签名是写死的，不能随意更改传入的参数和返回值的type

如果没有显式声明，他们会在需要的时候才会自动生成。
