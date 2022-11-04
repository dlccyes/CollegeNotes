---
layout: meth
parent: Software Development
---

# VsCode

## Commands

### Maximize/Restore a tab in a split window

In command palette

`View: Toggle Editor Group Sizes`

## Settings 

`settings.json`

### Stop python (pylance) auto imports things

<https://stackoverflow.com/a/71607251/15493213>

```
"python.analysis.autoImportCompletions": false
```

### Selection & search highlight

```
"workbench.colorCustomizations": {
	"editor.selectionBackground": "#ffc46b5d", //current selection
	"editor.selectionHighlightBackground": "#8ed2ff73", //other selection matches
	"editor.selectionHighlightBorder": "#ffffff00",
	"editor.findMatchBackground": "#ffc46b5d", //Current SEARCH MATCH
	"editor.findMatchHighlightBackground": "#8ed2ff73" //Other SEARCH MATCHES
}
```

### Terminal font

```
"terminal.integrated.fontFamily": "monospace"
```

<https://github.com/microsoft/vscode/issues/120371#issue-848729100>

### Tab size

You can specify different tab sizes for each language

```
"editor.tabSize": 4,
"[css][javasript][html]": {
	"editor.tabSize": 2
},
```
