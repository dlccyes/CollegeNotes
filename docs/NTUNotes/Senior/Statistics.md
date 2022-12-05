---
layout: meth
---

# Statistics

## Materials

- [OpenIntro_Statistics](OpenIntro_Statistics.pdf)
- [Factfulness](Factfulness.pdf)

## Tables

### Z Table

![](https://i.imgur.com/DvDssQa.png)

### T Table

![](https://i.imgur.com/8DW7Q2v.png)

### F Table

![](https://i.imgur.com/XTlfABn.png)

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

![](https://i.imgur.com/UzVm6QQ.png)

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
- Q1 = middle number in upper half
	- median has 2 number -> middle between min & closest median
- Q3 = middle number in lower half
- IQR = Q3-Q1
- upper whisker = min(max, Q3 + 1.5 x IQR)
- lower whisker = max(min, Q1 - 1.5 x IQR)
- outliers = those ouside of upper & lower whisker

![](https://i.imgur.com/LRKVF1z.png)

![](https://i.imgur.com/Ig7GgLi.png)

![](https://i.imgur.com/2szm57v.png)

![](https://i.imgur.com/bRkSP59.png)

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

![](https://i.imgur.com/eJofiqq.png)

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
	- assuming null -> negative, reject null -> positive
- Type 2 Error = False Negative

Remember to use the p stated in $H_0$ to calculate SE and do hypothesis testing!

![](https://i.imgur.com/WhK2API.png)

e.g.

![](https://i.imgur.com/M22u3Uz.png)

![](https://i.imgur.com/SrI544h.png)

![](https://i.imgur.com/5RB5cxN.png)

There is no statistically significant evidence that the fraction of children who are nearsighted is different from 0.08 at the 5% level


## Inference for Categorical Data

### Hypothesis Testing for 1 Porportion

#### Problems

![](https://i.imgur.com/gJgHnJ6.png)

![](https://i.imgur.com/Rf1kPyF.png)

![](https://i.imgur.com/BGffftJ.png)

![](https://i.imgur.com/uwZ0pw0.png)

![](https://i.imgur.com/vmkgnIG.png)

![](https://i.imgur.com/F42niiZ.png)

### Hypothesis Testing for 2 Porportion

SE of the difference between 2 porportions

![](https://i.imgur.com/bdsBrOx.png)

e.g.

![](https://i.imgur.com/rxm7jDL.png)

Use p = overall p to calculate SE when $H_0$ is that 2 porportions are the same

![](https://i.imgur.com/JNsoHU2.png)

![](https://i.imgur.com/sx8AWQq.png)

#### Problems

![](https://i.imgur.com/gSNWj6k.jpg)

![](https://i.imgur.com/F2OASkY.jpg)

![](https://i.imgur.com/eFbpxMw.png)

![](https://i.imgur.com/wgkSbb4.png)

![](https://i.imgur.com/3fYHo33.png)

### Chi-Square Test

#### One-Way Table

![](https://i.imgur.com/wYDG1N8.png)

![](https://i.imgur.com/4ZaLYOm.png)

![](https://i.imgur.com/jF26QVP.png)

![](https://i.imgur.com/j8bwWiE.png)

e.g.

![](https://i.imgur.com/2ARpVJf.png)

![](https://i.imgur.com/dUQuAnx.png)

![](https://i.imgur.com/4lZua5b.png)

#### Two-Way Table

Each cell is an element, and the caluclate the x square as in one-way table, except df = (# of row - 1)(# of col -1)

![](https://i.imgur.com/waDQmej.png)

![](https://i.imgur.com/Yfcgj3q.png)

![](https://i.imgur.com/v0YYTbJ.png)

#### Problems

![](https://i.imgur.com/wMncy25.jpg)

![](https://i.imgur.com/syW7ltW.jpg)

![](https://i.imgur.com/yWU8G2i.png)

![](https://i.imgur.com/AH57HtV.png)

![](https://i.imgur.com/J5FOQ8y.png)

![](https://i.imgur.com/hra9vfv.png)

![](https://i.imgur.com/nWAcVzo.png)

## Inference for Numerical Data

### T test

![](https://i.imgur.com/bakAKjX.png)

![](https://i.imgur.com/HyEHVDg.png)

![](https://i.imgur.com/q4FdDoP.png)

![](https://i.imgur.com/pZEIm4a.png)

![](https://i.imgur.com/4Qg5Ii6.png)

T Table

![](https://i.imgur.com/8DW7Q2v.png)

**Comparing 2 means**

![](https://i.imgur.com/u8VH7GF.png)

![](https://i.imgur.com/0nIEbrY.png)

e.g.

![](https://i.imgur.com/AwZT4bN.png)
![](https://i.imgur.com/IYSiqEa.png)

### Power of Tests

![](https://i.imgur.com/GY3hdWV.png)

![](https://i.imgur.com/DYDDKtA.png)

e.g.

![](https://i.imgur.com/UfZOExw.png)

![](https://i.imgur.com/xrHV7qo.png)

![](https://i.imgur.com/4phDyIU.png)

### Comparing Means

![](https://i.imgur.com/K7thRg6.png)

![](https://i.imgur.com/yHu3TKU.png)

### ANOVA & F Test

![](https://i.imgur.com/TDfDdU5.png)

![](https://i.imgur.com/3Po8mF5.png)

![](https://i.imgur.com/ASTdiOY.png)

ANOVA Table

![](https://i.imgur.com/JLCiA4t.png)

![](https://i.imgur.com/XTlfABn.png)

## Linear Regression

### Relationship

![](https://i.imgur.com/lTcEDef.png)


![](https://i.imgur.com/yz5i0m1.png)

![](https://i.imgur.com/uRrqtcP.png)

![](https://i.imgur.com/Fl7pvtr.png)

![](https://i.imgur.com/rUBG2Tj.png)

![](https://i.imgur.com/DXrQpGM.png)

![](https://i.imgur.com/PIbmPxv.png)

### Model

Condition of least square line

![](https://i.imgur.com/xmTL4Hb.png)

![](https://i.imgur.com/5zztUTW.png)

![](https://i.imgur.com/2Kjq4Sv.png)

![](https://i.imgur.com/3lxdYDA.png)

![](https://i.imgur.com/xMksLNE.png)

![](https://i.imgur.com/UTq0S47.png)

![](https://i.imgur.com/7czqBlD.png)

![](https://i.imgur.com/VLoadfL.png)
![](https://i.imgur.com/ssUrtwT.png)
