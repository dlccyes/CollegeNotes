---
layout: meth
parent: Software Development
---

# Redis
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Install

### MacOS

```
brew install redis
```

## CLI

<https://lightrun.com/dev-tools/using-the-redis-command-line/>

### Connect

```
redis-cli -h <host> -p <port> -a <password>
```

Or omit the `-a` flag and then login with

```
AUTH <password>
```


### Select Database

There'll be 16 databases by default. If you connect directly without supplying the information, you'll use database 0.

To choose another database

```
SELECT <index>
```

<https://redis.io/commands/select/>

### String

```
help @string
```

### List

```
help @list
```

Get

```
lrange <list> <start> <end e.g. -1>
```

### Hashmap

```
help @hash
```

Set

```
hset <hashmap> <key1> <val1> <key2> <val2>
# <hashmap>[<key1>] = <val1>
# <hashmap>[<key2>] = <val2>
```

Get

```
hget <hashmap> <key> # <hashmap>[<key>]
hmget <hashmap> <key1> <key2>
```

Get all key & values

```
hgetall <hashmap>
```