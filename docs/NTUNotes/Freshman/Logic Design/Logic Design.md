---
layout: meth
---
# Logic Design

see <https://dlcc.notion.site/fd1e2a787b11464896f55d9684337246>

## Ch11 Latches and Flip-flops

flip-flop: only response to a ==clock input== (but not a data input)

![[logic-design-1.jpg]]

![[logic-design-2.png]]

bc propagation
odd number of inverters → oscillate

#### 11.2 S-R Latch
###### original NOR S-R Latch
![[logic-design-3.png]]
左上 → switch S → 右上 → switch S → 左下 → switch R → 右下
![[logic-design-4.png]]

![[logic-design-5.jpg]]

if !(S=R=1) then P == Q'

![[logic-design-6.png]]

if S=R=1  
when S,R=1→0  
P,Q oscillate 0→1→0→1→....

###### time diagram

![[logic-design-7.png]]

if S's or R's duration of S < ε  
then Q won't change

![[logic-design-3.png]]

Q<sup>+</sup> = ((Q+S)'+R)' = (Q+S)R' = R'S + R'Q
P = (S+Q)' = S'Q'
bc S=R=1 is disallowed (i.e. SR=0)
so 

###### ==Q<sup>+</sup>= S + R'Q== 
<sub>(Q<sup>+</sup>=R'S + R'Q + RS)</sub>

![[logic-design-9.png]]

![[logic-design-10.png]]

Q<sup>+</sup>=1 when

```
1. S=1
2. Q=1 and R=0
```

###### debounce switch

![[logic-design-11.png]]

S bounces when switch to b  
R bounces when switch to a  

![[logic-design-12.png]]

Q<sup>+</sup>=S+R'Q  
Bounce at a: S=Q=0 so always 0  
Bounce at b: S duration > ε let Q→1, then stays at 1 bc R=0

###### NAND S-R Latch

![[logic-design-13.png]]

Q<sup>+</sup> = ((QR)'S)' = QR + S'
→ = NOR S'-R' Latch  
note that ==S, R switch place==

#### 11.3 Gated Latches

###### NAND-gate gated S-R Latch

![[logic-design-14.jpg]]

Q<sup>+</sup> = A' + BQ = SG + (RG)'Q = SG + Q(R' + G')  
P = (BQ)' = Q' + RG  
when G=0, Q<sup>+</sup>=Q, P=Q' → stable  
when G=1, Q<sup>+</sup>=S+QR', P=RG → original NOR S-R Latch  

![[logic-design-15.png]]

when S=R=1 and G=1→0  
propogation time race

![[logic-design-16.png]]

Q<sup>+</sup>=SG+Q(R'+G'):  
static-1 hazard between G=0,1
![[logic-design-17.png]]

###### 1's, 0's catching problem
S=R=0, G=1, Q=0  
S has a 1 glitch → Q=0→1  
→ 1's catching problem  
NOR S-R Latch has a 0's catching problem
so S, R inputs must not have glitch

###### Gated D Latch
S = D, R = D'
![[logic-design-18.png]]  
(L 是 NOR S-R latch)

![](https://media.geeksforgeeks.org/wp-content/uploads/d_ltch.png)

when G=0, Q<sup>+</sup> = Q
when G=1, Q<sup>+</sup> = S+QR = D  
→transparent latch
![[logic-design-19.png]]
![[logic-design-20.png]]
Q<sup>+</sup> = G'Q + GD
![[logic-design-21.png]]

when Clk=1 and x=1, D oscillates
![[logic-design-22.png]]
opening a clock for only a little time (let D pass to Q but not Q→Q' pass to D) will solve the problem
so we restrict the flip-flop to only change on the edge of the clock (input change → no effect)  
→ edge-triggered flip-flop

#### 11.4 Edge-Triggered D Flip-Flop

**rising-edge trigger**(left): output change when Clk=0→1

**falling-edge trigger**(right, *has bubble*): output change when Clk=1→0

![[logic-design-5.png]]

![[logic-design-8.png]]

falling-edge triggered D flip-flop time diagram  

![[logic-design-26.png]]
when Clk=1→0, Q = D the moment Clk change→

###### rising edge triggered D flip-flop 

![[logic-design-27.png]]

when Clk=0, D pass to P, Q<sup>+</sup>=Q  
when Clk=0→1, D pass to P pass to Q  
when Clk=1, Q hold the D when Clk 0→1, D now doesn't affect anything  
when Clk=0→1, nothing happens

![[logic-design-28.png]]

t<sub>su</sub> (setup time) = D's must-stable time before Clk 0→1  
t<sub>h</sub> (hold time) = D's must=stable time after Clk 0→1  
t<sub>p</sub> = clock's propagational delay
![[logic-design-29.png]]

an example of minumum clock period
![[logic-design-30.png]]

#### 11.5 S-R Flip-Flop

![[logic-design-14.png]]

(rising-edge)  

![[logic-design-32.png]]
NOR-gate S-R latch: Q<sup>+</sup>=S+R'Q  
when Clk=0, S<sub>1</sub>=S, R<sub>1</sub>=R (Master)  
when Clk=1, Q=P
![[logic-design-33.png]]

Q change when Clk=0→1
![[logic-design-34.png]]
at t<sub>4</sub>, Clk=1→0, so P=S+R'Q=1  
at t<sub>4</sub>, Clk=0→1, so P=1 pass to Q  
but S=R=0 then, Q shoudln't change  
so we ==only allow inputs change when clock is high==

#### 11.6 J-K Flip-Flop

![[logic-design-23.png]]

(rising-edge)

![[logic-design-36.png]]
when Clk=1, ==P=JQ'+K'Q==  
when J=K=1 and Clk=0→1, Q<sup>+</sup>=Q'  
so ==J=K=1 is illegal==
![[logic-design-37.png]]
![[logic-design-38.png]]

#### 11.7 T Flip-Flop

![[logic-design-24.png]]

![[logic-design-40.png]]
J-K flip-flop: Q<sup>+</sup>=JQ'+K'Q
D flip-flop: Q<sup>+</sup>=D when Clk=1

==Q<sup>+</sup> = TQ' + T'Q = T ⊕ Q==  
![[logic-design-41.png]]
![[logic-design-42.png]]

#### 11.8 Flip-Flops with Additional Inputs
###### D flip-flop with clear and reset
![[logic-design-43.png]]
if ClrN=0 then Q→0  
if PreN=0 then Q→1

![[logic-design-44.png]]
![[logic-design-45.png]]

###### D flip-flop with clock enable
![[logic-design-46.png]]
Q<sup>+</sup> = Q·CE' + D·CE (when Ck=1)

*implementation*
![[logic-design-47.png]]
Q<sup>+</sup> = Q·CE' + D<sub>in</sub>·CE

#### skip 11.9 =))

## Ch14 Derivation of State Graphs and Tables
example: 
design the circuit so that any input sequence ending in 101 will produce an output Z = 1
coincident with the last 1
![[logic-design-48.png]]
*the symbol before the slash is the input and the symbol after the slash is the corresponding output*

######## Mealy machine

![[logic-design-25.png]]

target: $S_0S_1S_2$ = 101
$S_0$: get 1 →store it ; get 0 → again

![[logic-design-50.png]]
$S_0S_1S_2$ 基本上可以隨便代  
(i.e. $S_0$ 可以 00 or 01 or whatever 代替)  
出來的電路、SOP 會不一樣，但實質結果是相同的  
![[logic-design-51.png]]
![[logic-design-52.png]]
![[logic-design-53.png]]
    
######## Moore machine
![[logic-design-54.png]]

![[logic-design-55.png]]
![[logic-design-56.png]]

initial state = 1  
→ ++01++000 underline part Z=1

#### 14.2 More Complex Design Problems

##### a Mealy example
The output Z should be 1 if the input sequence ends in either 010 or 1001, and Z should be 0 otherwise.
![[logic-design-57.png]]

010|
_10|01

1001|
__ 01|0

"|": 接在一起處

![[logic-design-58.png]]

##### a Moore example

The output Z is to be 1 if the total number of 1’s received is ++odd++ and at least ++two consecutive 0s++ have been received.  

![[logic-design-59.png]]

![[logic-design-60.png]]

![[logic-design-62.png]]

#### 14.3 Guidelines for Construction of State Graphs

The circuit examines groups of four consecutive inputs and produces an output Z = 1 if the input sequence 0101 or 1001 occurs. The circuit resets after every four inputs.  
【Mealy】  
![[logic-design-63.png]]
0101 & 1001 可共用  
<!-- partial   -->
![[logic-design-64.png]]
<!-- complete   -->
![[logic-design-65.png]]
錯的 → 進到紅框區 → output 0  
![[logic-design-66.png]]
a group of 5 → 下面再多一層 以此類推  

==跳過 example 2, 3==

#### 14.4 Serial Data Code Conversion
![[logic-design-67.png]]
![[logic-design-68.png]]
NRZ：non return to zero, 不變  
RZ：return to 0, 變 1 後, 後半變回 0  
NRZI：inverted, 看 1 的奇偶 (i.e. 0 → Q^+^=Q ; 1 → Q^+^=Q') 
Manchester：0 → 後半變 1 ; 1 → 後半變 0  

######## Mealy ver.  
NRZ {→|convert} Manchester  
![[logic-design-69.png]]  

ideal：忽略延遲  
actual：有延遲，出現 false output  
![[logic-design-70.png]]   
<!-- clock2 頻率 2 倍 for manchester   -->
clock2 頻率 2 倍 → 所有 output changes 都在 edge 上  
NRZ stable for 2 clock2 period  
clock change but input hasn't → glitch  

![[logic-design-71.png]]  
![[logic-design-72.png]]  
S~1~ 完不會有 1 so －  

######## Moore ver.
NRZ {→|convert} Manchester  
![[logic-design-73.png]]
![[logic-design-74.png]]
![[logic-design-75.png]]

#### 14.5 Alphanumeric State Graph Notation
(a) F → forward ; R → reverse  
(b) 考量到 FR=11,00
![[logic-design-76.png]]
![[logic-design-77.png]] 

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
![[logic-design-78.png]]
![[logic-design-79.png]]

######## 101 disjoint, output only used in the end
![[logic-design-80.png]]
![[logic-design-81.png]]

#### Problems
######## 14.16
![[logic-design-82.png]]
![[logic-design-83.png]]
ans  
![[logic-design-84.png]]

######## 14.31
![[logic-design-85.png]]
![[logic-design-86.png]]  
ans  
![[logic-design-87.png]]

######## 14.33
![[logic-design-88.png]]
ans  
![[logic-design-89.png]]
![[logic-design-90.png]]

######## 14.38
![[logic-design-91.png]]
ans  
![[logic-design-92.png]]

######## 14.43
![[logic-design-93.png]]
ans  
![[logic-design-94.png]]
![[logic-design-95.png]]

######## 14.45
![[logic-design-96.png]]
ans  
![[logic-design-97.png]]
