s://fields.sogang.ac.kr/fields/Lecture/Documents/u2013f/documents/solution_4.pdf
	- # MkDocs

Use this to easy generate beautiful static sites from your markdowns

## Meta

[Doc](https://www.mkdocs.org/)

## Install

```
pip3 install mkdocs
```

## Structure

- Define everything in `./mkdocs.yml`
- markdown files in `./docs/`

## Navigation

See <https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation>

## Plugins

Note that the `search` plugin is enabled by default if you don't specify any plugin. But once you specify any plugin, you need to include it to enable it. [ref](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/)

### Links

To use wiki style `[[link]]`, use the roamlinks plugin

See <https://github.com/Jackiexiao/mkdocs-roamlinks-plugin/>

```yaml
plugins:
  - search
  - roamlinks 
```



## Deploy

### Deploy to Github Page

```
mkdocs gh-deploy
```

Will generate the pages in `./site` and then push to `origin/gh-pages`.

### Deploy on localhost

```
mkdocs serve
```

## Theme

### Material

<https://squidfunk.github.io/mkdocs-material/>

#### Mathjax Support

See <https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#arithmatex>

Put this in `docs/assets/mathjax.js`

```js
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
```

Include this in `mkdocs.yml`

```yml
markdown_extensions:
  - pymdownx.arithmatex:
      generic: true
extra_javascript:
  - javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

## Examples

### ArgoCD

<https://argo-cd.readthedocs.io/en/stable/>

<https://github.com/argoproj/argo-cd>

Uses [Material](#Material)

