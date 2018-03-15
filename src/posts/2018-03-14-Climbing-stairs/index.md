---
title: Climb stairs
date: 2018-03-14T11:41:52
keywords: Dynamic Programming
---

n개의 계단을 올라야 한다. 한번에 한칸 혹은 두칸의 계단을 올라갈 수 있다.

n개의 계단을 오르려면 몇가지 경우의 수가 존재하는가?

이 문제는 [LeetCode](https://leetcode.com/problems/climbing-stairs/description/) 에서 풀 수 있습니다.

## 예제<a id="sec-1-1"></a>

```
Input: 2
Output: 2
```

2개의 계단을 오르는 방법은 2가지가 존재한다.

1.  1 step + 1 step
2.  2 steps

```
Input: 3
Output: 3
```

3개의 계단을 오르는 법은 3가지 방법이 존재한다.

- 1 step + 2 steps
- 2 steps + 1 step
- 1 step + 1 step + 1 step

## 해설<a id="sec-1-2"></a>

거꾸로 생각해보면 쉽다. `n` 번째 계단을 올라설 차례라고 생각해보자. `n` 번째 계단을 올라서기 위해서는

-   `n - 1` 번째 계단에서 한칸 올라서거나
-   `n - 2` 번째 계단에서 두칸 올라서는 방법이 있다.

즉,

$$T(n) = \text{n개의 계단을 올라가는 방법}$$

이라면,

$$T(n) = T(n - 1) + T(n - 2)$$

로 간단하게 구할 수 있다.

즉, 피보나치 수열임을 알 수 있다. 피보나치 수임을 알면 iterative하게 푸는 방법이 가장 효율적이다.

```python
def climb_stairs(n: int) -> int:
    """피보나치 수열을 구하는 식과 동일"""

    a = b = 1

    for _ in range(n):
        a, b = b, a + b

    return a
```

위 식까지 어떻게 오게 되었는지 생각해보면 `n` 과 `n - 1` 을 담을 변수 2개가 필요하다. 즉, `a` 와 `b` 가 그 역할을 한다.

위 for loop을 설명하기 위해 우선 표를 그려본다.

next a 는 현재 `b` 의 값이 들어가게 되고 next b 는 현재 `a + b` 의 값이 된다.

| n | next a | next b | a | b |
|--- |------ |------ |--- |--- |
| 1 | 1      | 2      | 1 | 1 |
| 2 | 2      | 3      | 1 | 2 |
| 3 | 3      | 5      | 2 | 3 |
| 4 | 5      | 8      | 3 | 5 |

따라서 `n` 이 주어지면 `next a` 의 값을 반환하면 정답이 된다.

```python
for _ in range(n):
    next_a, next_b = b, a + b
```

`next a` 는 값이 들어온 `a` 값이기 때문에 `a` 가 정답이 된다.
