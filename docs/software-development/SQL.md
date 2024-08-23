---
layout: meth
parent: Software Development
---
# SQL

## designing schema

- use `CHAR` instead of `VARCHAR` for fixed-length fields
    - `CHAR` allows fast random access since each string is fixed length
    - for `VARCHAR`, you must find the end of a string before moving onto the next one

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

![[sql-1.png]]

## Rank

Give ranking number based on the value of a column

`RANK()` vs. `DENSE_RANK()`

e.g.

| val | rank | dense_rank |
| --- | ---- |:----------:|
| 90  | 1    |     1      |
| 90  | 1    |     1      |
| 88  | 3    |     2      |

## others

- `DISTINCT`
- `AVG`
- `COUNT`
- `ROUND(A, 2)`
- `TRUNCATE(A, 2)`

## Recursive Queries

Quering the subtree of id = 9 of a [[System Design#Adjacency List|self-referencing table]] with cte (common table expressions)

```sql
with recursive cte (id, name, parent_id) as (
  select     id,
             name,
             parent_id
  from       products
  where      parent_id = 19
  union all
  select     p.id,
             p.name,
             p.parent_id
  from       products p
  inner join cte
          on p.parent_id = cte.id
)
select * from cte;
```

<https://stackoverflow.com/a/33737203/15493213>

## Alter the type of a referenced column

Assume you have a column in a table that is a foreign key referencing a column in another table, but you want to change its type, you cannot directly change the type.

1. drop the foreign key
2. alter the column type
3. add back the foreign key

To see your foreign key (along with other field definitions), 

```
SHOW CREATE TABLE table_name;
```

Assuming it's column `author_name` in table `authors` referencing column `author_name` in table `books`

```sql
ALTER TABLE `authors` DROP FOREIGN KEY `fk_authors_books`;
ALTER TABLE `authors` MODIFY COLUMN `author_name` varchar(16) NOT NULL
ALTER TABLE `books` ADD FOREIGN KEY (`author_name`) REFERENCES `authors` (`author_name`)
```


