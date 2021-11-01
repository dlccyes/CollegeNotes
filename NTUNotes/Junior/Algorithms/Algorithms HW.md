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

### 4.
![](https://i.imgur.com/ZcGl76U.png)
![](https://i.imgur.com/8PCU4pX.png)
