# Domain

## Buying a domain

- free
	- <https://my.freenom.com>
		- tested, muy bueno
- Google Domain

## Changing nameserver

Assuming your domain is Google domain and you want to use [[Cloudfare]]'s nameserver

1. Add your domain in Cloudfare
2. Make sure the DNS records are correct
3. Go to your domain in Google domain
4. Disable DNSSEC and **wait for a few days** until it's truly disabled
5. Change the nameservers following Cloudfare's prompt
	- See [Change your nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/)
	- May need to go to your site hosts and reconfigure their custom domains
6. Unlock domain in "Registration settings
7. Go to Cloudfare
8. Enable DNSSEC

## Transferring a domain to another registrar

Google -> Cloudfare in this example

See [Transfer your domain to Cloudflare](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/)

1. Follow the steps in [[#Changing nameserver]]
2. Wait for a few hours until it allows you to transfer

## Checking domain information

### All info 

```
dig www.example.com
```

Some web tools 

- <https://dnssec-analyzer.verisignlabs.com/>
- <https://dnsviz.net/>

### Propagation

See the propagation status of your A, CNAME, TXT, MX, etc. records

<https://www.whatsmydns.net/>

Note that if you're using [[Cloudfare]]'s DNS and has proxy enabled in your CNAME records, they're actually A records pointing to Cloudfare's proxy server IP under the hood, so no CNAME records published and it will be all red on the web tool.

Related threads

- [CNAME showing all red Xs on whatsmydns.new | Cloudfare community](https://community.cloudflare.com/t/cname-showing-all-red-xs-on-whatsmydns-new/433954) 
- [CNAME not being seen by tests, but site working | Cloudfare community](https://community.cloudflare.com/t/cname-not-being-seen-by-tests-but-site-working/276960)

### Only DNS info

```
dig www.example.com +nostats +nocomments +nocmd
```

### Nameserver info

```
dig example.com NS +short
```

Note that it will not return anything if you dig `<subdomain>.<domain>`.

### Check TXT record

```
dig www.example.com TXT
```

## DNS

### Set up DNS record

- for ip
	- add a record -> `Type` = `A`, `Target` = `<your target ip>`
	- `Name` = whatever, it's your subdomain name<br>e.g. `Name` = `www` -> `www.<domain name>` points to `Target`
		- can leave it blank
	- e.g.
		- ![[domain-1.png]]

 
It may need a couple of hours to fully take effect, and you may see some weird erros in the process, so please be patient. (took about 3 hours for my Google domain to fully work)

Some common errors before it fully takes effect

- can dig & open in Chrome but not ping or open in FIrefox

### Setting up a custom domain in Github Page

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

![[web-dns-settings.png]]

**Reference**

- <https://stackoverflow.com/a/10702283/15493213>
- <https://stackoverflow.com/a/46461290/15493213>