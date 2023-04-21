---
layout: meth
---
# Logic Design

see <https://dlcc.notion.site/fd1e2a787b11464896f55d9684337246>

## Ch11 Latches and Flip-flops

flip-flop: only response to a ==clock input== (but not a data input)

<img src="https://i.imgur.com/o0ZQV5r.jpg" height = "300">

![](https://i.imgur.com/Iss4GTY.png)

bc propagation
odd number of inverters → oscillate

#### 11.2 S-R Latch
###### original NOR S-R Latch
![](https://i.imgur.com/5EquyQw.png)
左上 → switch S → 右上 → switch S → 左下 → switch R → 右下
![](https://i.imgur.com/NmI2uZP.png)

![](https://i.imgur.com/hERgCr8.jpg)

if !(S=R=1) then P == Q'

![](https://i.imgur.com/OXcjVtU.png)

if S=R=1  
when S,R=1→0  
P,Q oscillate 0→1→0→1→....

###### time diagram

![](https://i.imgur.com/DVmVSSP.png)

if S's or R's duration of S < ε  
then Q won't change

![](https://i.imgur.com/5EquyQw.png)

Q<sup>+</sup> = ((Q+S)'+R)' = (Q+S)R' = R'S + R'Q
P = (S+Q)' = S'Q'
bc S=R=1 is disallowed (i.e. SR=0)
so 

###### ==Q<sup>+</sup>= S + R'Q== 
<sub>(Q<sup>+</sup>=R'S + R'Q + RS)</sub>

![](https://i.imgur.com/fY2J7a4.png)

![](https://i.imgur.com/OULjQsI.png)

Q<sup>+</sup>=1 when

```
1. S=1
2. Q=1 and R=0
```

###### debounce switch

![](https://i.imgur.com/6mpNfFn.png)

S bounces when switch to b  
R bounces when switch to a  

![](https://i.imgur.com/jQfHVyc.png)

Q<sup>+</sup>=S+R'Q  
Bounce at a: S=Q=0 so always 0  
Bounce at b: S duration > ε let Q→1, then stays at 1 bc R=0

###### NAND S-R Latch

![](https://i.imgur.com/zQW881v.png)

Q<sup>+</sup> = ((QR)'S)' = QR + S'
→ = NOR S'-R' Latch  
note that ==S, R switch place==

#### 11.3 Gated Latches

###### NAND-gate gated S-R Latch

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

###### 1's, 0's catching problem
S=R=0, G=1, Q=0  
S has a 1 glitch → Q=0→1  
→ 1's catching problem  
NOR S-R Latch has a 0's catching problem
so S, R inputs must not have glitch

###### Gated D Latch
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

#### 11.4 Edge-Triggered D Flip-Flop
**rising-edge trigger**(left): output change when Clk=0→1
**falling-edge trigger**(right, *has bubble*): output change when Clk=1→0
<img src="https://i.imgur.com/lNNwAB7.png" height="150"><img src="https://i.imgur.com/H7LN1ox.png" height="150">
<img src="https://i.imgur.com/nIeiX72.png" height="150">

falling-edge triggered D flip-flop time diagram  
![](https://i.imgur.com/gsqEOWd.png)
when Clk=1→0, Q = D the moment Clk change→

###### rising edge triggered D flip-flop 
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

#### 11.5 S-R Flip-Flop

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

#### 11.6 J-K Flip-Flop
<img src="https://i.imgur.com/jn4qAMr.png" height="120"> (rising-edge)

![](https://i.imgur.com/IIu1xRI.png)
when Clk=1, ==P=JQ'+K'Q==  
when J=K=1 and Clk=0→1, Q<sup>+</sup>=Q'  
so ==J=K=1 is illegal==
![](https://i.imgur.com/9tbvlam.png)
![](https://i.imgur.com/WlRF8xJ.png)

#### 11.7 T Flip-Flop
<img src="https://i.imgur.com/Z285AZB.png" height="120"> (falling-edge)

![](https://i.imgur.com/g4aFq1L.png)
J-K flip-flop: Q<sup>+</sup>=JQ'+K'Q
D flip-flop: Q<sup>+</sup>=D when Clk=1

==Q<sup>+</sup> = TQ' + T'Q = T ⊕ Q==  
![](https://i.imgur.com/UPdRaaa.png)
![](https://i.imgur.com/4jutHRh.png)

#### 11.8 Flip-Flops with Additional Inputs
###### D flip-flop with clear and reset
![](https://i.imgur.com/Yx3DeEX.png)
if ClrN=0 then Q→0  
if PreN=0 then Q→1

![](https://i.imgur.com/RyLlrLq.png)
![](https://i.imgur.com/0waRbTj.png)

###### D flip-flop with clock enable
![](https://i.imgur.com/IJtirEV.png)
Q<sup>+</sup> = Q·CE' + D·CE (when Ck=1)

*implementation*
![](https://i.imgur.com/UrbDz9a.png)
Q<sup>+</sup> = Q·CE' + D<sub>in</sub>·CE

#### skip 11.9 =))

## Ch14 Derivation of State Graphs and Tables
example: 
design the circuit so that any input sequence ending in 101 will produce an output Z = 1
coincident with the last 1
![](https://i.imgur.com/SykESm6.png)
*the symbol before the slash is the input and the symbol after the slash is the corresponding output*

######## Mealy machine
<img src="https://i.imgur.com/ZW6bi06.png" height="160">

target: $S_0S_1S_2$ = 101
$S_0$: get 1 →store it ; get 0 → again

![](https://i.imgur.com/GekEaDE.png)
$S_0S_1S_2$ 基本上可以隨便代  
(i.e. $S_0$ 可以 00 or 01 or whatever 代替)  
出來的電路、SOP 會不一樣，但實質結果是相同的  
![](https://i.imgur.com/NHIP3HM.png)
![](https://i.imgur.com/q3g2yOT.png)
![](https://i.imgur.com/DOucbYQ.png)
    
######## Moore machine
![](https://i.imgur.com/95neCTK.png)

![](https://i.imgur.com/FLf5Rhw.png)
![](https://i.imgur.com/kZnFLnu.png)

initial state = 1  
→ ++01++000 underline part Z=1

#### 14.2 More Complex Design Problems
######## a Mealy example
The output Z should be 1 if the input sequence ends in either 010 or 1001, and Z should be 0 otherwise.
![](https://i.imgur.com/G4r6GBs.png)

010|
_10|01

1001|
__ 01|0

"|": 接在一起處
![](https://i.imgur.com/jfknW9W.png)

######## a Moore example
The output Z is to be 1 if the total number of 1’s received is ++odd++ and at least ++two consecutive 0s++ have been received.  
![](https://i.imgur.com/G1AIn3f.png)
![](https://i.imgur.com/JM6XZ9a.png)
<!-- partial -->
<!-- ![](https://i.imgur.com/femZ8Vr.png) -->
<!-- complete -->
![](https://i.imgur.com/ZPM8KJm.png)

#### 14.3 Guidelines for Construction of State Graphs
The circuit examines groups of four consecutive inputs and produces an output Z = 1 if the input sequence 0101 or 1001 occurs. The circuit resets after every four inputs.  
【Mealy】  
![](https://i.imgur.com/GC5i3At.png)
0101 & 1001 可共用  
<!-- partial   -->
![](https://i.imgur.com/rQ6glQN.png)
<!-- complete   -->
![](https://i.imgur.com/RLUx8Lb.png)
錯的 → 進到紅框區 → output 0  
![](https://i.imgur.com/B7QHQqQ.png)
a group of 5 → 下面再多一層 以此類推  

==跳過 example 2, 3==

#### 14.4 Serial Data Code Conversion
![](https://i.imgur.com/ZmwxkfF.png)
![](https://i.imgur.com/sXcSuAb.png)
NRZ：non return to zero, 不變  
RZ：return to 0, 變 1 後, 後半變回 0  
NRZI：inverted, 看 1 的奇偶 (i.e. 0 → Q^+^=Q ; 1 → Q^+^=Q') 
Manchester：0 → 後半變 1 ; 1 → 後半變 0  

######## Mealy ver.  
NRZ {→|convert} Manchester  
![](https://i.imgur.com/dbIBn5v.png)  

ideal：忽略延遲  
actual：有延遲，出現 false output  
![](https://i.imgur.com/WQ78XTI.png)   
<!-- clock2 頻率 2 倍 for manchester   -->
clock2 頻率 2 倍 → 所有 output changes 都在 edge 上  
NRZ stable for 2 clock2 period  
clock change but input hasn't → glitch  

![](https://i.imgur.com/l6Yve1B.png)  
![](https://i.imgur.com/aZPkzLX.png)  
S~1~ 完不會有 1 so －  

######## Moore ver.
NRZ {→|convert} Manchester  
![](https://i.imgur.com/Ni6lSW1.png)
![](https://i.imgur.com/Woy2JeW.png)
![](https://i.imgur.com/Wpxqdic.png)

#### 14.5 Alphanumeric State Graph Notation
(a) F → forward ; R → reverse  
(b) 考量到 FR=11,00
![](https://i.imgur.com/D56a6N3.png)
![](https://i.imgur.com/RxkSPd9.png) 

從 S~0~ 發出的線  
3 條線 or 在一起，為 1 → 至少一條為 1  
`F + F′R + F′R′ = F + F′ = 1`  
3 條線兩兩 and 在一起，皆為 0 → 小於 2 條為 1  
`F·F′R = 0, F·F′R′ = 0, F′R·F′R′ = 0`  
→ 恰好 1 條為 1

for Mealy：  
X~i~X~j~/Z~p~Z~q~ means if X~i~X~j~ = 11 (other Xs don't care), Z~p~Z~q~ = 11 (others Zs = 0)  
e.g. X1X4′/Z2Z3 means 1--0/0110  

#### 14.6 Incompletely Specified State Tables
######## BCD (0~9 in binary i.e. 0000-1001)  
while in last bit:  
if 1s = even → 1  
else → 0
![](https://i.imgur.com/sYt2AoI.png)
![](https://i.imgur.com/KSrkcC7.png)

######## 101 disjoint, output only used in the end
![](https://i.imgur.com/MOxSAJG.png)
![](https://i.imgur.com/WAVaEKf.png)

#### Problems
######## 14.16
![](https://i.imgur.com/hZ0Gmhe.png)
![](https://i.imgur.com/JiypuqC.png)
ans  
![](https://i.imgur.com/F5c7rDE.png)

######## 14.31
![](https://i.imgur.com/09Ej0us.png)
![](https://i.imgur.com/JH3T2Vg.png)  
ans  
![](https://i.imgur.com/p20EnfQ.png)

######## 14.33
![](https://i.imgur.com/CWBicSv.png)
ans  
![](https://i.imgur.com/hQl7p0D.png)
![](https://i.imgur.com/9IVDpJP.png)

######## 14.38
![](https://i.imgur.com/ejNtIex.png)
ans  
![](https://i.imgur.com/CQQvYNt.png)

######## 14.43
![](https://i.imgur.com/CZLzYcW.png)
ans  
![](https://i.imgur.com/97RWeo5.png)
![](https://i.imgur.com/0SGmFJV.png)

######## 14.45
![](https://i.imgur.com/tBlGjeg.png)
ans  
![](https://i.imgur.com/zPnf1O8.png)
