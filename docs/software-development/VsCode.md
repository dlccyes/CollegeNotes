---
layout: meth
parent: Software Development
---

# VsCode

## Install

for mac

```
brew install visual-studio-code
```

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

### python docstring color

```json
"editor.tokenColorCustomizations": {
	"textMateRules": [
		{
			"scope":"string.quoted.docstring.multi.python",
			"settings": {
				"foreground": "#fff199" //change to your preference
			}
		}
	]
}
```

<https://stackoverflow.com/a/47935166/15493213>

## Troubleshooting

### self signed certificate in certificate chain

For Max, install the extension [Mac CA VSCode](https://marketplace.visualstudio.com/items?itemName=linhmtran168.mac-ca-vscode) and then reload VsCode

<https://stackoverflow.com/a/72889953/15493213>

### java language server not working

use command

```
Clean up the Java Language Server Workspace
```

