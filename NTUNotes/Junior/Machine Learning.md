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
	- local optimum problem
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