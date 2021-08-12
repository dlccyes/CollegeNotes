# Game Theory

## Bayesian game
- https://www.youtube.com/watch?v=E0_CA9TwZ8c
- 先把 dominated 刪掉
在依據機率算出混合 strategic form
再把 dominated 刪掉
算 pure strategy & mixed strategy

## coalition game
### shapley value
- each player's marginal contribution
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
  - 3 player in majority vote, 1 can veto
    - core
      - $x_1+x_2\geq1$, $x_1+x_3\geq1$, $x_1+x_2+x_3=1$, $x_i\geq0$
      - $x_1=1$,$x_2=x_3=0$
      - UN 五理事國瓜分
    - shapley
      - $x_1=\frac{2}{3}$, $x_2=x_3=\frac{1}{6}$
### core
- stable 的 coalition (s.t. none has the incentive to deviate and form a new coalition)
- each coalition get at least what they can generate alone
### convex
- $v(S\cup T)\geq v(S)+v(T)-v(S\cap T)$
- nonempty core
- the shapley value is the core
  - → fair & stable

## social choice
### voting scheme
- plurality
  - most-preferred by most people
  - 最普通的那種
- cumulative voting
  - multiple votes
- approval voting
  - unlimited votes (?)
- plurality with elimination
  - iteratively eleminate one with fewest votes and revotes until a majority winner
  - 
    ```
    while no majority winner:
      eleminate one with fewest votes
      revote
    ```
  - France
- Borda Rule, Borda Count
  - preference ranking
  - sum score, highest one wins
- successive elimination
  - a,b,c,d,e → (((a vs. b) vs. c) vs. d) vs. e
  - many legislative process

### Condorcet consistency
- an outcome that wins every pairwise comparisons
- Condorcet cycle
  - A>B, B>C, C>A

### social welfare function
- decide the entire preference ordering
- pareto efficient
  - whenever everyone agrees on one ordering, the social welfare function select that ordering
- independent of irrelevant alternatives, IIA
  - 我對 a&b 的排序只 depend on 其他人對 a&b 的排序，跟其他人對 a&c c&d 的排序都無關
- dictatorship
  - return 一個事先決定的人的排序
  - satisfy pareto & IIA
    - everyone prefer a over b → dictator obviously prefer a over b too → social welfare function i.e. dictator itself select a over b - pareto efficient
    - only care about el dictator, so IIA
- Arrow's Theorem
  - any social welfare function W with over 3 or more outcomes that is pareto efficient & IIA, is dictorial
  - 證明沒看

### social choice function
- decide only the winner
- weak pareto efficiency
  - b 永遠不被選擇 if a > b for everyone
- monotonicity
  - if A's already winning, A will remain the winner when increase the support for A
- dictatorship
  - exist some agent j such that social choice function C always selects the top choice of j
- Muller-Satterthwaite Theorem
  - any social choice function that is weakly pareto efficient & monotonic, is dictorial
  - plurality satisfies weak PE & non-dictorial, so it's not monotonic
    - ![Image](https://i.imgur.com/cefUeEK.png)

### single-peaked preference
- median voting
  - Condorcet winner exist whenever odd voters
    - ![Image](https://i.imgur.com/h6JOmLI.png)

## mechanism design
- inverse game theory
- design a game
- bayes-nash implementation
  - problems
    - could be more than one equilibrium
    - agents may mis-cooperate and plan none of the equilibria
    - asymmetric equilibria (?)
  - refinement
    - symmetric bayes-nash implementation
    - ex-post implementation
- direct implementation
- indirect implementation
- Duverger's Law
  - 既存兩大派，你喜歡第三者你還是不會投
- relevation principle
  - if a social choice function can be implemented by any mechanism, then it can be also implemented by a truth-telling direct revelation mechanism
    - 在 original (complicated) mechanism 外面 fascade 一層，把 truth map 成各成員想要 play 的 strategy → 各成員會想要 play truthfully (對於 original mechanism 來說各成員 strategy 不變)
      - 那層 fascade 等同於 agent 的 mentira function
  - direct relevation mechanism
    - each agent is asked to report his individual preferences
    - simultaneous move Bayesian game
      - Bayesian version of normal form game
  - truthful
    - tell everything about your true preferences
  - indirect relevation mechanism
    - agents are asked to send messages other than preferences
    - imperfect information Bayesian extensive form game


## Ch6 Learning in Games
- sequential
  - 不同 player 等上一個 player 算完再算 response, 再傳給下一個
  - 快速 converge
  - Gauss Seidel Method
  - 對角線最大 → converge
- parallel
  - 不同 player 同時計算 best response
  - less sync, slower convergence
  - jacobi method
- lloyd-max algorithm
- supermodular game
  - increasing difference
    - 變大時 difference 也變大
- potential game
  - 每個 iteration utitlity 都增加
  - potetential strictly increase
  - if potential 有 max → 趨近收斂於 nash
- fictitious play
  - mixed stategy 用實際機率代替
- dominance solvable game
  - 一直刪掉 dominant strategy → one left - nash
- regret
  - coarse correlated equilibrium
- coarse correlated equilibrium
  - 每個 block 的機率
    - 相對於 NE mixed 是 player 的策略機率
  - coarse-correlated equilibrium 包含了 mixed & pure 的 NE
  - ![Image](https://i.imgur.com/c7njqNB.png)
  - ![Image](https://i.imgur.com/BLWKFyU.png)
    - $|a_i$ 表知道在哪個 block
  - https://www.youtube.com/watch?v=sQOrIpARr5E
- reinforcement
  - decentralized, 不用管他人的 mixed
  - iterate update strategy & utitlity
- recurrent neural network, RNN
  - output 餵給 input
  - update all layers
  - hidden layers all connected
- echo state networks, ESN
  - RNN 簡化版
  - 只 update 最後層
  - hidden layer 不 connect (sparse) 且有 randomization
  - 