---
layout: meth
parent: Software Development
---

# Liquid

## testing

<https://jumpseller.com/support/liquid-sandbox/>

## variable

### simple increment

[doc](https://shopify.github.io/liquid/tags/variable/)

```python
counter = 0
print(counter)

counter += 1
print(counter)
```

```liquid
{% increment counter %}``
{% increment counter %}
```

### math

```python
counter = 10
counter += 5
print(counter)
```

```liquid
{% assign counter = 10 %}
{% assign counter = counter | plus: 5 %}
{{ counter }}
```