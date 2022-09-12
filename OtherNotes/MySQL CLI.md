---
layout: meth
parent: Software Development
---

# MySQL CLI
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Install MySQL CLI

1. Download <https://dev.mysql.com/downloads/shell/>
2. `export PATH=/usr/local/mysql/bin:$PATH`
3. `mysql -u root -p`

## Connect to database

```
mysql -u <username> -p'<pw>' -h <host> -P <port>
```

Notice there's no space after `-p` and port is specified with `-P`

## Make output readable

```
\P less -Sin
```

Just type it

## Query

- show databases
	- `show database`
- go into a database
	- `use <db name>`
- show table schema
	- `show columns from <table name>`