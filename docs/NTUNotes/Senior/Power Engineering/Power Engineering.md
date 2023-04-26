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

![[power-engineering-1.png]]

### Generator Rotating Speed

rotating speed of a generator = 120 x frequency / # of poles

e.g. 60Hz, 2 poles -> 3600 rpm

## Ch2 Basic Principles

### Complex Power

![[power-engineering-2.png]]

$$\phi=\theta_V-\theta_I$$

![[power-engineering-3.jpg]]

![[power-engineering-4.jpg]]

![[power-engineering-5.jpeg]]

cos & sin 積起來時被消掉

![[power-engineering-6.png]]

![[power-engineering-7.png]]

![[power-engineering-8.png]]

$$V_{max}=\sqrt{2}|V|$$

$$\begin{align*}
v(t)
&=V_{max}cos(\omega t+\phi)\\
&=\sqrt{2}|V|cos(\omega t+\phi)\\
\end{align*}$$

![[power-engineering-9.png]]

![[power-engineering-10.png]]

I lags V $\phi$ -> phasor = $\phi$ 

$$\phi = \angle V - \angle I$$

- lagging -> $\phi>0$
- leading -> $\phi<0$

power factor (PF)

$$PF = cos(\phi)$$

![[power-engineering-11.png]]

$$S = |S|e^{j\phi} = |V||I|e^{j\phi}$$

$$S = |S|cos(\phi) + j|S|sin(\phi) = P+jQ$$

$$tan(\phi) = \dfrac{Q}{P}$$

$$tan(cos^{-1}(PF))=\dfrac{Q}{P}$$

$$|S| = |I||V|$$

$$|I| = \dfrac{|S|}{|V|}$$

### Impedance

![[power-engineering-12.png]]

$$V = IZ$$

$$Z = R+jX$$

$$S = VI^* = ZII^* = |I|^2Z = |I|^2(R+jX) = P+jQ$$

$$P = |I|^2R$$

$$Q = |I|^2X$$

$$S = VI^* = V(\dfrac{V}{Z})^* = \dfrac{|V|^2}{Z^*}$$

### Three-Phase Power

Each separated by $120^{\circ}$, s.t. the instantaneous power is constant

![[power-engineering-13.png]]

### Balanced Three-Phase Power

![[power-engineering-14.png]]

Each of the neutral points has the same voltage.

pf

![[power-engineering-15.png]]
![[power-engineering-16.png]]

Knowing this, we can simplify the circuit

![[power-engineering-17.png]]

#### Impedance

**Delta Wye Transformation**

![[power-engineering-18.png]]

$$Z_\lambda = \dfrac{1}{3}Z_\Delta$$

pf

![[power-engineering-19.png]]
![[power-engineering-20.png]]

#### Voltage

![[power-engineering-21.jpg]]

We know $V_{an}$, $V_{bn}$, $V_{cn}$ are in sequence with common difference = $-120^\circ$, now we can get the relationship between $V_{an}$ & $V_{ab}$

$$V_{ab}=\sqrt{3}\angle{30^{\circ}}V_{an}$$

#### Power

Power = single phase power x 3

![[power-engineering-22.png]]

### Problems

#### Basic Formula

![[power-engineering-23.png]]

#### Per phase

![[power-engineering-24.png]]
![[power-engineering-25.png]]

If 440V is $3\phi$, $I$ should be $\dfrac{S_{1\phi}}{\frac{440}{\sqrt{3}}}=328.04$ A

<http://publish.illinois.edu/ece-476-fall-2017/files/2017/08/HW1Sol.pdf>

#### Delta Wye Formula

![[power-engineering-26.png]]

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

![[power-engineering-27.png]]

![[power-engineering-28.png]]

$$B=\mu H$$

![[power-engineering-29.png]]

### Infinite straight wire

$H$ outside the condutor

![[power-engineering-30.png]]

$H$ inside the condutor

![[power-engineering-31.png]]


### Conductor Bundling

GMR = geometric mean radius = goemetric mean of $r'$ & the distance from one point to each of the other points

$$r'=re^{-\frac{1}{4}}=0.78r$$

Inductance per meter $l$
$$l=\dfrac{\mu_0}{2\pi}ln\dfrac{D_m}{R_b}$$

![[power-engineering-32.png]]

![[power-engineering-33.png]]

![[power-engineering-34.png]]

### Inductance per meter

Inductance per meter of three-phase tranposed lines

![[power-engineering-35.png]]

![[power-engineering-36.png]]

![[power-engineering-37.png]]

![[power-engineering-38.png]]

![[power-engineering-39.png]]

More problems

<https://eegate.in/inductance-of-transmission-line-solved-numericals/>

### Phase-Neutral capacitance

phase-neutral capacitance

$$\bar{c}=\dfrac{2\pi\epsilon}{ln\dfrac{D_m}{R^c_b}}$$

![[power-engineering-40.png]]

Note that $R_b^c$ uses $r$ instead of $r'=re^{-\frac{1}{4}}$ !!!!

## Ch4 Transmission-Line Modeling

### Terminal

$Z_c$ = surge impedance

$P_\mathrm{SIL}$ = surge impedance loading

$$P_\mathrm{SIL}=\dfrac{|V_1|^2}{Z_c}$$

![[power-engineering-41.png]]

$$Z_c=\sqrt{\dfrac{z}{y}}$$

$$\gamma=\sqrt{zy}$$

$\gamma = \alpha+j\beta$

- $\gamma$  = propagation constant
- $\beta$ = phase constant

![[power-engineering-42.png]]

![[power-engineering-43.png]]


![[power-engineering-44.png]]
![[power-engineering-45.png]]

### Transmission Matrix

![[power-engineering-46.png]]

![[power-engineering-47.jpg]]

![[power-engineering-48.jpg]]

### Short Line

![[power-engineering-49.png]]

$S_{12}$ = complex power from bus 1 to bus 2

$$S_{12}=P_{12}+jQ_{12}$$

![[power-engineering-50.png]]

$$\begin{align*}
S_{12} &= V_{1}I_{1}^*\\
&= V_1(\dfrac{V_1-V_2}{Z})^*\\
&= \dfrac{|V_1|^2}{Z^*}-\dfrac{V_1V_2^*}{Z^*}\\
&= \dfrac{|V_1|^2}{|Z|}e^{j\angle Z}-\dfrac{|V_1||V_2|}{|Z|}e^{j\angle Z} e^{j\theta_{12}}
\end{align*}$$

#### Power Cycle Diagram

![[power-engineering-51.png]]

![[power-engineering-52.png]]

### Radial Line

Voltage at near, complex load at rear

![[power-engineering-53.png]]

Use Z=jX in the short line $S_{12}$ formula

![[power-engineering-54.png]]

$$\begin{align*}
S_D
&=P_D+Q_D\\
&=P_D+j\beta P_D\\
\end{align*}$$

$$\beta=\dfrac{Q_D}{P_D}=tan(\phi)$$

$P_{12}=-P_{21}$

![[power-engineering-55.png]]

$$\begin{align*}
|V_2|^2=\dfrac{|V_1|^2}{2}-\beta P_D X\pm \sqrt{(\dfrac{|V_1|^2}{2})^2-P_DX(P_DX+\beta\dfrac{|V_1|^2}{2})}
\end{align*}$$

![[power-engineering-56.png]]

## Ch5 Transformer

![[power-engineering-57.jpg]]

![[power-engineering-58.jpg]]

- $a=\dfrac{N_1}{N_2}$
- $V_1=aV_2$
- $I_1=\dfrac{1}{a}I_2$

![[power-engineering-59.jpg]]

### Inductance

$$R=\dfrac{l}{\mu A}$$

$$L_m'=\dfrac{N^2}{R_m}$$

![[power-engineering-60.png]]

### Autotransformer

![[power-engineering-61.png]]

![[power-engineering-62.jpg]]

1. Redraw into 5.28 (b)
2. Calculate
	- $V_2=V_1+2V_1=3V_1=360V$
	- $V_2=I_2(7+j8)=I_2(10.63\angle 48.81^\circ)$
	- $I_2=33.87\angle(-48.81^\circ)$
	- $I_1=2I_2+I_2=3I_2=101.61\angle(-48.81^\circ)$


### Three-Phase Transformer

![[power-engineering-63.png]]

![[power-engineering-64.png]]

![[power-engineering-65.png]]

**Problem**

![[power-engineering-66.jpg]]

- Wye-Delta connection
- $n=58$
- $V_{a'n'}=\dfrac{n}{\sqrt{3}}\angle(-30^\circ)V_{an}$
- $V_{bn}=V_{an}\angle(-120^\circ)$

### Per-Phase Transformer Analysis

![[power-engineering-67.png]]

$K_1$ = gain = $\sqrt{3}n\angle(30^\circ)$

![[power-engineering-68.png]]

### Per Unit Normalization

indicated by `p.u.`

![[power-engineering-69.png]]

Changing base

![[power-engineering-70.png]]

![[power-engineering-71.png]]

![[power-engineering-72.png]]

![[power-engineering-73.png]]

![[power-engineering-74.png]]

## Ch6 Generator Modeling 1 - Machine Viewpoint

### Round-Rotor Machine

![[power-engineering-75.png]]

$$E_a=V_a+I_a(r+jX_s)$$

![[power-engineering-76.png]]

**Problem**

![[power-engineering-77.png]]

$$P=0.5=|V_a||I_a|cos(\phi)=|I_a|cos\phi$$

$$\begin{align*}
& E_a=V_a+I_a(j1+j0.5)\\
&= 1+|I_a|\angle(-\phi)(j1.5)\\
&= 1+1.5|I_a|cos(-\phi+90^\circ)+j1.5|I_a|sin(-\phi+90^\circ)\\
&= 1+1.5|I_a|sin(\phi)+j1.5|I_a|cos(\phi)\\
&= 1+1.5|I_a|sin(\phi)+j0.75
\end{align*}$$

$$|E_a|=1.5$$

$$1+1.5|I_a|sin\phi=\sqrt{1.5^2-0.75^2}=1.3$$

$$|I_a|sin\phi=0.2$$

$$|I_a|=\sqrt{0.5^2+0.2^2}=0.539$$

$$\phi=tan^{-1}(\dfrac{0.2}{0.5})=21.8^\circ$$

$$I_a=0.539\angle(-21.8^\circ)$$

### Salient-Pole

With $X_d$ & $X_q$

![[power-engineering-78.png]]

![[power-engineering-79.png]]

$$a'=V_a+I_a(r+jX_q)$$

$$\begin{align*}
& E_a=V_a+rI_a+jX_dI_{ad}+jX_qI_{aq}\\
&= a'+j(X_d-X_q)I_{ad}
\end{align*}$$

$a'$ has the same angle as $E_a$ & $I_{aq}$

![[power-engineering-80.png]]

![[power-engineering-81.png]]

To find $E_a$ given everything else

1. find $a'$ to know the angle of $I_{aq}$ & $E_a$
2. Find $I_{aq}$ & $I_{ad}$ with $|I_a|cos\theta$ with $\theta$ being the angle diff with $I_a$
3. Find $E_a$

![[power-engineering-82.png]]

![[power-engineering-83.png]]

If $3\phi$ short circuit

![[power-engineering-84.jpg]]

![[power-engineering-78.png]]
