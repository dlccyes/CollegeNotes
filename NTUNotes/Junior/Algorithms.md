---
aliases: [演算法]
---
# Algorithms
### pseudocode
- array position 1-A.length
- for
	- `for i = 1 to A.length`

### insertion sort
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
	- $f(n)=O(g(n))$ iff $g(n)=\Omega(f(n))$
	- $f(n)=o(g(n))$ iff $g(n)=\omega(f(n))$
- reflexivity
	- $f(n)=\Pi(f(n))$ for $\Pi=big$
- symmetry
	- $f(n)=\Theta(g(n))$ iff $g(n)=\Theta(f(n))$

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

### examples
- ratio limit doesn't exist
	- $f(n)=2^n$
	- $g(n)=2^n$ if n is even, $g(n)=2^{n-1}$ otherwise

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
	- 比較好正
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
	- ![](https://i.imgur.com/54xwZji.png)
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
		- ![](https://i.imgur.com/gyRAe29.png)
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
### comparison
![](https://i.imgur.com/H2pkRv5.png)

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
		- unrestricted: 還沒掃到的
	- ![](https://i.imgur.com/r74wukj.png)
		- 用 swap 的