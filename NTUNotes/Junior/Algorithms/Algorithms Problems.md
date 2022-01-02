---
parent: Algorithms
layout: meth
---
# Algorithms Problems
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## HW1
### 1. linear search
![](https://i.imgur.com/YnPRYZp.png)
![](https://i.imgur.com/xdOjjhF.png)
![](https://i.imgur.com/aTGLUwF.png)

### 2. binary search
![](https://i.imgur.com/tekzuYF.png)
![](https://i.imgur.com/9gzSSqL.png)
- 9-12 怪怪的，應該相反？

### 3. bubblesort
![](https://i.imgur.com/lijR14d.png)
![](https://i.imgur.com/CPshSeo.png)
![](https://i.imgur.com/GgoFatF.png)
![](https://i.imgur.com/yLFo8Id.png)
![](https://i.imgur.com/F7Lf4Dh.png)

### 4. big theta pf
![](https://i.imgur.com/V18dEh8.png)
![](https://i.imgur.com/kyhTkVv.png)

### 5. ranking functions
![](https://i.imgur.com/lqNMS9W.png)
![](https://i.imgur.com/JC8Ljg5.png)


### 6. labeled linear time maximum subarray
![](https://i.imgur.com/U13C9Nt.jpg)
https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm

### 7. recurrence matrix multiplication
![](https://i.imgur.com/4p2RcAD.png)
![](https://i.imgur.com/diyBwoe.png)

### 8. solve recurrence
![](https://i.imgur.com/dkDsqog.png)
(b.)
把 lg 換成 $log_3$，最後近似成積分
![](https://i.imgur.com/C2rprXa.png)
![](https://i.imgur.com/5RkHVhL.png)
![](https://i.imgur.com/BCpaJyq.png)

### 9. polynomial multiplication
![](https://i.imgur.com/H4N4oao.jpg)
![](https://i.imgur.com/jufqRYj.jpg)
http://algorithm.cs.nthu.edu.tw/~course/Extra_Info/Divide%20and%20Conquer_supplement.pdf

## HW2
### 1. d-ary heap
![](https://i.imgur.com/mXbTMUX.png)
![](https://i.imgur.com/mXt3W3q.png)

(a.)
課本解答怪怪的
![](https://i.imgur.com/9NgaiYr.png)
https://www.cs.cmu.edu/~eugene/teach/algs03b/works/s6.pdf
(b.)
$log_dn$
(c.)
![](https://i.imgur.com/iRyHvH8.png)
有些地方寫錯了
(d.)
![](https://i.imgur.com/KqlP2XA.png)
![](https://i.imgur.com/l9ZzZuk.png)
不太完整
(e.)
![](https://i.imgur.com/VlfRhhe.png)

### 2. tail recursive quicksort
![](https://i.imgur.com/dtBqlS9.png)
![](https://i.imgur.com/vObRscQ.png)

(a.)
![](https://i.imgur.com/xFNQb7f.png)
(b.)
![](https://i.imgur.com/CCoKYpY.png)

正解
![](https://i.imgur.com/0gZeyMV.png)

### 3. counting sort
![](https://i.imgur.com/HzGLTrp.png)
![](https://i.imgur.com/ch3U4vu.png)
![](https://i.imgur.com/1sbUDdM.png)
![](https://i.imgur.com/WzYaHLV.png)
(e.)
https://www.itread01.com/articles/1485928815.html
```py
def countingsort(seq, k): 
    """In-place counting sort. """ 
    c = [0] * k 
    sn = len(seq) 
    for i in range(sn): 
        c[seq[i]] += 1 
        ac = c[:] 
    for i in range(1,k): 
        ac[i] += ac[i-1] 
        act = ac[:] 
    i = sn - 1 
    i = 0
    while i <= sn-1:
        elem = seq[i] 
        # 該區間為排好序的序列中elem及所有相等的元素所處的位置 
        if ac[elem] - c[elem] <= i <= ac[elem] - 1: 
            i += 1 
        else:
            # 交換兩元素，在下一次循環繼續檢查該位置 
            seq[i] = seq[act[elem]-1] 
            seq[act[elem]-1] = elem 
	        act[elem] -= 1 
```
==不太懂為何是 while loop 是 O(n)==

正解
![](https://i.imgur.com/a46n4Ys.png)

### 4. quicksort
![](https://i.imgur.com/ZcGl76U.png)
![](https://i.imgur.com/8PCU4pX.png)
like [[Algorithms#Quicksort]]
partition:  
blue 到處跟 red 比，得到比他大的一堆，跟他一樣的一個，比他小的一堆

![](https://i.imgur.com/zK5fz58.png)
![](https://i.imgur.com/MwKQP2K.png)
![](https://i.imgur.com/6ZPWi2V.png)

https://www.techiedelight.com/water-jugs-problem/

### 5. 綜合
![](https://i.imgur.com/Lw3CKHQ.png)
(b.)
build max heap take O(n) time
[[Algorithms#heapsort]]
(c.)
[[Algorithms#order statistics]]
![](https://i.imgur.com/4rkV4ox.png)

### 6.
![](https://i.imgur.com/YS5hpk6.png)


### 7. dynamic programming
![](https://i.imgur.com/BS5TH64.png)

 https://github.com/zain58/DAA_Project_15B-058-SE
先 solve 第 n 個月
s = 現存 surplus
for s = 1:D
calculate min cost to produce 剛好 (last month so 不用多做)
把結果存進 costable[n,s]
U = $d_n$ 表示這個月最多可以做多少
然後往回解
**for k = n-1 downto 1** (第一層)
在第 k 個月
U += $d_k$
表示最多可以做前面幾個月的需求量加上這個月的需求量 (U<=D)
**for s = 1 to D** (第二層)
f = 這個月做多少
**for f = max($d_k$-s) to U-s** (第三層)
cost = costable[k+1, s+f-$d_k$] + c*(f-m) + h(s+f-$d_k$)
（因為第 k+1 個月已經算過了，所以 costable[k+1, :] 都有值）
結果存進 costable[k,s]
productiontable[k,s] 則存 kth 月存量 s 的情況下該 produce 多少
一路解到第一個月
完成 nxD 的 costable & productiontable
從 costable[1,0] & productiontable[1,0] 開始往後推
就可得到最佳 production plan & cost

3 個 for loop，$\in O(nD^2)$
space $\in O(nD)$

```py
def invent_plan( n = [], m, c, D = [], d, h):
#let cost[1..n, 0..D] and make[1..n, 0..D] be new tables # Compute cost[n, 0..D] and make[n, 0..D]
 for s in range(len(D)):
        f = max(dn - s, 0)
        cost[n, s] = c * max(f - m, 0) + h(s + f - dn)
        make[n, s] = f
 U = dn
for k in range(len(n)):
   U = U + dk
   for s in range(len(D)):
     cost[k, s] = 0
     for f in range(max(dk - s, 0), U - s):
       val = cost[k + 1, s + f - dk] + c * max(f - m, 0) + h(s + f - dk)
       if val < cost[k, s]:
         cost[k, s] = val
         make[k, s] = f
         print(cost[1, 0])
         plan(make, n=[], d)
         return;
def plan(make, n=[], d):
  s = 0
  for k in range(len(n)):
    print("For month ", k ,"manufacture ", make[k, s], "machines")
    s = s + make[k, s] - dk
    return;
```

![](https://i.imgur.com/u3pNkXP.png)

<!--
解法 1:
m 可選 1:D
n 月 → O(nD)
每月又可以選多做多少 1:D (D_m:D)
→ O(nD^2)

但用 greedy 的話，每月多做多少就固定選剛剛好，就一個選擇 → O(nD)

- 陳富中

解法 2:
m 為給定
每個月可不花錢生產 1:m
-->

### 8. maximum subarray dp !!
![](https://i.imgur.com/xxiCvHG.png)
https://www.csie.ntu.edu.tw/~hsinmu/courses/_media/ada_13fall/midterm2013_sol.pdf
see my written solution
(a.)
![](https://i.imgur.com/r77lu7G.png)
![](https://i.imgur.com/GZJxaoQ.png)
==不太懂==
(b.)
Kandane's algorithm
https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
http://people.cs.bris.ac.uk/~konrad/courses/2019_2020_COMS10007/slides/18-elements-of-dynamic-programming-short.pdf

正解
![](https://i.imgur.com/TFmOmiC.png)

### 9. dynamic programming
![](https://i.imgur.com/HMFOqvf.png)
![](https://i.imgur.com/XOmQt87.png)

https://github.com/jason88012/Maximum-Planner-Subset
有一點點幫助

有沒有 +1 應該是等效的?

正解
![](https://i.imgur.com/TYJ7ZjU.png)
![](https://i.imgur.com/kkZPZRJ.png)

類題
![](https://i.imgur.com/CCfLwsw.png)
![](https://i.imgur.com/AXAIqOb.png)


## DIY 2
#### ideas
- 電路 debug
	- 哪條線有問題
	- min debug 次數
	- 每條線 debug 時間/cost 不同，求 min debug time/cost
	- options
		- 每個元件按一按確認有接好
			- low cost, debug 成功率低
		- 換/測試元件
			- 每個元件有不同的 cost
				- 有些線藏在一堆線之中很難換
				- 有些元件很難測試
					- 電阻就量電阻就好
					- ua741 不知道要怎麼測
				- 有些元件很難換成新的
					- 很難找
					- 電源供應器 示波器 etc.
			- assume 換/測試完元件後，這個元件就不可能會有問題了 for simplification → remove from array (or set value to something distinguishable)
	- given a cost array
	- divide and conquer
		- 分模組 debug
	- [[Algorithms#Knapsacks]]
		- 給定 Time array for 各元件的 debug 複雜度
		- 給定 Probability array for 各元件出問題的機率
		- 給定 time constraint，要在 constraint 內得到最 probability 加總最大的 subset
		- 可以自己加幾個元素
			- 每個元件按一按確認有接好
				- low time, low probability

#### 開寫
小明是一個熱愛生物與電路，十選二實驗修生醫工程的電機系學生。為了濾掉雜訊，呈現出清晰的生理電訊號，小明設計了一個複雜的電路，包含了 pre-amplifier、兩個 notch filter、low-pass high-pass filter 各一個、post-amplifier 以及 level shifter，最後再接一個二極體攔截負電，以免燒壞 arduino 板子。經過了漫長的規劃與設計，並實際接完電路後，小明興奮地為自己貼上了電極片，以自己的身體作為 input 輸入到苦心做出的電路，不料在示波器上迎接他的卻是一片雜訊！不過，這可難不倒已經度過了電路學&電子一二實驗之磨難的小明！小明於是開始 debug，電阻電容電線 ua741 電源供應器東丟丟西換換，終於在六個小時後，成功在示波器上呈現出完美的心電圖了！真是可喜可賀！
不過，在聽了江蕙如老師所講述的 Knapsacks problem 後，聰明的小明發現，用 dynamic programming 的方法 debug，應該會有效率很多！但是要怎麼做呢？

從 input 到 output 所經過的每一個元件，都有可能發生問題，而每個元件 debug 的難易度又不同
e.g.
- 換一個最外圍的電阻 → 很簡單
- 換一個藏在一堆線裡面的小電容 → 很麻煩，可能還會不小心把其他東西也一起弄掉
- 換電源供應器 → 還要去搬另一台，對肥宅小明來說很費力
- 單獨測試 ua741 → 小明不會，還要去問人

而身為一個資深的電機系學生，每個元件的 debug 難易度一看便知，因此可以輕易做出一個 `Cost` array，標示 debug 各元件所需要花的精力。

而每個元件的預期出問題可能性，其實也能大概判斷出來
e.g.
- 爛爛的線 → 出問題機率高
- function generator → 小明還沒有遇過壞掉的 function generator，所以預期出問題機率較低
- 鏽鏽的電阻 → 出問題機率極高
- 字樣已經被磨得快看不見的 ua741 → 幾乎保證有問題

所以記錄小明所預測的各元件出問題可能性之 `Problematic` array 也能被輕易做出。注意那些數值不是機率，而只是一種相對的指標，愈高代表愈有可能出問題。

而小明雖然熱愛接電路，但一個人的熱情是有限度的。每多花一絲精力在 debug 上面，小明對電路乃至人生的熱情就會削減一分，若花了一定程度的精力都還沒有 debug 成功，小明的精神力就會被消磨殆盡，對於人生不再有熱情。小明會開始產生邊緣性人格，開始厭男仇女，在交流板上到處引戰，成為台大的汙點，社會的亂源，以及台大生茶餘飯後的話題。電機系大一大二一堆無聊又無用的必修已經讓很多學生成為只會計算，不會思考的行屍走肉了，不能再讓區區一個很多 bug 的電路，使一個前途光明（夕陽還是頗亮）的電機系學生走向毀滅的道路。因此為了防止憾事的發生，我們必須讓小明的心態炸裂之前，做 best effort debugging，盡可能 de 最可能出問題的元件們，提高 debug 成功率，阿 de 不出來 ... 就算了。
而如果小明知道 debug 不會花太多功夫 i.e. debug 完還會有很多剩餘精力的話，小明會 debug 得更有效率，effectively 增加 debug 成功可能性。

不過呢，每個人在每個時空對於所花精力的敏感程度又不一樣：
- 若小明心理素質很高，即使知道要重接整個電路，也不會因此而喪氣，影響工作效率，則精力 surplus 重要性較低
- 若小明剛跟女朋友分手或是演算法考試爆掉，整個人處在很脆弱的狀態，如果知道要做很麻煩的 debug，效率會變很低，則精力 surplus 重要性較高

因此，這個 circuit debugging problem 便是，給定兩 array `Cost` & `Problematic` 以及一個 constraint `MP` （代表小明精神力），求 de 到的原件出問題可能性之 sum 再加上精力 surplus 的最大 subset 乘上精力 surplus 重要程度（因時空而異）。



solution:
要做三個 table `C` & `P` & `E`
- `C[i,mP]` 代表，給定 `MP=mP`， element 1 to i 之中的  subset with max sum of 出問題可能性 的 sum of cost
- `P[i,mP]` 代表，給定 `MP=mP`， element 1 to i 之中的  subset with max sum of 出問題可能性的 sum of 出問題可能性
- `E[i,mP]` 代表，給定 `MP=mP`， element 1 to i 之中的  subset with max sum of 出問題可能性

令 n = 可 debug 元件數目；a = 精神力 surplus 的 weight


```
Circuit-Debug(n, Cost, Problematic, MP)
	for mP = 0 to MP
		C[0,mP] = 0
		P[0,mP] = 0
		E[0,mP] = {}
	for i = 0 to n
		C[i,0] = 0
		P[i,0] = 0
		E[i,0] = {}
	for i = 1 to n
		for mP = 1 to MP
			if Cost[i] > mP // 使用 i 必爆 → 不使用 i
				C[i,mP] = C[i-1,mP]
				P[i,mP] = P[i-1,mP]
				E[i,mP] = E[i-1,mP]
			else
				if P[i-1,mP]+a*(mP-C[i-1,mP]) >= (Problematic[i]+P[i-1,mP-Cost[i]])+a*(mP-(Cost[i]+C[i-1,mP-Cost[i]]))) // 不使用 i
					C[i,mP] = C[i-1,mP]
					P[i,mP] = P[i-1,mP]
					E[i,mP] = E[i-1,mP]
				else // 使用 i		
					C[i,mP] = Cost[i]+C[i-1,MP-Cost[i]])
					P[i,mP] = Problematic[i]+P[i-1,mP-Cost[i]])
					E[i,mP] = E[i-1,mP].add(i)

	return P[n,MP]+a*(MP-C[n,MP]), E[n]
```

最後 return 的第一項就是預期 debug 成功可能性。再次強調這個數值並非真的機率。小明並不是神仙，無法判斷出實際的機率。這個數字僅具有相對意義：數字愈大，debug 愈可能成功。
注意不同 a 之下，得到的最終數值並不能互相比較。例如，一個很沒有接電路耐受性的人，a 會被設很高，讓演算法對於精力要素很敏感，但同時也會使所有數值膨脹，而該膨脹後的數值大於另一個 a 很小的人的數值，完全並不代表前者比後者會 debug。

return 的第二項則是演算法跑出的 subset 解 i.e. 實際上該 debug 哪些元件。

該演算法所用的 space = n x MP x  3 $\in O(n(MP))$
該演算法的 time complexity = MP + n + n x MP $\in O(n(MP))$

## Midterm Review
![](https://i.imgur.com/2nGoQvj.png)
![](https://i.imgur.com/862d2BZ.png)

**Q: Heapsort can be used as the auxiliary sorting routine in radix sort, because it operates in place.
**A: False because radix sort should be stable, while heapsort isn't stable

**Q: There exists a comparison sort of 5 numbers that uses at most 6 comparisons in the worst case.
**A: False
using decistion tree, we have 5!=120 leaves, so the height >= lg(120) = 6.xxxx
→ height >= 7 i.e. need at least 7 comparisons 

**Q: for a binary tree with left & right children pointer but not parent pointer, how to find x & y's lowest common ancestor in O(n)?**
A: keypoint - x & y 之 lowest common ancestor 在 x & y 之間, so
![](https://i.imgur.com/zdjn5GQ.png)

optimal BST
![](https://i.imgur.com/1bsL5Bb.png)
![](https://i.imgur.com/2sGmcnm.png)

### guides
- 建議不要用 limit 去 prove function 關係
	- limit 太多

## HW3
### 1. [[Algorithms#Huffman codes]]
![](https://i.imgur.com/k8NiQDd.png)
畫成 binary tree 去 merge 來看

![](https://i.imgur.com/RUoP70b.png)
![](https://i.imgur.com/NkX82Bs.png)
![](https://i.imgur.com/ZSo6ZBY.png)

### 2. BFS
![](https://i.imgur.com/R8VeIvW.png)

![](https://i.imgur.com/VHr1ZUu.png)
![](https://i.imgur.com/hYsPpFK.png)

### 3. edge types
![](https://i.imgur.com/59B5DaQ.png)

![](https://i.imgur.com/aJWHHzf.png)

### 4. BFS
![](https://i.imgur.com/1vmLXy3.png)
![](https://i.imgur.com/9XZBfgi.png)
![](https://i.imgur.com/m43qqgV.png)

### 5-6. Euler tour
![](https://i.imgur.com/irV5KEu.png)

![](https://i.imgur.com/SqFEIEO.png)
![](https://i.imgur.com/p5DULH1.png)
![](https://i.imgur.com/z2PRwSJ.png)
![](https://i.imgur.com/ZYd7yZN.png)


https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiOm6-5u8z0AhXCJKYKHbZDCgkQFnoECAoQAQ&url=http%3A%2F%2Fwww.bowdoin.edu%2F~ltoma%2Fteaching%2Fcs231%2Ffall09%2FHomeworks%2Fold%2FH9-sol%25203.pdf&usg=AOvVaw11Aglt7zTgaartpiheFGjj
![](https://i.imgur.com/WBHdwdu.png)

### 7 Shannon code
![](https://i.imgur.com/yGy1HmT.png)
![](https://i.imgur.com/XfZVMKf.png)

### 8. coin change greedy
![](https://i.imgur.com/kG3u2S0.png)
![](https://i.imgur.com/tEb2mAI.png)
![](https://i.imgur.com/C1o2fsj.png)
![](https://i.imgur.com/tYuKxg6.png)
![](https://i.imgur.com/07mpZ9o.png)
![](https://i.imgur.com/36BpdTI.png)
![](https://i.imgur.com/mI3qOfB.png)
![](https://i.imgur.com/OZ1smZz.png)

## recitation
### [[Algorithms#Huffman codes]]
![](https://i.imgur.com/rkMTtLk.png)
8 個 → 加一個 null 便 9 個，跟 1 2 合

### semiconnected
![](https://i.imgur.com/8mhCHk3.png)
![](https://i.imgur.com/k3KQN9y.png)

### BFS
![](https://i.imgur.com/GUdTSpo.png)
不停找

### DFS
![](https://i.imgur.com/pxTa6Ew.png)
把 G 的 edge 都弄成反邊 s.t. R(u) 都是指到 u

### topological sort
![](https://i.imgur.com/35tjUVY.png)
會把所有 out-degree = 1 in-degree=0 者清掉，剩下的都在 cycle 裡，所以找不到 in-degree=0 → queue emptied

## HW4
### 1. MST
![](https://i.imgur.com/1GQQb2F.png)
![](https://i.imgur.com/GXpPjiA.png)

<http://www.jade-cheng.com/uh/coursework/ics-311/homework/homework-07.pdf>

![](https://i.imgur.com/D884Hyl.png)
![](https://i.imgur.com/MFCwcry.png)

### 2. relax
![](https://i.imgur.com/phkAJRW.png)
![](https://i.imgur.com/PyFTPe6.jpg)

![](https://i.imgur.com/36gLYAN.png)

![](https://i.imgur.com/yybxTyB.png)
https://github.com/gzc/CLRS/blob/master/C24-Single-Source-Shortest-Paths/24.2.md

### 3. graph
![](https://i.imgur.com/0ZP8cpv.png)
![](https://i.imgur.com/60NlYzn.png)

![](https://i.imgur.com/4bEx1TC.png)
[CSIE HW5 sol](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj8-r7S14P1AhUZxYsBHY6CCDkQFnoECAIQAQ&url=https%3A%2F%2Fwww.csie.ntu.edu.tw%2F~hsinmu%2Fcourses%2F_media%2Fada_11fall%2Fhw5-sol.pdf&usg=AOvVaw1xN7Q0oDNN_JihDSQJJK0M)

![](https://i.imgur.com/7OwebSS.png)
![](https://i.imgur.com/mFR0GSh.png)

### 4. floyd warshell
![](https://i.imgur.com/SH1wUdd.png)

https://cs.stackexchange.com/questions/74870/why-can-we-drop-the-superscripts-in-the-floyd-warshall-algorithm

![](https://i.imgur.com/GqanklO.png)

### 5. transistive closure
![](https://i.imgur.com/bV3BBY9.png)
![](https://i.imgur.com/iIZLrKR.png)

![](https://i.imgur.com/VCbdEoI.png)
![](https://i.imgur.com/eemNCje.png)

### 6. flow network
![](https://i.imgur.com/PMUj9vA.png)
![](https://i.imgur.com/nqabjxo.png)
![](https://i.imgur.com/sJya7Fx.png)

![](https://i.imgur.com/fpddJOc.png)

![](https://i.imgur.com/vk06K99.png)
![](https://i.imgur.com/zCA1IYX.png)
[standford](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwja3cT06YX1AhXRrVYBHZUsBQ8QFnoECCMQAQ&url=https%3A%2F%2Fstanford.edu%2F~rezab%2Fclasses%2Fcme305%2FW17%2FMidterm%2Fprobsession2_2017_soln.pdf&usg=AOvVaw3dMlfAnMzmAsC9dDUYYqNR)

![](https://i.imgur.com/2VA8ZAH.png)
![](https://i.imgur.com/lHSE5RD.png)
![](https://i.imgur.com/z3eE0mt.png)

### 7. SCC
![](https://i.imgur.com/Workt6o.png)
[nice graphical explanation](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi56MXUgIb1AhXWy4sBHdq-DDQQFnoECAsQAQ&url=https%3A%2F%2Fwww.iitg.ac.in%2Fdeepkesh%2FCS301%2Fassignment-2%2F2sat.pdf&usg=AOvVaw3q56uzk8OQP0tZQ_BvoVas)

![](https://i.imgur.com/fJvM5Rf.png)

![](https://i.imgur.com/sPltDgb.png)

### 8. graph coloring NP (d.)(e.)(f.)???
![](https://i.imgur.com/OO2bZCO.png)
![](https://i.imgur.com/5z3WlzQ.png)
![](https://i.imgur.com/pbZ4YPJ.png)
![](https://i.imgur.com/iEibUqX.jpg)
![](https://i.imgur.com/Yy0YHa5.png)

(c.)  
1. 3-COLOR can reduce to decision problem of k=3 → if 3-COLOR is NP-Complete, then the decision problem is NP-Hard
2. the decision problem can be verified in polynomial time → is NP
3. is NP-Hard and NP → is NP-Complete

![](https://i.imgur.com/SVA7AZp.png)
![](https://i.imgur.com/Dh9kKZ3.png)
![](https://i.imgur.com/e1JTSE0.png)
![](https://i.imgur.com/OyyHXAm.png)
![](https://i.imgur.com/Y7bjZTu.png)
![](https://i.imgur.com/rC6ePcb.png)

![](https://i.imgur.com/sjM3Xvr.png)
![](https://i.imgur.com/CT2PWYM.png)
![](https://i.imgur.com/ll4xrxv.png)
![](https://i.imgur.com/ajePA4R.png)

### 9. amortized
![](https://i.imgur.com/u9YIVx5.png)
![](https://i.imgur.com/uP8j1nT.jpg)
queue → push to S1  
dequeue → pop from S2, if S2 is empty, push&pop everything from S1 to S2 and then pop

![](https://i.imgur.com/iUug5k6.png)
![](https://i.imgur.com/JUpKMs2.png)
<https://dspace.mit.edu/bitstream/handle/1721.1/37150/6-046JFall-2004/NR/rdonlyres/Electrical-Engineering-and-Computer-Science/6-046JFall-2004/84EBB6F3-2B41-4140-9D39-960EB29423CB/0/ps4sol.pdf>

<https://www.geeksforgeeks.org/queue-using-stacks/>  
method 2

## DIY 4
### ideas
	- queue round robin game game theory
	- opputunistic graph
	- 祖宗十八代 least common ancestor
	- 時空旅人 same subtree

### 開寫
小明是個時空旅人。今天他來到了西元三千年，遇到一個很欠打的人，但是他又不想要打到自己的子孫，於是他跑到了西元四千年，買了一個子孫 decendent tree calculator，一個能夠計算出以你為 root 的完整族譜，並 return root (你)。這個 decendent tree calculator 並不會考慮配偶，每個 node 只有指到自己小孩的 pointer。小明於是先用這個 decendent tree calculator 計算自己，得到自己的 node，再跑回西元四千年，對那個很欠打的人進行計算，得到他的 node。但是，要怎麼知道他是不是自己的子孫呢？一個簡單的方法是，直接對自己的 tree 做 DFS，如果遇到了他的 node，就代表他是自己的子孫。但是，受限於個人資料保護法，decendent tree calculator 並無法存取你的每個子孫的一切資訊。事實上，只有星座是被記錄的，因為西元四千年左右的人們很智障，很喜歡星座，喜歡到政府立法規定每個人的姓名裡都要包含自己的星座，星座成為絕對的公開資訊，因此 decendent tree calculator 所記錄的 node value 就是星座，是用來給老年癡呆的老人們回想起自己兒孫的星座用的好工具（過年見到兒孫們卻說不出他們的星座是會頓失失去兒孫們的尊重）。因此單單 traverse 自己的 decendent tree，是無法判斷那個很欠打的人是否在裡面的，因為 node value 就只有星座。小明苦思許久，都不知道該怎麼辦，因此決定跑回西元 2021 年來問我。我告訴他： 
只檢那個人的星座當然是不夠，但如果檢查了他的所有後代的星座，全部照著順序出現在你的後代裡的話，那麼就可以幾乎確定是他是你的後代了！因此這就是一個檢查一個 tree 是否是另一個 tree 的 subtree 的問題！其實我們只要稍微修一下 DFS 就可以達成了！  
```
isSubtree(root, subRoot)
	preorderArr = []
	DFS(root, preorderArr)
	mainTreeArr = preorderArr // preorder traversal of mainTree
	preorderArr = []
	DFS(subRoot, preorderArr)
	subTreeArr = preorderArr // preorder traversal of subTree
	// return True if subTreeArr is a sequence in mainTree Arr
	for i = 1 to mainTreeArr.size
		if mainTreeArr[i] != subTreeArr[0]
			i += 1
		else
			if mainTreeArr[i:i+subtreeArr.size] == subTreeArr
				return True
	return False
	
DFS(node, preorderArr):
	// append value of node to preorderArr
	add node.val to preorderArr
	if node has no children
		add null to preorderArr
	else
		for v in children of node
			DFS(v, preorderArr)
```
概念就是，先對兩個 tree 各做一次 preorder traversal，並把經過的 node value 都存到一個 array，之後再進行比較，如果一個的 preorder array 是另一個 preorder array 裡面的一段連續 sequence，那麼這個 tree 就是另一個 tree 的 subtree！  
這個演算法的 time & space analysis 如下所示
- time complexity $\in O(V+E)$ ($V$, $E$ are the $|V|$, $|E|$ of the main tree)
	- DFS for main tree → $O(V_{main}+E_{main})$
		- the dominating factor
	- DFS for sub tree → $O(V_{sub}+E_{sub})$
	- traverse through the preorder array of main tree → $O(V_{main})$
- space complexity → $O(V)$ ($V$ are the $|V|$ of the main tree))
	- preorder array for main tree → $O(V_{main})$
		- the dominating factor
	- preorder array for sub tree → $O(V_{sub})$

注意在製作 preorder array 時，如果 node 沒有 children，就加一個 null 進 array，這是為了以下的情況發生：
![](https://i.imgur.com/3VVAzeT.png)
如圖，右 tree 並非左 tree 的 subtree，但如果沒有加 null 進 array，兩者的 preorder arrary 會是
- [1,2,4,5,9,3,6,7,8]
- [2,4,5]

因此會誤判後者為前者的 subtree！但如果加了 null，preorder array 會變成
- [1,2,4,null,5,9,3,6,null,7,null,8,null]
- [2,4,null,5,null]

就可以準確判斷出後者不是前者的 subtree 了！

如此一來，只要發現那個很欠打的人的後代 tree 有出現在自己的後代 tree，就可以幾乎確定那個人是你的後代，那麼你就不應該打他！注意，雖然那個儀器是定位在西元四千年，跟西元三千 年差了一千年，因此那個人的後代 tree 會足夠龐大，但還是有微小機率你的某個後代的所有後代的星座跟那個人的一模一樣，所有你有可能誤判他為你的後代，而不打他。不過他的後代 tree 如果沒有出現在你的後代 tree，那麼他就絕對不是你的後代，你就可以盡情地打他！這符合人本社會的精神：寧可錯放，不可錯懲！