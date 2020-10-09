# 	電路學

powered by $\LaTeX$
## 共同網頁  
http://cc.ee.ntu.edu.tw/~ntueecircuit/ 
## Ch5
### Superposition

**step 1**  
make independent current source 斷路 (i=0)  
**step 2**  
make independent voltage source 短路 (v=0)  

### Thevenin & Norton
打開 terminal → 算 V~OC~ → 算 R~TH~  
==算 R~TH~ or 時 independent voltage source 短路 independent current source 斷路==

if have only dependent souces
: 在 terminal 自由接上一個 voltage/current source

if have both independent & dependent sources
: 打開 terminal → 算 V~OC~ → terminal 接上電線算 I~SC~ → $R_{TH}=\frac{V_{OC}}{I_{SC}}$  

### source exchange
![](https://i.imgur.com/MRqLp2f.png)


## Ch6
### Capacitance
$Q=CV \\i=C\frac{dV_C}{dt}$
### Inductance
$\phi=Li \\V_L=L\frac{di_L}{dt}$

## Ch7
### first order

**step 1**  
$v(t) = K_1 + K_2e^{-\frac{t}{\tau}}$  
$i(t) = K_1 + K_2e^{-\frac{t}{\tau}}$  

**step 2**  
in _t = 0_  
電容形同斷路  
電感形同短路  

**step 3**  
in _t = 0+_  
電容形同 independent voltage source  
$v_C(0+)=v_C(0-)$  
電感形同 independent current source  
$i_L(0+)=i_L(0-)$  

**step 4**  
in _t=$\infty$_ (_>5$\tau$_)  
電容形同斷路  
電感形同短路  

**step 5**
$R_{TH}$ 為以電容/電感為 terminal 的等效電阻  
$\tau=R_{TH}C$  
$\tau=\dfrac{L}{R_{TH}}$  

### second order
$s^2Ke^{st}+2\zeta \omega_0sKe^{st}+{\omega_0}^2Ke^{st}$  
$s^2+2\zeta \omega_0s+{\omega_0}^2=0$

V(t)'s characteristic
: $s^2+\frac{1}{RC}s+\frac{1}{LC}=0$

i(t)'s characteristic
: $s^2+\frac{L}{R}s+\frac{1}{LC}=0$

(這兩個可直接從題目帶 KVL KCL 推得)

overdamped
: 相異實根
  $x(t)=K_1e^{s_1t}+K_2e^{s_2t}$

underdamped
: 虛根
  $s=\alpha\pm\beta i$
  $x(t)=e^{\alpha t}(K_1cos(\beta t)+K_2sin(\beta t))$

critically damped
: 重根
  $x(t)=K_1e^{st}+K_2te^{st}$

## Ch8

==**注意正負號!!!**==
### x+jy 公式
if $x+jy=re^{j\theta}$
$$
\left\{
\begin{array}{lr}
r=\sqrt{x^2+y^2} \\
\theta=\tan^{-1}{\dfrac{y}{x}}\\
x=rcos\theta ，y=rsin\theta\\
\dfrac{1}{e^{j\theta}}=e^{-j\theta}
\end{array}
\right.
$$

### phasor
<!-- \usepackage{steinmetz} \phase{a}$ -->

$Xcos(\omega t+\theta)=X\angle \theta$

$\frac{V_M\angle \theta_V}{I_M\angle \theta_i}=Z\angle \theta_Z=R+jX$
→ $Z=\sqrt{R^2+X^2}，\theta_Z=tan^{-1}\frac{X}{R}$
reverse:  
$R=\sqrt{Z}cos(\theta_Z)$
$X=\sqrt{Z}sin(\theta_Z)$

so
$$
\left\{
\begin{array}{ln}
j=1\angle 90^{\circ}\\
-j=1\angle -90^{\circ}\\
1=1\angle 0^{\circ}
\end{array}
\right.
$$


### Z&Y
![](https://i.imgur.com/D7ON7T1.png)
$$
\left\{
\begin{array}{lr}
Z_R=R \\
Z_L=j\omega L \\
Z_C=\frac{j}{\omega C}=\frac{1}{j\omega C} \\
\end{array}
\right.
$$

$Y=\dfrac{1}{Z}$（單位： S (siemens)）  
並聯 → 相加
串聯 → 如同電阻並聯  

## Ch9
$cos(\theta_i)cos(\theta_V)=\frac{1}{2}[cos(\theta_i-\theta_V)-cos(\theta_i+\theta_V)]$

$rms = \dfrac{max}{\sqrt{2}}$  
電器 120V 是 rms  

### Max average power
![](https://i.imgur.com/5JdGAdl.png)


### Power Factor
$P = V_{rms}I_{rms}cos(\theta_V-\theta_i)$
$pf=\dfrac{P}{V_{rms}I_{rms}}=cos(\theta_z)$


### Complex Power
![](https://i.imgur.com/5mGK9QJ.png)
$S=V_{rms}I^*_{rms}\\=V_{rms}\angle\theta_VI_{rms}\angle-\theta_i\\=V_{rms}I_{rms}\angle(\theta_V-\theta_i)\\=P+Qj$
$$
\left\{
\begin{array}{ln}
P=V_{rms}I_{rms}cos(\theta_V-\theta_i)\\
Q=V_{rms}I_{rms}sin(\theta_V-\theta_i)\\
\end{array}
\right.
$$

$$
\left\{
\begin{array}{ln}
C：\theta_V-\theta_i=-90^{\circ}→leading\\
R：\theta_V-\theta_i=0^{\circ}\\
L：\theta_V-\theta_i=90^{\circ}→lagging
\end{array}
\right.
$$

S單位：VA  
P單位：W  
Q單位：VARs

## Ch12

==20200529-1 有 3 題習題講解 沒看==

==注意算 transfer function 時不一定直接是電阻相除，可能有並聯的情況==
e.g.

<img src="https://i.loli.net/2020/06/03/fYrITBm42CP6qS9.png" width=300 style="float:left">



![](https://i.imgur.com/TFOWUds.png)



### resonant

虛部為零時

RL : $\omega_0=\dfrac{R}{L}$  
RLC : $\omega_0=\dfrac{1}{\sqrt{LC}}$

### quality factor
![](https://i.imgur.com/o0BZip2.png)
#### series  
![	](https://i.imgur.com/LfQocNW.png)
$|V_S|=Q|V_C|\\|V_S|=Q|V_L|$

$BW=\dfrac{\omega_0}{Q}=\dfrac{R}{L}$

#### parallel

![](https://i.imgur.com/3TaScgq.png)
$|I_S|=Q|I_C|\\|I_S|=Q|I_L|$

$BW=\dfrac{\omega+0}{Q}=\dfrac{1}{RC}$

### Bandwidth

$BW=\dfrac{\omega_0}{Q}$

series：$BW=\dfrac{\omega_0}{Q}=\dfrac{R}{L}$
parallel：$BW=\dfrac{\omega_0}{Q}=\dfrac{1}{RC}$

![](https://i.imgur.com/AxdbbMH.png)


$\omega_{max}=\omega_0\sqrt{1-\dfrac{1}{2Q^2}}$

### parallel RLC with winding resistance
![](https://i.imgur.com/UKyMBm2.png)
R~w~ = 電感內電阻
$R_{par} = \dfrac{L}{CR_w}$

### Bode Plot

zeros : 分子
poles : 分母

#### 一次

##### dB

弄成這種形式 $\dfrac{100(j\omega+100)}{(j\omega+1)(j\omega+10)(j\omega+50)}$

$j\omega+x$

1. 若為分子 → 在 x 前 +0，x 後 +20dB/decade (x 為轉折頻率)
2. 若為分母 → 在 x 前 -0，x 後 -20dB/decade
3. 算出各區間的斜率
4. 帶值算出最左邊的點的 magnitude，再用 20log(magnitude) 換成 dB
5. 從那個點依各區間斜率劃出整個 bode plot
6. 在 $\dfrac{W}{2}$ 、$W$ 、$2W$ 算出真實的值，做修正 (W為轉折頻率)

##### phase

$j\omega+x$

1. 若在分子，則 +45$^{\circ}$/decade， $\omega = x$ 時通過 45$^{\circ}$ ，直到 90$^{\circ}$
2. 在分母則 -45$^{\circ}$/decade，直到 -90$^{\circ}$
3. （若只有 $j\omega$ (x=0) 則分子 → 一直 90$^{\circ}$；分母 → 一直 -90$^{\circ}$）
4. 把漸進線疊起來
5. 在 $0.1W$、$\dfrac{W}{2}$ 、$2W$ 、$10W$ 算出真實的值，做修正

####  二次

![image-20200604003630548](https://i.loli.net/2020/06/04/dkZcwy1Y57lUPXJ.png)
![image-20200604003656882](https://i.loli.net/2020/06/04/KZOmbtUvnLg8d6W.png)

$\omega=\omega_0 → |H|=Q$
![image-20200604111258228](https://i.loli.net/2020/06/04/3gP4nGVOJtcNEhz.png)

$\dfrac{50}{(j\omega)^2(j\omega+0.5)}$

1. 規則大致如一次，但 $j\omega^2$ 變成是 $\pm$ 40dB/decade
2. 帶值算算出最左側 magnitude 之後，用 40log(magnitude) 換成 dB

#### phase



### 12.5 filter network

![](https://i.imgur.com/xD9CZed.png)

#### band pass filter

![image-20200604113131828](https://i.loli.net/2020/06/04/DjOZxlTqJAgvHau.png)

![image-20200604114626724](https://i.loli.net/2020/06/04/Fhi31HA5ytnDzQe.png)

![image-20200604114759684](https://i.loli.net/2020/06/04/18ni6QckRsXvhKy.png)

![image-20200604120823114](https://i.loli.net/2020/06/04/gZA7wE4ux3KXc2O.png)

<p style="color:red;font-size:44px">背背背</p>




## Ch13 Laplace Transform

### 表表（考試會給，不用背）

![image-20200608023301413](https://i.loli.net/2020/06/08/AVQ2DP76wsbgkKI.png)

![image-20200618234510623](https://i.loli.net/2020/06/18/ZAY9rMDhGe2an64.png)

![image-20200608132442011](https://i.loli.net/2020/06/08/WGLFYIZH5xov1XN.png)

==convolution 不教== (信號與系統)

<!-- {dqw|dwqed} -->
<!-- so i just realized
i can use atoms markdown editor and Typora as previewer
damn
 -->

### complex

![image-20200608152704947](https://i.loli.net/2020/06/08/YwfvTRegnUXI4yj.png)

![image-20200613033231549](https://i.loli.net/2020/06/13/PHsDZMhe9WloXmc.png)

### initial & final value theoreom

![image-20200608160844141](https://i.loli.net/2020/06/08/uiNREhOmobQn5KU.png)

![image-20200608160818194](https://i.loli.net/2020/06/08/CDWA7YLcNVwv8K6.png)

initial value (切換開關前) 還是要用之前的方法算

 

## Ch14

### C 之轉換

![image-20200613001916993](https://i.loli.net/2020/06/13/TD2FsIfXBiZS9V7.png)

![image-20200613005917150](https://i.loli.net/2020/06/13/a1es4QopDCfHwKO.png)

### L 之轉換

![ ](https://i.loli.net/2020/06/13/GUxu2WNyoPw7rsH.png)

![image-20200613005934031](https://i.loli.net/2020/06/13/7ZhRCzO9IcUnbKe.png)



### stable?

pole（分母的根）

1. 在複數平面的左邊（i.e. 實部為負） → stable  
2. 在複數平面的右邊（i.e. 實部為正） → unstable  

![image-20200619011957342](https://i.loli.net/2020/06/19/vNGSosAUnaIXPum.png)

