---
layout: meth
parent: Software Development
---

# Redis

## Install

### MacOS

```
brew install redis
```

### Debian

```
apt-get install redis-server
```

### Check version

```
redis-server --version
```

## Start

### Start & connect to local

Start local redis server

```
redis-server
```

To run as daemon

```
redis-server --daemonize yes
```

Connect from another terminal

```
redis-cli
```

### Connect to remote

```
redis-cli -h <host> -p <port> -a <password>
```

Or omit the `-a` flag and then login with

```
AUTH <password>
```

If your data is sharded, you'll have to supply the `-c` flag

```
redis-cli -c -h <host> -p <port>
```

Otherwise you'll see some errors like `(error) MOVED 5505` when you're connected and execute a command

See <https://stackoverflow.com/a/53000256/15493213>

## CLI

<https://lightrun.com/dev-tools/using-the-redis-command-line/>

### Select Database

There'll be 16 databases by default. If you connect directly without supplying the information, you'll use database 0.

To choose another database

```
SELECT <index>
```

<https://redis.io/commands/select/>

### Get all keys

```
keys *
```

### Delete all keys

```
flushall
```

### String

```
help @string
```

Set

```
set <key> <value>
```

Get

```
get <key>
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

Get all keys

```
hkeys <hashmap>
```

Get all key & values

```
hgetall <hashmap>
```

## GUI

### RedisInsight

<https://redis.com/redis-enterprise/redis-insight/>

Fill in fake info and your download will start

Have built-in termiinal