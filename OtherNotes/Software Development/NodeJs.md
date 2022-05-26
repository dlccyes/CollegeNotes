---
layout: meth
parent: Software Development
---
# Node.js
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## install
```
sudo apt install nodejs npm
```

Enable corepack (s.t. you can use `yarn`)
```
sudo corepack enable
```

## check node version
```
node -v
```

## packages

See how big a package is.  
<https://bundlephobia.com/>

## npm
### install node's version manager
clear cache
```
npm cache clean -f
```

install node's version manager
```
npm install -g n
```

install a version of node
```
sudo n <version>

# latest stable
sudo n stable

# latest
sudo n latest
```

<https://phoenixnap.com/kb/update-node-js-version>

### clear cache
```
npm cache clean -f
```

## run locally
```
npx serve
```

## package.json

Define the dependencies and the scripts.

### scripts

You can feed in variables in script directly. For example,

```
"scripts": {
	"dev": "APP_ENV=development vite",
	"build": "APP_ENV=production vite build",
	"preview": "vite preview --port 5050"
},
```

Now when your run `npm run dev`, `vite.config.js` will be able to access `process.env.APP_ENV`.

<https://github.com/vitejs/vite/issues/512#issuecomment-656547187>