---
layout: meth
parent: Miscellaneous
---

# M/M/c queue

## Intro

- Memoryless interarrival time
- Memoryless service time
- c servers
	- e.g. 1 queue for c ticket windows

## Total response time

$$\dfrac{C(c, \lambda/\mu)}{c\mu-\lambda}+\dfrac{1}{\mu}$$

- $C(c, \lambda/\mu)$ = Erlang's C formula = [Probability of waiting](#Probability%20of%20waiting)
- $c$ = # of jobs
- $\mu$ = processing rate
- $\lambda$ = arrival rate

![[mmc-queue-1.png]]

## Probability of waiting

Erlang's C formula

Probability for a job to be sent into queue (instead of being served immediately).

![[mmc-queue-2.png]]

server utilization $\rho=\dfrac{\lambda}{c\mu}$ (arrival rate / processing rate)

## References

- <https://en.wikipedia.org/wiki/M/M/c_queue>
- <https://www.youtube.com/watch?v=Xu6zJHXxzoM>