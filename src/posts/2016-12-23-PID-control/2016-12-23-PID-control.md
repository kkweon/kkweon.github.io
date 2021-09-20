---
title: Smoothing Path & PID Control
date: 2016-12-23
keywords: python, self driving car
---

It would be awkward if the self-driving car only make a turn at the perfect angle of 90 degree. So, we need a smooth path algorithm.

## Smoothing Path Algorithm

1. $X_i$ denotes each state
2. Set $Y_i = X_i$
3. Optimize $$\min\ (X_i - Y_i)^2 + \alpha \cdot \min\ (Y_i - Y_{i+1})^2$$
4. Solve it using the gradient descent
5. Update $$Y_{new} = Y_i + \alpha(X_i - Y_i) + \beta(Y_{i+1} - Y_i)$$

The first portion of the update formula is to make a new path($Y_i$) close to the original path($X_i$). The second portion is to make each point($Y_i$) to close to its next point($Y_{i+1}$).

## PID Control

Assume the car has to drive from (0, 10) to (10, 0) on (X,Y) coordinates world. So, the car should drive down close to the x-axis (y=0). How do we control the steering in order to make y = 0?

You should measure a CTE(Cross Track Error), and the CTE is the y coordinate of the state in this example.

### P

It stands for "proportional"

$$\alpha = - \tau \cdot \text{cte}$$

### I

It stands for "integral"
There could be a mechanical error in steering.
So, if the CTE does not decrease even after long period of time, there needs to be an adjustment in steering.
So, we need the integral portion to the steering formula

$$ \alpha = - \tau_p \* cte - \tau_i \sum cte $$

### D

It stands for "differential"
When there is only "proportional," it will keep overshooting the x-axis and oscillating. So, we need an extra term to adjust the steering and finally reach the marginal stable state.
We just need to add a differential term
$$ \alpha = - \tau*p \* cte - \tau_d \frac{d}{dt} cte $$
where $$\frac{d}{dt} cte = \frac{cte_t - cte*{t-1}}{\Delta t}$$

## Summary of PID

$$\alpha = - \tau_p cte - \tau_d \frac{d}{dt}cte - \tau_i\sum cte$$

## How to find $\tau$

One question still remains. How are we going to find all these $\tau$.

The answer is a "twiddle" algorithm a.k.a "coordinate ascent."

Here is the twiddle algorithm.

```python
init p = [0, 0, 0]
dp = [1, 1, 1]
best_err = run(p)
while sum(dp) > 0.00001:
    for i in range(3):
        p[i] = p[i] + dp[i]
        err = run(p)
        if err < best_err:
            best_err = err
            dp[i] *= 1.1
        else:
            p[i] = p[i] - 2*dp[i]
            err = run(p)
                if err < best_err:
                    best_err = err
                    dp[i] *= 1.1
                else:
                    p[i] += dp[i] # back to the original value
                    dp[i] *= 0.9
```

## Summary

- Learn how to create smooth path from discrete path
- Any robotics requires
  - Planner
  - Smoother
  - Controller (where PID control kicks in)
