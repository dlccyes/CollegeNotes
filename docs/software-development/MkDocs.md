# MkDocs

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

### Deploy to Github Page with command

```
mkdocs gh-deploy
```

Will generate the pages in `./site` and then push to `origin/gh-pages`.

**Github Page custom domain**

To use custom domain, you need to specify it in `CNAME`, and put the file in `docs/` s.t. it will be included in the generated files, which will be deloyed to branch `gh-pages`

See <https://www.mkdocs.org/user-guide/deploying-your-docs/#custom-domains>

### Deploy to github page with github action

Check out [[Github Action]] if you don't know what it is.

Use [Deploy MkDocs](https://github.com/marketplace/actions/deploy-mkdocs)

`.github/workflows/gh-deploy.yml`

```yaml
name: gh-deploy

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  build:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - name: Checkout main
        uses: actions/checkout@v3

      - name: Deploy
        uses: mhausenblas/mkdocs-deploy-gh-pages@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          CONFIG_FILE: ./mkdocs.yml
          REQUIREMENTS: ./requirements.txt
```

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

In `mkdocs.yml`

```yml
theme:
  name: material
markdown_extensions:
  - pymdownx.arithmatex:
      generic: true
extra_javascript:
  - javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

#### Icon & Favicon

In `mkdocs.yml`

```yml
theme:
  name: material
  logo: assets/roshar-white.png
  favicon: assets/roshar-green-trans.png
```

## Examples

### ArgoCD

<https://argo-cd.readthedocs.io/en/stable/>

<https://github.com/argoproj/argo-cd>

Uses [Material](#Material)

## Troubleshooting

### Error building page xxx.md: list index out of range

If you face this error and the following traceback when deploying:

```
Traceback (most recent call last):
  File "/tmp/mkdocs/test/../bin/mkdocs", line 8, in <module>
    sys.exit(cli())
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/click/core.py", line 1130, in __call__
    return self.main(*args, **kwargs)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/click/core.py", line 1055, in main
    rv = self.invoke(ctx)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/click/core.py", line 1657, in invoke
    return _process_result(sub_ctx.command.invoke(sub_ctx))
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/click/core.py", line 1404, in invoke
    return ctx.invoke(self.callback, **ctx.params)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/click/core.py", line 760, in invoke
    return __callback(*args, **kwargs)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/mkdocs/__main__.py", line 250, in build_command
    build.build(cfg, dirty=not clean)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/mkdocs/commands/build.py", line 329, in build
    _build_page(file.page, config, doc_files, nav, env, dirty)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/mkdocs/commands/build.py", line 226, in _build_page
    context = config.plugins.run_event(
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/mkdocs/plugins.py", line 520, in run_event
    result = method(item, **kwargs)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/material/plugins/search/plugin.py", line 90, in on_page_context
    self.search_index.add_entry_from_context(page)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/material/plugins/search/plugin.py", line 143, in add_entry_from_context
    parser.feed(page.content)
  File "/Applications/Xcode.app/Contents/Developer/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/html/parser.py", line 110, in feed
    self.goahead(0)
  File "/Applications/Xcode.app/Contents/Developer/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/html/parser.py", line 172, in goahead
    k = self.parse_endtag(i)
  File "/Applications/Xcode.app/Contents/Developer/Library/Frameworks/Python3.framework/Versions/3.9/lib/python3.9/html/parser.py", line 420, in parse_endtag
    self.handle_endtag(elem)
  File "/private/tmp/mkdocs/lib/python3.9/site-packages/material/plugins/search/plugin.py", line 417, in handle_endtag
    elif data[-1].isspace() and data[-2] == f"<{tag}>":
IndexError: list index out of range
```

You may have problematic markdown in `xxx.md`. Fix the syntax and redeploy, and it should work.

Related issue: <https://github.com/squidfunk/mkdocs-material/issues/4824>

