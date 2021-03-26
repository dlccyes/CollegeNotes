# Ch4 現值與利率

### 七二法則
利率 i %，約 $\frac{72}{i}$ 年後翻倍
<details>
  <summary>reality</summary>

  ```python
  from math import*

  for i in range(1, 26):
      print(i, i*log(2, 1+i/100))
  ```


  output
  ```
  1 69.66071689357483
  2 70.005577562293
  3 70.34931675131321
  4 70.69195074051879
  5 71.03349541445232
  6 71.37396627565124
  7 71.71337845741098
  8 72.0517467360047
  9 72.38908554238841
  10 72.72540897341713
  11 73.06073080259694
  12 73.3950644903964
  13 73.728423194139
  14 74.06081977749659
  15 74.39226681960587
  16 74.72277662382118
  17 75.05236122612706
  18 75.3810324032218
  19 75.7088016802901
  20 76.03568033847861
  21 76.36167942208806
  22 76.68680974549507
  23 77.01108189981609
  24 77.33450625932491
  25 77.65709298763474
  ```
</details>

## 名詞
- 期末價值 FV, Final Value
  - 現在的錢在 n 年後值多少
  - $FV_n = PV\times(1+i)^n$ 
    - i = 年利率
- 現值 PV, Present Value
  - n 年後的錢在今天值多少  
  - PV = $\dfrac{FV_n}{(1+i)^n}$ 
- 內部報酬率 internal rate of return
  - 一項投資相當於年利率多少

## 信用工具
- 簡單借貸 simple loan
  - 借出一筆金額、到期日一次還本利
- 固定給付 fixed-payment loan
  - 借出一筆金額，分期還固定金額
  - 分期攤提制 amortization
- 息票債券 coupon bond
  - 借出一筆金額，分期還利息，到期日還面額
    - 面額
    - 息票率 coupon rate：每次還的利息 = 面額 x 息票率
  - 永續債券 consol
    - 無到期日，付利息直到永遠
    - PV = $\dfrac{C}{i}$ （等比） 
    - e.g. UK 於拿破崙戰爭時發行
  - 零息票債券 zero-coupon bond
    - 無利息，到期日還面額
    - e.g. 國庫券

## 到期殖利率 yield to maturity
- 即內部報酬率
- 息票債券價格 = 面額時，息票率 = 到期殖利率
  - imagine 把錢存到銀行

## 其他收益率
- 目前收益率
  - $i=\dfrac{C}{P}$
    - C = 利息
    - P = 價格
  - 相當於永續債券息票率
- 折價基礎收益率 yield on a discount basis
  - $i_db=\dfrac{F-P}{F}\times\dfrac{360}{d}$
    - F = 面額
    - P = 價格
    - d = 距到期天數
  - 極短期估價用 ~by~ ~me~

## 持有期報酬率
- 未到期即賣出，持有期間之報酬率
- 資本利得率 rate of capital gains
  - $g=\dfrac{P_{t+1}-P_t}{P_t}$ 

## 實質利率&名目利率
- 通貨膨脹率 $\pi=\frac{P_{t+1}-P_t}{P_t}$
- 實質利率 real interest rate
  - 考慮通貨膨脹
  - 費雪方程式：$i\approx\pi^e+i_r$
    1. $1+i_r=\dfrac{1+i}{1+\pi}$
    2. $\pi i_r$可省略
    3. $i\approx\pi+i_r$
    4. $\pi為事後得知通膨率$，$\pi^e為事前預測通膨率$
- 名目利率 nominal interest rate 
  - 不考慮通貨膨脹

## 題目
![Image](https://i.imgur.com/rsHAkRb.png)  
0.135x0.6-0.1 = -0.019