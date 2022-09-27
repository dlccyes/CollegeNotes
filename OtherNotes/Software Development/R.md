---
layout: meth
parent: 
nav_exclude: true
---

# R
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Install

### Ubuntu

<https://cran.r-project.org/bin/linux/ubuntu/>

And then run in terminal simply by entering `R`

## Run in terminal

### macos

if your R version is 4.2, then the binary is in

```
/Library/Frameworks/R.framework/Versions/4.2-arm64/Resources/bin/R
```

just run it directly (may need `sudo`)

## package

### install package

```R
install.packages("<package>")
```

### Decision Tree & Random Forest

Sample code 

```r
library(randomForest)
library(caret)
library(rpart)
library(rpart.plot)
 
# parse & format data
train_x <- read.csv("trainX.csv")
train_y <- read.csv("trainY.csv")

test_x <- read.csv("testX.csv")
test_y <- read.csv("testY.csv")

x_title <- list()
for (i in 1:ncol(train_x)) {
    x_title <- c(x_title, paste('A', toString(i), sep=''))
colnames(test_x) <- x_title
colnames(test_y) <- "Class"
test_y$Class <- as.factor(test_y$Class)
}
colnames(train_x) <- x_title
colnames(train_y) <- "Class"
train_y$Class <- as.factor(train_y$Class)

dataset <- cbind(train_x, train_y)

# decision tree
print("------------- Decision Tree -------------")
tree <- rpart(Class ~., data = dataset)
rpart.plot(tree)

pred_tree <- predict(tree, test_x, type = "class")
confusionMatrix(pred_tree, test_y$Class)

# random forest
print("------------- Random Forest -------------")
rf <- randomForest(
    Class ~ ., 
    data=dataset, 
    # ntree=100, 
    importance=TRUE,
    proximity=TRUE,
)
print(rf)

pred_rf <- predict(rf, test_x)

confusionMatrix(pred_rf, test_y$Class)
```

## Troubleshooting

### ERROR: compilation failed for package ‘randomForest’

```
sudo apt install gfortan
```