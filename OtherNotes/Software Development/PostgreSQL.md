---
layout: meth
parent: Software Development
---

# PostgreSQL
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Install

### Ubuntu

```
https://help.ubuntu.com/community/PostgreSQL
```

## CLI

```
sudo -u postgres psql
```

## Troubleshooting

### psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "username" does not exist

Use this command instead

```
sudo -u postgres psql
```

### column "column_name" does not exist

Use single quote around your string

e.g.

```sql
SELECT * FROM my_table WHERE my_column = 'my_value'
```

<https://stackoverflow.com/a/52988306/15493213>