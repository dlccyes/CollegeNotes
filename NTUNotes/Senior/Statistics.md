---
layout: meth
parent: 
nav_exclude: true
---

# Statistics
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Materials

- [OpenIntro_Statistics](OpenIntro_Statistics.pdf)
- [Factfulness](Factfulness.pdf)

## Notation

- $p$ = population
- $\hat{p}$ = sample

## Intro

### Explanatory & Response variable

```go
func (explanatory) response
```

![](https://i.imgur.com/Ac8pFn0.png)

### Variables

- numeric
	- discrete
	- continious
- categorical
	- ordinal
		- can be sorted
		- e.g. A, B, C ...
	- not ordinal

### Sampling

- simple random sampling
- stratified sampling
	- group into stratas -> sample within each strata (sample unit: case)
	- each strata has its charactersitcs
- cluster sampling
	- divide into clusters -> sample clusters (sample unit: cluster)
- ![](https://i.imgur.com/IhuNKNE.png)
- multistage sampling
	- divide into clusters -> sample clusters -> sample within each selected cluster

### Distribution Mode

How are local maxima distributed?

![](https://i.imgur.com/vCnbAfp.png)

### Mean & Variance

![](https://i.imgur.com/2znHHRs.png)

Same mean & variance may stem from very different distributions

![](https://i.imgur.com/lftwzdZ.png)


### Box Plot

- median = middle number
	- 2 number -> average
- Q1 = middle number between min & median
	- median has 2 number -> middle between min & closest median
- Q3 = middle number between median & max
- IQR = Q3-Q1
- upper whisker = min(max, Q3 + 1.5 x IQR)
- lower whisker = max(min, Q1 - 1.5 x IQR)
- outliers = those ouside of upper & lower whisker

![](https://i.imgur.com/LRKVF1z.png)

![](https://i.imgur.com/Ig7GgLi.png)

![](https://i.imgur.com/2szm57v.png)

### Tables

- Frequency table
- Contingency table
- ![](https://i.imgur.com/oK7iZcp.png)


### Problems

![](https://i.imgur.com/Qj4svwx.jpg)

![](https://i.imgur.com/36szGKv.png)

## Probability

### Random Variables

- sample space -> number

### Rules
- ![](https://i.imgur.com/5a4x3e1.png)
- ![](https://i.imgur.com/on9uchv.png)
- ![](https://i.imgur.com/qfuTErf.png)
- ![](https://i.imgur.com/vwPEhUK.png)
- ![](https://i.imgur.com/aIqsXcu.png)

### Variance vs. Sample Variance

![](https://i.imgur.com/tMXNIMc.png)

### Correlation

![](https://i.imgur.com/JB5qO1A.png)

![](https://i.imgur.com/YH9daeR.png)

### Problems

![](https://i.imgur.com/nfdpxIS.png)

![](https://i.imgur.com/nxsb9w7.png)

![](https://i.imgur.com/KykcPa8.png)
![](https://i.imgur.com/rS0lhjT.png)
![](https://i.imgur.com/A7JyzFY.png)

## Distribution

![](https://i.imgur.com/dOo5U2O.png)

### Normal

![](https://i.imgur.com/hWdrEVk.png)

Use z-score to standardize

![](https://i.imgur.com/ihZT7nX.png)

![](https://i.imgur.com/CKZGxUx.png)

fx-991 es to find probability given z score

<https://www.youtube.com/watch?v=bVdQ7OzGvU0>

- P(z) -> Area less than z value
- R(z) -> Area greater than z value
- Q(z) -> Area between 0 and z value

### Bernoulli

[Bernoulli](../Freshman/Probability#Bernoulli)

![](https://i.imgur.com/SO4MoMP.png)

$$Var(X)=E(x-\mu)^2=E(x-p)^2=(1-p)^2p+(0-p)^2(1-p)=p(1-p)$$
### Binomial

![](https://i.imgur.com/y9yeTJC.png)

### Geometric

![](https://i.imgur.com/giXrvvc.png)

### Negative Binomial / Pascal

i.e. Pascal

![](https://i.imgur.com/Nn9dMLY.png)

### Poisson

![](https://i.imgur.com/j47U8qg.png)

### Problems

![](https://i.imgur.com/C1U91Wc.png)

![](https://i.imgur.com/P5F7I0E.png)

## Foundation of Inference

![](https://i.imgur.com/Vcbgjh5.png)

### Central Limit Theorem

![](https://i.imgur.com/TxDn9Zf.png)

![](https://i.imgur.com/mc3ZuAC.png)

### Confidence Interval


- Confidence Interval
  - 99%: 2.5758 = 2.576 = 2.58
  - 95%: 1.9600 = 1.960 = 1.96
  - 90%: 1.6449 = 1.645 = 1.65

![](https://i.imgur.com/xSqDVH6.png)

### Hypothesis Testing

$\alpha$ means the critical p value i.e. significance level

![](https://i.imgur.com/s3YOPoH.png)

- Type 1 Error = False Positive
	- assuming reject null -> positive
- Type 2 Error = False Negative

![](https://i.imgur.com/WhK2API.png)

e.g.

![](https://i.imgur.com/M22u3Uz.png)

![](https://i.imgur.com/SrI544h.png)
![](https://i.imgur.com/5RB5cxN.png)

There is no statistically significant evidence that the fraction of children who are nearsighted is different from 0.08 at the 5% level
