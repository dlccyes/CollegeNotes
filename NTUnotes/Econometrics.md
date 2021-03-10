## U3 review of statistics
- unbiasedness
  - bias = $E(\hat{\mu_Y})-\mu_Y$
- consistency
  - $\hat{\mu_Y}$ → $\mu_Y$ on large sample
- efficency
  - lower variation → higher efficency
- standard error, SE 
  - std for sample
- $\hat{p}$ 
  - p for sample

![Image](https://i.imgur.com/rgsUJXu.png)
### null hypothesis & alternate hypothesis
![Image](https://i.imgur.com/1uIykec.png)
$E(Y) = \mu_Y$ → null hypothesis  
$E(Y) \neq \mu_Y$ → (two-sided) alternate hypothesis


### p-value
- significance probability  
- $t^{act}=\frac{\hat{\mu_y}-\mu_y}{\sigma_y}$
- 抽樣平均之於理論平均的標準差外的機率 → null hypothesis 正確機率
i.e. $2(1-\Phi(\frac{\hat{\mu_y}-\mu_y}{\sigma_y}))$ if N(0,1)
![Image](https://i.imgur.com/mITFI1p.png)
- 假設抽樣算出的平均，去根據 null hypothesis 的 mean 算出 p-value 很小，i.e. 抽樣平均離理論平均很遠，那麼 null hypothesis 就很有可能是錯誤的，i.e. 理論平均應該不是那樣；  反之，若 p-value 很大，則 null hypothesis i.e. 理論平均很有可能是正確的
- if p-value < 5% → reject the null hypothesis
  - for two-sided, p-value < 0.05 i.e. $|t^{act}|>1.96$ ($\Phi(1.96)=0.975$)
  - for one-sided, p-value < 0.05 i.e. $|t^{act}|>1.64$ ($\Phi(1.64)=0.95$)
  - meaning you would incorrectly reject the null hypothesis once in 20 cases on average

### confidence interval
- $\Phi(1.645)=95\%$
- $\Phi(1.96)=97.5\%$ → 95% confidence interval for two sided
- $\Phi(2.576)=99.5\%$ → 99% confidence interval for two sided

![Image](https://i.imgur.com/wGhdMSF.png)

### 名詞
- size of a test
  - the probability that a test incorrectly rejects the null hypothesis when the null hypothesis is true)
- power of a test
  - the probability that a test correctly rejects the null hypothesis when the alternative is true


## U4 Linear Regression with One Regressor
- degree of freedom
  - variance degree of freedom is n-1 as the sample mean is decided → only n-1 sample values is free
- $Y_i=\beta_0+\beta_1X_i+u_i$
  - $u_i$: factor other than X (error term)
  - if random assignment → $E(u_i|X_i)=0$ → $cov(u_i|X_i)=0$ i.e. $u_i$ is not correlated to X
- SER, standard error of the regression
  - standard error of $u_i$
  - ![Image](https://i.imgur.com/Oh17JUf.png)
- $R^2$
  - fraction of Var(Y) explained by X
    - both X and $u_i$ contributes to Var(Y)
  - ![Image](https://i.imgur.com/Pcm6SBU.png)
- least square assumptions
  - ![Image](https://i.imgur.com/1vfXqkc.png)