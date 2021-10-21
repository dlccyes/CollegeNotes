---
aliases: [演算法]
---
# Algorithms
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
- $T(n)=T(n/2)+T(n/4)+n\in\Theta(n)$
	- substitution
	- ![](https://i.imgur.com/lEo5Wv1.png)
		- if p+q>1 && p,q>1
			- $2^{log_{1/q} (n)} <= leaves <= 2^{log_{1/p} (n)}$
- ![](https://i.imgur.com/161Pvrb.png)

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
- ![](https://i.imgur.com/NS95Ds4.png)
- ![](https://i.imgur.com/Tw5Bxt8.png)
	- 最下層最好用 k or c 代替，之後再 asymptotic

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

## sorting
### sorting comparisons
- time complexity
	- ![](https://i.imgur.com/H2pkRv5.png)
- stable
	- ![](https://i.imgur.com/xo3n0Z8.png)

### Quicksort
- use divide-and-conquer
- ==去看 Hoare 原始版本==
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
- randomized quick sort
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
				- $\in O(n+X)$
				- n elements → max n partitions
				- X comparisons
					- 只有 pivot 需要跟別人比較
					- 兩 elements 至多比較一次
					- ![](https://i.imgur.com/VE8VtXN.png)
						- E[X] = expected X
					- ![](https://i.imgur.com/W0OswXI.png)
						- $E[X_{ij}] = z_i$ or $z_j$ 為 pivot 的機率

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
	- ![](https://i.imgur.com/voE6lW8.png)
- build max heap
	- bottom-up heapify
	- ![](https://i.imgur.com/1zdcwLQ.png)

#### heapsort
- ![](https://i.imgur.com/GUlJxk9.png)
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
		- ==???==
- ![](https://i.imgur.com/miRgVNZ.png)

### sorting in linear time
![](https://i.imgur.com/CKPm9vK.png)
#### counting sort
- 有 m 個數字 <= k → 把 k 放在位置 m
- ![](https://i.imgur.com/1ooBJew.png)
- time complexity $\in O(n+k)$
	- $\in O(n)$ if $k\in O(n)$
	- pseudo-linear time otherwise

#### radix sort
- 一個位數一個位數 sort，從最小位數開始
	- 需 stable sorter
		- counting sort
			- not in-place → need more memory
		- insertion sort
			- fast when size small
- time complexity $\in\Theta(d(n+k))$
	- n d-digit numbers
	- each digit has k possible values ???
	- $\in O(n)$ if $d\in O(1)$ & $k\in O(n)$
- ![](https://i.imgur.com/sCIxPnl.png)

#### bucket sort
???

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
- ![](https://i.imgur.com/1Hq2txg.png)
- rotation
	- inorder preservation
	- ![](https://i.imgur.com/z1JPT7g.png)