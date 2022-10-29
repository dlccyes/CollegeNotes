---
layout: meth
parent: Progamming
---
# Obsidian CSS

## How to apply your own CSS
Put your CSS file to `.obsidian/snippets` and turn it on in Settings -> Appearance -> CSS snippets

## CSS snippets hubs
- <https://github.com/Dmitriy-Shulha/obsidian-css-snippets/tree/develop/Snippets>
- <https://github.com/kmaasrud/awesome-obsidian/tree/master/code/css-snippets>

## CSS for core functions
- hover overlay
	- `.popover.hover-popover`

## CSS for some plugins
### image-tool-kit
resize no % number
```
.img-tip {
    display: none;
}
```

## customized codeblock
<https://forum.obsidian.md/t/notice-blocks-warning-info-success-danger-blocks/4216/7?u=dlccyes>
` ```red ` will become class `language-red`

Then you can do the CSS for `.language-red`