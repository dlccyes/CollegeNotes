---
layout: meth
parent: Software Development
---

# Web 101

## Resources

- <https://fullstackopen.com/en/>
	- muy bonita

## REST API

### Methods

- GET
	- to retrieve data
	- put data in query parameters
- POST
	- to create / update data
	- put data in request body

## DNS

### Set up DNS record

- for ip
	- add a record -> `Type` = `A`, `Target` = `<your target ip>`
	- `Name` = whatever, it's your subdomain name<br>e.g. `Name` = `www` -> `www.<domain name>` points to `Target`
		- can leave it blank
	- e.g.
		- ![](https://i.imgur.com/nuPiOu1.png)

 
It may need a couple of hours to fully take effect, and you may see some weird erros in the process, so please be patient. (took about 3 hours for my Google domain to fully work)

Some common errors before it fully takes effect

- can dig & open in Chrome but not ping or open in FIrefox

### Buy domain

- free
	- <https://my.freenom.com>
		- tested, muy bueno
- Google Domain

### Check DNS records

```
dig <host_name>
```

Check TXT record

```
dig <host_name> TXT
```

### Github Page

Follow [the documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) to set up custom domain to your github page. Here's the high level steps:

1. Make sure you own the domain
2. Go to Github account settings and verify the domain
3. Go to your repo and add the your custom domain `xxx.domain`
4. Go to your DNS settings and add a CNAME record pointing `xxx.domain` to  `xxx.github.io`
5. Wait and be patient

Note that after you add the custom domain for `xxx.github.io`, `xxx.github.io/repo` will also be redirected to `xxx.domain/repo`.

**Set different subdomains for different repo**

Follow the same steps, and point everything to `xxx.github.io` instead of `xxx.github.io/repo`

Here's mine

![](https://i.imgur.com/pdMxFf3.png)

**Reference**

- <https://stackoverflow.com/a/10702283/15493213>
- <https://stackoverflow.com/a/46461290/15493213>

## CORS

You need to enable CORS on the server side for cross-origin requests to succeed. Note that **browsers will still block localhost** regardless.

## Testing API

- [Postman](https://www.postman.com/)
	- frontend for curl
- [Webhook.site](https://webhook.site/)
	- give you an endpoint for request
	- show the requests details
- BloomRPC
	- for [[gRPC]]
