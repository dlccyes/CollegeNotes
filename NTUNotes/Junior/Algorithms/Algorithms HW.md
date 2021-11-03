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

### 5. rank functions
![](https://i.imgur.com/lqNMS9W.png)

### 6. labeled linear time maximum subarray
![](https://i.imgur.com/U13C9Nt.jpg)
https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm

### 7. recurrence matrix multiplication
![](https://i.imgur.com/4p2RcAD.png)
![](https://i.imgur.com/diyBwoe.png)

### 8. solve recurrence
![](https://i.imgur.com/dkDsqog.png)
![](https://i.imgur.com/IKB3THc.png)
- 我不是用這個解法

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



### 9.
![](https://i.imgur.com/HMFOqvf.png)
![](https://i.imgur.com/XOmQt87.png)

https://github.com/jason88012/Maximum-Planner-Subset
其實沒什麼用