---
layout: meth
parent: Software Development
---

# base64
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

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