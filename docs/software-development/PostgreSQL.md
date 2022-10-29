---
layout: meth
parent: Software Development
---

# PostgreSQL

## Install

### Ubuntu

```
https://help.ubuntu.com/community/PostgreSQL
```

## CLI

```
sudo -u postgres psql
```

## Web GUI - pgweb

<https://elements.heroku.com/buttons/sosedoff/pgweb>

### Installation

```
# as root
curl -s https://api.github.com/repos/sosedoff/pgweb/releases/latest \
  | grep linux_amd64.zip \
  | grep download \
  | cut -d '"' -f 4 \
  | wget -qi - \
  && unzip pgweb_linux_amd64.zip \
  && rm pgweb_linux_amd64.zip \
  && mv pgweb_linux_amd64 /usr/local/bin/pgweb
```
```
```

### Usage

```
pgweb
```

```
pgweb --url <postgres url>
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