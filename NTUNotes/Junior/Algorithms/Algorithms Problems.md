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

類題
![](https://i.imgur.com/CCfLwsw.png)
![](https://i.imgur.com/AXAIqOb.png)


### DIY
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

optimal BST
![](https://i.imgur.com/1bsL5Bb.png)
![](https://i.imgur.com/2sGmcnm.png)


### guides
- 建議不要用 limit 去 prove function 關係
	- limit 太多