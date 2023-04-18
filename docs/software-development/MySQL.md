---
layout: meth
parent: Software Development
---

# MySQL

## Install MySQL server

### MacOS

Download MySQL Community Server

<https://dev.mysql.com/downloads/mysql/>

### Debian

```
apt-get install default-mysql-client
```

See <https://superuser.com/a/1481211>

### Other

1. Go to  <https://dev.mysql.com/downloads/shell/> and download
2. add to path `export PATH=/usr/local/mysql/bin:$PATH`
3. to connect `mysql -u root -p`

## GUI

### MySQL Workbench

Download

<https://dev.mysql.com/downloads/workbench/>

Try downgrading if there are some weird errors

## Commands

### Connect to database

```
mysql -u <username> -p'<pw>' -h <host> -P <port>
```

Notice there's no space after `-p` and port is specified with `-P`

### Make output readable

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

## Upsert

Use the `ON DUPLICATE KEY UPDATE` clause for upserting. 

However, you **cannot specify your own key** to lookup, but only the a UNIQUE index or PRIMARY KEY will be checked.

## Alter 

### alter column type

```sql
ALTER TABLE table_name MODIFY COLUMN column_name ENUM('striker', 'center back');
```
