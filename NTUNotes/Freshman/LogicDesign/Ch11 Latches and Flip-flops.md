---
parent: LogicDesign
---
# Chap 11 Latches and Flip-flops
<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

flip-flop: only response to a ==clock input== (but not a data input)
<img src="https://i.imgur.com/o0ZQV5r.jpg" height = "300">
<!-- ![](https://i.imgur.com/o0ZQV5r.jpg) -->
![](https://i.imgur.com/Iss4GTY.png)
bc propagation
odd number of inverters → oscillate

## 11.2 S-R Latch
### original NOR S-R Latch
![](https://i.imgur.com/5EquyQw.png)
左上 → switch S → 右上 → switch S → 左下 → switch R → 右下
![](https://i.imgur.com/NmI2uZP.png)

![](https://i.imgur.com/hERgCr8.jpg)
if !(S=R=1) then P == Q'
![](https://i.imgur.com/OXcjVtU.png)

if S=R=1  
when S,R=1→0  
P,Q oscillate 0→1→0→1→....

### time diagram
![](https://i.imgur.com/DVmVSSP.png)
if S's or R's duration of S < ε  
then Q won't change

![](https://i.imgur.com/5EquyQw.png)

Q<sup>+</sup> = ((Q+S)'+R)' = (Q+S)R' = R'S + R'Q
P = (S+Q)' = S'Q'
bc S=R=1 is disallowed (i.e. SR=0)
so 
### ==Q<sup>+</sup>= S + R'Q== 
<sub>(Q<sup>+</sup>=R'S + R'Q + RS)</sub>
![](https://i.imgur.com/fY2J7a4.png)
![](https://i.imgur.com/OULjQsI.png)
Q<sup>+</sup>=1 when
```
1. S=1
2. Q=1 and R=0
```

### debounce switch
![](https://i.imgur.com/6mpNfFn.png)
S bounces when switch to b  
R bounces when switch to a  
![](https://i.imgur.com/jQfHVyc.png)
Q<sup>+</sup>=S+R'Q  
Bounce at a: S=Q=0 so always 0  
Bounce at b: S duration > ε let Q→1, then stays at 1 bc R=0

### NAND S-R Latch
![](https://i.imgur.com/zQW881v.png)
Q<sup>+</sup> = ((QR)'S)' = QR + S'
→ = NOR S'-R' Latch  
note that ==S, R switch place==

## 11.3 Gated Latches
### NAND-gate gated S-R Latch
![](https://i.imgur.com/6lHpcLE.jpg)
Q<sup>+</sup> = A' + BQ = SG + (RG)'Q = SG + Q(R' + G')  
P = (BQ)' = Q' + RG  
when G=0, Q<sup>+</sup>=Q, P=Q' → stable  
when G=1, Q<sup>+</sup>=S+QR', P=RG → original NOR S-R Latch  
![](https://i.imgur.com/SwJaL9H.png)

when S=R=1 and G=1→0  
propogation time race
![](https://i.imgur.com/Ry1l2Xg.png)

Q<sup>+</sup>=SG+Q(R'+G'):  
static-1 hazard between G=0,1
![](https://i.imgur.com/CgMfTrO.png)

### 1's, 0's catching problem
S=R=0, G=1, Q=0  
S has a 1 glitch → Q=0→1  
→ 1's catching problem  
NOR S-R Latch has a 0's catching problem
so S, R inputs must not have glitch

### Gated D Latch
S = D, R = D'
![](https://i.imgur.com/7U78dKK.png)  
(L 是 NOR S-R latch)

![](https://media.geeksforgeeks.org/wp-content/uploads/d_ltch.png)

when G=0, Q<sup>+</sup> = Q
when G=1, Q<sup>+</sup> = S+QR = D  
→transparent latch
![](https://i.imgur.com/qwGBzCb.png)
![](https://i.imgur.com/jpRjDHa.png)
Q<sup>+</sup> = G'Q + GD
![](https://i.imgur.com/bNR29Tu.png)

when Clk=1 and x=1, D oscillates
![](https://i.imgur.com/auta9sM.png)
opening a clock for only a little time (let D pass to Q but not Q→Q' pass to D) will solve the problem
so we restrict the flip-flop to only change on the edge of the clock (input change → no effect)  
→ edge-triggered flip-flop

## 11.4 Edge-Triggered D Flip-Flop
**rising-edge trigger**(left): output change when Clk=0→1
**falling-edge trigger**(right, *has bubble*): output change when Clk=1→0
<img src="https://i.imgur.com/lNNwAB7.png" height="150"><img src="https://i.imgur.com/H7LN1ox.png" height="150">
<img src="https://i.imgur.com/nIeiX72.png" height="150">

falling-edge triggered D flip-flop time diagram  
![](https://i.imgur.com/gsqEOWd.png)
when Clk=1→0, Q = D the moment Clk change→

### rising edge triggered D flip-flop 
![](https://i.imgur.com/NaaIwQS.png)
when Clk=0, D pass to P, Q<sup>+</sup>=Q  
when Clk=0→1, D pass to P pass to Q  
when Clk=1, Q hold the D when Clk 0→1, D now doesn't affect anything  
when Clk=0→1, nothing happens
![](https://i.imgur.com/hW0Xsqs.png)

t<sub>su</sub> (setup time) = D's must-stable time before Clk 0→1  
t<sub>h</sub> (hold time) = D's must=stable time after Clk 0→1  
t<sub>p</sub> = clock's propagational delay
![](https://i.imgur.com/XIaUopO.png)

an example of minumum clock period
![](https://i.imgur.com/BtSnNUr.png)

## 11.5 S-R Flip-Flop

<img src="https://i.imgur.com/tPfFuvU.png" height="120">(rising-edge)  

![](https://i.imgur.com/N2eEGAz.png)
NOR-gate S-R latch: Q<sup>+</sup>=S+R'Q  
when Clk=0, S<sub>1</sub>=S, R<sub>1</sub>=R (Master)  
when Clk=1, Q=P
![](https://i.imgur.com/2OvQaD2.png)



Q change when Clk=0→1
![](https://i.imgur.com/akvbDLy.png)
at t<sub>4</sub>, Clk=1→0, so P=S+R'Q=1  
at t<sub>4</sub>, Clk=0→1, so P=1 pass to Q  
but S=R=0 then, Q shoudln't change  
so we ==only allow inputs change when clock is high==

## 11.6 J-K Flip-Flop
<img src="https://i.imgur.com/jn4qAMr.png" height="120"> (rising-edge)

![](https://i.imgur.com/IIu1xRI.png)
when Clk=1, ==P=JQ'+K'Q==  
when J=K=1 and Clk=0→1, Q<sup>+</sup>=Q'  
so ==J=K=1 is illegal==
![](https://i.imgur.com/9tbvlam.png)
![](https://i.imgur.com/WlRF8xJ.png)

## 11.7 T Flip-Flop
<img src="https://i.imgur.com/Z285AZB.png" height="120"> (falling-edge)

![](https://i.imgur.com/g4aFq1L.png)
J-K flip-flop: Q<sup>+</sup>=JQ'+K'Q
D flip-flop: Q<sup>+</sup>=D when Clk=1

==Q<sup>+</sup> = TQ' + T'Q = T ⊕ Q==  
![](https://i.imgur.com/UPdRaaa.png)
![](https://i.imgur.com/4jutHRh.png)

## 11.8 Flip-Flops with Additional Inputs
### D flip-flop with clear and reset
![](https://i.imgur.com/Yx3DeEX.png)
if ClrN=0 then Q→0  
if PreN=0 then Q→1

![](https://i.imgur.com/RyLlrLq.png)
![](https://i.imgur.com/0waRbTj.png)

### D flip-flop with clock enable
![](https://i.imgur.com/IJtirEV.png)
Q<sup>+</sup> = Q·CE' + D·CE (when Ck=1)

*implementation*
![](https://i.imgur.com/UrbDz9a.png)
Q<sup>+</sup> = Q·CE' + D<sub>in</sub>·CE

## skip 11.9 =))

