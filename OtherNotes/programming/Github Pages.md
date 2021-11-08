---
title: Github Pages
---

  <head>
	   <script type="text/x-mathjax-config">
		 MathJax.Hub.Config({
		   tex2jax: {
			 inlineMath: [ ['$','$'], ["\\(","\\)"] ],
			 processEscapes: true
		   }
		 });
	   </script>
	   <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
   </head>

# Github Pages
## themes
### just the doc
https://pmarsceill.github.io/just-the-docs/#getting-started

#### build locally
**you don't need this**
1. vim `_config.yml`
	- `remote_theme: pmarsceill/just-the-docs`
2. `sudo gem install just-the-docs`
	-  if (ruby related) error, `sudo apt-get install ruby-all-dev` and retry
		-  https://github.com/github/pages-gem/issues/133#issuecomment-411918159

#### structure
- it doesn't care about the real folder subfolder relationship, instead, you specify the hierarchy manually
- say you want `aa.md` & `bb.md` inside folder `A` in the left sidebar
	- `has_children: true` in yaml && `#A` at: (2 options)
		- `README.md` OR `index.md` in folder `A`
			- e.g. in Mircroeconomics
		- `A.md`
			- e.g. in [[Algorithms]]
	- `parent:A` in yaml in `aa.md` & `bb.md`
- support 3 level at max
	- `parent:` `grandparent:` in yaml
- if you don't specify `parent:` in yaml, it will appear as the top level in the left sidebar
- doesn't care about the filename, but the first heading

## latex (mathjax)
in `_includes` folder, add a new file, say `mathjax.html`, and add the following codes into it

```
<head>
    <script type="text/x-mathjax-config">
     MathJax.Hub.Config({
       tex2jax: {
         inlineMath: [ ['$','$'], ["\\(","\\)"] ],
         processEscapes: true
       }
     });
    </script>
    <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
</head>
```

in the pages you want to use mathjax, `{% raw  %}{% include mathjax.html %}{% endraw %}` before the heading, after the yaml

you should add a `title:` in yaml or your Jekyll theme might not recognize the file name


ref
- <http://csega.github.io/mypost/2017/03/28/how-to-set-up-mathjax-on-jekyll-and-github-properly.html>
	- works
- <https://alanduan.me/random/mathjax/>
	- doesn't work

## page building
it uses Jekyll & liquid

### escaping liquid
`{% raw  %}{% include mathjax.html %}{% endraw %}`
without the raw & endraw, the include tag will be rendered and the codes in `mathjax.html` will be injected, or if `mathjax.html` doesn't exist, the page built would fail

https://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags