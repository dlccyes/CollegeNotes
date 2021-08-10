# Game Theory

## Bayesian game
- https://www.youtube.com/watch?v=E0_CA9TwZ8c
- 先把 dominated 刪掉
在依據機率算出混合 strategic form
再把 dominated 刪掉
算 pure strategy & mixed strategy

## coalition game
### shapley value
- 算各個成員的貢獻
- rules
  - dummy
  - additive
    - union of any 2 set >= sum 
- ![Image](https://i.imgur.com/1kF1Alr.png)
- 算各個成員的貢獻
- e.g.
  - $v(\{1\})=1$, $v(\{2\})=2$, $v(\{1,2\})=4$
if {1} → {1,2}, $\phi_1=1$, $\phi_2=3$
if {2} → {1,2}, $\phi_1=2$, $\phi_2=2$
→ $\phi_1=1.5$ $\phi_2=2.5$
- ![Image](https://i.imgur.com/P8KBGHO.png)
  - ![Image](https://i.imgur.com/FtiY8iC.png)
### core
stable 的 coalition (s.t. none has the incentive to deviate and form a new coalition)
### convex
- $v(S\cup T)\geq v(S)+v(T)-v(S\cap T)$
- nonempty core
- the shapley value is the core
  - → fair & stable