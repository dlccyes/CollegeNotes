---
aliases: [演算法]
has_children: true
title: Algorithms
layout: meth
---
 
# Algorithms
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>

- TOC
{:toc}
</details>

### pseudocode
- array position 1-A.length
- for
	- `for i = 1 to A.length`

### insertion sort
![](https://i.imgur.com/8aTILkM.png)
![](https://i.imgur.com/1yfkAvE.png)
```cpp
void insertion_sort(int x[],int length)//define function
{
  int key,i;
  for(int j=1;j<length;j++)
  {
     key=x[j];
     i=j-1;
     while(x[i]>key && i>=0)
     {
         x[i+1]=x[i];
         i--;
     }
     x[i+1]=key;
  }
}
```
- 排撲克牌時的排法
- n 很小時表現很好
- properties
	- incremental approach
	- in place
		- 直接在原 array 做，不須額外 space
	- stable
		- 數值相同時，sorting 前後順序一致
- time complexity
	- worst case
		- reverse sorted, while loop iterate j
	- best case
		- already sorted
	- average case
		- while loop iterate j/2

### loop invariant
- está verda siempre
	- pre, peri & post loop iteration
- like math induction
- 3 properties
	- initialization
		- in for loop, just after the assignment of i, before the boolean test
		- ![](https://i.imgur.com/lxcNBvp.png)
	- maintenance
	- termination
	- ![](https://i.imgur.com/yv9NKzi.png)


## complexity
- time complexity
	- steps
- space complexity
	- memory requirement

### functions
- f(n)
	- $f(n) \geq 0$ nonnegative
	- $n \in N$
- $f(n)=O(g(n))$
	- upper bound
	- $\exists c>0$ and $n_0>0$ s.t. $0\leq  f(n)\leq cg(n)$ $\forall n \geq n_0$ 
	- $\lim_{n\rightarrow\infty} \frac{f(n)}{g(n)} \in [0,\infty)(i.e. <\infty)$  if the limit exists
- $f(n)= \Omega(g(n))$
	- lower bound
	- $\exists c>0$  and $n_0>0$ s.t. $0\leq cg(n)\leq f(n)$ $\forall n \geq n_0$
	- $\lim_{n\rightarrow\infty} \frac{f(n)}{g(n)} \in (0,\infty](i.e. >0)$  if the limit exists
- $f(n)=\Theta(g(n))$
	- tight bound, bounded by $O$ & $\Omega$
	- $f(n)=O(g(n))$ and $f(n)= \Omega(g(n))$
	- $\exists c_1,c_2>0$ and $n_0>0$ s.t. $0\leq  c_1g(n) \leq f(n)\leq c_2g(n)$ $\forall n \geq n_0$ 
	- $\lim_{n\rightarrow\infty} \frac{f(n)}{g(n)} \in (0,\infty)$  if the limit exists
- $f(n)=o(g(n))$
	- untightly upper bound
	- $\forall c>0$ , $\exists n_0>0$ s.t. $0\leq  f(n)< cg(n)$ $\forall n \geq n_0$ 
	- $\lim_{n\rightarrow\infty} \frac{f(n)}{g(n)} = 0$  if the limit exists
- $f(n)= \omega(g(n))$
	- untightly lower bound
	- $\forall c>0$ , $\exists n_0>0$ s.t. $0\leq cg(n)< f(n)$ $\forall n \geq n_0$
	- $\lim_{n\rightarrow\infty} \frac{f(n)}{g(n)} = \infty$  if the limit exists

### properties
- transitivity
	- $f(n)=\Pi(g(n))$ and $g(n)=\Pi(h(n))$ → $f(n)=\Pi(h(n))$ for $\Pi=everything$
- rule of sums
	- $f(n)+g(n)=\Pi(max\{f(n),g(n)\})$  for $\Pi=big$
- rule of products
	- $f_1(n)=\Pi(g_1(n))$ and $f_2(n)=\Pi(g_2(n))$ → $f_1(n)f_2(n)=\Pi(g_1(n)g_2(n))$ for $\Pi=everything$
- transpose symmetry
	- $f(n)=O(g(n))\iff g(n)=\Omega(f(n))$
	- $f(n)=o(g(n))\iff g(n)=\omega(f(n))$
- reflexivity
	- $f(n)=\Pi(f(n))$ for $\Pi=big$
- symmetry
	- $f(n)=\Theta(g(n))\iff g(n)=\Theta(f(n))$

### notation
- $lgn = log_2n$
- $lg^{(i)}n = lglglglg....lgn$
- $lg^*n=min\{i\geq0:lg^in\leq1\}$
- polynomial-time
	- $O(p(n))$, $p(n)=n^{O(1)}$
- ![](https://i.imgur.com/YSkfotF.png)

### others
- input size: size of encoded binary string
	- integer n → input size = lgn
- BIPS
	- billion instruction/operation per second
- ![](https://i.imgur.com/JeFmLQ9.png)

### growth of function examples
- ratio limit doesn't exist
	- $f(n)=2^n$
	- $g(n)=2^n$ if n is even, $g(n)=2^{n-1}$ otherwise
- ![](https://i.imgur.com/CoYpovZ.png)
- Stirling's approximation
	- ![](https://i.imgur.com/AyvoMnd.png)
	- can use it to approximate $(lgn)!\in\Theta(n^{lg(lgn)})>n^k$
- ![](https://i.imgur.com/sVeoHV6.png)
- $ln(n!)\in \Theta(nlnn)$
	- ![](https://i.imgur.com/nezIpjR.png)
	- ![](https://i.imgur.com/X23recI.png)

## Divide and Conquer
- divide into subproblems
- conquer subproblems recursively
- combine the subsolutions into an overall solution

### mathematical induction
- weak induction
	- basis step
	- inductive step
		- $P(K) → P(K+1)$ $\forall k\in N$
- strong induction
	- basis step
	- inductive step
		- $P(0)\land P(1)\land .... \land P(K) → P(K+1)$ $\forall k\in N$
	- 跟 weak induction 一樣強
	- 比較好證
- defective chessboard
	- $2^n\times2^n$ 缺一塊的 chessboard 可被 triominoes 拼完
	- basis step
		- ![](https://i.imgur.com/8J7Its4.png)
	- inductive step
		- ![](https://i.imgur.com/tNbSa56.png)
		- 中間挖一個 triomonoe 洞，變成四塊缺一角的 $2^{k-1}\times 2^{k-1}$ 的 chessboard
			- so 假設 k-1 成立，則 k 必成立

### solve recurence
#### unrolling
- iteration
	- ![](https://i.imgur.com/IFGAiT4.png)
- recursion tree
	- ![](https://i.imgur.com/cGkapaH.png)
		- do n work and call n/2 4 times at level n
	- ![](https://i.imgur.com/HcwSiCU.png)

#### substitution
- guess and proof (with strong induction)
- 不太需要管 n/2 是不是整數之類的的問題
- 猜答案方法
	- 隨便畫個 recursion tree
- e.g.
	- ![](https://i.imgur.com/DoduKNT.png)
		- strong induction
	- ![](https://i.imgur.com/IXGvBrO.png)
		- \>cn → wrong
- 減掉一個 lower order term
	- ![](https://i.imgur.com/W4PALFT.png)
- 考法
	- 跟你說要證什麼 (不用猜)

#### Master theorem
- [[Data Structure#Master Theorem]]
- ![](https://i.imgur.com/NS95Ds4.png)
- ![](https://i.imgur.com/Tw5Bxt8.png)
	- 最下層最好用 k or c 代替，之後再 asymptotic

#### examples
- $T(n)=T(n/2)+T(n/4)+n\in\Theta(n)$
	- substitution
	- ![](https://i.imgur.com/3DUygZc.png)
		- 最後分母是 1-(p+q) 
		- if p+q>1 && p,q>1
			- $2^{log_{1/q} (n)} <= leaves <= 2^{log_{1/p} (n)}$
- ![](https://i.imgur.com/161Pvrb.png)

### merge sort
```pseudo
MergeSort(A,p,r) //T(n)
	if (p<r) then //1
		q=Math.floor((p+r)/2) //1
		MergeSort(A,p,q) //T(n/2)
		MergeSort(A,q+1,r) //T(n/2)
		Merge(A,p,q,r) //n
		
MergeSort(A,1,A.length)
```
- 不停分兩半，直到只剩一個 → 合回去時 sort
- ![](https://i.imgur.com/Y01LdA4.png)
- `Merge()` 
	- $\in \Theta(n)$
		- 兩個已經 sort 好的 n/2 array，做 sorting → n 次比較
	- 需要額外 memory
		- 兩半各一個 auxiliary array
	- pseudo code
		- ![](https://i.imgur.com/GjATP2e.png)
		- ![](https://i.imgur.com/SwlMq2t.png)
			- 4-5: L = 左半 array
			- 6-7: R = 右半 array
			- 8-9: L & R 的最後一項設成無限
			- 10-17: 從小到大，一個一個比對 L & R，較小者填進 main array
	- time complexity $\in \Theta(nlgn)$
		- ![](https://i.imgur.com/riBAsoE.png)
			- 其實是 $T(n)=T(\lfloor n/2\rfloor)+T(\lceil n/2\rceil)+cn$ $\because$左右數量非 n/2，但可忽略
		- using unrolling - recursion tree
			- ![](https://i.imgur.com/GXKp4kd.png)
			- $cn(lgn+1)$
		- using substitution
			- 猜 $O(nlgn)$
				- basis & inductive
		- beats	[[#insertion sort]]
- properties
	- stable
	- not in-place
	
### maximum subarray
- leetcode maximum subarray 四部曲
- 分成左&右&橫跨部分
	- ![](https://i.imgur.com/Eajglcd.png)
	- 橫跨部分
		- ![](https://i.imgur.com/G5xs4rz.png)
- ![](https://i.imgur.com/8gaxx9D.png)
- $\Theta(nlgn)$
	- ![](https://i.imgur.com/hefWWpw.png)

### Strassen's method
matrix multiplication 
- normal $\in O(n^3)$
	- $n^2$ elements, each is the sum of $n$ values
- divide into 4 n/2xn/2 
	- $\in \Theta(n^{lg8})=\Theta(n^3)$
		- ![](https://i.imgur.com/dOguHFK.png)
			- Master theorem
		- 只要 T(n/2) 係數是 7，就會 $\in o(n^3)$
	- Strassen's method $\in \Theta(n^{lg7}) \in o(n^3)$
		- ![](https://i.imgur.com/jVACP7J.png)

## Sorting
### sorting comparisons
- time complexity
	- ![](https://i.imgur.com/H2pkRv5.png)
- stable
	- ![](https://i.imgur.com/xo3n0Z8.png)

### Quicksort
- use divide-and-conquer
- ![](https://i.imgur.com/HIkmxlz.png)
	- partition 後基準的位置的左右再各執行
- partition
	- 選基準點 (e.g. rightmost)
	- 掃過 array，把小於基準的放在前面，大於基準的放在後面，最後基準放前後之間
	- ![](https://i.imgur.com/CFfTYYR.png)
		- return 最後基準點在的位置
			- $\Delta i=$ 小於基準者的數目
	- ![](https://i.imgur.com/q0gDUxX.png)
	- loop invariant 
		- ![](https://i.imgur.com/dxSYm2u.png)
		- unrestricted: 還沒掃到的
	- ![](https://i.imgur.com/r74wukj.png)
		- 用 swap 的
- time complexity
	- best case $\in\Theta(nlgn)$
		- 每個都均勻分
		- ![](https://i.imgur.com/vkKjwX3.png)
	- worst case $\in\Theta(n^2)$
		- sorted OR reversely sorted
		- ![](https://i.imgur.com/nutGH85.png)
	- practically very good, but asymptotically bad

#### randomized partition
- random 選一個 element 跟最後一位交換
- ![](https://i.imgur.com/jqWEcR5.png)
- time complexity
	- worst case
		- ![](https://i.imgur.com/Lx8KUT3.png)
	- expected $\in O(nlgn)$
		- method 1
			- ![](https://i.imgur.com/G8YbDPT.png)<br>![](https://i.imgur.com/dwZxmtx.png)
				- $X_q=1/n$
				- sum(T(q-1))=sum(T(n-q))
				- 忽略 q=0, 1
				- 猜 nlgn
		- method 2
			- runtime $\in O(n+X)$
			- n elements → max n partitions
			- X comparisons
				- 只有 pivot 需要跟別人比較
				- 兩 elements 至多比較一次
				- ![](https://i.imgur.com/VE8VtXN.png)
					- E[X] = expected X
				- ![](https://i.imgur.com/W0OswXI.png)
					- $E[X_{ij}] = z_i$ or $z_j$ 為 pivot 的機率

#### Hoarse partition
- 原始提出版本
- ==很愛考==
- ![](https://i.imgur.com/cX71iZV.png)
- i & j 交疊 → 完成
- pseudo code
	- ![](https://i.imgur.com/8LicOkw.png)
- ![](https://i.imgur.com/vgDTdFO.png)
- loop invariant
	- ![](https://i.imgur.com/8AlyGZJ.png)
- 好處壞處 complexity 都跟課本版本一樣

### heapsort
#### heap (priority queue)
- ![](https://i.imgur.com/Lkrx2KU.png)
- [[Data Structure#bineary heap]]
- heapify
	- percolate down
	- ![](https://i.imgur.com/KYKyu9D.png)
	- worst case
		- ![](https://i.imgur.com/hUl80rR.png)
		- 最下層 half full → 左邊 size <= 2n/3
	- time complexity
		- ![](https://i.imgur.com/PbcGwU5.png)
- depth vs. height
	- ![](https://i.imgur.com/iPaoMFL.png)
- binary tree to max-heap
	- ![](https://i.imgur.com/oWNCSBd.png)
	- bottom-up, percolate up
- build max heap $\in O(n)$
	- bottom-up heapify
	- ![](https://i.imgur.com/1zdcwLQ.png)
		- taylor series
		- ![](https://i.imgur.com/gbxjjIQ.png)
	- https://stackoverflow.com/a/18742428/15493213

#### heapsort
- 用 max-heap 做 selection sort
- ![](https://i.imgur.com/Z5DBlGa.png)
	- 存成 max-heap → 重複把 delete min i.e. 把 max (第一項) 跟 bottom-level 最右 (第二項) 交換 → 成功排序
- ![](https://i.imgur.com/SNWXpIN.png)
- time complexity $\in O(nlgn)$
	- heapify O(lgn)
	- iterate n 次
- in-place
	- 都在原本的 array 上面做

### comparison-based sorters
- decision tree
	- leaf 代表 n 個數字排序可能的結果 → n! leaves
	- ![](https://i.imgur.com/RIfsgIp.png)
- ![](https://i.imgur.com/miRgVNZ.png)

### sorting in linear time
![](https://i.imgur.com/SiKs69T.png)
![](https://i.imgur.com/GnKQbCp.png)
radix & bucket sort use other sorters to do the actual sorting

#### counting sort
- 有 m 個數字 <= k → 把 k 放在位置 m
- ![](https://i.imgur.com/1ooBJew.png)
- stable
- time complexity $\in O(n+k)$
	- $\in O(n)$ if $k\in O(n)$
	- pseudo-linear time otherwise

#### radix sort
- 一個位數一個位數 sort，從最小位數開始
	- ![](https://i.imgur.com/sCIxPnl.png)
- 需 stable sorter
	- counting sort
		- not in-place → need more memory
	- insertion sort
		- fast when size small
- time complexity $\in O(d(n+k))$
	- n d-digit numbers
	- each digit has k possible values ???
	- $\in O(n)$ if $d\in O(1)$ & $k\in O(n)$
- stable, in-place or not depends on what sorter used (to sort each digit)

#### bucket sort
- 分成很多個同樣區間的 bucket，先把各數字放進各自的 bucket，在各 bucket 裡 sort，最後 combine
	- ![](https://i.imgur.com/BnAkOLS.png)
- k buckets
	- 區間為 1 → [[#counting sort]]
- space complexity $\in O(n+k)$
- time complexity
	- iterate all elements, in each bucket, but will iterate n elements at most
	- expected & best case $\in O(n+k)$
	- worst case $\in O(n^2)$
		- when all elements go to 1 bucket → runtime depends on what sorter used → worst case $\in O(n^2)$

### order statistics
- ith order statistic = ith smallest element

#### selection
- pseudo code
	- ![](https://i.imgur.com/03BEJRK.png)
		- q = random 找的這個 element 排序後排在的位置
- time complexity
	- ![](https://i.imgur.com/eY0IurG.png)
	- expected linear time
		- ![](https://i.imgur.com/mVb59d5.png)
		- ![](https://i.imgur.com/4k0lPox.png)
		- 猜 linear time<br>![](https://i.imgur.com/Vlu9bNx.png)
	- worst case linear time
		- 五五一組，找到各組 median，再找這些 median 的 median
		- ![](https://i.imgur.com/Tm65CUc.png)
		- 可用這個 procedure 去幫 [[#Quicksort]] 找 median → guarantee O(nlogn)

## Trees
### [[Binary Tree]]
- see [[Data Structure#Binary Tree]]
- tree construction
	- worst case $O(n^2)$
	- average case $O(nlgn)$
- height
	- worst case $h\in O(n)$
		- skewed
	- best case $h\in O(lgn)$
		- balanced
- most operations $O(h)$

#### operations
- traversal
	- inorder/infix
		- ![](https://i.imgur.com/t70K3cK.png)
	- preorder/prefix
	- postorder/postfix
- search
	- ![](https://i.imgur.com/ih6pMcy.png)
- successor
	- 比我大的最小的 node
		- 有 right subtree →  right subtree 的 min 
		- 沒 right subtree → 找我是誰的 predecessor
			- irl operation: 往左上走直到轉折 as in line 3-6
		- ![](https://i.imgur.com/E3azJpO.png)
- predecessor
	- 比我小的最大的 node
		- 有 left subtree → left subtree 的 max
- insertion
	- ![](https://i.imgur.com/rV6p3pc.png)
- deletion
	- no children → just die
	- 1 child → 小孩給媽媽養
	- 2 children → 找 successor 取代
	- ![](https://i.imgur.com/eufkiVO.png)
	- ![](https://i.imgur.com/K4GMY6E.png)
	- ![](https://i.imgur.com/2LmoLue.png)

### [[Red-Black Tree]]
- see [[Data Structure#Red-Black Tree]]
- black height of node x = num of blacks on path to leaf - 1 (not counting x)
- ![](https://i.imgur.com/1Hq2txg.png)
- rotation
	- inorder preservation
	- ![](https://i.imgur.com/z1JPT7g.png)
- doubly black 指的是 deletion 後 2-3-4 一個 node 空掉的狀況

## Dynamic Programming
### memoization
- top-down
- recursive but 記錄那些被執行過了，if 執行過則 skip
- ![](https://i.imgur.com/Ar9Zp20.png)
- ![](https://i.imgur.com/B8NC2so.png)
	- 其實是走右邊的 3
- pros
	- 不一定沒個 subproblem 都要算

### iteration
- bottom-up
- [[Data Structure#Dynamic Programming]]
- ![](https://i.imgur.com/SrQ21Rw.png)
- pros
	- less overhead

### keys
- 適合用在 optimization problem
	- 有目標的 problem
- distinct subs (table size) $\in$ polynomial
- optimal substructure
	- optimal subs → optimal overall solution
- overlapping subproblem
	- 很多 overlap 的 subproblems

### weighted interval scheduling
- ![](https://i.imgur.com/AtAJv8w.png)
	- p(j) = largest i < j s.t. i & j are disjoint 
	- sort by finished time
	- jth 的最佳解 = max{包含 j 時的最佳解, 不包含 j 時的最佳解 i.e. j-1 的最佳解}
- ![](https://i.imgur.com/U5Zw3KC.png) 
- time complexity $\in O(n)$

### Rod Cutting
- 鋼條長度 vs. 價格非線性，求 max revenue 切法
- ![](https://i.imgur.com/tkZxkRm.png)
- top-down
	- $\in O(n^2)$
	- ![](https://i.imgur.com/TN0K9S9.png)
- bottom-up
	- $\in O(n^2)$
	- ![](https://i.imgur.com/Sd0HImC.png)
	- record choice
		- ![](https://i.imgur.com/cM327fg.png)

### Matrix-Chain Multiplication
- minimize multiplications
- (axb) x (bxc) → ac multiplications
- 建立 table m，m[i, j] 記錄 $A_i$ 乘到 $A_j$ 的 min multiplication
- m[i, j+1] 就是 loop over 各種之間連乘對到的格子 + the rest 連乘的 cost 的 min
- ![](https://i.imgur.com/QilPx2n.png)
- time $\in O(n^3)$
- space $\in O(n^2)$
- bottom-up
	- ![](https://i.imgur.com/pyswYI5.png)
- top-down
	- ![](https://i.imgur.com/E0CDOD3.png)

### longest common subsequence
- ![](https://i.imgur.com/jFIijzU.png)
- table
	- c[i,j] 表 X[1:i] & Y[1:j] 的 LCS 長度
	- X.length = m, Y.length = n → c[m,n] = X Y overall LCS 長度
- top-down
	- ![](https://i.imgur.com/HGK6tZD.png)
- bottom-up
	- ![](https://i.imgur.com/IYriidx.png)

### optimal [[Binary Tree]]
- binary tree with minimum expeceted search cost
- table
	- p[i] probability
		- probability of node i to be searched
	- q[i] ==???==
	- e[i,j] ==???==
		- ![](https://i.imgur.com/cTuPYJ1.png)
- ![](https://i.imgur.com/vQRRZHi.png)
- ![](https://i.imgur.com/ZEU4eHr.png)

### Subset Sums
- NP-Complete
- 包包限重 W，給定各種不同重量的物品，怎麼塞能夠 maximize 塞的重量？
- 給定一個 set & 一個 constraint W，求 max subset 的 sum < W
- table m = n x W
- ![](https://i.imgur.com/7c0K1ZP.png)
	- max(沒自己, 有自己)
	- w 剩餘可用的 weight
- e.g.
	- ![](https://i.imgur.com/SUrJ7BV.png)
- time complexity $\in O(nW)$
	- pseudo-polynomial
		- W may not be polynomial to n

### Knapsacks
- [[#Subset Sums]] problem but each item has a value and the goal is to maximize the total value
- ![](https://i.imgur.com/4DFfbOJ.png)

### Traveling Salesman Problem
- ![](https://i.imgur.com/vu0IlEZ.png)
- space $\in O(2^nn^2)$
- runtime $\in O(2^nn^3)$

## Greedy
### interval scheduling
quickest finished
![](https://i.imgur.com/U1UIrgh.png)
![](https://i.imgur.com/zZKpt2Q.png)

#### pf
![](https://i.imgur.com/kv8tK3n.png)
exchange → 數量一樣

### comparison to [[#Dynamic Programming]]
- greedy
	- top-down
	- 1 subproblem
	- 一定也能用 dynamic programming 解
- dynamic programming
	- bottom-up
	- several subproblems

### Huffman codes
- characters represented by binary string
- fixed-length code (block code)
	- 3 bits a character
	- a-f
- variable-length code
	- less bits for more frequent ones
- prefix code
	- no code is a prefix of some other codes
- binary search tree
	- 每輪把 frequency 最低者 pair 在一起 → 最後 frequency 最低者會沉在最下面
	- ![](https://i.imgur.com/obP6l1h.png)

## task scheduling
- n 個需要花時間 1 單位時間完成的 tasks
- $N_t(A)<=t$ 
	- 在 t 時間內能夠完成的 tasks 數不超過 t