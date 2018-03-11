---
title: Shuffle an array
date: 2018-03-10T19:00:00
keywords: Algorithm, Python
---

If you have an array and you want to shuffle it, how would you implement this?

## O(n<sup>2</sup>)<a id="sec-1"></a>

The first algorithm is a simple brute force algorithm.

For i from 1 to n,

1.  Copy the array to a temporary variable.
2.  Select an element from temp
3.  Assign it to array[i]
4.  Delete the element from temp

```python
import random
from copy import deepcopy


def shuffle(array: [int]) -> None:
    temp = deepcopy(array)

    i = 0
    while len(temp) > 0:
        idx = random.choice(range(len(temp)))
        array[i] = temp[idx]
        i += 1
        del temp[idx]
```

## O(n)<a id="sec-2"></a>

However, there is a [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%25E2%2580%2593Yates_shuffle#The_modern_algorithm) algorithm that can shuffle with O(n).

Suppose there is an array of length n.

For i from n - 1 to 1,

1. Set j = random int between 0 and i (inclusive)
2. swap(a[j], a[i])

```python
def shuffle(array: [int]) -> None:

    for i in range(len(array) - 1, 0, -1):
        j = random.choice(range(i + 1))
        array[i], array[j] = array[j], array[i]
```
