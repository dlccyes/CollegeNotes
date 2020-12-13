#　Ch8 銀行的經營管理

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
        - 愈增加 ROE by 增加 EM
          - 買回股票
            - 準備金減少 → 資本減少
            - 發放現金股利 → 盈餘減少 → 資本減少
            - 增加負債（e.g. 發放可轉讓定期存單） → 資產增加
        - ROE = EM x ROA
          - 資產報酬率 return on assets, ROA
            - $ROA=\dfrac{net\space profit\space after\space taxes\space 稅後淨利}{assets\space 資產}$
            - 每一元資產賺取的稅後淨利
            - 銀行利用資本的效率
          - 權益乘數 equity multiplier, EM
            - $EM=\dfrac{assets\space 資產}{bank\space capital\space 銀行資本}$
            - 每一元資本支撐的資產金額
            - $EM=\dfrac{assets}{capital}=\dfrac{capital+liabilities}{capital}=1+\dfrac{liabilities}{capital}$
              - EM 高 → 財務槓桿率 finantial leverage 高
  - 維持政府規範的資本適足性 capital adequacy requirements
    - $\dfrac{資本}{風險性資產}>=8% $
    - 1990-1991 美國 資本緊縮 capital crunch → 信用緊縮 credit crunch
      - 儲待機構危機 → 呆帳多 → 用資本打銷呆帳 → 資本低 → 許多金融機構倒閉 → 政府提高資本適足性要求 → 銀行想辦法減少資產 → 減少放款 → 企業難以獲得資金 → 信用緊縮 → 倒帳率提高 → 呆帳增加 → feedback

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