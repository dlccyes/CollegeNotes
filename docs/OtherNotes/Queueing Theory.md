---
layout: meth
parent: Miscellaneous
---

# Queueing Theory

## Notations

![[queue-8.png]]

- M = markov process i.e. poisson distribution
	- memoryless
- D = deterministic i.e. constant
- G = general i.e. any distribution
- A/B/1 = queue with arrival rate in A distribution, processing rate in B distribution, and 1 server
- a(t) = PDF of interarrival times
- A(t) = CDF of interarrival times
- b(t) = PDF of service times
- B(t) = CDF of service times

![[queuing-notation.png]]

## M/D/1 queue

- poisson arrival rate i.e. exponential interarrival time
- constant service time

## M/M/1 queue

- $W$ = mean time spending in the system
- $W_q$ = mean time spending in the queue
- $L$ = mean number in the system
- $L_q$ = mean number in the queue

![[queue-9.png]]

![[queue-10.png]]

## M/M/c queue

- poisson arrival rate i.e. exponential interarrival time
- poisson i.e. exponential service time
- c servers
	- e.g. 1 queue for c ticket windows
- infinite size queue

### Total response time

$$\dfrac{C(c, \lambda/\mu)}{c\mu-\lambda}+\dfrac{1}{\mu}$$

- $C(c, \lambda/\mu)$ = Erlang's C formula = [Probability of waiting](#Probability%20of%20waiting)
- $c$ = # of jobs
- $\mu$ = mean processing rate
- $\lambda$ = mean arrival rate

![[mmc-queue-1.png]]

### Probability of waiting

Erlang's C formula

Probability for a job to be sent into queue (instead of being served immediately).

![[mmc-queue-2.png]]

server utilization $\rho=\dfrac{\lambda}{c\mu}$ (arrival rate / processing rate)

$C=1$ when $c=1$ -> M/M/1 queue

### References

- <https://en.wikipedia.org/wiki/M/M/c_queue>
- <https://www.youtube.com/watch?v=Xu6zJHXxzoM>

## M/H_k/1 queue

Hyperexponential service time

![[queue-5.png]]

![[queue-6.png]]

![[queue-11.png]]

![[queue-12.png]]

![[queue-13.png]]

### Waiting time

Assume there are k kinds of customers in the queue, each with $p_i$ of probability and an exponential distributed service time with mean $\mu_i$, where $i = 1,2,...,k$. The arrival rate for both is the same, a exponential distribution with mean $\lambda$.

mean processing rate = 1 / mean processing time

$$\bar{\mu}=\dfrac{1}{p_1(1/\mu_1)+p_2(1/\mu_2)}$$

$$\rho=\dfrac{\lambda}{\bar{\mu}}$$

$$a(t)=\lambda e^{-\lambda t}$$

$$A^*(-s)=\dfrac{\lambda}{\lambda-s}$$

$$b(t)=\sum_{i=1}^k p_i\mu_ie^{-\mu_it}$$

$$B^*(s)=\sum_{i=1}^k\dfrac{p_i\mu_i}{s+\mu_i}$$

$$k_0=\int^\infty_0 e^{-\lambda t}dB(t)=\sum_{i=1}^k\dfrac{p_i\mu_i}{\lambda+\mu_i}$$

$$\pi_0=1-\rho$$

$$\pi_0=\pi_0k_0+\pi_1k_0$$

$$\pi_1=\pi_0\dfrac{1-k_0}{k_0}$$

$$\pi^q_0=\pi_0+\pi_1=\dfrac{1-\rho}{k_0}=\dfrac{\bar{\mu}-\lambda}{k_0\bar{\mu}}$$

$\overline{W}_q(\lambda)$ is not the mean queuing time!!!!!

$$\overline{W}_q(\lambda)=\dfrac{\pi_0^q}{\lambda}=\dfrac{1-\rho}{k_0\lambda}=\dfrac{\bar{\mu}-\lambda}{k_0\bar{\mu}\lambda}$$

when k = 1, $\pi_0^q=1+\rho$, $\bar{W_q}(\lambda)=\dfrac{(1+\rho)(1-\rho)}{\lambda}=\dfrac{(\mu+\lambda)(\mu-\lambda)}{\mu^2\lambda}=\dfrac{1}{\lambda}-\dfrac{\lambda}{\mu^2}$

$$W^-_q(t)=\lambda\left(1-\lambda\sum^k_{i=1}\dfrac{p_i}{\mu_i+\lambda}\right)\bar{W_q}(\lambda)e^{\lambda t}=Fe^{\lambda t}$$

$$\overline{W}_q^-(s)=\dfrac{F}{\lambda-s}$$

where $F=\lambda\left(1-\lambda\sum^k_{i=1}\dfrac{p_i}{\mu_i+\lambda}\right)\dfrac{\bar{\mu}-\lambda}{k_0\bar{\mu}\lambda}$

$$\begin{align*}
& \overline{W}_q(s)=\dfrac{\overline{W}^-_q}{A^*(-s)B^*(s)-1}\\
&= \dfrac{\dfrac{F}{\lambda-s}}{\dfrac{\lambda}{\lambda-s}\sum_{i=1}^k\dfrac{p_i\mu_i}{s+\mu_i}-1}
\end{align*}$$

Do inverse laplace transform on $\overline{W}_q$ to get $W_q(t)$.

Integrate on $W_q(t)$ to get the mean waiting time in queue.

### Example

![[queue-1.png]]

![[queue-14.png]]

![[queue-15.png]]

![[queue-3.png]]

![[queue-4.png]]

![[queue-7.png]]
