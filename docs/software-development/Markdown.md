# Markdown

## Bullet Point

Use 4-space to indent your bullet lists! Many renderers only recognize 4-space indents.

### Convert 2-space indent to 4-space

1. VsCode
2. Set tab size to 2
3. Convert Indentations to Tabs
4. Set tab size to 4
5. Convert Indentations to Spaces

Be aware that this will make your original 4-space indents 8-space, so better do this on a document with mostly 2-space indents.

## Troubleshooting

### VsCode tab size not following configuration

In `settings.json`, add 

```
"markdown.extension.list.indentationSize": "inherit"
```

<https://stackoverflow.com/questions/69599919/vscode-markdown-files-indents-list-items-with-3-spaces-instead-of-a-tab#comment128139110_72117900>

