---
layout: meth
---

# Statistics

## Materials

- [OpenIntro_Statistics](OpenIntro_Statistics.pdf)
- [Factfulness](Factfulness.pdf)

## Tables

### Z Table

![[statistics-1.png]]

### T Table

![[statistics-2.png]]

### F Table

![[statistics-3.png]]

## Notation

- $p$ = population
- $\hat{p}$ = sample

## Intro

### Explanatory & Response variable

```go
func (explanatory) response
```

![[statistics-4.jpg]]

### Variables

![[statistics-5.png]]

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
- ![[statistics-6.png]]
- multistage sampling
	- divide into clusters -> sample clusters -> sample within each selected cluster

### Distribution Mode

How are local maxima distributed?

![[statistics-7.png]]

### Mean & Variance

![[statistics-8.png]]

Same mean & variance may stem from very different distributions

![[statistics-9.png]]

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

![[statistics-10.jpg]]

![[statistics-11.jpg]]

![[statistics-12.png]]

![[statistics-13.png]]

### Tables

- Frequency table
- Contingency table
- ![[statistics-14.png]]

### Problems

![[statistics-15.jpg]]

![[statistics-16.jpg]]

## Probability

### Random Variables

- sample space -> number

### Rules

- ![[statistics-17.png]]
- ![[statistics-18.png]]
- ![[statistics-19.png]]
- ![[statistics-20.png]]
- ![[statistics-21.png]]

### Variance vs. Sample Variance

![[statistics-22.png]]

### Correlation

![[statistics-23.png]]

![[statistics-24.png]]

### Problems

![[statistics-25.jpg]]

![[statistics-26.jpg]]

![[statistics-27.png]]

![[statistics-28.png]]

![[statistics-29.png]]

## Distribution

![[statistics-30.png]]

### Normal

![[statistics-31.png]]

Use z-score to standardize

![[statistics-32.png]]

![[statistics-33.png]]

fx-991 es to find probability given z score

<https://www.youtube.com/watch?v=bVdQ7OzGvU0>

- P(z) -> Area less than z value
- R(z) -> Area greater than z value
- Q(z) -> Area between 0 and z value

### Bernoulli

[[Probability#Bernoulli]]

![[statistics-34.png]]

$$Var(X)=E(x-\mu)^2=E(x-p)^2=(1-p)^2p+(0-p)^2(1-p)=p(1-p)$$
### Binomial

![[statistics-35.png]]

### Geometric

![[statistics-36.png]]

### Negative Binomial / Pascal

i.e. Pascal

![[statistics-37.png]]

### Poisson

![[statistics-38.png]]

### Problems

![[statistics-39.jpg]]

![[statistics-40.jpg]]

## Foundation of Inference

![[statistics-41.png]]

### Central Limit Theorem

![[statistics-42.png]]

![[statistics-43.png]]

![[statistics-44.png]]

### Confidence Interval

- Confidence Interval
  - 99%: 2.5758 = 2.576 = 2.58
  - 95%: 1.9600 = 1.960 = 1.96
  - 90%: 1.6449 = 1.645 = 1.65

![[statistics-45.png]]

### Hypothesis Testing

$\alpha$ means the critical p value i.e. significance level

![[statistics-46.png]]

- Type 1 Error = False Positive
	- assuming null -> negative, reject null -> positive
- Type 2 Error = False Negative

Remember to use the p stated in $H_0$ to calculate SE and do hypothesis testing!

![[statistics-47.png]]

e.g.

![[statistics-48.png]]

![[statistics-49.png]]

![[statistics-50.png]]

There is no statistically significant evidence that the fraction of children who are nearsighted is different from 0.08 at the 5% level


## Inference for Categorical Data

### Hypothesis Testing for 1 Porportion

#### Problems

![[statistics-51.png]]

![[statistics-52.png]]

![[statistics-53.png]]

![[statistics-54.png]]

![[statistics-55.png]]

![[statistics-56.png]]

### Hypothesis Testing for 2 Porportion

SE of the difference between 2 porportions

![[statistics-57.png]]

e.g.

![[statistics-58.png]]

Use p = overall p of the 2 porportions to calculate SE when $H_0$ is that 2 porportions has the same mean

![[statistics-59.png]]

![[statistics-60.png]]

#### Problems

![[statistics-61.jpg]]

![[statistics-62.jpg]]

![[statistics-63.png]]

![[statistics-64.jpg]]

### Chi-Square Test

#### One-Way Table

![[statistics-65.png]]

![[statistics-66.png]]

![[statistics-67.png]]

![[statistics-68.png]]

e.g.

![[statistics-69.png]]

![[statistics-70.png]]

![[statistics-71.png]]

#### Two-Way Table

Each cell is an element, and the caluclate the x square as in one-way table, except df = (# of row - 1)(# of col -1)

![[statistics-72.png]]

![[statistics-73.png]]

![[statistics-74.png]]

#### Problems

![[statistics-75.jpeg]]

![[statistics-76.jpg]]

![[statistics-77.png]]

![[statistics-78.png]]

![[statistics-79.png]]

![[statistics-80.png]]

![[statistics-81.png]]

## Inference for Numerical Data

### T test

![[statistics-82.png]]

![[statistics-83.png]]

![[statistics-84.png]]

![[statistics-85.png]]

T-Distribution is used when sample size < 30 to solve the problem of sample standard deviation being inaccurate in small samples when using normal distribution to model.

The bigger the degree of freedom = n - 1, the closer it gets to normal distribution.

![[statistics-86.png]]

![[statistics-87.png]]

T Table

![[statistics-2.png]]

**Comparing 2 means**

![[statistics-89.png]]

**Problem**

![[statistics-90.png]]

![[statistics-91.png]]
![[statistics-92.png]]

### Power of Tests

![[statistics-93.png]]

![[statistics-94.png]]

Basically (the Z of power + the Z of the critical value ) x SE = difference of the mean

e.g.

- Given
	- sample size of both = $n$
	- $\mu$
	- SD
	- difference of mean = 0.5
	- $\alpha$ = 5%
		- P(Z<-1.96) = 2.5%
	- power = 80%
		- P(Z<0.8416) = 80%
- Sol
	- SE=$\sqrt{\dfrac{SD^2}{n}+\dfrac{SD^2}{n}}$
	- (1.96+0.8416)xSE = 0.5
	- See graph

**Problem**

![[statistics-95.png]]

![[statistics-96.png]]

![[statistics-97.png]]

### Comparing Means

![[statistics-98.png]]

![[statistics-99.png]]

### ANOVA & F Test

![[statistics-100.png]]

![[statistics-101.png]]

![[statistics-102.png]]

ANOVA Table

![[statistics-103.png]]

![[statistics-3.png]]

**Problem**

![[statistics-105.png]]

![[statistics-106.png]]

## Linear Regression

### Relationship

![[statistics-107.png]]


![[statistics-108.png]]

![[statistics-109.png]]

![[statistics-110.png]]

![[statistics-111.png]]

![[statistics-112.png]]

![[statistics-113.png]]

### Model

Condition of least square line

![[statistics-114.png]]

![[statistics-115.png]]

![[statistics-116.png]]

![[statistics-117.png]]

![[statistics-118.png]]

![[statistics-119.png]]

![[statistics-120.png]]

![[statistics-121.png]]
![[statistics-122.png]]
