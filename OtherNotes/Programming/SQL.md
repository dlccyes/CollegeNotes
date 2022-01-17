---
layout: meth
parent: Programming
---
# SQL
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## slice
- `RIGHT(COLUMN, 3)` → COLUMN[-3:]
- `SUBSTRING(COLUMN, -3)` → COLUMN[-3:]
- `SUBSTRING(COLUMN, 5, 3)` → COLUMN[5:5+3]

## replace
`REPLACE(COLUMN, <before>, <after>)`

## regex
```
SELECT COLUMN FROM TABLE WHERE COLUMN REGEXP ''
```
- `^xx` start with xx
- `xx$` end with xx
- `[aeiou]` a or e or i or o or u
- `.*` whatever
- `<pattern> = 0` negation


## others
- `DISTINCT`
- `AVG`
- `COUNT`
- `ROUND(A, 2)`
- `TRUNCATE(A, 2)`