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