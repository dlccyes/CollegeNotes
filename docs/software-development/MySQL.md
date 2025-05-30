---
layout: meth
parent: Software Development
---

# MySQL

## Install MySQL server

### MacOS

```
brew install mysql
```

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

for mac

```
brew install --cask mysqlworkbench
```

for others, go to webpage and download

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

### Change password

```
ALTER USER 'root'@'localhost' IDENTIFIED BY '<password>';
```

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

## Troubleshooting

### mysql workbench keeps crashing

Try downgrading

See <https://developer.apple.com/forums/thread/724378>

### Failed to open file error: 2

If you use `source path/to/file.sql` please do not enclose the file name with `"`

[ref](https://stackoverflow.com/a/21508631)
