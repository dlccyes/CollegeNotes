# Ch8 銀行的經營管理

## 商業銀行的資產負債表
### 資產
- 庫存現金
  - 庫存新台幣、運送中新台幣、週轉金
  - 法定準備金：庫存現金 vault cash + 準備金 reserves （放在央行，為對中央銀行債權）
- 對金融機構債權
- 放款
  - 放款、貼現、透支
- 證券投資

### 資金來源
- 負債
  - 活期性存款
    - 支票存款、活期存款、活期儲蓄存款
    - NOW（Negotiable Order of Withdrawal，可轉讓提款條）
      - 支票 but 支票存款有利息
  - 定期性存款
    - 定期存款、定期儲蓄存款、可轉讓定期存單
  - 政府存款
  - 借入款：對金融機構負債
    - 對央行負債：貼現
    - 拆款
- 資本 capital / 淨值：資產 - 負債
  - 股本、資本公積[^1]、保留盈餘、其他
  - 金融債券
  - 備抵呆帳 / 呆帳準備 loan loss reserves
    - 抵銷未來呆帳
    - 減稅（盈餘減少）

[^1]:收到比資本多的錢，但資產負債表左右要相等 → 算在資本公積 Additional Paid In Capital
e.g. 股票發行 \$50 but 面額 \$10、大樓 \$1B 購入 but 現在估值 \$2B、受捐贈 \$1M

## 銀行管理原則
- 流動性管理 liquidity management
  - 減少放款
    - 召回放款
    - loan sale
      - 出售放款給其他金融機構
- 資產管理 asset management
- 負債管理 liability management
- 資本適足管理 capital adequacy management
  - 充足資本 → 應對外來衝擊
    - 若抵銷呆帳後資本變為負值 → 表資產（放款+準備金） < 負債（存款） → 結清後無法賠清存款人
    - 銀行倒閉後，債權人每一元可拿回 $\frac{資產}{負債}$ 元
    e.g.
    ![Image](https://i.imgur.com/NrSt6ZV.png)
    可拿回 \$95/96 per \$1 債權
  - 資本太高 → 股東報酬低
    - 淨值報酬率 / 股東權益報酬率 return on equity, ROE
      - $ROE=\dfrac{net\space profit\space after\space taxes\space 稅後淨利}{bank\space capital\space 銀行資本}$
        - 資本高 → ROE 低
        - 欲增加 ROE by 增加 EM
          - 買回股票
            - 準備金減少 → 資本減少
            - 發放現金股利 → 盈餘減少 → 資本減少
            - 增加負債（e.g. 發放可轉讓定期存單） → 資產增加
        - ROE = EM x ROA
          - 資產報酬率 return on assets, ROA
            - $ROA=\dfrac{net\space profit\space after\space taxes\space 稅後淨利}{assets\space 資產}$
            - 每一元資產賺取的稅後淨利
            - 銀行利用資產的效率
          - 權益乘數 equity multiplier, EM
            - $EM=\dfrac{assets\space 資產}{bank\space capital\space 銀行資本}$
            - 每一元資本支撐的資產金額
            - $EM=\dfrac{assets}{capital}=\dfrac{capital+liabilities}{capital}=1+\dfrac{liabilities}{capital}$
              - EM 高 → 財務槓桿率 financial leverage 高
  - 維持政府規範的資本適足性 capital adequacy requirements
    - $\dfrac{資本}{風險性資產}>=$ 8%
    - 1990-1991 美國 資本緊縮 capital crunch → 信用緊縮 credit crunch
      - 儲待機構危機 → 呆帳多 → 用資本打銷呆帳 → 資本低 → 許多金融機構倒閉 → 政府提高資本適足性要求 → 銀行想辦法減少資產 → 減少放款 → 企業難以獲得資金 → 信用緊縮 → 倒帳率提高 → 呆帳增加 → feedback
    - 不足時
      - 發行新股 → 資本增加
      - 賣掉風險性資產 → 風險性資產降低

## 信用風險
- 徵信與監督
  - 審查 screening
    - 審查：5P 5C
  - 監督 monitoring
- 與客戶保持長期的關係
  - 重複賽局
- 抵押品與補償性存款
  - 補償性存款 / 放款回存 compensating balances
    - 貸款一定比例需存在帳戶不能用
    （所以實質利率會比名目利率高）
- 信用分配
  - 拒絕 or 減少高風險貸款


## 利率風險
### 利率變動對淨利息所得（net interest income，利息收入 - 利息支出）影響
  - 重新定價模型 repricing model / 融資缺口模型 funding gap model
    - 存款&放款期限不同 → 資金缺口
      - 存款到期而放款尚未到期時，需要籌措新資金，此時利率上升會導致淨利息所得下降
      - 放款到期而存款尚未到期時，需要尋找新投資機會，此時利率上升會導致淨利息所得上升
  - 對利率敏感或不敏感的資產或負債
    - 未來一年內會被利率波動影響 → interest-rate sensitive
    - GAP = 對利率敏感資產 - 對利率敏感負債
      - 利潤變動 = 利率變動 x GAP    
    - ![Image](https://i.imgur.com/7LOXOwr.png)
      - 活存因為利率太低，所以算非利率敏感
    - 降低利率風險方法
      - 利率交換 interest rate swap
        - 約定未來交換一連串不同利息支付的契約
      - 機動利率房債 adjustable-rate mortgage, ARM
        - 浮動利率
        - 可能增加信用風險（客戶因利率大漲而倒帳）
### 利率變動對銀行資產&負債影響
  - 到期期限模型 maturity model
    - 銀行資產負債表是用帳面價值會計法（book value accounting），但用市價會計法（mark to market）才有實質意義
      - 清算時是看市值而非帳面價值
    - 到期期限缺口 maturity gap = 資產到期期限 - 負債到期期限
    - 銀行貸長借短，資產期限 >> 負債期限
      - 利率上升 → 資產跌幅 >> 負債跌幅
      e.g. if 利率 10% → 11%
      ![Image](https://i.imgur.com/Yv571XZ.png)
        - 美國儲貸機構類似上圖，1979-1982 利率大漲 → 多家倒閉 
  - 存續期間模型 duration model
    - ![Image](https://i.imgur.com/Ubylgz4.png)
      - https://www.masterhsiao.com.tw/CatBonds/Duration/Duration.php
    - 利率上升 1% → 價值下降 D%

## 資產負債表之外的風險
資產負債表外營業項目：或有資產 contingent asset、或有負債 contingent liability
  - 某事件發生時，會進入資產負債表
### 貸款承諾 loan commitment / 約定融資額度
  - 為或有資產
  - 承諾貸款人在一定條件內可隨時向銀行貸款
    - 客戶來貸款 → 上資產負債表
    - 客戶到期都沒來 → 不影響資產負債表
  - like 保險
  - to 銀行
    - 利益
      - 一簽約就收續費
      - 客戶沒依約貸款完的額度，會收費（一定比例）
    - 風險
      - 利率風險
        - if 契約期限內市場利率上漲 → 利率損失
      - 流動性風險
        - 客戶來一定需要給他錢
      - 信用風險
        - 客戶可能簽約後營運不善，倒帳風險變高
          - 有客戶倒帳風險增加時可改變契約之條款
            - 很少用
              - 提高利率 → 倒帳機率更增
              - 影響商譽
      - 籌資風險 funding liquidity risk
        - 總體經濟變化導致
        - 市場資金陡峭 → 客戶難以獲得資金 → 以貸款承諾貸款
          - 眾銀行本身也有資金困難 → 資金市場利率上升 → 更難籌資
  - 對客戶利益
    - 貸款保障
      - 一定有得貸
      - 日後市場就算 depression，還是能以事前約定條件獲得資金
  - 研究顯示從事貸款承諾較多的銀行，資產負債表風險較低
    - 為了控制風險，對客戶做更嚴格篩選&監督
    - 為了吸引客戶，需讓客戶認為是風險低、經營穩健的銀行
### 信用狀 letters of credit
  - 為或有負債
  - 保證客戶會支付款項
    - 客戶有付款 → 不影響資產負債表
    - 客戶未付款 → 銀行需自己支付 → 影響資產負債表
  - 對銀行利益
    - 手續費
  - 對客戶利益
    - 有銀行保證 → 交易較能成功
  - 擔保信用狀 standby letters of credit
    - 付款保證 for 企業發行的公司債 or 商業本票
    - 對客戶利益
      - 銀行擔保 → 信用評等上升 → 可用較好的利率籌資

### 放款出售 loan sale
- 賣放款給其他金融機構
- 賣方會是較會發掘客戶、判斷客戶風險的銀行
- 賣出的利率為初始放款利率 - 0.5 → 現值較高 → 賺價差
- 賣方利益
  - 提高流動性
    - 原本數年期的貸款收入變為立即獲得
      - 降低到期期限缺口
  - 提高資本適足率
    - 原貸款為風險性資產，賣掉後即消除
- 追索權 recourse
  - 無追索權－倒帳後不能跟出售銀行索賠
  - 有追索權－倒帳後可跟出售銀行索賠
    - → 或有負債

### 其他風險
- 信譽風險
- 作業風險
  - 法律風險
    - 契約沒寫好 → 產生法律效力問題  
- 策略風險

## 資產證券化與金融機構的風險
### 資產證券化 securitization
- 將資產如債權包一包發行成證券售出
- 單位
![Image](https://i.imgur.com/8MRdNEj.png)
  - 創始機構 originator
    - 放款者
  - 特殊目的機構 special purpose vehicle, SPV
    - 購買創始機構的貸款群組，包成證券，給證券承銷機構賣
  - 信用增強機構 credit enhancement agency
    - 外部增強
      - 提供保險
        - 違約時代償
    - 內部增強
      - 發行順位償還 senior class & 次順位償還 subordinate class 債券  
發行機構持有後者，承擔大部分信用風險
  - 信用評等機構 credit rating agency
  - 證券承銷機構 underwriter
- 風險
  - 錯綜複雜，風險不清

### 影子銀行體系 shadow banking system
- 業務如金融中介，但未受金融監理&管制的機構
- 美國
  - 投資銀行 investment bank
  - 融資公司 finance company
  - 貨幣市場共同基金
  - 對沖基金 hedge fund
  - 私募股權基金 private equity fund
- 與一般商業銀行差異
  - 商業銀行
    - 受到金融監理機關管制
      - 資本適足率
      - 法定準備率
      - 流動性比率
    - 受到金融安全網保障
      - 存款保險
      - 央行流動性支援
          - 貼現窗口
    - 帳面價值會計法
    - 重要資金來源：存款
  - 影子銀行
    - 以市價記值 → 資產價格變動造成立即且重大之影響（高 GI，無水土保持）
    - 主要資金來源：金融工具
      - 負債（融資工具）
        - 資產擔保的短期商業本票
        - repo
      - 資產
        - 中長期債券 & 房貸保證券

## 題目
![](https://i.imgur.com/Rp9CKtY.jpg)
![](https://i.imgur.com/exqw7Zj.jpg)
![](https://i.imgur.com/ihRewWw.jpg)
![](https://i.imgur.com/fhOUps5.jpg)

### 詳解
![](https://i.imgur.com/SJqW3Xm.jpg)
![](https://i.imgur.com/fauGWr9.jpg)
