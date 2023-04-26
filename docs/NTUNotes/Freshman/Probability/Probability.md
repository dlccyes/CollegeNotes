---
title: Probability
layout: meth
---
# Probability

共同網頁  
<https://sites.google.com/g.ntu.edu.tw/ntuee-probability-108-2/syllabus>

# U1 Foundations

## Probability Space

*Section 1.1 and 1.2 of YG.*  

![[probability-2.png]]

![[probability-3.png]]

![[probability-4.png]]

![[probability-5.png]]

#### Example 1
![[probability-6.png]]
![[probability-7.png]]
![[probability-8.png]]

#### Example 2
![[probability-9.png]]
![[probability-10.png]]

#### Exercise
![[probability-11.png]]

#### Summary
![[probability-12.png]]

## Conditional Probability
![[probability-13.png]]
如果知道 ε 必發生
![[probability-14.jpg]]

### Partition
disjoint
: 交集為空集合

A is a partition(分割) of B   
if A 由聯集為 B 的 disjoint sets 所組成
![[probability-15.png]]
![[probability-16.png]]

### Law of Total Probability

![image-20200616193758986](https://i.loli.net/2020/06/16/at37c9TZeuloGL1.png)

### Bayes' theorem

![image-20200616193719354](https://i.loli.net/2020/06/16/ILo5ejdxmTDOzgQ.png)

## Independence

### mutual independence
for 所有的配對數，交集 = 各自的乘積
![[probability-17.png]]

pairwise independence
: 倆倆獨立
    ![[probability-18.png]]

# U2 Random Variables
$\Phi(\alpha)=F_X(\alpha \sigma)=Pr\{X\leq=\alpha \sigma\}$

### Borel
![[probability-19.png]]

## Discrete Random Variables
### Bernoulli
![[probability-20.png]]

### Binomial
n 次內成功的次數

![[probability-21.png]]

### Geometric

until 第一次成功  
Pascal 在 k=1 的特例  

![[probability-22.png]]

### Pascal

Geometric 的 general 版本  

X = the number of trials until the kth positive occurs

In the n trials, there are k positives, and in the first (n - 1) trials, there are (k - 1) positives  

![[probability-23.png]]

### Poisson
![[probability-24.png]]

## Continuous Random Variables
### Uniform
![[probability-25.png]]

### Guassian
![[probability-26.png]]
for X~N(0,1), $f_X(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$  
→ standard Guassian RV  

#### Q function

complementary of F~X~

![image-20200611235620651](https://i.loli.net/2020/06/11/jf3BvMoUNPt4I69.png)

#### standard normal distribution table

![img](https://i.loli.net/2020/06/16/xC9B5dm4gqONVLy.png)

![Untitled](https://i.loli.net/2020/06/16/eB3urDpRjmw7PH4.png)

### Exponential
<!-- $f_X(x)=\lambda e^{-\lambda x}$ if x >= 0 -->
Erlang 在 n=1 的特例
![[probability-27.png]]

### Erlang
Exponential 的 general 版本
![[probability-28.png]]

### Transformation
![[probability-29.png]]

## RV PDF 統整
*discrete*
![[probability-30.png]]
*continuous*
![[probability-31.png]]

# U3 Expectation
## Expected Value

### E[X] = complementary CDF

![image-20200617230129402](https://i.loli.net/2020/06/17/psabIy9Q7F8o3H4.png)

![image-20200617230237055](https://i.loli.net/2020/06/17/4LKGRn7kO5FSbsj.png)

![image-20200617230200730](https://i.loli.net/2020/06/17/4Bic8L63oYlVXq7.png)

### discrete
![[probability-32.png]]
### continuous
![[probability-33.png]]

### Jensen's inequality
![[probability-34.png]]

### Markov inequality
![[probability-35.png]]
不懂

### law of total expectation

![[probability-36.png]]

## Variance and Moments
### discrete Var
![[probability-37.png]]
### continuous Var
![[probability-38.png]]

![[probability-39.png]]

![[probability-40.png]]

### MGF
$M_X(t):=E[e^{tX}]$
![[probability-41.png]]
![[probability-42.png]]
![[probability-43.png]]

chernoff bond

### summary

![[probability-44.png]]

# 期中公式統整

![[probability-45.png]]
![[probability-46.png]]

*discrete PDF*
![[probability-30.png]]
*continuous PDF*
![[probability-31.png]]
*discrete E*
![[probability-32.png]]
*continuous E*
![[probability-33.png]]
*discrete Var*
![[probability-51.png]]
*continuous Var*
![[probability-52.png]]

# 期末公式統整

discrete

![image-20200617125438070](https://i.loli.net/2020/06/17/xLVpvae9FmizXsS.png)

continuous

![image-20200617125533563](https://i.loli.net/2020/06/17/eY947D5SCQr23zl.png)

![image-20200618003221730](https://i.loli.net/2020/06/18/N9qusHof3TyitQx.png)

![image-20200618003244195](https://i.loli.net/2020/06/18/YB2FZnaLO3r9mq1.png)

discrete

![image-20200617121408732](https://i.loli.net/2020/06/18/LOvA3iCVdwzXbMP.png)

continuous

![image-20200617121405162](https://i.loli.net/2020/06/18/LNli9ObqwDRVz3d.png)

![image-20200618003911252](https://i.loli.net/2020/06/18/kFEG6CeBzsO5tVi.png)

![image-20200618003936179](https://i.loli.net/2020/06/18/qRvhYS48HIocewg.png)

![image-20200618004024897](https://i.loli.net/2020/06/18/NmgODtKo4URyIrp.png)

![[probability-53.png]]

![image-20200618004126028](https://i.loli.net/2020/06/18/Wt76krqYOFEBcdX.png)

![image-20200618004203303](https://i.loli.net/2020/06/18/VhOTL2sP6IWvUma.png)

![image-20200618004224367](https://i.loli.net/2020/06/18/TnK9sGOVXIkWwZM.png)

![image-20200618004234901](https://i.loli.net/2020/06/18/sa5b2xIyFcLC4el.png)

![image-20200618004315618](https://i.loli.net/2020/06/18/cTyqBpde6MHZ78a.png)

# U4 Multiple Random Variables
## joint relations
### joint PMF
只考慮其中一個變數  
![[probability-54.png]]
![[probability-55.png]]

### covariance

![[probability-56.png]]

### i.i.d.
![[probability-57.png]]

### independent → Cov=0
![[probability-58.png]]

### MMSE & LMMSE

MMSE
![[probability-59.png]]

LMMSE
![[probability-60.png]]

$\rho_{X,Y}$
![[probability-61.png]]

### correlation efficient
![[probability-62.png]]

### covariance matrix
![[probability-63.png]]
![[probability-64.png]]

### correlation
![[probability-65.png]]

### jointly Gaussian
![[probability-66.png]]
n 維   

## conditional relations
### conditional pdf
![[probability-67.png]]

### a general law of probability
![[probability-68.png]]

### law of total expectation
![[probability-69.png]]

#### towering property
![[probability-70.png]]

### law of total variance

![[probability-71.png]]

# U5

### sum

![[probability-72.png]]

MGF of sum

![[probability-73.png]]

![image-20200611031418943](https://i.loli.net/2020/06/11/DULA3p5OaHTmIlt.png)

### Mean Squared Error (MSE)

![image-20200604180113723](https://i.loli.net/2020/06/04/q7DydZvAhPF9fKs.png)

### Markov Inequality (Chebyshev & Chernoff)

![image-20200604174046332](https://i.loli.net/2020/06/04/JmPRKa9Sbvek3Nl.png)

<!-- Chebyshev & Chernoff -->

### Weak Law of Large Numbers

use Chebyshev inequality
![image-20200604180421368](https://i.loli.net/2020/06/04/lg4eT3hSuFNfqpQ.png)

![image-20200604180325807](https://i.loli.net/2020/06/04/UQ4iTOckjW8pSBA.png)

### faster convergence

![image-20200605140503741](https://i.loli.net/2020/06/05/mdLoA7vUXeC3pYw.png)

![image-20200605135918351](https://i.loli.net/2020/06/05/fJxcdqiryvERAoW.png)

### notations of convergence

![image-20200609021027133](https://i.loli.net/2020/06/09/obl7BdjVExzM3uk.png)

### proposition 4

![[probability-74.png]]

### $f(n)=o(g(n))$

表示 $\lim_{n→\infty}\frac{f(n)}{g(n)}=0$ i.e. $f(n)\ll g(n)$ when n is large

### $f(n)=\Theta(G(n))$

表示 $\lim_{n→\infty}\dfrac{f(n)}{g(n)}=constant$

### Central Limit Theoreom, CLT

$\sqrt{(n)}(\bar{X_n}-\mu)\xrightarrow{d}N(0,\sigma^2)$
no matter what distribution $X_i$ follow

![image-20200610220150058](https://i.loli.net/2020/06/10/hcaeIV9zqXbRKS5.png)

#### Lindeberg CLT

$\frac{離均差大於一個值的\space row\space 的\space variance\space 加總}{每個\space row\space 的\space variance\space 加總}=0\space as\space n→\infty$ 

![}image-20200611121246792](https://i.loli.net/2020/06/11/MnS1Nqc8k7aXjwZ.png)

> Lindeberg's condition suggests that for each row of the triangular array, no component $X_{n,i} $can“dominate”others in terms of the second moment (energy).

> Hence, a folklore version of CLT can be stated as follows：
>
> The sum of a large number of ==small independent== effects, at an appropriate scale, is ==approximately normal== .

不用 i.i.d.，但要 mutually independent & 擾動很小

#### CLT for random vectors

![image-20200611122440606](https://i.loli.net/2020/06/11/KMI7zuZcToDWGmx.png)

#### Normal Approximation

![image-20200611231503435](https://i.loli.net/2020/06/11/Y1idIynFPfhRjrG.png)

#### De Moivre-Laplace Formula

估計 discrete RV 時常會有大誤差

normal approximation of Binomial

![image-20200611232357512](https://i.loli.net/2020/06/11/qDJl3eaBh6AwMN7.png)

分母就是 $\sigma$
就是 CLT but upper 加 $\dfrac{1}{2}$ lower 減 $\frac{1}{2}$

#### Berry-Esseen (rate of convergence)

![image-20200611234554792](https://i.loli.net/2020/06/11/EtlSWGemCzZH1cu.png)

#### approximation tail

![image-20200611235257734](https://i.loli.net/2020/06/11/MIlY2ZevnNf6AcJ.png)

from Unit 2

![image-20200611235855808](https://i.loli.net/2020/06/11/B7MxwjKfTVn41Z6.png)

#### CLT vs. Chernoff bond

CLT 在 deviation 大時很不準 (over optimistic)
Chernoff bond 的 slope 都跟實際值差不多，但都會高估 (因為是 upper bond)

# Unit 6

### hypothesis testing

#### False Alarm & MISS

![image-20200618112546523](https://i.loli.net/2020/06/18/aUdqKBvQwZIC7cF.png)

Type 1：FA  
Type 2：MISS

<!-- #### prior distribution 事前機率 -->

![image-20200613161816368](https://i.loli.net/2020/06/13/oUuyz4O2JF6rqPc.png)

#### Bayes' rule

![image-20200613161317319](https://i.loli.net/2020/06/13/yXzB9kvACdr8ZqH.png)

#### posterior distribution 事後機率

![image-20200613161903326](https://i.loli.net/2020/06/13/eDK3PZcy2dbhW98.png)

maximum a posteriori rule, MAP rule

#### MAP Rule

posteri，事後機率

![](https://i.loli.net/2020/06/17/OKoB316XQAeRNTU.png)

![image-20200617221903410](https://i.loli.net/2020/06/17/Kpn5vPeGhy2ajfB.png)

minimize $P_{ERR}=P[A_1|H_0]P[H_0]+P[A_0|H_1]P[H_1]$

![image-20200613234002115](https://i.loli.net/2020/06/13/t9VHTrJNcvf26qO.png)

#### ML Rule

prior，不知事後機率 → 假設都相等

![image-20200617213657471](https://i.loli.net/2020/06/17/8V5WJ4kAIylDGf3.png)

MAP but P[H~0~]=P[H~1~]

![image-20200613234030433](https://i.loli.net/2020/06/13/BR9CVIJDgyO4z7N.png)

likelihood function

#### binary's MAP & ML

![image-20200613234509485](https://i.loli.net/2020/06/13/793obfynjuOa5VQ.png)

#### Minimum Cost test

![image-20200614205702732](https://i.loli.net/2020/06/14/2Ww1NjeSmXUzOC4.png)

C~01~=cost of MISS  
C~10~=cost of FA

![[probability-75.jpg]]

#### likelyhood ratio

![image-20200613234800474](https://i.loli.net/2020/06/13/3BFv8wMt4CcYxZz.png)

![image-20200613235142105](https://i.loli.net/2020/06/13/HOYaZu9F8bPX6CB.png)

![image-20200613235807440](https://i.loli.net/2020/06/13/yM6EtzQxo9wBkJ2.png)

#### Neyman-Pearson

$P_{FA}=\epsilon$ 時最好

![image-20200613235843857](https://i.loli.net/2020/06/13/BiKw1dtyJCxlzjG.png)

---

#  HW4

### 4.(b)

![[probability-76.jpg]]

https://www.youtube.com/watch?v=TdosRkgUchQ

### 5.

![[probability-77.png]]

https://www.probabilitycourse.com/chapter5/5_3_2_bivariate_normal_dist.php

![[probability-78.png]]

https://en.wikipedia.org/wiki/Normally_distributed_and_uncorrelated_does_not_imply_independent#A_symmetric_example

$\int_0^2 x^2 dx$

# HW5

### 1. 2017 Final

![image-20200614133220087](https://i.loli.net/2020/06/14/EDoc6KLZ1TPp3u4.png)

##### ![image-20200614133245312](https://i.loli.net/2020/06/14/hHD5ZYfkJQoy23X.png)

![image-20200614133311750](https://i.loli.net/2020/06/14/43OiURjx7AlLefQ.png)

![image-20200614135104052](https://i.loli.net/2020/06/14/mwQDTleACLP8WdE.png)

![image-20200614135900127](https://i.loli.net/2020/06/14/FJzrW8tIy27QSbw.png)

![image-20200614140243268](https://i.loli.net/2020/06/14/cD2jgHE1mUIAZPM.png)

![image-20200614141022618](https://i.loli.net/2020/06/14/OnAzvtIUXkq5cS6.png)

![image-20200614141047982](https://i.loli.net/2020/06/14/MvFX5bzLyWod8YS.png)

### 2.

#### 9.4.7 (c)(d)

![image-20200614035641035](https://i.loli.net/2020/06/14/P2dzVk6XU9MIAfT.png)

![image-20200614112724355](https://i.loli.net/2020/06/14/RGclYU9OkdsMLj1.png)

 ![image-20200614112844963](https://i.loli.net/2020/06/14/tjRZQWlFBdkIHYw.png)

#### 9.4.9

![image-20200614035528030](https://i.loli.net/2020/06/14/FgLHlQbxeTtk5jv.png)

要用 W 做 CLT → 需 W 之 $\mu$ & $\sigma$ → 需 Y 之 $\mu$ & $\sigma$ → 需 X 之 $\mu$ & $\sigma$

![image-20200614035946757](https://i.loli.net/2020/06/14/LywlDCMKTNcds23.png)

![image-20200614040006678](https://i.loli.net/2020/06/14/PTAOMZlsjnXWBua.png)

![image-20200614040019238](https://i.loli.net/2020/06/14/qkpZyjWt6zIb7Ta.png)

​	

### 3.

![image-20200614141251151](https://i.loli.net/2020/06/14/Q15SFTPZsBc9IJ7.png)

![image-20200614141247564](https://i.loli.net/2020/06/14/tlRc8Lepw4zV3GF.png)

### 4. 11.1.1

![image-20200614193104689](https://i.loli.net/2020/06/14/UgdfW1xSV69FQoD.png)

![image-20200614193135967](https://i.loli.net/2020/06/14/dJvoEiNaFOnQkc1.png)

### 5. 11.1.4

![image-20200614193430493](https://i.loli.net/2020/06/14/tDo4Z3aOs1wQpmv.png)

![image-20200614193523465](https://i.loli.net/2020/06/14/3AlxmK2tOZ51eYR.png)

![image-20200614193534332](https://i.loli.net/2020/06/14/418d29TokCIQnru.png)

![image-20200614193600397](https://i.loli.net/2020/06/14/THlUrC5vKfPQLOy.png)

![image-20200614193610034](https://i.loli.net/2020/06/14/Stck6VNXwsFYL8T.png)

