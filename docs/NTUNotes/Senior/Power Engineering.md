---
layout: meth
---

# Power Engineering

## General


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

![](https://i.imgur.com/3o7wQdH.png)

![](https://i.imgur.com/3XbIS85.png)

$$V_{max}=\sqrt{2}|V|$$
$$v(t)=V_{max}cos(\omega t+\phi)=\dfrac{V_{max}}{\sqrt{2}}\angle{\phi}$$
$$v(t)=\sqrt{2}|V|cos(\omega t+\phi)=|V|\angle{\phi}$$

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

Power = single phase power x $\sqrt{3}$

### Balanced Network

![](https://i.imgur.com/tBj8TFT.png)

Each of the neutral points has the same voltage.

pf

![](https://i.imgur.com/4X7JX1D.png)
![](https://i.imgur.com/nqq8NQf.png)

Knowing this, we can simplify the circuit

![](https://i.imgur.com/7WK1aLm.png)

### Delta Wye Transformation

![](https://i.imgur.com/m1sCilU.png)

$$Z_\lambda = \dfrac{1}{3}Z_\Delta$$

pf

![](https://i.imgur.com/tRAm6jr.png)
![](https://i.imgur.com/XCOmo93.png)

![](https://i.imgur.com/9GDDNrG.png)

We know $V_{an}$, $V_{bn}$, $V_{cn}$ are in sequence with common difference = $-120^\circ$, 
now we can get the relationship between $V_{an}$ & $V_{ab}$

$$V_{ab}=\sqrt{3}\angle{30^{\circ}}V_{an}$$

### Problems

#### Basic Formula

![](https://i.imgur.com/D3I47mk.png)

#### Per phase

![](https://i.imgur.com/nW7IRkI.png)
![](https://i.imgur.com/vArviVt.png)

Probably wrong? $P_{load, 1\phi}$ should be $\dfrac{200k}{\sqrt{3}}$, making the final answer $328.04$ A

<http://publish.illinois.edu/ece-476-fall-2017/files/2017/08/HW1Sol.pdf>

#### Delta Wye Formula

![](https://i.imgur.com/sSKJ1sE.png)

Positive sequence
$$V_{ca}=208\angle{-120^{\circ}}$$
$$V_{bc}=208\angle{0^{\circ}}$$
$$V_{ab}=208\angle{120^{\circ}}$$
$$V_{ab}=\sqrt{3}\angle{30^{\circ}}V_{an}$$
$$V_{an}=\dfrac{V_{ab}}{\sqrt{3}\angle{30^{\circ}}}=120\angle{90^\circ}$$
$$V_{bn}=\dfrac{V_{bc}}{\sqrt{3}\angle{30^{\circ}}}=120\angle{-30^\circ}$$
$$V_{cn}=\dfrac{V_{ca}}{\sqrt{3}\angle{30^{\circ}}}=120\angle{210^\circ}$$
$$I_a=\dfrac{V_{an}}{Z}=12\angle{105^\circ}$$
$$I_b=\dfrac{V_{bn}}{Z}=12\angle{-15^\circ}$$
$$I_c=\dfrac{V_{bn}}{Z}=12\angle{225^\circ}$$
$$S_{3\phi}=V_{an}I_a^*+V_{bn}I_b^*+V_{cn}I_c^*=\underline{4320\angle{-15^\circ}}$$

## Ch3 Transmission Line

- 1 feet = 12 inches
- 1 mile = 1.609 km

$$\mu_0=4\pi\times10^{-7}$$
$$\epsilon_0=8.854\times10^{-12}$$

![](https://i.imgur.com/kTyb5ho.png)

![](https://i.imgur.com/JcQepmU.png)

$$B=\mu H$$

![](https://i.imgur.com/yIQ8uqY.png)

### Conductor Bundling

GMR = geometric mean radius 

![](https://i.imgur.com/Y22ze87.png)

![](https://i.imgur.com/R2ltmNz.png)

![](https://i.imgur.com/zsDBgS9.png)

### Three-Phase Tranposition

Inductance per meter of three-phase tranposed lines

![](https://i.imgur.com/g0T1oW7.png)

![](https://i.imgur.com/f4x6ja5.png)

![](https://i.imgur.com/GQj1YCj.png)

![](https://i.imgur.com/Yi0podg.png)

![](https://i.imgur.com/Hhm6XIx.png)

More problems

<https://eegate.in/inductance-of-transmission-line-solved-numericals/>

### Line Capacitance

phase-neutral capacitance

$$\bar{c}=\dfrac{2\pi\epsilon}{ln\dfrac{D_m}{R^c_b}}$$

![](https://i.imgur.com/BYOpJSo.png)

## Ch4 Transmission-Line Modeling

### Terminal

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

### Complex Power Transmission - Short Line

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