# Data Structure
- inf: greatest lower bound
- sup: least upper bound

## Big-Oh Notation
![Image](https://i.imgur.com/37ry1mM.png)

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