---
title: Verilog
layout: meth
parent: Programming
---
# Verilog
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## resources
https://www.youtube.com/watch?v=Y3xzOLp1OsE

## execute
to run
```shell
source /usr/cad/cadence/cshrc && source /usr/cad/synopsys/CIC/synthesis.cshrc
ncverilog HW2_tb.v HW2.v +access+r
```

to check
```shell
dv -no_gui
read_verilog HW2.v
```

## syntax	
### always block
```verilog
always @ (sensitivily list) begin
	[statements]
end
```
- `always @ (a or b)` → execute when `a` or `b` changes
- `*` =  all of the wires that the always block depends on
	- `always @ (*)`

https://www.chipverify.com/verilog/verilog-always-block


### print
`$display("counter%d out=%d", counter, out);` decimal
`$display("counter%b out=%b", counter, out);` binary

## extend bits
`outt = {64{in_A}};` → extend `int_A` to 64 bits

## intro

![](https://i.imgur.com/7ytJc9s.png)

- levels of modeling
	- behavioral level
	- register transfer level (RTL)
		- [[Computer Architecture]]
	- gate level
		- gates & wires 去兜出來
		- 數位系統設計、積體電路設計
	- transistor level
		- 類比電路設計、電子電路設計
		- 最底層
- primitive
	- and, or, xor, ...
- port
	- `inout` 不要亂用
	- `adder adder_name (.out(c), .in1(A), .in2(b))`
		- 這樣寫不用管 variable 順序，
	- 不要留東西不接
		- e.g. `adder adder_name (.out(c), .in1(A), .in2())`
- data types
	- nets
		- 管 `wire` `wand` 就好
		- wire
			- 線，do not store value
			- `input` `output` 屬於 wire
	- registers
		- flip-flop
	- integer
- vector
	- wire & reg 可用
	- 建議 high to low
	- `wire [7:0] bus` → 8-bit bus
	- slice
		- `bus[7]` → 7th bit of vector `bus`
		- `addr[1:0]` → 2 most(?) significant bits of vector `addr`
- array
	- reg, integer, time 可用
	- low to high
	- multi-dimensional
		- `integer matrix [4:0][4:0]`
- memory
- string
- logic
	- 1
	- 0
	- z
		- 沒接到東西
		- impedance = $\infty$
	- x
		- unknown
		- 電路設計有問題
- number representation
	- `[size]'[base][number]`
	- base
		- `b` = binary
		- `o` = octal
		- `d` = decimal
		- `h` = hexadecimal
	- only number → 32-bit binary (不建議)
	- e.g.
		- ![](https://i.imgur.com/0KdXdyH.png)
- parameter
	- 就是 variable

## logic design
- `reg [4:0] a;` unsigned
- `reg [4:0] signed a;` signed
- `#10` → 10 時間單位
- negation operator
	- `!` logical negation
		- !有值 → 0
		- !0 → 1
		- !z → x
		- !x → x
	- `~` bitwise negation
		- ~4'b01zx → 10xx
- unary reduction operator
	- `&` logical AND
	- `|` logical OR
	- `^` logical XOR
- shift operator
	- `>>` right logical shift
	- `<<` left logical shift
		- `slli`
	- `>>>` right arithmetic shift
		- 補 sign bit
- sensitivity list
	- always block, variable 有變 → 執行
- blocking & nonblocking
	- ![](https://i.imgur.com/s7tkR3K.png)
	- blocking
		- 計算完馬上更新
		- `x = a + b`
	- nonblocking
		- 都計算完後才一起更新
			- s.t. 不會馬上更新又影響到其他人
		- 所有指令都 parallel 進行 without interfering each other
		- `x <= a + b`
- 東西都要寫滿，每個 variable 都要 specify
	- ![](https://i.imgur.com/AiY9jZM.png)
	- not full case → latch
	- 用 `<=` 時，沒被走道的就被默認為原值
- switch case
	- ![](https://i.imgur.com/RQeo9Mb.png)
- combinational circuit
	- memoryless
	- use blocking
- sequential circuit
	- has memory
	- use nonblocking

## finite state machine
- 期末考會考
- see [[Logic Design]]
- moore
	- output 只跟 current state 有關
- mealy
	- output 跟 current state & input 有關

## debug
- `A net is not a legal lvalue in this context`
	- you might have `output ready` and you do `ready = 1` in an `always` block; you should add `reg ready`
	- https://stackoverflow.com/questions/29820382/compilation-error-a-net-is-not-a-legal-lvalue-in-this-context
- `the statements in this 'always' block are outside the scope of the synthesis policy. Only an 'if' statement is allowed at the top level in this always block. (ELAB-302)`
	- 在 clock 類型 (還是說 sequential block ?) 的 `always` block 裡，top level 只能是 `if`，不能有其他東西
	- http://www.eda8.com/?action-viewthread-tid-80474
- `or a directly connected net is driven by more than one source, and not all drivers are three-state`
	- a variable value is changed in more than one `always` block i.e. 只能在同一個 `always` block 對變數進行操作
	- https://bbs.eetop.cn/thread-305696-1-1.html
- how to not latch
	- full case
	- use `var_nxt = var` and update `var <= var_nxt` in sequential block
	- all things used in `always` block is in the sensitivity list
	- https://stackoverflow.com/questions/20036401/if-statements-causing-latch-inference-in-verilog

## examples
### ALU
![](https://i.imgur.com/X34nm9I.png)
