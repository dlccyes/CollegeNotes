# Hugo

A markdown static site generator

{% raw %}

## Init

See <https://gohugo.io/getting-started/quick-start/>

Install

```
# debian / ubuntu
sudo apt install hugo

# mac
brew install hugo
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

See [the doc about how Hugo organize the generated files](https://gohugo.io/content-management/organization/)

## URL

The auto generated url without any configuration is the path relative to `content`.

You can define permalinks to set the format of the auto generated url. See <https://gohugo.io/content-management/urls/#relative-urls>

You can also use frontmatter `url` to set it manually.

## Internal Linking

Hugo does not support `[[wikilinks]]`. See [this open issue](https://github.com/gohugoio/hugo/issues/3606).

Hugo put each of your post in a directory in the generated static site for some reason, so using the relative path in your canonical repo does not work. And if you use `domain/dir` as your `baseURL`, using the absolute path (treating `content` as root) doesnt' work either.

The only non-hacky choice left, is to use Hugo's [shortcode](https://gohugo.io/content-management/shortcodes/#ref-and-relref). But you'll have to type all that yourself, plus it won't work in your Github or Obsidian or whatever you use to write your markdown files.

See [this post](https://gasparri.org/2022-06-10-hugo-wikilinks/) for more info. Spoiler: it does not solve anything.

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

### Github Action

<https://gohugo.io/hosting-and-deployment/hosting-on-github/>

```yaml
name: hugo deploy github pages

on:
  push:
    branches:
      - master  # Set a branch to deploy
  pull_request:
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v3
        # with:
        #   submodules: false  # Fetch Hugo themes (true OR recursive)
        #   fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

**Github Page custom domain**

To use a custom domain for your github page, you need to write it in `CNAME`. To make hugo include the cname in the generated files (which will be pushed to branch `gh-pages`), you need to put `CNAME` in `static/`.

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

## Query posts

To query all posts except those with tag `myattr` = `true`

```
{{ $paginator := .Paginator }}
{{ range where $paginator.Pages "Params.myattr" "!=" true}}
{{ end }}
```

See <https://gohugo.io/functions/where/>

{% endraw %}

## Hide posts

If you want to hide some of your posts from the public eye, but still keep them on the site, just drop them from the query list of your index pages. There are 2 ways to use Hugo's built-in functions 2 achieve that.

### Add tags and use where clause

Add a custom variable in the frontmatter of the posts you want to hide, and then use the where clause to skip the posts with the variable on. See [[#Query posts]].

To see your post, you may have to go to the link directly.

### Smuggle in as another language and hide from language switcher

Create a fake language and make the posts you want to hide in that language. If you have a language switcher, use where or if clause to hide it.

To see your post, just head to the index page of that language, just like how you see that in other languages.

## Embedding local images

Since Hugo will create a new directory for each of your post, it's a bit complicated to properly reference your local images.

It's best to follow the structure of Hugo's generated files, which they call [page bundles](https://gohugo.io/content-management/page-bundles/).

**Local structure**

```
content/
├── category1/
│   ├── post1/
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── post2/
│       ├── image21.jpg
│       └── index.md
```

**Generated structure**

```
hostname/
├── post1/
│   ├── image1.jpg
│   ├── image2.jpg
├── post2/
│   ├── image21.jpg
```

After using this structure, the images will be correctly rendered either in your local markdown editor or generated static Hugo page. Simply embed `image1.jpg` in `post/index.md` with `![](image.jpg)`, and it will be rendered as `<img src="image1.jpg">` in `hostname/post1`.

However, on the home page where you see the previews of a list of (recent) posts, the image cannot be shown since the relative path to the image is not the same in the home page, which is the parent of the page resource.

To solve this, use [Markdown Render Hooks](https://gohugo.io/templates/render-hooks/).

Have this in `themes/{your-theme}/layouts/_default/_markup/render-image.html` or `layouts/_default/_markup/render-image.html`

```html
<img class="img-zoomable" src='{{ if not (strings.HasPrefix .Destination "http") }}{{ .Page.RelPermalink }}{{end}}{{ .Destination | safeURL }}' alt="{{ .Text }}" />
```

`.Page.RelPermalink` is the absolute path to the file (with a trailing `/`), and `.Destination` is the original link of the image. To support both self hosted images & external images (starting with http/https), we use a simple if condition.

Now, `<img src="image1.jpg">` will be automatically replaced by `<img src="/post1/image1.jpg">`, while `<img src="https://i.imgur.com/AAAAA.jpg">` will stay the same.

Relevant discussions:

- <https://github.com/gohugoio/hugo/issues/1240#issuecomment-753077529>
- <https://discourse.gohugo.io/t/image-path/1721>
- <https://github.com/gohugoio/hugo/issues/1240>
- <https://discourse.gohugo.io/t/page-bundle-relative-image-path-in-rss-feed-wrong/>
