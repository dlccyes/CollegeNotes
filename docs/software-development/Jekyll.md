---
title: Jekyll
alias: Github Page
parent: Software Development
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

# Jekyll
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## themes

### just the doc

[Official Doc](https://just-the-docs.github.io/just-the-docs/)

doesn't support Chinese search
<https://github.com/pmarsceill/just-the-docs/discussions/437#discussioncomment-85470>

#### build with github page

in `_config.yml` add `remote_theme: pmarsceill/just-the-docs`

#### build locally

1. `sudo gem install just-the-docs`
	- if (ruby related) error, `sudo apt-get install ruby-all-dev` and retry  
		- <https://github.com/github/pages-gem/issues/133#issuecomment-411918159>
2. in `vim _config.yml` add `theme: "just-the-docs"`
	- uncomment it when use github page to build or it might lead to build failure
3. `jekyll serve`

#### navigation structure

- it doesn't care about the real folder subfolder relationship, instead, you specify the hierarchy manually
- say you want `aa.md` & `bb.md` inside folder `A` in the left sidebar
	- `has_children: true` in yaml and put the title `A` in either
		- `README.md` OR `index.md` in directory `A`
		- `A.md`
	- `parent:A` in yaml in `aa.md` & `bb.md`
- support 3 level at max
	- `parent:` `grandparent:` in yaml
- if you don't specify `parent:` in yaml, it will appear as the top level in the left sidebar
- doesn't care about the filename, but the first heading (or `title` in metadata)
- `nav_exclude: true` to exclude it from left sidebar

#### layouts structure

<https://github.com/pmarsceill/just-the-docs/tree/master/_layouts>

each page use the `page` layout, which is like

{% raw %}
```
---
layout: default
---

{{ content }}
```

so if you want to add anything before the content, mathjax header for example, just

```
---
layout: default
---
{% include mathjax.html %}
{{ content }}
```
{% endraw %}

#### TOC
{% raw %}
`{: .no_toc }` to not include this header in TOC
```
<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>
```
to see collapsible unnumbered TOC

or
```
1. TOC
{:toc}
```

for collapsible numbered TOC
{% endraw %}

#### custom theme

Add `_sass/color_schemes/mystyle.scss` and add `color_scheme: mystyle` in `_config.yml`

Write your theme as <https://github.com/pmarsceill/just-the-docs/blob/master/_sass/support/_variables.scss>.

but **NO IT DOES NOT WORK**

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

## Jekyll structure
<https://carpentries-incubator.github.io/jekyll-pages-novice/layouts/index.html>

### _layouts
- create a `_layouts` folder in the root
- specify the layout in the yaml of a file, then the file will use that layout
	- like in Laravel's view blade 

### _includes

## yaml
#### date
many examples  
<https://www.alanwsmith.com/posts/20emx2csq8do--jekyll-and-github-pages-liquid-date-formatting-examples>

## page building
it uses Jekyll & liquid

### view the CI/CD workflow
go to the `Actions` tab and see all your past & current workflows

to debug, click into the one failed and see the error messages

## liquid

### escaping liquid
`{% raw  %}{% include mathjax.html %}{% endraw %}`
without the raw & endraw, the include tag will be rendered and the codes in `mathjax.html` will be injected, or if `mathjax.html` doesn't exist, the page built would fail

<https://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags>

### operators
<https://shopify.github.io/liquid/basics/operators/>
#### if
below will execute if the page has `data` in YAML
```html
{% raw  %}
{% if page.date %}
	<span class="date-txt"> {{ page.date | date: "%Y-%m-%d" }} </span>
{% endif %}
{% endraw %}
```

#### for
reverse
<https://stackoverflow.com/a/12574250/15493213s>

### variables
<https://jekyllrb.com/docs/variables/>

### examples
#### backlinks
```html
{% raw  %}
<hr>
<h2>Backlinks</h2> 
<ul>
{% for pp in site.pages %}
	{% if pp.content contains page.title %}
		{% if pp.title != page.title %}
			<li><a href="/blog/{{ page.url }}">{{ pp.title }}</a></li>
		{% endif %}
	{% endif %}
{% endfor %}
</ul>
{% endraw %}
```

## language switching tips
<https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/>