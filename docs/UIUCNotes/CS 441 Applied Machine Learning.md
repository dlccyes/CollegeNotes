# CS 441 Applied Machine Learning

UIUC MCS 2024 Spring

## Classification

- input: vector of features
- output: label

### Evaluation Metrics

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


