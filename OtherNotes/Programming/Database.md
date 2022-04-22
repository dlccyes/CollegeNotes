---
layout: meth
parent: Programming
---
# Database
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## PostgreSQL
### web GUI - pgweb
<https://elements.heroku.com/buttons/sosedoff/pgweb>

#### installation
```
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

#### usage
```
pgweb
```

```
pgweb --url <postgres url>
```
