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

## Usage

`help(thing)`

## package

### install package

```R
install.packages("<package>")
```

### Load package

```
library(<package>)
```

### List all objects in a package

```
ls("package:<package>")
```

## Array

`c(1, 2, "bruh")` -> `[1, 2, "bruh"]`

## Range

`seq(0, 10, 2)` -> `range(0, 10+2, 2)`

## Levels

Levels = possible values

### Remove unused levels


To remove the unused values

```R
mydata$column <- droplevels(mydata$column)
```

<https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/droplevels>

## Tables

Summary

```R
table(mydata$column1)
```

Contingency Table

```
table(mydata$column1, mydata$columns2)
```

Without unused levels

```
table(droplevels(mydata$column1), droplevels(mydata$columns2))
```

With sum

```R
tab <- table(droplevels(mydata$column1), droplevels(mydata$columns2))
addmargins(tab)
```


## Graph

### ggplot2 remove everything

```R
theme(
    axis.line=element_blank(),
    axis.text.x=element_blank(),
    axis.text.y=element_blank(),
    axis.ticks=element_blank(),
    axis.title.x=element_blank(),
    axis.title.y=element_blank(),
    legend.position="none",
    panel.background=element_blank(),
    panel.border=element_blank(),
    panel.grid.major=element_blank(),
    panel.grid.minor=element_blank(),
    plot.background=element_blank()
)
```

<https://stackoverflow.com/questions/6528180/>

### Multiple graphs side by side

```R
library(gridExtra)
plot1 <- qplot(1)
plot2 <- qplot(1)
grid.arrange(plot1, plot2, ncol=2)
```

<https://stackoverflow.com/a/3935554/15493213>

## Decision Tree & Random Forest

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