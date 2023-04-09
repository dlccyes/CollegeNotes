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
	- $CA_t=X_t-M_t+NFI_t$
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

$$GNDI=GDP+NFI$$

$$GDP=Y=C+I+G+(X-M)$$

$$CA=(X-M)+NFI$$

See [[Macroeconomics#支出面]] & [[Macroeconomics#國民儲蓄 national saving]]

- GNDI = gross national disposable income
- NFI = net foreign income
- CA = current account
- fiscal deficit is when $T-G<0$

$$\begin{align*}
& GNDI\\
&= C+I+G+CA\\
&= C+I+T+(G-T)+CA
\end{align*}$$

$$CA=(GNDI-C-I-T)+(T-G)$$

So a bigger fiscal deficit leads to smaller current account

## 經常帳跨期模型

### 兩期原賦模型

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

$$CA_2=B_2-B_2=-B_2=Y_2+rB_2-C_2$$

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

### 兩期原賦模型 with government purchases

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

### 兩期模型 with production & investment

$$Y_t=A_tF(K_t)$$

- $A_t$ = total factor productivity (TFP)
- $F$ is concave
	- $F'>0$
	- $F''<0$
- $K$ = capital

law of motion for capital

$$K_{t+1}=I_t+(1-\delta)K_t$$

$\delta$ = 折舊率

$$\begin{align*}
& Y_t+(1+r)B_t=C_t+I_t+B_{t+1}\\
&= C_t+K_{t+1}-(1-\sigma)K_t+B_{t+1}
\end{align*}$$

