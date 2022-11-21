---
layout: meth
parent: Software Development
---

# MySQL

## Install MySQL CLI

### Debian

```
apt-get install default-mysql-client
```

See <https://superuser.com/a/1481211>

### Other

1. Go to  <https://dev.mysql.com/downloads/shell/> and download
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