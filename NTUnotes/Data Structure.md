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

題目
![Image](https://i.imgur.com/pCpDizk.png)
![Image](https://i.imgur.com/CJGeC7E.png)

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
- insertion
  1. 把找到的那個 node splay 上去
  2. split
  3. 插進去
  - e.g.
    - ![Image](https://i.imgur.com/55nbiwx.png)
- deletion
  1. 把目標 node splay 上去
  2. delete 目標 node，變成兩個分開的 subtree
  3. 把 left subtree 的 max node splay 上去
  4. 接上 right subtree
  - ![Image](https://i.imgur.com/vSWcPPD.png)
  - e.g.
    - ![Image](https://i.imgur.com/gG7JNgk.png)

- amortized cost
  - zig-zig
  ![Image](https://i.imgur.com/g5R5z3J.png)
  - zig-zag
  ![Image](https://i.imgur.com/YfMRd57.png)
  - simple rotation
  ![Image](https://i.imgur.com/9rWrhMJ.png)
  - ![Image](https://i.imgur.com/WxYZMeG.png)
  - locality
    - 如果都只對幾個 node 操作 → 很快
    - ![Image](https://i.imgur.com/0Z5kQYa.png)
- top-down splay
  - 深度為偶數 → 結果跟 bottom-up 一樣
  - 深度為奇數 → 結果可能跟 bottom-up 不一樣

### Multi-Way Search Trees
- 2-3-4 Tree
  - all leaf on same level
  - each node has 1/2/3 items
  - k items → k+1 children
  - insertion
    - insert 到 leaf node
    - look before you leap
      - 經過的每個 4 node 都要 split
      - insert 的目的地是 4 node 時，先 split 再 insert
    - ![Image](https://i.imgur.com/8HqciLA.png)
    - https://www.educative.io/page/5689413791121408/80001
  - deletion 
    - bottom-up
      - ![Image](https://i.imgur.com/5GYI7RE.png)
    - top-down
      - look before you leap
        - 經過的每個 2 node 都要 split
- Red-Black Tree
  - represent 2-3-4 tree as binary tree
    - ![Image](https://i.imgur.com/ZZ7lX6d.png)
      - 兩種表示法
    - ![Image](https://i.imgur.com/v7XVS7o.png)
    - ![Image](https://i.imgur.com/E37PZJS.png)
    - root 是 black
    - 不會連續兩個 red
    - 每個 path 黑 node 數都一樣
      - 2-3-4 leaf nodes 都同 level
    - ![Image](https://i.imgur.com/qUxfsQI.png)
    - max height $2log(n+1)$
      - https://www.codesdope.com/course/data-structures-red-black-trees/
      - https://doctrina.org/maximum-height-of-red-black-tree.html
      - W4-2
  - operation：先做 2-3-4 再轉成 Red-Black
- AA Tree
  - Red-Black Tree but left-child can't be red
  - ![Image](https://i.imgur.com/DGFffzI.png)
  - level
    - leaf = 1
    - red = parent's level
    - back = parent's level - 1
    - ![Image](https://i.imgur.com/61I4mVh.png)
      - 水平：同 level (必指到 red)
  - operations
    - skew：
      - remove 1 left horizontal
      - add 1 right horizontal
      - ![Image](https://i.imgur.com/vqOBj3j.png)
    - split
      - remove consecutive right horizontal
      - 把中間堤上去
      - ![Image](https://i.imgur.com/nljBwPX.png)
    - **不會考 deletion**

## hash
- hash function
  - h(k) = k%m
  - 避免是 m≒2^n bc [二進位數]/[2^n] 就是後 n 個 digit 而已
  - 設 m = 質數
    - 若 k = m 的因數的倍數，則只會用到某幾格
      - e.g. key%3=0，m=18 → 只會用到 6 格
  - 若 key 是 string
    - sum of ASCII
      - len = 8 → 只會用到 127x8 個 slot
    - ![Image](https://i.imgur.com/YCYWUhH.png)
- seperate chaining 
  - 可每個 slot 存 linked list
    - collision → 加到後面
    - insertion O(1)
      - 加到前面
    - deletion/search O(長度)
- open addressing
  - collision → relocate
  - $h_i(k)=(h(k)+f(i))mod\space m$
  - linear probing
    - $h_i(k)=(k+i)mod\space 10$
    - 會形成 cluster → 耗時
  - quadratic probing
    - $h_i(k)=(k+i^2)mod\space 10$
  - double hashing
    - $f(i)=i\cdot h_2(k)$
      - $h_2(k)=R-(k\space mod\space R)$
        - bc $h_2(k)=0$ → 跳零格 → 沒屁用
    - $h_i(k)=(k+i(R-(k\space mod\space R)))mod\space m$
      - e.g. $h_i(k)=(k+i(7-(k\space mod\space7)))mod\space 10$
    - $gcd(m,h_2(k))=1$
      - e.g. R, m = prime AND R < m
- deletion
  - delete 後要留個墓碑標示先前有人，表示之後 delete 到這空格時要繼續 hash
  - insert 到墓碑時，就直接佔用

## heap (priority queue)
### bineary heap
- complete binary tree
  - all levels are filled except leaf 
  - 先 fill 左邊
  - $h\in O(logn)$
- MinHeap: parent key <= child key
- MaxHeap: parent ket >= child key
- insertion
  - 先 insert 到最後一項 (最右 leaf 之右)，再根據大小 percolate up
- deletion
  - delete root (min) → 把 bottome level 最右的 node 放到 root → percolate down
    - 跟較小的且最小的 children 互換
      - s.t. children 被換上去後也會小於另一個 children
    - ![Image](https://i.imgur.com/CBDmMRa.png)
    ![Image](https://i.imgur.com/V0A4cWF.png)
    ![Image](https://i.imgur.com/YMzmpOq.png)
    ![Image](https://i.imgur.com/iwx36Dr.png)
- merge
  - 先放到 root 再 percolate down
    ![Image](https://i.imgur.com/zpSGPpP.png)g)
- bottom-up construction
  - o(n)
- array representation
  - index start from 0
  - left child = 2i+1
  - right child = 2i+2
  - i = odd → left child
  - i = even → right child
  - ![Image](https://i.imgur.com/fFGZP98.png)

### binomial heap
- ![Image](https://i.imgur.com/mAF5mZ9.png)
- height = k
- $2^k$ nodes
- 砍掉 root → k 個 binomial tree
- n 個 nodes 只會有一種結構
  - n 個 nodes → 一種二進位表示法
    - $19 = (10011)_2$ → $B_4$ + $B_2$ + $B_1$
- $k \leq \lfloor{log(n)}\rfloor$
  - $2^k\leq n<2^{k+1}$ → $log_2(n)-1 < k\leq log_2(n)$
- at most $k+1$($B_0$~$B_k$) $\leq \lfloor{log(n)}\rfloor+1 $ 個 tree
- union
  - 大的接到小的 root 下
  - 二進位加法
- delete min
  - 砍掉最小 root → union rest
  - $\in O(log(n))$
- decrease key
  - key 變小 → 重新 order (like percolate up for minheap) to match heap order (parent < child)
  - $\in O(logn)$
- deletion
  - 把目標 key decrease 成 -inf → delete min → union
  - $\in O(logn)$
- insertion
  - worst case $(111...11)_2+1$ → $log_2n$ time
- construction
  - inserting a sequence
  - $\in O(n)$

### comparison
![Image](https://i.imgur.com/z6O0XZx.png)


### Fibonocci tree
- roots of tress → circular linked list
- degree
  - root 有幾個小孩
- t(H)：幾棵樹
- m(H)：幾棵 marked 的樹
- $\phi(H)=t(H)+2m(H)$ potential function
- insertion
  - 放在 min 的左邊
  - amortized cost O(1)
    - actual cost O(1)
    - potential += 1
      - t(H) += 1
      - m(H) += 0
  - ![Image](https://i.imgur.com/ZAxDhhs.png)
- union
  - 剪開 → 連起來 → update min (among circular linked list roots)
  - amortized cost O(1)
    - actual cost O(1) 
    - potential += 0
      - t(H) += 0
      - m(H) += 0
-  delete min
   - 步驟
     1. delete min O(1)
     2. 把原 min 的 children 接上 root list O(D(n)))
     3. consolitdate  O(t(H)+D(n)) (bc worst case t(H)+D(n) 棵樹)
        1. 檢查每個 root 的 degree
        2. 若有一樣的，則把較大的 root 接在較小的下面
   - amortized cost O(D(n))
     - actual cost O(D(n)+t(H))
       - D(n) = max degree of Fibonocci heap with n nodes
       - t(H) = 原 tree 數
     - potential += O(D(n)-t(H))
       - t(H) += (D(n)+1-t(H))
         - 原 t(H)
         - 做完後 max D(n) + 1 
           - D(n-1) <= D(n)
           - n-1 個 node 的 max degree <= n 個的
           - 每棵 degree 不重複 → 0, 1, 2, ..., D(n) → max D(n)+1 棵
       - m(H) += 0
- if 只做 insertion, delete-min & union → only contains binomial tree
  - so $D(n)\leq\lfloor log_2n\rfloor$
- decrease key (x)
  - parent of x = p[x]
  - case 0：仍為 min-heap → 就這樣
  - case 1：violate min-heap property and p[x] unmarked
    1. x 跟 p[x] 斷開
    2. mark p[x]
    3. 接上 root list
    4. unmark x
    5. update min
  - case 2：violate min-heap property and parent marked
    1. x 跟 p[x] 斷開
    2. x 接上 root list
    3. 從 x 原鍊上溯
       - while parent is marked, cut off link with parents, 接上 root list，在上溯
       - elif unmarked → mark it，並終止上溯
  - amotized cost O(1)
    - c = 幾個獨立出來
    - actual cost O(c)
    - potential += 4-c
      - t(H) += c
      - m(H) += 1-(c-1) = 2-c
      - c+2(-c+2) = 4-c
  - deletion