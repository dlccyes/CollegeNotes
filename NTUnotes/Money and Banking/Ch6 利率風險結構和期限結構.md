# Ch6 利率風險結構和期限結構

## 利率的風險結構
### 違約風險
- 違約風險（倒帳風險） default risk / 信用風險 credit risk
- 風險貼水（風險溢酬） risk premium
- 風險利差 risk spread
  - 因風險不同而造成的利率差異
  - 將美國政府公債利率視為無風險利率 default-free rate/risk-free rate
  - 景氣衰退 → 風險利差變大
- 信用評等 credit rating
  - 標準普爾 SP
    - BBB ↑－投資等級 investmant grade
    - BB ↓－投機等級 speculative grade／垃圾債券
  - Moody's
    - Baa ↑－投資等級
    - Ba ↓－投機等級
- 流動性風險
  - 融資流動性風險 funding liquidity risk
    - 無法獲得足夠資金
  - 市場流動性風險 market liquidity risk
    - 資產流動性不足（asset illiquidity）
- 政府債券/公債 government bond／主權債 sovereign debt


### 債券所得稅（美國）
- 公司債收入需課稅
- 政府債券由各級機關自行決定是否課稅
  - 財政部公債需課稅（federal income tax）
  - 地方政府公債通常都不課稅
    - → 若風險一樣則市政府債利率會較低
  
## 利率的風險結構與經濟景氣
- 從風險利差看出經濟情況
- LTCM Long-Term Capital Management 事件, 1998
  - 主張持有開發中國家公債，放空美國德國公債
  - 俄羅斯暫停短期債券償還 → 大量賣出前者，買進後者 → 利率差擴大 → LTCM 大虧
  
## 利率的期限結構
不同到期期限的債券與利率的關係（同一發行人）（收益曲線）  
多為正斜率

三大現象
1. 不同期限的利率走向一致，但長期利率變動較短期利率小
2. 短期利率處於歷史低點時，收益曲線為正斜率；處於歷史高點時，為負斜率
3. 收益曲線多為正斜率

### 預期理論 expectations theory
- 只考量預期收益 → 不同期限債券完全替代
- 不同到期日的債券預期收益相等
- n 年期待券的利率 = 未來 n 年短期利率的平均 [^1]
  - 預期未來利率上升 → 收益曲線正斜率

[^1]:計算
![Image](https://i.imgur.com/bHYaNd9.png)
![Image](https://i.imgur.com/zmlS5gc.png)
![Image](https://i.imgur.com/WKbZ734.png)
- 無法解釋現象 3－收益曲線多為正斜率

### 市場區隔理論
- 只考量風險 → 不同期限債券是完全不可替代
- 人喜歡貸短借長 → 短期供＜需，長期供>需 → 短期利率較低，長期利率較高
- 無法解釋現象 1、2

### 流動性貼水理論
- 考量預期收益&風險 → 不同期限債券不完全替代
- 長期債券風險較高
  - 未來利率變化
    - 會轉賣 → 利率風險
  - 通膨
- 預期理論的公式再加上一個 risk premium（隨期限而增大）
![Image](https://i.imgur.com/A8bU3sV.png)
![Image](https://i.imgur.com/bjiKzPE.png)
- 解釋所有現象

## 利率的期限結構與經濟景氣利率的期限結構與經濟景氣
### 收益曲線反轉 yield curve inversion
- 3 個月期國庫券利率 > 10 年期公債利率
- 反轉後通常經濟陷入衰退
  - 認為未來利率會下跌 → 長期利率降低
  - 認為未來會通貨緊縮 → 長期利率降低
  - 對未來景氣悲觀 → 企業發行長期債券意願減低 → 長期利益降低
  - 長期利率 < 短期利率 → 貸長借短的銀行無利可圖 → 銀行放貸誘因降低
  - 央行為抑制過熱景氣而調高利率，又短期利率變化幅度>長期 → 短期利率>長期利率
- 2 年期 vs. 10 年期的預測力較低