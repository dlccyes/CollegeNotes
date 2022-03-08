---
layout: meth
---
# Machine Learning
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

- gradient decsent
	- ![](https://i.imgur.com/HMfsboA.png)
	- 微分取斜率
	- 往左/右走多少 depends on 斜率
	- 卡在 critical point (微分 = 0)
		- local minima or saddle point
- sigmoid function
	- sigmoid(f(x)) = $e^{f(x)}$
	- ![](https://i.imgur.com/QeRzyVt.png)
	- 疊加一堆 sigmoid 逼近 function
- hyperparameter
	- 你自己設的 parameter
- deep learning
	- 堆很多層 ReLU
	- 很多層 -> overfitting

## general guidance
- improving your model
	- training loss big
		- deeper network has bigger loss
			- optimization problem
		- model bias
			- make model bigger, more complex
	- training loss small. testing loss big
		- overfitting

### overfitting
- ![](https://i.imgur.com/NK8JTCW.png)
- to solve
	- less parameters
	- less features
	- early stopping
	- regularization
	- dropout

## critical point
![](https://i.imgur.com/NE6Wcez.png)

- eigen value all positive -> local minima
- eigen value all negatuve -> local maxima
- eigen value 有正有負 -> saddle points

![](https://i.imgur.com/wnrUU3t.png)
表示大部分時候都不是卡在 local minima，而是 saddle point

gradient descent 事實上很少卡在 critical point，而是在附近震盪
![](https://i.imgur.com/jH8vIg4.png)
要達到 critical point 要用特殊的方法

### batch
- epoch
	- see all batches i.e. all data in a batch
- small batch
	- see few data in a batch
	- more batch in an epoch
	- can use parallel computing in a batch -> not necessarily bigger epoch time
	- updates more noisy
		- loss function different for each batch -> more noisy -> less likely to fall into local minima -> better training accuracy
			- ![](https://i.imgur.com/GgC9im3.png)
		- tends to fall more in flat local minima than in sharp local minima -> better testing accuracy
			- flat local minima is better than sharp local minima
			- ![](https://i.imgur.com/IiItSju.png)
- big batch
	- see many data in a batch
	- less batch in an epoch
	- less epoch time
	- less training accuracy
	- less testing accuracy
- big batch size -> less epoch time
	- ![](https://i.imgur.com/ZbAi63M.png)
- big batch size -> less training accuracy
	- ![](https://i.imgur.com/RXzhcyp.png)
- ![](https://i.imgur.com/I3bQKCe.png)

### momemtum
- ![](https://i.imgur.com/Grevsn6.png)
- ![](https://i.imgur.com/L27WjWS.png)
- momemtum = weighted sum of all previous gradients
	- ![](https://i.imgur.com/cizrrVC.png)
- ![](https://i.imgur.com/WTaR1DU.png)

## adaptive learning rate (optimization)
- learning rate = 步伐大小
- small slope -> big learning rate
- big slope -> small learning rate
- ![](https://i.imgur.com/BSLTNVM.png)
 - using RMS 
  - Adagrad
  - g small -> $\sigma$ small -> learning rate big
  - 把過去所有 gradient 拿來取 RMS
  - calculation
   - ![](https://i.imgur.com/MRW1JSo.png)
   - ![](https://i.imgur.com/G4l49oe.png)
 - gradient 很小 -> $\sigma$ 很小 -> 在平坦的地方爆出去
  - ![](https://i.imgur.com/gQielZS.png)
  - to improve
   - ![](https://i.imgur.com/ubg1Zup.png)
   - warm up
    - 先用小 learning rate 探索 error surface
- using RMSProp
	- no original paper
	- Adam: RMSProp + momemtum
	- set, $\alpha$, weight of current gradient, by yourself
	- current gradient is more important (like EWMA)
	- calculation
		- ![](https://i.imgur.com/0xl0LGa.png)
		- ![](https://i.imgur.com/5OeAaf3.png)
- ![](https://i.imgur.com/l5vBtyK.png)

## classification
- 希望 model output 接近 class 的值
	- ![](https://i.imgur.com/B8C22qY.png)
- represent class as one-hop vector (binary variable)
	- ![](https://i.imgur.com/SnEsx9n.png)
- softmax 
	- nomalize to 0-1
	- ![](https://i.imgur.com/fZxSonW.png)

### loss
- MSE
- cross entropy
	- minimize cross entropy = maximize likelihood
	- pytorch cross entropy includes softmax already
	- better than MSE
		- easier for optimization
			- ![](https://i.imgur.com/mbHe0RE.png)
			- with MSE, when start at left top (y1 small,  y2 big, loss big), slope = 0 -> can't use gradient descent to reach right bottom (y1 big, y2 small, loss small)
- ![](https://i.imgur.com/MGT1LCH.png)


## CNN
- image classification
	- 3D tensor
		- length
		- width
		- channels
			- RGB
	- convert 3D tensor to 1D vector as input
- ![](https://i.imgur.com/LB6yKi1.png)
- alpha go
	- 下圍棋: 19x19 (棋盤格子數) classification problem
	- treat 棋盤 as an image and use CNN
	- 格子 = pixel
	- 49 channels in each pixel
		- to store the status of the 格子
	- 5x5 filter
	- no pooling
- intolerant to scaling & rotation
	- to solve
		- data augmentation
			- rotate and scale first to let CNN know
		- spatial transformer layer

### receptive field
- each neuron has a part as input, instead of giving in the whole image
- ![](https://i.imgur.com/HH7094C.png)
- typical settings
	- kernel size = 3x3 (length x width)
	- each receptive field has a set of neurons
	- each receptive field overlaps
		- s.t. otherwise things at the border can't be detected
	- stride = the step, the distance between 2 receptive field
	- when receptive field is over the image border, do padding i.e. filling values e.g. 0s -> zero padding
	- ![](https://i.imgur.com/YAxnvFY.png)

### filter
- parameter sharing
	- having dedicated neuron (e.g. identifying bird beak) at each receptive field is kind of a waste -> parameter sharing
	- same weight
- filter
	- a set of weight
	- used to identify certain patterns
	- do inner product with receptive field -> feature map, then find fields giving big numbers
		- ![](https://i.imgur.com/3saRWjG.png)
		- ![](https://i.imgur.com/duxG4h8.png)
- ![](https://i.imgur.com/0AqkWR4.png)
- typical settings
	- ![](https://i.imgur.com/03gpCu9.png)

### convolution layer
- fully connected
	- complete flexibility
	- can look at whole or only a small part
- receptive field
	- lower flexibility
	- limited to only look at a small part
- parameter sharing
	- lowest flexibility
	- forced to use shared parameters
	- convolution layer
	- bigger bias
		- good for specific tasks e.g. image classification
- ![](https://i.imgur.com/H8vynPQ.png)
- neural network using convolutional layer -> CNN

### pooling
- subsampling, make image smaller
- to reduce computation
	- have enought compulation resource -> can omit pooling
- max-pooling
	- only select the larger number after applying filter
	- ![](https://i.imgur.com/1a7nHw8.png)
