---
title: Computer Networks PA
layout: meth
parent: Computer Networks
---
# Computer Networks PA

## HW1 socket programming
- p2a
	- https://bridgetdeskus.wordpress.com/2013/10/25/assignment-1-web-server/
		- https://bridgetdeskus.files.wordpress.com/2013/10/9.jpg
	- https://github.com/yanxiangyi/Web-Server/blob/master/WebServer.py
	- 網址前面不要加 `https://` !!!!
	- to connect with other device
		- connect to the same wifi
		- bind to the ip address, not 127.0.0.1
		- `ifconfig` in linux or `ipconfig` in windows to find ip
			- http://192.168.43.67:8888/index.html for my 台灣之星
- p2b
	- https://github.com/ashly13/Computer-Networking---A-Top-Down-Approach/blob/master/Socket%20Programming%20Assignments/Chapter%202/Proxy%20Server/ProxyServer.py

## HW2 [[Computer Networks#Go Back N GBN|Go Back N]]

> 作業二有要求大家實作 EWMA ，這部分的實作需要追蹤模擬程式裡面的時間，因此要把 time 這個 global variable 移到上面，大家可以使用這個 global variable 讀取封包傳出和接收的時間，修改過的程式碼已經傳新上傳，同學也可以自行將 time 這個 variable 移到上面讓你的 function 可以讀取到。

`gcc [student id].c -o [student id] -std=gnu11`
`./[student ID] 10 0 0 10 2`
`(b) ./[student ID] 20 0.1 0 10 2`
`(c) ./[student ID] 20 0 0.1 10 2`
`(d) ./[student ID] 20 0.1 0.1 10 2`

- implementations
	- https://github.com/JordanMontgomery/go-back-n
	- https://github.com/KiranThomasCherian/Computer-Networks-/tree/main/Flow%20control%20protocols/Go%20back%20n
- exact same implementation
	- https://gist.github.com/abcdabcd987/27bfcb4a54f828dbd17cd01eb6b58f8a
		- [raw](https://gist.githubusercontent.com/abcdabcd987/27bfcb4a54f828dbd17cd01eb6b58f8a/raw/f7b80c66cce08ed018276d6aee395f861ddc7293/prog2_gbn.c)
		- 這裡比作業多了 buffer，上層送來但 window 已滿還沒辦法送的，會先記錄於 `A.buffer_next`，`BUFSIZE` 是最多可以 buffer 多少
		- 下面的給定 code，作業的比這裡的多了 `eventindex`，但只是標示 window 裡的 index 幾出錯而已
		- ==沒有用 EWMA==

#### notes
- deal with A side logic only
- `A.base` = A 的 window 最舊者，也是 timer 記錄的 segment
- `A.nextseq` = A 接下來應該要收到的 ACK no.
- 這邊的 code 是寫好的
	- main while loop
		- 每次都先 `eventptr = evlist`
		- 然後 `evlist = evlist->next`
	1. `generate_next_arrival`
		1. `evptr->evtype = FROM_LAYER5`
	2. if layer 5 pass down a packet
		- `A_output`
			1. `send_window`
				1. `tolayer3`
					1. `evptr->evtype = FROM_LAYER3`
				2. `starttimer` if `A.base == A.nextseq`
					1. `evptr->evtype = TIMER_INTERRUPT`
		- `B_output`
	3. if layer 3 pass up a packet `FROM_LAYER3`
		1. `A_input`
		2. `stoptimer` if `A.base == A.nextseq`
		3. `starttimer` otherwise
	4. if `TIMER_INTERRUPT`
		1. `timerinterrupt()`
	- timeout
		- `evptr->evtype = TIMER_INTERRUPTTIMER_INTERRUPT` @ `starttimer()`
		- 在 main while loop，`evptr->evtype = TIMER_INTERRUPTTIMER_INTERRUPT` 時 call `timerinterrupt()`
	- `insertevernt()`
		- 把 function 設的 `evptr` 真正弄到 `evlist` 裡

### report
`./b08901064 10 0 0 10 2`
output log 在 `0.2_10-0-0-10-2.txt`
![](https://i.imgur.com/A5UF6Ea.png)
沒有 loss，也沒有 corruption 的情況

`./b08901064 20 0.1 0 10 2`
output log 在 `0.2_20-0.1-0-10-2.txt`
![](https://i.imgur.com/KRgnxSX.png)
可看到有 loss 的情況。當 sender timeout 時，會 resend window 裡的所有 packet。

`./b08901064 20 0 0.1 10 2`
output log 在 `0.2_20-0-0.1-10-2.txt`
![](https://i.imgur.com/7ROXvUy.png)
可看到有 corruption 的情況。當 receiver 收到 corrupted 的 packet 時，會直接 drop，且不回 ACK，因此 sender 就會發生 timeout 的事件，並 resend window 裡的所有 packet。

 `./b08901064 20 0.1 0.1 10 2`
output log 在 `0.2_20-0.1-0.1-10-2.txt`
![](https://i.imgur.com/RmBgtjj.png)
可看到同時有 loss & corruption 的情況。

`./b08901064 100 0 0 10 2`
（依照 $TimeoutInterval = EstimatedRTT+4\cdot DevRTT$ 來定 timeout interval）
output log 在 `0.1_100-0-0-10-2.txt`
![](https://i.imgur.com/WzMJDXF.png)

output log 在 `0.2_100-0-0-10-2.txt`
![](https://i.imgur.com/WW8lnFz.png)

output log 在 `0.4_100-0-0-10-2.txt`
![](https://i.imgur.com/ne8AyGx.png)

output log 在 `0.6_100-0-0-10-2.txt`
![](https://i.imgur.com/MffgilZ.png)

output log 在 `0.8_100-0-0-10-2.txt`
![](https://i.imgur.com/PjIVoyN.png)
從圖中可以發現，$\alpha$ 愈大，estimated RTT 愈會跟著 sample RTT 浮動，隨著目前的壅塞狀況而調整 timeout interval，sample RTT 的鋸齒因此較不明顯。$\alpha$ 很小時，estimated RTT 則不太改變，sample RTT 的鋸齒則較明顯。

Estimated_RTT = 15
output log 在 `0_100-0-0-10-2.txt`
![](https://i.imgur.com/ZbzgUaz.png)
這是在 estimated RTT 直接設為 15 的情況。可以看到 sample RTT 的鋸齒較多。

## HW3 Dijkstra's Algorithm
part 1
`py src1/linkedin.py -lf test/test01.txt -of test/test01_out1_me.txt`
`vimdiff test/*01*out1*.txt`

`py src1/linkedin.py -lf test/test02.txt -of test/test02_out1_me.txt`
`vimdiff test/*02*out1*.txt`

有多種解的情況？

part 2
`py src2/linkedin.py -lf test/test01.txt -of test/test01_out2_me.txt -rm 2`
`vimdiff test/*01*out2*.txt`

`py src2/linkedin.py -lf test/test02.txt -of test/test02_out2_me.txt -rm 2`
`vimdiff test/*02*out2*.txt`

