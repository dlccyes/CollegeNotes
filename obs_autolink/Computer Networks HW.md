---
title: Computer Networks PA
layout: meth
parent: Computer Networks PA
---
# Computer Networks PA
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

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
