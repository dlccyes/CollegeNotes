---
layout: meth
---

# Power Engineering

## General

### Constants

- 1 feet = 12 inches
- 1 mile = 1.609 km

$$\mu_0=4\pi\times10^{-7}$$

$$\epsilon_0=8.854\times10^{-12}$$

### Formulas

$$II^* = |I|^2$$

because $(a+jb)(a-jb) = a^2+b^2$

### Phasor

$$re^{j\theta}=rcos\theta+rjsin\theta=r\angle\theta$$

### Hyperbolic functions

$$cosh(x)=\dfrac{e^x+e^{-x}}{2}$$

$$sinh(x)=\dfrac{e^x-e^{-x}}{2}$$

$$tanh^{-1}(x)=\dfrac{1}{2}ln(\dfrac{1+x}{1-x})$$

![](https://i.imgur.com/rEK2ZNm.png)

## Ch2 Basic Principles

### Complex Power

![](https://i.imgur.com/7GLW8Ad.png)

$$\phi=\theta_V-\theta_I$$

![](https://i.imgur.com/lHpVGP8.jpg)

![](https://i.imgur.com/5SiqMlA.jpg)

![](https://i.imgur.com/ckt150B.jpg)

cos & sin 積起來時被消掉

![](https://i.imgur.com/T7rzi4g.png)

![](https://i.imgur.com/3o7wQdH.png)

![](https://i.imgur.com/3XbIS85.png)

$$V_{max}=\sqrt{2}|V|$$

$$\begin{align*}
v(t)
&=V_{max}cos(\omega t+\phi)\\
&=\sqrt{2}|V|cos(\omega t+\phi)\\
\end{align*}$$

![](https://i.imgur.com/eb18svI.png)

![](https://i.imgur.com/W03O4DC.png)

I lags V $\phi$ -> phasor = $\phi$ 

$$\phi = \angle V - \angle I$$

- lagging -> $\phi>0$
- leading -> $\phi<0$

power factor (PF)

$$PF = cos(\phi)$$

![](https://i.imgur.com/nknu7Ze.png)

$$S = |S|e^{j\phi} = |V||I|e^{j\phi}$$

$$S = |S|cos(\phi) + j|S|sin(\phi) = P+jQ$$

$$tan(\phi) = \dfrac{Q}{P}$$

$$tan(cos^{-1}(PF))=\dfrac{Q}{P}$$

$$|S| = |I||V|$$

$$|I| = \dfrac{|S|}{|V|}$$

### Impedance

![](https://i.imgur.com/r8TU0bZ.png)

$$V = IZ$$

$$Z = R+jX$$

$$S = VI^* = ZII^* = |I|^2Z = |I|^2(R+jX) = P+jQ$$

$$P = |I|^2R$$

$$Q = |I|^2X$$

$$S = VI^* = V(\dfrac{V}{Z})^* = \dfrac{|V|^2}{Z^*}$$

### Three-Phase Power

Each separated by $120^{\circ}$, s.t. the instantaneous power is constant

![](https://i.imgur.com/OEv0ZQ1.png)

### Balanced Three-Phase Power

![](https://i.imgur.com/tBj8TFT.png)

Each of the neutral points has the same voltage.

pf

![](https://i.imgur.com/4X7JX1D.png)
![](https://i.imgur.com/nqq8NQf.png)

Knowing this, we can simplify the circuit

![](https://i.imgur.com/7WK1aLm.png)

#### Impedance

**Delta Wye Transformation**

![](https://i.imgur.com/m1sCilU.png)

$$Z_\lambda = \dfrac{1}{3}Z_\Delta$$

pf

![](https://i.imgur.com/tRAm6jr.png)
![](https://i.imgur.com/XCOmo93.png)

#### Voltage

![](https://i.imgur.com/9GDDNrG.png)

We know $V_{an}$, $V_{bn}$, $V_{cn}$ are in sequence with common difference = $-120^\circ$, 
now we can get the relationship between $V_{an}$ & $V_{ab}$

$$V_{ab}=\sqrt{3}\angle{30^{\circ}}V_{an}$$

#### Power

Power = single phase power x 3

![](https://i.imgur.com/x9H2lx4.png)

### Problems

#### Basic Formula

![](https://i.imgur.com/D3I47mk.png)

#### Per phase

![](https://i.imgur.com/nW7IRkI.png)
![](https://i.imgur.com/vArviVt.png)

If 440V is $3\phi$, $I$ should be $\dfrac{S_{1\phi}}{\frac{440}{\sqrt{3}}}=328.04$ A

<http://publish.illinois.edu/ece-476-fall-2017/files/2017/08/HW1Sol.pdf>

#### Delta Wye Formula

![](https://i.imgur.com/sSKJ1sE.png)

Positive sequence

$$V_{ca}=208\angle{-120^{\circ}}$$

$$V_{bc}=208\angle{0^{\circ}}$$

$$V_{ab}=208\angle{120^{\circ}}$$

$$V_{ab}=\sqrt{3}\angle{30^{\circ}}V_{an}$$

$$V_{an}=\dfrac{V_{ab}}

{\sqrt{3}\angle{30^{\circ}}}=120\angle{90^\circ}$$

$$V_{bn}=\dfrac{V_{bc}}{\sqrt{3}\angle{30^{\circ}}}=120\angle{-30^\circ}$$

$$V_{cn}=\dfrac{V_{ca}}{\sqrt{3}\angle{30^{\circ}}}=120\angle{210^\circ}$$

$$I_a=\dfrac{V_{an}}{Z}=12\angle{105^\circ}$$

$$I_b=\dfrac{V_{bn}}{Z}=12\angle{-15^\circ}$$

$$I_c=\dfrac{V_{bn}}{Z}=12\angle{225^\circ}$$

$$S_{3\phi}=V_{an}I_a^*+V_{bn}I_b^*+V_{cn}I_c^*=\underline{4320\angle{-15^\circ}}$$

## Ch3 Transmission Line

- H = magnetic field intensity
- B = magnetic field density

![](https://i.imgur.com/kTyb5ho.png)

![](https://i.imgur.com/JcQepmU.png)

$$B=\mu H$$

![](https://i.imgur.com/yIQ8uqY.png)

### Infinite straight wire

$H$ outside the condutor

![](https://i.imgur.com/H73Oq2z.png)

$H$ inside the condutor

![](https://i.imgur.com/XVnU6jP.png)


### Conductor Bundling

GMR = geometric mean radius = goemetric mean of $r'$ & the distance from one point to each of the other points

$$r'=re^{-\frac{1}{4}}=0.78r$$

Inductance per meter $l$
$$l=\dfrac{\mu_0}{2\pi}ln\dfrac{D_m}{R_b}$$

![](https://i.imgur.com/Y22ze87.png)

![](https://i.imgur.com/R2ltmNz.png)

![](https://i.imgur.com/zsDBgS9.png)

### Inductance per meter

Inductance per meter of three-phase tranposed lines

![](https://i.imgur.com/g0T1oW7.png)

![](https://i.imgur.com/f4x6ja5.png)

![](https://i.imgur.com/GQj1YCj.png)

![](https://i.imgur.com/Yi0podg.png)

![](https://i.imgur.com/Hhm6XIx.png)

More problems

<https://eegate.in/inductance-of-transmission-line-solved-numericals/>

### Phase-Neutral capacitance

phase-neutral capacitance

$$\bar{c}=\dfrac{2\pi\epsilon}{ln\dfrac{D_m}{R^c_b}}$$

![](https://i.imgur.com/BYOpJSo.png)

Note that $R_b^c$ uses $r$ instead of $r'=re^{-\frac{1}{4}}$ !!!!

## Ch4 Transmission-Line Modeling

### Terminal

$Z_c$ = surge impedance

$P_\mathrm{SIL}$ = surge impedance loading

$$P_\mathrm{SIL}=\dfrac{|V_1|^2}{Z_c}$$

![](https://i.imgur.com/rskjOQe.png)

$$Z_c=\sqrt{\dfrac{z}{y}}$$

$$\gamma=\sqrt{zy}$$

$\gamma = \alpha+j\beta$

- $\gamma$  = propagation constant
- $\beta$ = phase constant

![](https://i.imgur.com/APPQ29m.png)

![](https://i.imgur.com/etpw6KR.png)


![](https://i.imgur.com/ZS5X0vA.png)
![](https://i.imgur.com/IioHRQl.png)

### Transmission Matrix

![](https://i.imgur.com/tlj9gMz.png)

![](https://i.imgur.com/NS7mohO.png)

![](https://i.imgur.com/74kZz8D.png)

### Short Line

![](https://i.imgur.com/KYv9OaS.png)

$S_{12}$ = complex power from bus 1 to bus 2

$$S_{12}=P_{12}+jQ_{12}$$

![](https://i.imgur.com/XdZXD2l.png)

$$\begin{align*}
S_{12} &= V_{1}I_{1}^*\\
&= V_1(\dfrac{V_1-V_2}{Z})^*\\
&= \dfrac{|V_1|^2}{Z^*}-\dfrac{V_1V_2^*}{Z^*}\\
&= \dfrac{|V_1|^2}{|Z|}e^{j\angle Z}-\dfrac{|V_1||V_2|}{|Z|}e^{j\angle Z} e^{j\theta_{12}}
\end{align*}$$

#### Power Cycle Diagram

![](https://i.imgur.com/n2Japjl.png)

![](https://i.imgur.com/2bs1UqT.png)

### Radial Line

Voltage at near, complex load at rear

![](https://i.imgur.com/yqSLrg7.png)

Use Z=jX in the short line $S_{12}$ formula

![](https://i.imgur.com/bGCa5Jr.png)

$$\begin{align*}
S_D
&=P_D+Q_D\\
&=P_D+j\beta P_D\\
\end{align*}$$

$$\beta=\dfrac{Q_D}{P_D}=tan(\phi)$$

$P_{12}=-P_{21}$

![](https://i.imgur.com/cHHEcNp.png)

$$\begin{align*}
|V_2|^2=\dfrac{|V_1|^2}{2}-\beta P_D X\pm \sqrt{(\dfrac{|V_1|^2}{2})^2-P_DX(P_DX+\beta\dfrac{|V_1|^2}{2})}
\end{align*}$$

![](https://i.imgur.com/bQ8YcdK.png)

## Ch5 Transformer

![](https://i.imgur.com/4KrMecs.png)

![](https://i.imgur.com/MudSGIK.png)

- $a=\dfrac{N_1}{N_2}$
- $V_1=aV_2$
- $I_1=\dfrac{1}{a}I_2$

![](https://i.imgur.com/XlE3Dpe.png)

### Autotransformer

![](https://i.imgur.com/X6QY07O.png)

![](https://i.imgur.com/hDUd1A4.png)

1. Redraw into 5.28 (b)
2. Calculate
	- $V_2=V_1+2V_1=3V_1=360V$
	- $V_2=I_2(7+j8)=I_2(10.63\angle 48.81^\circ)$
	- $I_2=33.87\angle(-48.81^\circ)$
	- $I_1=2I_2+I_2=3I_2=101.61\angle(-48.81^\circ)$


### Three-Phase Transformer

![](https://i.imgur.com/al8cn7S.png)

![](https://i.imgur.com/km0c8WP.png)

![](https://i.imgur.com/y5pYJDB.png)

### Per-Phase Transformer Analysis

![](https://i.imgur.com/lgL6ZYR.png)

$K_1$ = gain = $\sqrt{3}n\angle(30^\circ)$

