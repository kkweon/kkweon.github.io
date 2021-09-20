---
title: Particle Filter Revisit
date: 2017-01-10
---

There are many filters to localize a robot. Most common filters are

| Filter           | Prop 1     | Prop 2      | Prop 3       |
| ---------------- | ---------- | ----------- | ------------ |
| Histogram Filter | Discrete   | Multi Modal | Exponential  |
| Kalman Filter    | Continuous | Uni Modal   | Quadratic    |
| Particle Filter  | Continuous | Multi Modal | Usually good |

## How a Particle Filter work

So how does it work? it works as its name (particle).

1. Guess multiple position for a robot (like 1,000 random guesses of (x, y, direction))
2. When a robot moves/rotates, update every particle with the same motion and rotation
3. For every particle, measure its actual distance to landmarks in the map and compare it to the sensor values (which the actual robot receives)
4. Using the Gaussian, compute the probability how likely that particle measures correctly the robot's position
5. Normalized the weight (by dividing each probability by the sum of every probability)
6. Resample with a replacement

## More explanation about the resampling

Suppose there are five particles. $p_1, ..., p_5$ and each particle has its own probability called weight $W_1, ... W_5$.

$$ W = [0.6, 1.2, 2.4, 0.6, 1.2] $$

Then $P(p_i) = [0.1, 0.2, 0.4, 0.1, 0.2]$. I just divide each element of W by the sum of W.

Since we have the probability, and then we can apply the Resampling Wheel algorithm here.

The point is keep drawing and particles that measures the correct location will survive.
