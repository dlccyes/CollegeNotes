# Hugo

A makrdown static site generator

## Init

See <https://gohugo.io/getting-started/quick-start/>

Install

```
sudo apt install hugo
```

Auto gen necessary files in `<hugo_dir>`

```
hugo new site <hugo_dir>
```

## Structure

- `config.toml` -> config
- `contents/` -> where your markdown files are at
- `themes/` -> where your themes are at

### File Path

See <https://gohugo.io/content-management/organization/#path-breakdown-in-hugo>

**Do not use `index.md` in `contents/**`**, otherwise the posts in the same directory will not be caught by `Paginator` i.e. you can't see your beautiful listed recent posts.

## URL

The auto generated url without any configuration is the path relative to `content`.

You can define permalinks to set the format of the auto generated url. See <https://gohugo.io/content-management/urls/#relative-urls>

You can also use frontmatter `url` to set it manually.


## Themes

<https://themes.gohugo.io/>

You'll have to clone the desired theme, put inside `./themes`, and then specify it in `config.toml`

### Great themes

- [Fuji](https://github.com/dsrkafuu/hugo-theme-fuji)
	- list of contents at homepage
	- table of contents
	- tag list at right sidebar
- [Book](https://themes.gohugo.io/themes/hugo-book/)
	- left navigation sidebar

## Tags

Hugo calls it "taxonomies". See <https://gohugo.io/content-management/taxonomies/>

In your post's frontmatter

```yaml
tags:
- tag1
- tag2
categories:
- cat1
- cat2
```

Not that your tags / categories must be inside a list, otherwise there will be error.

Your tags & categories page will be in `./tags` & `./categories`

## Deploy

### Local run

```
hugo server
```

### Gen static html pages

```
hugo
```

### Flags

- `-D` include posts with frontmatter `draft: True`
- `-F` include posts with frontmatter `date` set in the future

### github action

<https://gohugo.io/hosting-and-deployment/hosting-on-github/>

## Layouts

Lookup order: `layouts/` -> `themes/<your_theme>/layouts`

- homepage or `contents/_index.md` -> `layouts/index.html`
	- see <https://gohugo.io/templates/homepage/>
- homepage of each directory in `contents/` or `contents/dir/_index.md` -> `layouts/_default/list.html`
	- see <https://gohugo.io/templates/lists/>

### Displaying full content or summary depending on word count 

```
{{ if .Truncated }}
	{{ .Summary }}
{{ else }}
	{{ .Content }}
{{ end }}
```

## Variables

access with `.<variable name>`

### Title

`title` in your frontmatter. **Hugo will not use your h1 as title.**

### Summary

Put `<!--more-->` at where you want to end the summary in your markdown file. If you don't, the first 70 words will be the summary, without any formatting, which is very ugly.

Set `summaryLength` in `config.toml` to set custom truncate length.

See <https://gohugo.io/content-management/summaries>

### Truncated

Post word count > `summaryLength` or not

## URL

## Base URL

Set your site's base url in `config.toml`

```toml
baseURL = 'http://localhost:1313/blog'
```

