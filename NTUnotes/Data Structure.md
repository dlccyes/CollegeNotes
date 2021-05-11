# Data Structure
- inf: greatest lower bound
- sup: least upper bound

## Big-Oh Notation
檢測
- $f(x)=\dfrac{h(x)}{g(x)}$
  - $\lim_{x\to\infty} f(x) $
  - $\lim_{x\to\infty} \frac{f(x+1)}{f(x)}$

![Image](https://i.imgur.com/ay40yL4.png)
![Image](https://i.imgur.com/iBumeVf.png)
[cheatsheet](https://www.bigocheatsheet.com/)
![Image](https://i.imgur.com/DD20YyN.png)

If $\lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)}$ exists, then
$$\lim_{n \rightarrow \infty} \inf_{m \geq n} \frac{|T(m)|}{\phi(m)} = \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} = \lim_{n \rightarrow \infty} \sup_{m \geq n} \frac{|T(m)|}{\phi(m)}$$
Therefore

$$T(n) \in O(\phi(n)) \Leftrightarrow \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} < \infty$$
$$T(n) \in \Omega(\phi(n)) \Leftrightarrow \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} > 0$$
$$T(n) \in \Theta(\phi(n)) \Leftrightarrow 0 < \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} < \infty$$
$$T(n) \in o(\phi(n)) \Leftrightarrow \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} = 0$$
$$T(n) \in \omega(\phi(n)) \Leftrightarrow \lim_{n \rightarrow \infty} \frac{|T(n)|}{\phi(n)} = \infty$$
### Properties of Big-Oh Notation
Assume all functions are positive.

* Constant factors can be ignored.
  + $kT(n) \in \Theta(T(n)), \forall k > 0$
* Higher power grows faster
  + $n^r \in O(n^s), \forall r \leq s$
* Fastest growing term dominates a sum
  + $f(n) \in O(g(n)) \Rightarrow f(n) + g(n) \in \Theta(g(n))$
  + Ex. $5n^2+27n+1005 \in O(n^2)$
* Polynomial's growth is determined by leading term.
  + If $f(n)$ is a polynomial of degree $d$, then $f(n) \in \Theta(n^d)$.
* Transitivity
  + If $f(n) \in O(g(n))$ and $g(n) \in O(h(n))$, then $f(n) \in O(h(n))$
* Product of asymptotic upper bounds is asymptotic upper bounds for products
  + If $f_1(n) \in O(g_1(n))$ and $f_2(n) \in O(g_2(n))$, then $f_1(n)f_2(n) \in O(g_1(n)g_2(n))$.
* Exponential functions grow faster than powers
  + $n^k \in o(b^n), \forall b > 1$
  + Ex. $n^{100} \in O(1.01^n)$
* Logarithmic grows slower than powers
  + $\log_b n \in o(n^k), \forall b > 1$ and $k > 0$.
  + Ex. $\log_2 n \in O(n^{1/3})$.
* All logarithms grow at the same rate
  + $\log_b n \in \Theta(\log_d n), \forall b,d > 1$.
* Sum of the first $n$ $r$'th power grows as the $(r+1)$'th power
  + $\sum_{k=1}^n k^r \in \Theta(n^{r+1})$, for all $r > -1$.
  + Ex. $\sum_{k=1}^n k = \frac{n(n+1)}{2} \in \Theta(n^2)$.

The performance of an algorithm may also depend on the exact values of the data, specified by the **best case**, **worst case**, and **average case** performance.

## Analyzing an Algorithm
- Simple statement sequence
  ```python
      Statement_1  # O(1)
      Statement_2  # O(1)
      ...
      Statement_k  # O(1)
  ```
  - Time complexity is $O(1)$ as long as $k$ is constant
  
* Simple loops
  ```python
      for i in range(n):
          Statement  # O(1)
  ```
  + Time complexity is $O(n)$
  
* Nested loops
  ```python
      for i in range(n):
          for j in range(n):
              Statement  # O(1)
  ```
  + Time complexity is $O(n^2)$
  
* Loop index does't vary linearily
  ```python
      while h <= n:
          h = h*2
  ```
  + h = 1,2,4,8,... until exceeding n
  + 大概有 $\log_2 n$ 項 → Time complexity is $O(\log_2 n)$

* Loop index depends on outer loop index
  ```python
      for i in range(n):
          for j in range(i):
              Statement  # O(1)
  ```
  + Inner loop executed $1+2+...+n = \frac{n(n+1)}{2}$ times
  + Time complexity $O(n^2)$

Let's analyze the time complexity for the following algorithms:

Example 1:
```python
def myFunc(n):
    x = 0
    y = 0
    z = 0
    u = 0
    v = 0
    w = 0
    for i in range(n):
        for j in range(n):
            x = x + i * i
            y = y + i * j
            z = z + j * j
    for k in range(n):
        u = w + (5*k + 45)
        v = v + k*k*k
    w = u+v
    return w
```
$O(n^2)+O(n) → O(n^2)$

Example 2:
```python
def maxSubSum(myArray):
    maxSum = 0
    idx_start = -1
    idx_end = -1
    for i in range(0, len(myArray)):
        for j in range(i, len(myArray)):
            thisSum = 0
            for k in range(i,j+1):
                thisSum = thisSum + myArray[k]
            if thisSum > maxSum:
                maxSum = thisSum
                idx_start = i
                idx_end = j
    return maxSum,idx_start,idx_end
```
n = len(myArray)  
$O(n^3)$

## actual implementation
![Image](https://i.imgur.com/qm7KSRD.png)
pop(2) 需要 O(n) at worst case  
In Python’s implementation, when an item is taken from the front of the list, all the other elements in the list are shifted one position closer to the beginning. For instance, what `pop(2)` does is as follows:
![Image](https://i.imgur.com/lDlbUcD.png)

Though it causes time for pop operation, this allows the index operation to be $O(1)$. This is a tradeoff that the Python implementors makes based on how people most commonly use the list data structure. The implementation is optimized so that the most common operations were very fast, sometimes by sacrificing the performance of less common operations.


| Operation        | Big-O Efficiency |
| ---------------- | ---------------- |
| index []         | O(1)             |
| index assignment | O(1)             |
| append           | O(1)             |
| pop()            | O(1)             |
| pop(i)           | O(n)             |
| insert(i,item)   | O(n)             |
| del operator     | O(n)             |
| iteration        | O(n)             |
| contains (in)    | O(n)             |
| get slice [x:y]  | O(k)             |
| del slice        | O(n)             |
| reverse          | O(n)             |
| concatenate      | O(k)             |
| sort             | O(n log n)       |
| multiply         | O(nk)            |
- index[]: ** 指到 *0 → 加法到所要位置 → 指到 object


It is should be clear that the execution time for `pop(0)` and `pop()` are `O(n)` and `O(1)`, respectively.

Some sources of error occurs due to other processes running on the computer which may slow down our code. That is why loop the experiments many times to make the measurement more statistically reliable.

<!-- ## 2.7 Python Built-in Dictionary Operation Time Complexity -->
## Python Built-in Dictionary Operation Time Complexity

If you were the implementor of Python, how do you implement dictionary so that the `contain`, `get item` and `set item` operations all have *average case* time complexity of $O(1)$.?

Currently, Python dictionaries are implemented as hash tables (Reference: *dictobject.h*). We will get into hash tables later in the course, but the following figure might give you some hints on how it works.

![Image](https://i.imgur.com/1hxUgQL.png)

<!-- https://stackoverflow.com/questions/327311/how-are-pythons-built-in-dictionaries-implemented  -->

The *average case* time complexity of dictionary operations are as follows:

| Operation       | Big-O Efficiency |
| --------------- | ---------------- |
| `copy`          | $O(n)$           |
| `get item`      | $O(1)$           |
| `set item`      | $O(1)$           |
| `delete item`   | $O(1)$           |
| `contains (in)` | $O(1)$           |
| `iteration`     | $O(n)$           |

In the following experiment we compare the performance of the `contains` operation between lists and dictionaries.


## Master Theorem

![Image](https://i.imgur.com/4VxHWnM.png)



## Dynamic Programming
- store the solutions
  - 查表 (T(1)) instead of recursion(T(n-k)) 
- start from small → get big
- 用空間換取時間

Bell (W2)
- https://www.geeksforgeeks.org/bell-numbers-number-of-ways-to-partition-a-set/

## Tree
### Binary Tree
- 每個 node 有 0-2 個分支 → binary tree
  - inorder 順序正確(小→大 or 大→小) → binary search tree
- order 
  - preorder/prefix
    - 接到任務的先後順序 (左支先)
    - ![Image](https://i.imgur.com/GjqMv2M.png)
  - postorder/postfix
    - 完成任務的先後順序
    - ![Image](https://i.imgur.com/j0zeake.png)
  - inorder/infix
    - 由左往右數
    - ![Image](https://i.imgur.com/WugYDnI.png)
- classification
  - full/proper/plane
    - 每個 node 有 0 or 2 個分支
  - complete
    - up/left 填滿（2 分支）才能填 bottom/right
    - parent of node i is node i//2, unless i=1
      - left child of node i is 2i, unless 2i > n
      - right child of node i is 2i+1, unless 2i+1 > n
    - ![Image](https://i.imgur.com/2oVtl4Y.png)
  - perfect
    - symmetrical for all branches，同 level 的 node 的分支數都一樣 (balanced)
    - height k → $2^{k+1}-1$ (等比) nodes
    - ![Image](https://i.imgur.com/Yf5Lg33.png)
    - $k\in \Theta(logn)$ (height=k, nodes=n) 
- insert O(height)
- search O(height)
- delete O(height)
  - node with 1 child
    - bypass 掉
  - node with 2 children
    - replace with 右邊 min，並 delete/bypass 掉右邊 min
    - ![Image](https://i.imgur.com/5yCJtc6.png)
- problem
  - height $\in \Omega(logn)$ ($O(logn)$ if perfect), worst cast O(n)

### AVL Tree
<!-- - balanced binary tree -->
- height of left & right node 之差 <= 1 的 binary search tree
- ![Image](https://i.imgur.com/8frypfY.png)
- height $\in \Theta(logN)$
  - upper bound (兩邊高度差一, smallest)
  ![Image](https://i.imgur.com/JUt0Do8.png)
  - lower bound (兩邊等高, biggest)
  ![Image](https://i.imgur.com/YFilgze.png)
- rotation
  - single rotation
  ![Image](https://i.imgur.com/Fo6iCmq.png)
    1. 原是一個 AVL Tree，x = h+2
    2. insert C → x = h+1 but unbalanced
    3. 弄成右圖 → y = h+2
    4. so 對其他地方而言，不變 as 前後都是 h+2，so 整株樹仍是 AVL Tree
    5. 檢查：
       - A < y
       - A < y < B
       - y < B < x
       - x < C
  - double rotation
  ![Image](https://i.imgur.com/NHnHvmN.png)
    - insert B1 B2 後，(由下往上)到 x 才 violate，so B1/B2 = h/h-1
    - 檢查
      - 左右圖看進去的 height 相同 → 整株都符合 AVL property
      - 各個 node
  - 重的(比較高的)在內側 → double rotation
  - otherwise → single rotation
- insertion/deletion
  1. 傳統 binary search tree 作法
  2. 往上找，看有無違反 AVL property; if yes → rotation
     - insertion 只要找到上一個 node 
     - deletion 需要找到 root 才能完全確定
       - 上方的 node: h+3 → h+2
       ![Image](https://i.imgur.com/ZYfFUXR.png)
       ![Image](https://i.imgur.com/jVlv91X.png)
       - 上方的 node: 不變
       ![Image](https://i.imgur.com/i621RuK.png)
- pros
  - search $\in O(logN)$
  - insertion & deletion $\in O(logN)$
    - height balancing (rotation) 只是加 constant
- cons
  - 麻煩
  - height 還有另外存 
  - asymptotically faster but rebalancing costs time
  - 其他的資料結構也許需要 O(N) 做動作，但會讓後續許多其他動作比較快 → faster in the long run
    - e.g. Splay tree

### Splay Tree
- 性質
  - per operation $\in O(N)$
  - amortized time $\in O(logN)$
  - good locality
    - 常用的會在上面
- splay
  - x 在外側 → zig-zig
    - ![Image](https://i.imgur.com/qxmWPC6.png)
  - x 在內側 → zig-zag
    - ![Image](https://i.imgur.com/QGTissZ.png)