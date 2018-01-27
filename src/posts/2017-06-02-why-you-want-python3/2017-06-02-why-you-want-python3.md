---
title: Why you want Python 3.6 over Python 2
date: 2017-06-02
---

When I say Python 3, I am referring to Python 3.6 because Python 3.6 is the current latest version as of today. For Python2, of course I'm referring to Python 2.7.x (it's scheduled to discontinue by 2020). But, I'm not talking about the unicode support or integer division or print function difference because you should already know this.


## F-String

In Python 3.6, a new feature called "F-string" was introduced.
This is so much cleaner(readable) than `print("{} is a Friday!".format(today)`

```python
today = "2017-06-02"
print(f"{today} is a Friday!")
```


## Number Underscores

Have you ever counted the number of digits in your code?
In Python3.6, an underscore is allowed to annotate a thousand seperator.

```python
one_million = 1_000_000
one_billion = 1_000_000_000
```


## Variable Annotations

Python is a dynamically typed language. It means you don't have to declare a variable type. But, it alsot means you need to create your own way of type-checking. Sometimes, when I use other people' codes, I am so confused when there is no docstring for which parameters that its function requires.

```python
def add_integers(num1: int, num2: int):
    assert type(num1) == int and type(num2) == int, "Integer is required"
    return num1 + num2
```

You can use `mypy your_python_file.py` to do a quick type-check as well.


## Science Community

This is not a feature nor about Python 3.6. But rather it's a statement.
Science community plays a very important role in Python.

I believe the science stack of Python's one of the reasons how Python became this popular.

What people don't know is

the following great science libraries have already moved to Python 3.
Most of these libraries have already stopped supporting Python 2.
If not, they have stopped adding new features in Python 2.

Who cares? It's going to discontinue in 2020 anyway.

* iPython
* Jupyter Notebook
* Pandas
* Matplotlib
* Sympy
* CPython
* and [More](http://www.python3statement.org/)


## Conclusion

I missed many many more important features (such as Lazy Evaluations, Unicode Support, Better Async, Better exception, Better OOP, etc), but I hope you understand why you should stop using Python 2.

If you have to touch the legacy codebase written in Python2, yes you can use Python2.

If you start a new project, please do use Python 3.
