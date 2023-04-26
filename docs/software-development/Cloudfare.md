# Cloudfare

## Cache

<https://developers.cloudflare.com/cache/about/default-cache-behavior/>

```
curl --head <resource>
```

## DNS

### Proxy

[doc](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/)

To use Cloudfare's cache or other services enabling proxy is necessary, otherwise it's just a DNS service.

Proxied records are A records pointing to Cloudfare's server IP under the hood. So if you have all your CNAME records proxied, you actually don't have any CNAME records, and you'll not be seeing any CNAME records in `dig` or web tools.

## Github Page Compatibility

You can use Github Page with Cloudfare nameserver, but only under certain settings.

- encryption settings (choose 1)
	- Github Page "Enforce HTTPS" + Cloudfare SSL/TLS "Full (strict)"
	- Github Page no "Enforce HTTPS" + Cloudfare SSL/TLS "Flexible"
- DNS settings (choose 1)
	- root domain CNAME record: @ -> `<username>.github.io` **without proxy**
	- no root domain CNAME record

See [GitHub Pages require disabling CF’s HTTP Proxy | Cloudfare community](https://community.cloudflare.com/t/github-pages-require-disabling-cfs-http-proxy/147401/21)

## CNAME Flattening

> proxied records are flattened by default (as they return Cloudflare edge IPv4 and IPv6 addresses)

> If a CNAME target is being used to verify a domain for a third-party service, enabling the Flatten all CNAMEs setting may cause that functionality to work incorrectly since the CNAME record itself will not be returned directly.

- [Cloudfare doc](https://developers.cloudflare.com/dns/cname-flattening/)
- [Cloudfare blog](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/)
- [HackNews discussion](https://news.ycombinator.com/item?id=7522065)