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

## if
`IF(clause, yes, no)`

```sql
SELECT N, 
    IF( 
        P is NULL, 
		'Root', 
        IF(
           (SELECT COUNT(*) FROM BST WHERE P = bst_o.N) = 0, 
		'Leaf',
        'Inner'
        )
    )
FROM BST AS bst_o ORDER BY N
```

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

## join

```sql
SELECT CITY.NAME
FROM CITY INNER JOIN COUNTRY
ON COUNTRYCODE = CODE
WHERE CONTINENT = 'Africa'
```

```sql
SELECT W.id, WP.age, W.coins_needed, W.power 
FROM Wands AS W JOIN Wands_Property AS WP
ON W.code = WP.code
WHERE WP.is_evil = 0
    AND W.coins_needed = 
    (SELECT MIN(coins_needed) 
     FROM Wands AS W1 JOIN Wands_Property AS WP1 
     ON W1.code = WP1.code
     WHERE W.power = W1.power AND WP.age = WP1.age)
ORDER BY W.power DESC, WP.age DESC
```

`JOIN` = `INNER JOIN`  

![](https://i.imgur.com/6j1815K.png)


## others
- `DISTINCT`
- `AVG`
- `COUNT`
- `ROUND(A, 2)`
- `TRUNCATE(A, 2)`