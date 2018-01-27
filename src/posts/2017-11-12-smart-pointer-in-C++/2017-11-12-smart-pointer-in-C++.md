---
title: Smart Pointer in C++
date: 2017-11-12
---


# What are smart pointers?

- It is a pointer with automatic memory management

There are 3 smart pointer types in modern C++17.

- Unique pointer
- Shared pointer
- Weak pointer

The bread-and-butter ones are **unique pointer** and **shared pointer**.


## Unique pointer

``` c++
#include <memory>

// (preferred way)
std::unique_ptr<T> ptr = std::make_unique<T>();

// (another way)
std::unique_ptr<T> ptr(new T());

// when ptr goes out of scope,
// it will be deleted automatically
```

- Use `make_unique<T>` because it will raise an exception if some goes wrong in constructing `T`.

### Usage
- It can be used just like a regular pointer.

```c++
ptr->method();
```


## Shared pointer
- `unique_ptr` is called *unique* because there is only one pointer holding the address
- If it needs to be shared, use `shared_ptr`

There is a reference counter internally.

If one pointer is added to refer the same content, a reference counter increases.
If each pointer goes out of scope, a reference counter decreases.

When there is no reference, its memory will be released.

### Usage
- It's same as `unique_ptr`

```c++
std::shared_ptr<T> var = std::make_shared<T>();
// ok
std::shared_ptr<T> another = var;
```

## Weak pointer
- It's like a `shared_ptr` but no reference counter is changed.

```c++
std::weak_ptr<T> var;
{
  std::shared_ptr<T> shared = std::make_shared<T>();

  // ok
  var = shared;
}
// `shared` will be deallocated
// var becomes undefined
```
