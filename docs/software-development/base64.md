---
layout: meth
parent: Software Development
---

# base64

## Encode

To encode "haha"

```
echo "haha" | base64
```

To encode a file named "haha.txt"

```
base64 "haha.txt"
```

## Decode

To decode "haha"

```
echo "haha" | base64 -d
```

To decode a file named "haha.txt"

```
base64 -d "haha.txt"
```