---
title: Find a lonely integer
date: 2018-03-11T15:30:00
keywords: Algorithm, C++
---

## Problem description

The problem is the following

> Given an array of `n` integers, find and print the unique element.

For example,

- [1] should return 1
- [1, 1, 2] should return 2
- [0, 0, 1, 2, 1] should return 2

### Condition

Every element in the array occurs exactly twice except for one unique element.

### HackerRank

This problem can be solved in [HackerRank](https://www.hackerrank.com/challenges/ctci-lonely-integer/problem).

## Solution

At first, it seems I can use `Map` so that I count how many times the element appears in the list.
But, there is a better way. Use the `XOR` operation.

`XOR` operation is represented as `^` such as `3 ^ 2`.

```
3 = 011 in binary
2 = 010 in binary

3 ^ 2 = 001 in binary
```

Therefore, `3 ^ 2 = 1`. Also note that `same number ^ same number` will be always 0.

With the information, what if we run `XOR` for each element in the array?

1. Set MASK = 0
2. For each element, a in A
3. MASK ^= a

For example, suppose array is [3, 1, 3]. That is [011, 001, 011] in binary.

- 0 ^ 011 = 011
- 011 ^ 001 = 010
- 010 ^ 011 = 001

Hence, we can find out that 001 is the number that did not appear twice otherwise it's been canceled out.

In code,

```cpp
int findLonelyInteger(const vector<int>& xs) {
  int mask = 0;

  for (auto& x : xs)
    mask ^= x;

  return mask;
}
```
