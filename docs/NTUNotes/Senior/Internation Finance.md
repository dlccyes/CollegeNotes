# International Finance

## 國際收支

### 國際收支表

- 金融帳 FA (financial account)
	- $\Delta$ 金融性資產
- 官方準備帳 ORA (official reserve account)
	- $\Delta$ 國外資產/外匯存底 foreign exchange reserves 
- 經常帳 CA (current account) = $X-M+NFI$
- 資本帳 KA (capital account)

$$CA+FA+KA+ORA=0$$

Assuming $KA=0$, if $CA>0$

- 央行不干預 $\rightarrow ORA=0 \rightarrow FA=-CA<0$
- 央行小干預 $\rightarrow 0<-ORA<CA \rightarrow FA=-CA-ORA<0$
- 央行大干預 $\rightarrow 0<CA<-ORA \rightarrow FA=-CA-ORA>0$

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

