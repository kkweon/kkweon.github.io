---
title: this Javascript
date: 2017-11-14
description: What is this in Javascript
---

- [this in a nested function](#sec-1)
- [this in a isolated method](#sec-2)
- [this in constructor](#sec-3)

In Javascript, it refers to the execution context.

Inside a function, it refers to the global object (window) or `undefined` in strict mode

```js
function anyFunction() {
  console.log(this)
}

anyFunction()

/*
    { console: [Getter],
    ...
      setTimeout: { [Function: setTimeout] [Symbol(util.promisify.custom)]: [Function] } }
*/
```

In strict mode, it's undefined for safety

```js
'use strict'

function anyFunction() {
  console.log(this)
}

anyFunction() // undefined
```

# this in a nested function<a id="sec-1"></a>

When there is a nested function, it gets confusing

```js
let numbers = {
  a: 1,
  b: 2,

  sum: function () {
    // `this` -> numbers
    console.log(this === numbers) // true

    function calculate() {
      // `this` -> window or undefined
      return this.a + this.b
    }

    return calculate()
  },
}

let ret = numbers.sum()
console.log(ret) // NaN
```

When it's nested, its execution context is actually in global scope.

In order to fix the problem,

```js
let numbers = {
  a: 1,
  b: 2,

  sum: function () {
    // `this` -> numbers
    console.log(this === numbers) // true

    function calculate() {
      // `this` -> window or undefined
      return this.a + this.b
    }

    // execute calculate with `this` context given
    return calculate.call(this)
  },
}

let ret = numbers.sum()
console.log(ret) // => 3
```

# this in a isolated method<a id="sec-2"></a>

It is easy to mess up `this` with a class method especially when it's isolated. For example `setTimeout(class.method, 0)`

```js
function Animal(type, name) {
  this.type = type
  this.name = name
  this.logInfo = function () {
    console.log(`[${this.type}] ${this.name}`)
  }
}

let myDog = new Animal('dog', 'puppy')
setTimeout(myDog.logInfo, 0) // [undefined] undefined
```

You might have expected it would be "[dog] puppy" but it's not. When it goes to setTimeout, the method becomes isolated from the class. It's acting like a global function

To fix this problem, one might bind this

```js
function Animal(type, name) {
  this.type = type
  this.name = name
  this.logInfo = function () {
    console.log(`[${this.type}] ${this.name}`)
  }
}

let myDog = new Animal('dog', 'puppy')
setTimeout(myDog.logInfo.bind(myDog), 0) // [dog] puppy
```

# this in constructor<a id="sec-3"></a>

It is the most intuitive case. When `this` is used inside a class constructor. It refers to a new instance that will be created.

```js
class Animal {
  constructor(type, name) {
    // this refers to a new object to be created
    this.name = name
    this.type = type
  }

  logInfo() {
    let message = `[${this.type}] ${this.name}`
    console.log(message)
  }
}

let myDog = new Animal('dog', 'puppy')
myDog.logInfo() // [dog] puppy
```

The only time it can go wrong is probably when you miss `new` keyword

```js
class Animal {
  constructor(type, name) {
    // this refers to a new object to be created
    this.name = name
    this.type = type
  }

  logInfo() {
    let message = `[${this.type}] ${this.name}`
    console.log(message)
  }
}

// illegal
// let myDog = Animal("dog", "puppy");
// myDog.logInfo();
```
