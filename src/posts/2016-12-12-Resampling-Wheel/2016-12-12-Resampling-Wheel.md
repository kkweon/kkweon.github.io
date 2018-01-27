---
title: Resampling Wheel Algorithm
date: 2016-12-12
keywords: python, udacity
---

Particle Filter들을 P 분포에 대해서 Random Sampling 하는 알고리즘
완전한 랜덤보다 X, Y와 비슷한 값을 준다

## Resampling Wheel Pseudocode
```
index = U[1, N]
beta = 0
max_w = max(w)

for i = [1, N]:
    beta = beta + U[0, 2*max_w]

    while beta > w[index]:
        beta = beta - w[index]
        index = (index + 1) % N

    select p[index]
```


## Resample Wheel in Python
```python
p3 = []

beta = 0
index = random.randint(0, N-1)

for i in range(N):
    beta += random.uniform(0, 2*max(w))
    while w[index] < beta:
        beta = beta - w[index]
        index = ( index + 1 ) % N
    p3.append(p[index])

```
