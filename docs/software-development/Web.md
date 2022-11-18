---
layout: meth
parent: Software Development
---

# Web 101

## resources

- <https://fullstackopen.com/en/>
	- muy bonita

## DNS

### Set up DNS record

- for ip
	- add a record -> `Type` = `A`, `Target` = `<your target ip>`
	- `Name` = whatever, it's your subdomain name<br>e.g. `Name` = `www` -> `www.<domain name>` points to `Target`
		- can leave it blank
	- e.g.
		- ![](https://i.imgur.com/nuPiOu1.png)

 
It may need a 24 hours to fully take effect, so don't be worried if you see some errors.

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

## CORS

You need to enable CORS on the server side for cross-origin requests to succeed. Note that **browsers will still block localhost** regardless.

## testing API

- [Postman](https://www.postman.com/)
	- create API request
- [Webhook.site](https://webhook.site/)
	- give you an endpoint for request
	- show the requests details
