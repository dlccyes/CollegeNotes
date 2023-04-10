# International Finance

## 國際收支

### 國際收支表

- 金融帳 FA (financial account)
	- $\Delta$ 金融性資產
	- 國外金融資產淨額 NFA (net foreign asset) $B_t=a^f_t-a^h_t$
		- $a^f$ = 本國居民持有國外金融資產
		- $a^h$ = 外國居民持有本國金融資產
	- $FA_t=-(B_{t+1}-B_t)$
	- NFA 增加 -> 逆超
- 官方準備帳 ORA (official reserve account)
	- $\Delta$ 國外資產/外匯存底 foreign exchange reserves 
	- $ORA=-(H_{t+1}-H_t)$
	- $H$ = 央行持有國外資產
- 經常帳 CA (current account)
	- sum of
		- imports and exports of goods and services  $X_t-M_t$
		- investment income $X_{FS,t}-M_{FS,t}$
		- unilateral transfers $UT_{IN,t}-UT_{OUT,t}$
			- directly giving/receiving money to/from foreign citizens
	- $CA_t=TB_t+NFI_t$
	- 貿易帳 trade account $TB_t=X_t-M_t$
	- 國外所得淨額 $NFI_t=(X_{FS,t}-M_{FS,t})+(UT_{IN,t}-UT_{OUT,t})$
- 資本帳 KA (capital account)

$$CA+FA+KA+ORA=0$$

Assuming $KA=0$, if $CA>0$

- 央行不干預 $\rightarrow ORA=0 \rightarrow FA=-CA<0$
- 央行小干預 $\rightarrow 0<-ORA<CA \rightarrow FA=-CA-ORA<0$
- 央行大干預 $\rightarrow 0<CA<-ORA \rightarrow FA=-CA-ORA>0$

When $KA=0$

- $CA+FA+ORA=0$
- $CA=-FA-ORA=(B_{t+1}-B_t)+(H_{t+1}-H_t)$
	- 民間國外資產變動 + 官方國外資產變動

### Formulas

$$GNI=GDP+NFI$$

$$GDP=Y=C+I+G+(X-M)$$

$$CA=(X-M)+NFI$$

See [[Macroeconomics#支出面]] & [[Macroeconomics#國民儲蓄 national saving]]

- NFI = net foreign income
- CA = current account
- fiscal deficit is when $T-G<0$

$$\begin{align*}
& GNI\\
&= C+I+G+CA\\
&= C+I+T+(G-T)+CA
\end{align*}$$

$$CA=(GNI-C-I-T)+(T-G)$$

So a bigger fiscal deficit leads to smaller current account

### Problems

![](https://i.imgur.com/puXVVJr.jpg)

![](https://i.imgur.com/YiGNgxv.png)

![](https://i.imgur.com/TEaDMMM.png)

## 經常帳跨期模型

### two-period endowment model

See also [[Macroeconomics#費雪兩期模型]]

**Notations**

- $Y$ = endowment
- $C$ = consumption
- $r$ = interest rate
- $\beta$ = time preference factor

#### Equilibrium

**Problem formulation**

$$\begin{align*}
& \max_{\{C_1,C_2\}}u(C_1)+\beta u(C_2)\\
& s.t. Y_1+\dfrac{Y_2}{1+r}=C_1+\dfrac{C_2}{1+r}
\end{align*}$$

**First order condition**

We know 

$$C_2=Y_2+(1+r)(Y_1-C_1)$$

So

$$u'(C_1)-\beta u'(C_2)(1+r)=0$$

$$u'(C_1)=\beta u'(C_2)(1+r)$$

It's also called the **Euler equation**

#### current account

$$Y_t+(1+r)B_t=C_t+B_{t+1}$$

Assume there's no 央行 so 

$$\begin{align*}
& CA_t=(B_{t+1}-B_t)+(H_{t+1}-H_t)\\
&= B_{t+1}-B_t\\
&= Y_t+rB_t-C_t
\end{align*}$$

In 2-period model $B_1=B_3=0$

$$CA_1=B_2-B_1=B_2=Y_1-C_1$$

$$CA_2=B_3-B_2=-B_2=Y_2+rB_2-C_2$$

$$CA_1=-CA_2$$

只有兩期 so 一二期 current account 順替差相抵

Assume $u(C)=\ln C$

We know

- $u'(C_1)=\beta u'(C_2)(1+r)$
- $C_1+\dfrac{C_2}{1+r}=Y_1+\dfrac{Y_2}{1+r}$

So

- $C_2=\beta C_1(1+r)$
- $(1+\beta)C_1=Y_1+\dfrac{Y_2}{1+r}$
- $C_1=\dfrac{1}{1+\beta}(Y_1+\dfrac{Y_2}{1+r})$
	- $C_1$ is a function of lifetime wealth -> fit [[Macroeconomics#恆常所得假說 permanent income]]
	- MPC (marginal propensity to consume) = $\dfrac{dC_1}{dY_1}=\dfrac{1}{1+\beta}$
- $C_2=\dfrac{\beta}{1+\beta}(1+r)(Y_1+\dfrac{Y_2}{1+r})$
- $CA_1=Y_1-C_1=\dfrac{\beta}{1+\beta}Y_1-\dfrac{1}{(1+\beta)(1+r)}Y_2$
	- $\dfrac{dCA_1}{dY_1}=\dfrac{\beta}{1+\beta}>0$ meaning CA is pro-cyclical


#### Autarky

At $r=r^A$ there's no incentive to borrow oR lend

$$C_1=Y_1$$

$$C_2=Y_12$$

$$\begin{align*}
& u'(C_1)=\beta u'(C_2)(1+r)\\
&= u'(Y_1)=\beta u'(Y_2)(1+r^A)
\end{align*}$$


#### $r$ & $\rho$

If $r=\rho$

- $\beta=\dfrac{1}{1+\rho}=\dfrac{1}{1+r}$
- $u'(C_1)=\beta u'(C_2)(1+r)=u'(C_2)$
- $C_1=C_2=\dfrac{1+r}{2+r}(Y_1+\dfrac{Y_2}{1+r})$
- $CA=Y_1-C_1=\dfrac{1}{2+r}(Y_1-Y_2)$
	- $Y_1>Y_2$ -> current account 順差
		- vice versa
	- if 所得恆常性增加 $dY_1=dY_2$, then $CA$ not changed
	- if 只有當其所得增加 $dY_1>0$ & $dY_2=0$, then $CA$ 增加
		- vice versa

If $\rho>r$ and $Y_1=Y_2=Y$

- $\beta=\dfrac{1}{1+\rho}<\dfrac{1}{1+r}$
- $u'(C_1)=\beta u'(C_2)(1+r)<u'(C_2)$
- $C_1>C_2$
- $C_1+\dfrac{C_1}{1+r}>C_2+\dfrac{C_2}{1+r}=Y+\dfrac{Y}{1+r}$
- $C_1>Y$
- $CA_1=Y-C_1<0$

Vice versa, if $\rho<r$ and $Y_1=Y_2=Y$, $CA_1>0$

### two-period endowment model with government purchases

$$G_t=T_t$$

budget constraint

$$Y_t-T_t+(1+r)B_t=C_t+B_{t+1}$$

lifetime wealth

$$Y_1-T_1+\dfrac{1}{1+r}(Y_2-T_2)=C_1+\dfrac{C_2}{1+r}$$

$$Y_1-G_1+\dfrac{1}{1+r}(Y_2-G_2)=C_1+\dfrac{C_2}{1+r}$$

assume $r=\rho$

$$C_1=C_2=\dfrac{1+r}{2+r}(Y_1-G_1+\dfrac{1}{1+r}(Y_2-G_2))$$

$$\begin{align*}
& CA_t=(B_{t+1}-B_t)+(H_{t+1}-H_t)\\
&= B_{t+1}-B_t\\
&= Y_t+rB_t-C_t-G_t
\end{align*}$$

$$CA_1=Y_1-C_1-G_1=\dfrac{(Y_1-G_1)+(Y_2-G_2)}{2+r}$$

- 政府支出恆常性變動 $dG_1=dG_2$ won't affect current account
- 政府支出短暫變動 $dG_1>dG_2=0$ decreases current account

### two-period model with production & investment

$$Y_t=A_tF(K_t)$$

- $A_t$ = total factor productivity (TFP)
- $F$ is concave
	- $F'>0$
	- $F''<0$
- $K$ = capital

![](https://i.imgur.com/z5svTd7.png)

law of motion for capital

$$K_{t+1}=I_t+(1-\delta)K_t$$

$$I_t=K_{t+1}-(1-\delta)K_t$$

$\delta$ = 折舊率 depreciation rate


budget constraint 

$$\begin{align*}
& Y_t+(1+r)B_t=C_t+I_t+B_{t+1}\\
&= C_t+K_{t+1}-(1-\delta)K_t+B_{t+1}
\end{align*}$$

$K_1>0$, $K_3=0$

period 1

$$\begin{align*}
& Y_1=A_1F(K_1)\\
&= C_1+I_1+B_{2}\\
&= C_1+K_{2}-(1-\delta)K_1+B_{2}
\end{align*}$$

period 2

$$\begin{align*}
& Y_2+(1+r)B_2=A_2F(K_2)+(1+r)B_2\\
&= C_2+I_2\\
&= C_2-(1-\delta)K_2
\end{align*}$$

combined

$$C_2=A_2F(K_2)+(1-\delta)K_2+(1+r)[A_1F(K_1)-C_1-K_{2}+(1-\delta)K_1]$$

optimization problem

$$\max_{\{C_1, C_2, K_2\}}u(C_1)+\beta u(C_2)$$

replace $C_2$ with the function of $C_1$, now we can get 2 first-order condition by partial $C_1$ & partial $K_2$

partial $C_1$

$$u'(C_1)+\beta u'(C_2)[-(1+r)]=0$$

partial $K_2$

$$\beta u'(C_2)[A_2F'(K_2)+(1-\delta)-(1+r)]=0$$

Now we know

$$u'(C_1)=\beta u'(C_2)(1+r)=0$$

$$A_2F'(K_2)=\delta+r$$

since $F''(K_2)<0$, $K_2$ increases when 

- $A_2$ increases
- $\delta$ decreases
- $r$ decreases

![](https://i.imgur.com/NHykM4c.png)

Assume $r=\rho$

![](https://i.imgur.com/GRRWvas.png)

Assume $K_1=K_2=K$

If 恆常正向技術衝擊 $dA_1=dA_2=dA>0$

- $\dfrac{dCA_1}{dA}=-\dfrac{F'(K_2)}{A_2F''(K_2)}dA<0$
- 當期投資增加 -> current account 減少

If 短暫正向技術衝擊 $dA_1>dA_2=0$

- $\dfrac{dCA_1}{dA_1}>0$
- 當期產出增加 > 當期消費增加 -> current account 增加

If 預期未來正向技術衝擊 $dA_2>dA_1=0$

- $\dfrac{dCA_2}{dA_2}=-\dfrac{dC_1}{dA_2}-\dfrac{dI_1}{dA_2}=<0$
- 當期投資 & 消費增加 -> current account 減少

### Infinite Horizon Intertemporal Current Account Model

See [[Macroeconomics#世代家庭決策模型]]

$$U_t=\sum_{s=t}^{\infty} \beta^{s-t}u(C_{s})$$

$$\max_{\{B_{S+1}\}^\infty_{s=t}}\sum_{s=t}^{\infty} \beta^{s-t}u(Y_s+(1+r)B_s-B_{s+1})$$

first-order condition

$$u'(C_s)=(1+r)\beta u'(C_{s+1})$$

no-ponzi-game condition

$$\lim_{T\rightarrow \infty}(\dfrac{1}{1+r})^T B_{t+T-1}\geq 0$$

but no need B in the final period so

橫截條件 transversality condition

$$\lim_{T\rightarrow \infty}(\dfrac{1}{1+r})^T B_{t+T-1}= 0$$

lifetime budget constraint

$$\sum_{s=t}^\infty(\dfrac{1}{1+r})^{s-t}C_s=(1+r)B_t+\sum_{s=t}^\infty(\dfrac{1}{1+r})^{s-t}Y_s$$

Assuming the growth rate of endowment = $g$ i.e. $Y_{t+1}=g\cdot Y_t$, then 


$$\sum_{s=t}^\infty(\dfrac{1}{1+r})^{s-t}Y_s=\sum_{s=t}^\infty(\dfrac{1+g}{1+r})^{s-t}Y_t$$

So $g<r$ otherwise the sum of endowment will be infinite, which is meaningless

Assume $r=\rho$ and $Y_{t+1}=g\cdot Y_t$

$$C_t=C_{t+1}\space \forall t$$
$$\begin{align*}
& \sum_{s=t}^\infty(\dfrac{1}{1+r})^{s-t}C_s=\dfrac{1+r}{r}C_t\\
&= (1+r)B_t+\sum_{s=t}^\infty(\dfrac{1}{1+r})^{s-t}Y_s\\
&= (1+r)B_t+\sum_{s=t}^\infty(\dfrac{1+g}{1+r})^{s-t}Y_t\\
&= (1+r)B_t+\dfrac{1+r}{r-g}Y_t
\end{align*}$$

$$\begin{align*}
& CA_t=Y_t+rB_t-C_t\\
&= Y_t-\dfrac{r}{r-g}Y_t\\
&= \dfrac{-g}{r-g}Y_t<0
\end{align*}$$

Meaning if a country keeps growing with the rate of $g$, there will be an ever-growing current account deficit

$$CA_{t+j}=\dfrac{-g}{r-g}Y_{t+j}=\dfrac{-g}{r-g}(1+g)^jY_t<0$$

The proportion of debt to income will never become 0, explained below

$$\gamma_t=\dfrac{B_t}{Y_t}$$

$$\gamma_{t+1}=\dfrac{B_{t+1}}{(1+g)Y_t}$$

$$\begin{align*}
& CA_{t}=\dfrac{-g}{r-g}Y_{t}=B_{t+1}-B_t\\
&= [(1+g)\gamma_{t+1}+\gamma_t]Y_t
\end{align*}$$

$$\gamma_t=\dfrac{1}{1+g}\gamma_t-\dfrac{g}{(1+g)(r-g)}$$

Assume $\gamma_t=\gamma_{t+1}=\bar{\gamma}$

$$\bar{\gamma}=\dfrac{-1}{r-g}<0$$

## Uncertainty and Current Account

### two-period endowment model with uncertainty

當期確定

$$C_1+B_2=Y_1$$

下一期不確定

$$C^H_2=Y^H_2+(1+r)B_2$$

$$C^L_2=Y^L_2+(1+r)B_2$$

lifetime

$$C_1+\dfrac{C^{H/L}_2}{1+r}=Y_1+\dfrac{Y^{H/L}}{1+r}$$

according to 當期資訊的 expected 下期 consumption

$$E_1(C_2)=\pi C^H_2+(1-\pi) C^L_2$$

optimization problem

$$\max_{C_1,C_2}u(C_1)+\beta E_1[u(C_2)]$$

Knowing $C^{H/L}_2=\text{something}-(1+r)C_1$, we can get the first order condition -> stochastic Euler function

$$u'(C_1)=\beta(1+r)E_1[u'(C_2)]$$

**謹小慎微 prudence**

when $u'(\cdot)$ is convex i.e. $u''<0$ & $u'''>0$

if $u'''>0$, then $C_1<C^{CE}_1$ -> reduce consumption, do precautionary saving

CE = certainty equivalent i.e. having the same expected value as the risk combination but without risk

A prudent person will have a higher saving i.e. current account when facing uncertainty

$$CA_1=Y_1-C_1>Y_1-C^{CE}_1=CA^{CE}_1$$

### two-period endowment model with production & investment with uncertainty

If $A_2$ & $u'(C_2)$ are independent, then $K_2=K^{CE}_2$

If $Cov_1(A_2, C_2)>0$ -> $Cov_1(A_2, u'(C_2))<0$, then $K_2<K^{CE}_2$ i.e. reduce investment

### current account

$$\begin{align*}
& CA_1=B_2-B_1=B_2\\
&= A_1F(K_1)-C_1-K_2
\end{align*}$$

When there is uncertainty in period 2, $C_1<C^{CE}_1$ & $K_2<K^{CE}_2$, meaning a bigger current account

$$CA_1>CA^{CE}_1$$

