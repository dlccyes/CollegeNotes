---
layout: meth
---

# Modern Physics

## General

### Constants

- Planck’s constant $h$ = $6.626\times10^{-34}J\cdot Hz^{-1}$
- electron volt $eV=1.602\times10^{-19}J$
- mass
	- electron's rest mass $m_0$ = $9.11\times10^{-31}$kg
	- neutron's rest mass = $1.67\times10^{-27}$
		- $1836m_e$
	- proton's rest mass = $1.67\times10^{-27}$
- electron's rest energy $E_0=511keV$
- $\dfrac{1}{4\pi\epsilon_0}=9\times10^9$
- Boltzmann's constant $k=1.381\times10^{-23}J/K$
- Stefan's constant $\sigma=5.67\times10^{-8}$
- 1 mol = $6.022\times10^{23}$
- $0^{\circ}$C= 273 K

### Kronecker Delta

$$
\delta_{ij}=
    \begin{cases}
      0, & \text{if}\ i\neq j \\
      1, & \text{if}\ i=j
    \end{cases}
$$

### Orthogonality

$$\int^\infty_{-\infty}\psi^*_n \psi_mdV=0\ \text{if}\ n\neq 
 m$$

![[modern-physics-1.png]]

meaning

$$\int^\infty_{-\infty}\psi^*_n \psi_mdV=\delta_{nm}$$

(why will it be 1?)

## Ch1 Relativity

$$\gamma=\dfrac{1}{\sqrt{1-\frac{v^2}{c^2}}}$$

### Energy

![[modern-physics-2.png]]

$$E^2=(mc^2)^2+p^2c^2=E_0^2+(pc)^2$$

$$m = 0 \rightarrow E=pc$$

$$E=E_0+KE$$

- $E_0$ = rest energy
- $KE$ = kinetic energy

$$E_0=m_0c^2$$

$$KE=mc^2-m_0c^2$$

![[modern-physics-3.jpg]]

![[modern-physics-4.jpg]]

### Doppler effect

![[modern-physics-5.png]]

![[modern-physics-6.png]]

**Case 1**

![[modern-physics-7.png]]

**Case 2**

![[modern-physics-8.png]]

**Case 3**
	
![[modern-physics-9.png]]

![[modern-physics-10.png]]

## Ch2 Particle properties of wave

### Blackbody

![[modern-physics-11.jpg]]

**Rayleigh-Jeans Formula**

![[modern-physics-12.png]]

but it's wrong at higher frequencies

![[modern-physics-13.png]]

**Plank Radiation Formula**

![[modern-physics-14.png]]

Plank radiation formula becomes Rayleigh-Jeans formula at low frequency $\nu$

![[modern-physics-15.png]]

### Photoelectric Effect

![[modern-physics-16.png]]

### X Ray

![[modern-physics-17.png]]

![[modern-physics-18.png]]

$$2dsin\theta=n\lambda$$

### Compton Effect

![[modern-physics-19.png]]

## Ch3 Wave properties of particle

![[modern-physics-20.png]]

![[modern-physics-21.png]]

### Phase Velocity & Group Velocity

$$v_p=\lambda\nu=\dfrac{h}{\gamma mv}\nu=\dfrac{E}{\gamma mv}=\dfrac{\gamma mc^2}{\gamma mv}=\dfrac{c^2}{v}$$

![[modern-physics-22.png]]

![[modern-physics-23.png]]

![[modern-physics-24.png]]

![[modern-physics-25.png]]

### Uncertainty Principle

$$\hbar=\dfrac{h}{2\pi}$$

$$\Delta x \Delta p \geq \dfrac{\hbar}{2}$$

$$\Delta E \Delta t \geq \dfrac{\hbar}{2}$$

![[modern-physics-26.png]]

![[modern-physics-27.png]]

![[modern-physics-28.png]]

![[modern-physics-29.png]]
![[modern-physics-30.png]]

![[modern-physics-31.png]]

## Ch4 Atomic Structure

### Thomson model of atom

![[modern-physics-32.png]]

### Distance of closest approach

For an alpha particle (2 proton + 2 neutron)

![[modern-physics-33.png]]

### Electron orbits

![[modern-physics-34.png]]

$$F_c=\dfrac{mv^2}{r}$$

$$F_e=\dfrac{1}{4\pi\epsilon_0}\dfrac{e^2}{r^2}$$

$$F_c=F_e$$

![[modern-physics-35.png]]

### Atomic Spectra

![[modern-physics-36.png]]

Rydberg constant $R=1.097\times10^7\mathrm{m}^{-1}$

$$R=-\dfrac{E_1}{ch}$$

![[modern-physics-37.png]]

![[modern-physics-38.png]]

### Bohr Atom

![[modern-physics-39.png]]

Energy

![[modern-physics-40.png]]

### Energy level and spectra

Wavelength of radiation caused by excited electronmidter

$$\lambda=\dfrac{hc}{\Delta E}$$

$$R=-\dfrac{E_1}{ch}$$

![[modern-physics-41.png]]

![[modern-physics-42.png]]

### Correspondence principal

angular momentum $L=mvr=\dfrac{nh}{2\pi}=n\hbar$

![[modern-physics-43.png]]

### Nuclear Motion

hydrogen nuclear (a proton)'s mass $M=1836m_e$

![[modern-physics-44.png]]

Both the nucleus & the electron orbit around the center. We can use **reduced mass** $m'$ in place of $m$ to simplify the system into single oribit.

![[modern-physics-45.png]]

### Rutherford scattering

![[modern-physics-46.png]]

$b$ = impact parameter

![[modern-physics-47.png]]

![[modern-physics-48.png]]

Potential change after impact

![[modern-physics-49.png]]

$b_{\mathrm{min}}$ = r of nucleus -> $\theta_{\mathrm{max}}$

<http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/rutsca3.html>

![[modern-physics-50.png]]

Fraction of alpha particles scattered by $\theta$ or more

![[modern-physics-51.png]]

## Ch5 Quantum Mechanics

### Normalized

![[modern-physics-52.png]]

### Well-Behaved Wave Functions

Only those with these properties can yield physically meaningful results.

![[modern-physics-53.png]]

y & dy/dx need to be finite, continuous, and single-valued

### Schrodinger Equation

![[modern-physics-54.png]]

### Expectation Values

![[modern-physics-55.png]]

![[modern-physics-56.png]]

![[modern-physics-57.png]]

### Particle in a box

energy

![[modern-physics-58.png]]

$$E_n=\dfrac{n^2\pi^2\hbar^2}{2mL^2}=\dfrac{n^2h^2}{8mL^2}$$

![[modern-physics-59.png]]

### Tunnel Effect

![[modern-physics-60.png]]

probability

![[modern-physics-61.png]]

- $U$ = barrier
- $E$ = energy of the particle

### Harmonic Oscillator

![[modern-physics-62.png]]

![[modern-physics-63.png]]

![[modern-physics-64.png]]

See <https://en.wikipedia.org/wiki/Quantum_harmonic_oscillator#Ladder_operator_method>

### Finite Square Quantum Well

![[modern-physics-65.png]]


## Ch6 Hydrogen Atom

### Schrodinger's Equation

![[modern-physics-66.png]]

$$\nabla^2\psi+\dfrac{2m}{\hbar^2}(E-U)\psi=0$$

See [[Laplace Operator]]

in polar (2D)

$$\left(\dfrac{\partial^2 \psi}{\partial r^2}+\dfrac{1}{r}\dfrac{\partial\psi}{\partial r}+\dfrac{1}{r^2}\dfrac{\partial^2\psi}{\partial\phi^2}\right)+\dfrac{2m}{\hbar^2}(E-U)\psi=0$$

Azimuth angle = $\phi$

![[modern-physics-67.jpg]]

In cartesian (3D)

![[modern-physics-68.png]]

In spherical (3D)

![[modern-physics-69.png]]

![[modern-physics-70.png]]

![[modern-physics-71.png]]

$$a_0=r_1=\dfrac{h^2\epsilon_0}{\pi me^2}=\dfrac{4\pi\hbar^2\epsilon_0}{me^2}$$

See [[#Bohr Atom]]

$$E_1=-\dfrac{e^2}{8\pi\epsilon_0r_1}=-\dfrac{e^2}{8\pi\epsilon_0a_0}=-\dfrac{\hbar^2}{2ma_0^2}$$

### Quantum Numbers

![[modern-physics-72.png]]

Table 6.1

![[modern-physics-73.png]]

### Orbital Quantum Numbers

![[modern-physics-74.png]]

states

![[modern-physics-75.png]]

### Magnetic Quantum Number

![[modern-physics-76.png]]

$L=\sqrt{l(l+1)\hbar}$'s shadow on z axis = $L_z=m_l\hbar$ = integral times of $\hbar$

![[modern-physics-77.png]]

### Electron Probability Density

![[modern-physics-78.png]]

![[modern-physics-79.png]]

![[modern-physics-80.png]]

### Angular Momentum

![[modern-physics-81.png]]

![[modern-physics-82.png]]

**Commutation** = 交換率

$$[A,B]=AB-BA$$

![[modern-physics-83.png]]

**Ladder Operator**

$$L_\pm=L_x\pm iL_y$$

### Selection Rule

![[modern-physics-84.png]]

**Allowed transitions**

![[modern-physics-85.png]]

The conditions for allowed transitions

![[modern-physics-86.png]]

### Zeeman Effect

energy level change due do magnetic field

![[modern-physics-87.jpg]]

![[modern-physics-88.jpg]]

$$\begin{align*}
& \Delta E=\mu_BB\\
&= \dfrac{e\hbar}{2m}B=\dfrac{eh}{4\pi m}B\\
&= h\dfrac{eB}{4\pi m}\\
&= h\Delta\nu
\end{align*}$$


![[modern-physics-89.png]]

![[modern-physics-90.png]]

**Bohr magneton**

![[modern-physics-91.png]]

## Ch7 Many-Electron Atoms

### Electron Spin

![[modern-physics-92.png]]

![[modern-physics-93.png]]

### Pauli's Exclusion Principle

![[modern-physics-94.png]]

### Fermions & Bosons

![[modern-physics-95.png]]

For antisymmetric wavefunction, $a=b\Rightarrow$ $\psi=0$, obeys [[#Pauli's Exclusion Principle]]

- Fermions: spin = $\dfrac{1}{2}, \dfrac{3}{2}, ...$
	- obey [[#Pauli's Exclusion Principle]]
	- antisymmetric wave function
- Bosons: spin = $0, 1, ...$
	- don't obey [[#Pauli's Exclusion Principle]]
	- symmetric wave function

### Quantum Numbers

![[modern-physics-96.png]]

### Atomic Structures

Replacing $e$ with $Z_e$ in [[#Bohr Atom]] -> energy, we get

$$E_n=\dfrac{Z^2}{E_1}$$

Different $n$ -> shells

![[modern-physics-97.png]]

Max $2n^2$ states for each $n$.

Different $l$ in same $n$ -> sub-shells

![[modern-physics-75.png]]

![[modern-physics-76.png]]

![[modern-physics-100.png]]

![[modern-physics-101.png]]

![[modern-physics-102.png]]

![[modern-physics-103.png]]

**Hund's Rule**

Don't pair whenever possible

![[modern-physics-104.png]]

### Spin-Orbit Effect

nucleus orbits the electron in the electron's POV, creating magnetic field, causing energy difference

![[modern-physics-105.png]]

![[modern-physics-106.png]]

![[modern-physics-107.png]]

![[modern-physics-108.png]]

See [[#Zeeman Effect]]

![[modern-physics-109.png]]

### Total Angular Moment

- $L$ = orbital angular momentum
- $S$ = spin angular momentum
- $J=L+S$ = total angular momentum

![[modern-physics-110.png]]

so for a given $J$, there are $2J+1$ substates

![[modern-physics-111.png]]

![[modern-physics-112.png]]

**LS Coupling**

![[modern-physics-113.png]]

![[modern-physics-114.png]]

![[modern-physics-115.png]]

- $S=\sqrt{s(s+1)}\hbar$
- $L=\sqrt{l(l+1)}\hbar$
- $J=\sqrt{j(j+1)}\hbar$

### Term Symbols

![[modern-physics-116.png]]

$$n^{2S+1}L_J$$

**multiplicity** = # possible values of $J$

- if $L>S$, multiplicity = $2S+1$
- if $S>L$, multiplicity = $2L+1$

### Hund's Rule

3 rules for identifying the ground state i.e. the one with the lowest energy

1. biggest multiplicity -> lowest energy
2. for the same multiplicity, biggest $L$ -> lowest energy
3. if outermost subshell <= half-filled, lowest $J$ -> lowest energy

### Auger Effect

An electon don't emit energy as x-ray when dropping to lower level but give the energy to another electron and make it elecate

![[modern-physics-117.png]]

## Ch8

![[modern-physics-118.png]]

![[modern-physics-119.png]]

## Ch9 Statistical Mechanics

![[modern-physics-120.png]]

- given $n$, $g(\epsilon)=2n^2$
- given $J$, $g(\epsilon)=2J+1$

Boltzmann's constant

$$k=1.381\times10^{-23}J/K$$

![[modern-physics-121.png]]

### Molecular Energies in Ideal Gas

**Equipartition Theorem**

$\dfrac{1}{2}kT$ for each degree of freedom

- $\dfrac{3}{2}kT$ for monatomic
	- 3 translational (xyz)
- $\dfrac{5}{2}kT$ for diatomic
	- 3 translational + 2 rotational
- $\dfrac{6}{2}kT$ for triatomic
	- 3 translational + 3 rotational

**Average Molecular Energy**

![[modern-physics-122.png]]

![[modern-physics-123.png]]

Most probable speed appears at $\dfrac{dn(v)}{dv}=\dfrac{d}{dv}4\pi N(\dfrac{m}{2\pi kT})^{3/2}v^2e^{-mv^2/2kT}=0$

![[modern-physics-124.png]]

![[modern-physics-125.png]]

### Quantum Statistics

![[modern-physics-126.jpg]]

**Distributions Comparison**

![[modern-physics-127.png]]

### Rayleigh-Jeans Formula

**number of standing waves**

![[modern-physics-128.jpg]]

![[modern-physics-129.png]]

### Plank Radiation Law

![[modern-physics-130.png]]

**Wien’s Displacement Law**

![[modern-physics-131.png]]

**Stefan-Boltzmann Law**

energy density inside a cavity

![[modern-physics-132.png]]

Radiation rate $R=e\sigma T^4$

- emissivity $e=1$ for blackbody
- Stefan's constant $\sigma=5.67\times10^{-8}$

![[modern-physics-133.png]]

![[modern-physics-134.jpg]]

### Free Electons in a Metal

![[modern-physics-135.png]]

![[modern-physics-136.png]]

**Fermi Energy**

![[modern-physics-137.png]]

![[modern-physics-138.png]]

![[modern-physics-139.png]]

![[modern-physics-140.jpg]]

![[modern-physics-141.png]]

**For 2D**

$$\begin{align*}
& n=2N/V=2\dfrac{\pi k_F^2}{(\frac{2\pi}{L^2})}/L^2=\dfrac{k_F^2}{2\pi}
\end{align*}$$

$$\begin{align*}
& E_{density}=\dfrac{2}{V}\int^{k_F}_0\dfrac{\hbar^2k^2}{2m}\dfrac{d^2k}{(\frac{2\pi}{L})^2}\\
&= \dfrac{2}{L^2}\int^{k_F}_0\dfrac{\hbar^2k^2}{2m}\dfrac{2\pi kdk}{(\frac{2\pi}{L})^2}\\
&= \dfrac{\hbar^2k_F^4}{8m\pi}
\end{align*}$$

$$E_{ave}=\dfrac{E}{n}=\dfrac{\hbar^2k_F^2}{4m}=\dfrac{1}{2}E_F$$


![[modern-physics-142.png]]

**For 2D**

$$g(k)dk=\dfrac{2}{V}\dfrac{d^2k}{(\frac{2\pi}{L})^2}=\dfrac{2\pi kdk}{2\pi^2}=\dfrac{\pi dk}{\pi}$$

$$g(E)=\dfrac{m}{\hbar^2\pi}$$

**More about 2D**

- <http://pleclair.ua.edu/PH253/Homework/Fall_2013/HW7/HW7_18Nov13_SOLN.pdf>
- <http://physics.ucsc.edu/~peter/231/magnetic_field/node2.html>

### Electron-Energy Distribution

![[modern-physics-143.png]]

at $T=0$ and $\epsilon<\epsilon_F$, $e^{(\epsilon-\epsilon_F)}/kT=0$, $n(\epsilon)\propto\sqrt{\epsilon}$

![[modern-physics-144.png]]

**Average energy**

![[modern-physics-145.png]]
