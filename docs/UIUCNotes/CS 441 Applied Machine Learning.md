ㄩ
# CS 441 Applied Machine Learning

UIUC MCS 2024 Spring

## Classification

- input: vector of features
- output: label

### Evaluation Metricsㄛ

- precision = $\dfrac{TP}{TP+FP}$
- recall / sensitivity / true positive rate = $\dfrac{TP}{TP+FN}$
- specificity / selectivity / true negative rate = $\dfrac{TN}{TN+FP}$
- class confution matrix

### Cross-Validation

iterate different sets of training & test set (folds)  and get the average accuracy

variants

- Leave-One-Out
    - test set size 1
- k-Fold
    - data set size N, split into k folds
    - each test set fold size N/k
    - each trainig set fold size N - N/k

### Nearest Neighbor Learning

- instance-based learning
    - stores and uses all data instead of creating a model 
- k-Nearest Neighbor Learning
    - find k closest
    - sensitive to irrelevant features since it only cares about distance

### Naive Bayes Classification

from the features X find the most probable class y

$$y=argmax_{y\in Y}\dfrac{P(X|y)P(y)}{P(X)}$$

naive: each feature is independent to each other

### Decision Trees

- a tree of classifications
- split resulting in clear separation of classes -> high info gaink
- use a threshold for continuous features
- small trees > big trees
- cons
    - overfit
    - random selection -> better splits may not be considered
- solution: random forests

### Random Forests

build many shallow trees randomly

- diversity $S=A\cup B$
- $N=|A|+|B|$
- $P(A)=\dfrac{|A|}{N}=1-P(B)$

#### Entropy

$$\text{Entropy}(S)=-P(A)\log_2 P(A)-P(B)\log_2 P(B)$$

- bigger when it's diverse
- biggest when $P(A)=P(B)=0.5$
- ![[Pasted image 20240127164542.png]]

#### Information Gain

- Splits into left $S_l$ and right $S_r$
- $P_{S_l}=\dfrac{S_l}{|S|}=1-P_{S_r}$

binary

$$\text{Gain}(S;S_l,S_r)=\text{Entropy}(S)-(\dfrac{|S_l|}{|S|}Entropy(S_l)+\dfrac{|S_r|}{|S|}Entropy(S_r))$$

$n$ subsets

$$\text{Gain}(S;S_1,...,S_n)=\text{Entropy}(S)-\sum^n_{i=1}\dfrac{|S_i|}{|S|}Entropy(S_i)$$
the better the entropy reduction, the higher the information gain

#### missing values

estimate missing values form other samples in the branch

### Support Vector Machine SVM

- binary linear classifier (-1 & 1)
- create a linear line as a boundary between two classes

![[Pasted image 20240127171313.jpg]]

#### hinge loss

$$C(y_i, \gamma_i)=\max(0, 1-y_i*\gamma_i)$$

- $\gamma_i=a^Tx_i+b$ = prediction
- $y_i\in \{-1, 1\}$ = real
- for $y_i=1$, $\gamma_i>=1$ for 0 loss
- for $y_i=-1$, $\gamma_i<=-1$ for 0 loss

regularization: $\lambda\dfrac{1}{2}a^Ta$ ($\lambda$ is a parameter) to penalize large weights $a_i$ to encourage a simpler model to prevent overfitting

full cost function

$$S(a,b;\lambda)=\dfrac{1}{N}\sum^N_{i=1}[\max(0, 1-y_i*(a^Tx+b))]+\lambda\dfrac{1}{2}a^Ta$$

#### training 


- find $a$ & $b$ through stochastic gradient ascent  
- find $\lambda$ through cross validation

## Linear Regression

- outliers
    - sources
        - rare occurences
        - data collection errors
    - cook distance
- low $R^2$
    - may not be suitable to be explained with a linear function
    - can be transformed
- regularization
    - use cross-validation to find the regularization constant $\lambda$
    - $\lambda$ penalizes large values of $\beta$
- model more complex ->
    - more general -> lower bias
    - hard to estimate best parameters -> higher variance 

### GLM Generalized Linear Models

predict probabilities

- indicator function
    - ![[Pasted image 20240204190429.png]]

### Regularization

#### Ridge Regularization

- minimization goal $\dfrac{1}{N}(y-X\beta)^T(y-X\beta)+\lambda\beta^T\beta$
- penalize large coefficients
- cannot remove explanatory variables i.e. make coefficients 0
- use $L_2$ norm $||\beta||_2=\beta^T\beta$

To solve $\beta$

$$\left[\left(\dfrac{1}{N}\right)\mathcal{X}^T\mathcal{X}+\lambda \mathcal{I}\right]\hat{\beta}=\left(\dfrac{1}{N}\right)\mathcal{X}^Ty$$

$$\hat{\beta}=\left[\dfrac{1}{N}\left(\mathcal{X}^T\mathcal{X}+\lambda \mathcal{I}\right)\right]^{-1}\left(\dfrac{1}{N}\right)\mathcal{X}^Ty$$

#### Lasso Regularization

- minimization goal $\dfrac{1}{N}(y-X\beta)^T(y-X\beta)+\lambda||\beta||_1$
- remove explanatory variables  i.e. make coefficients 0
- use $L_1$ norm $||\beta||_1=\sum_k|\beta_k|$
- stochastic descent not suitable
- higher $\lambda$ -> less explanatory variables -> less degree of freedom
- ![[Pasted image 20240204191531.jpg]]
- tends to remove correlated explanatory variables, leaving only one left, but this may result in worse results

#### elastic net

- Ridge + Lasso
- weighted regularization with $L_1$ and $L_2$
- will keep some correlated explanatory variables 

## High Dimensional Data


### Principal Component Analysis

- transform high-dimensional dataset into low-dimensional representation
    - for visualizations
