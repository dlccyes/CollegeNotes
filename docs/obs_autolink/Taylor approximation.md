# Taylor approximation

## first-order

$$f(x)\approx f(a)+f'(a)(x-a)$$

so the approximation of $f(x)=\log(1+x)$ around $x=0$ is

$$\log(1+x)\approx x$$

## second-order

$$f(x)\approx f(a)+f'(a)(x-a)+\dfrac{1}{2}f''(x)(x-a)^2$$

## example

given $g(X)$ & $\mu=E(X)$

first-order

$$g(X)\approx g(\mu)+g'(\mu)(X-\mu)$$

$$Var(g(X))=[g'(\mu)]^2Var(X)$$

second-order

$$g(X)\approx g(\mu)+g'(\mu)(X-\mu)+\dfrac{1}{2}g''(X)(X-\mu)^2$$

$$E[g(X)]\approx g(\mu)+\dfrac{1}{2}g''(\mu)Var(X)=g(\mu)+\dfrac{1}{2}\dfrac{g''(\mu)}{[g'(\mu)]^2}Var(g(X))$$

when $g(X)=\log(X)$

$$E[\log(X)]\approx \log(\mu)-\dfrac{1}{2}Var(\log(X))$$

$$\log E(X)=E(\log X)+\dfrac{1}{2}Var(\log X)$$

$$E(X)=e^{E(\log X)+\frac{1}{2}Var(\log X)}$$
