---
layout: meth
---
# HackMD
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## issues
bug report or feature request

<https://airtable.com/shro3Dzu8AjVQiPyv>

## api
[doc](https://hackmd.io/@hackmd-api/developer-portal/)  
[postman](https://documenter.getpostman.com/view/68277/UVeNmhpT)

first do authentication
```
curl GET 'https://api.hackmd.io/v1/me' -H "Authorization: Bearer 1ECSIDTK7AEGQI2HTODDB8PN7QBIQJIBUMU9E96VSVXJW10C5M"
```

the use the APIs

example
```
curl --location --request GET 'https://api.hackmd.io/v1/notes' -H "Authorization: Bearer <token>"
```