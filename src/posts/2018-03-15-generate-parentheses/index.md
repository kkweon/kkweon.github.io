---
title: Generate parentheses
date: 2018-03-15T22:37:06
keywords: python, backtracking
---

Given `n`, write a function to generate all combinations of well-formed parentheses. This problem can be solved in [LeetCode](https://leetcode.com/problems/generate-parentheses/description/).

## Examples<a id="sec-1-1"></a>

```
n = 1
["()"]

n = 2
["(())", "()()"]

n = 3
["((()))", "(()())", "(())()", "()(())", "()()()"]
```

## Solution<a id="sec-1-2"></a>

If the problem is to find the number of the combination, this is a Catalan number sequence problem. However, we need to print all combinations. Therefore, this is a typical backtracking search problem because we need to explore every possible outcomes.

Let's look at the code first.

```python
from typing import List


def generate_parenthesis(n: int) -> List[str]:
    """Generate all combinations of well-formed parentheses

    Example:
        >>> generate_parenthesis(3)
        ['((()))', '(()())', '(())()', '()(())', '()()()']
    """

    def backtrack(current: str,
                  left: int,
                  right: int,
                  result: List[str] = []) -> List[str]:

        if len(current) == 2 * n:
            result.append(current)

        if left < n:
            backtrack(current + "(", left + 1, right)

        if right < left:
            backtrack(current + ")", left, right + 1)

        return result

    return backtrack("", 0, 0)
```

One way of tackling this problem is to track the number of open(left) parentheses and the number of close(right) parentheses.

Suppose

- **`left`:** the number of open parentheses
- **`right`:** the number of close parentheses

Then,

- We know we can have `n` open parentheses and `n` close parentheses
- Therefore, add a open parenthesis as long as `left < n`.
- We can only add a closing parenthesis when `right < left`.

Notice that we don't break the validity of the parentheses as long as we close parentheses when `right < left`.
