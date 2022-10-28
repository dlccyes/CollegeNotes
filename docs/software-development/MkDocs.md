# MkDocs

Use this to easy deploy your markdowns

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

## Config

Define everything in `./mkdocs.yml`

## Theme

### Material

<https://squidfunk.github.io/mkdocs-material/>

#### Use Latex

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