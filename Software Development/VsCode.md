---
layout: meth
parent: Software Development
---

# VsCode

## Commands

### Maximize/Restore a tab in a split window

`View: Toggle Editor Group Sizes`

## Good settings 

### stop python (pylance) auto imports things

<https://stackoverflow.com/a/71607251/15493213>

```
"python.analysis.autoImportCompletions": false
```

### selection & search highlight
```
"workbench.colorCustomizations": {
	"editor.selectionBackground": "#ffc46b5d", //current selection
	"editor.selectionHighlightBackground": "#8ed2ff73", //other selection matches
	"editor.selectionHighlightBorder": "#ffffff00",
	"editor.findMatchBackground": "#ffc46b5d", //Current SEARCH MATCH
	"editor.findMatchHighlightBackground": "#8ed2ff73" //Other SEARCH MATCHES
}
```

### full settings.json
```
{
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "editor.formatOnSave": false,
    "editor.formatOnPaste": false,
    "workbench.colorTheme": "Monokai ST3",
    "workbench.iconTheme": "Monokai Pro Icons",
    "markdown-image.imgur.clientId": "86d32a7315b473b",
    "editor.codeActionsOnSave": null,
    "vscode-imgur.client_id": "86d32a7315b473b",
    "vscode-imgur.client_secret": "cf738315d67b13c541f141d56c3650425117656a",
    "vscode-imgur.preferUserUpload": true,
    "files.autoSave": "afterDelay",
    "editor.mouseWheelZoom": true,
    "git.autofetch": true,
    "workbench.list.automaticKeyboardNavigation": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "editor.fontLigatures": null,
    "editor.fontSize": 15,
    "editor.fontFamily": "Consolas, 'Myuppy', monospace",
    "gitlens.defaultDateFormat": "YYYY-MM-DD HH:MM",
    "gitlens.defaultDateShortFormat": "MM/DD",
    "workbench.startupEditor": "newUntitledFile",
    "evermonkey.token": "S=s656:U=a412c04:E=17bed6bca19:C=17495ba9c48:P=1cd:A=en-devtoken:V=2:H=67a25812054d2f01bddd3494726854a8",
    "evermonkey.noteStoreUrl": "https://www.evernote.com/shard/s656/notestore",
    "files.eol": "\n",
    "[markdown]": {
        "editor.quickSuggestions": true
    },
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "jupyter.sendSelectionToInteractiveWindow": true,
    "jupyter.interactiveWindowMode": "perFile",
    "markdown-preview-enhanced.enableScriptExecution": true,
    "remote.SSH.remotePlatform": {
        "192.168.0.9": "linux",
        "edaunion.ee.ntu.edu.tw": "linux"
    },
    "docker.commands.attach": null,
    "workbench.colorCustomizations": {
        "editor.selectionBackground": "#ffc46b5d", //current selection
        "editor.selectionHighlightBackground": "#8ed2ff73", //other selection matches
        "editor.selectionHighlightBorder": "#ffffff00",
        "editor.findMatchBackground": "#ffc46b5d", //Current SEARCH MATCH
        "editor.findMatchHighlightBackground": "#8ed2ff73" //Other SEARCH MATCHES
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "extensions.ignoreRecommendations": true,
    "latex-workshop.view.pdf.viewer": "tab",
    "vim.handleKeys": {
        "<C-c>": false,
        "<C-v>": false,
        "<C-w>": false
    }
}
```

### full keyboard shortcuts
```
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    "key": "ctrl+shift+up",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+up",
    "command": "-editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+down",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+down",
    "command": "-editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+v",
    "command": "vscode-imgur.pasteImage",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+v",
    "command": "-vscode-imgur.pasteImage",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+m",
    "command": "markdown-preview-enhanced.openPreviewToTheSide",
    "when": "editorLangId == 'markdown'"
  },
  {
    "key": "ctrl+k v",
    "command": "-markdown-preview-enhanced.openPreviewToTheSide",
    "when": "editorLangId == 'markdown'"
  },
  {
    "key": "ctrl+k v",
    "command": "markdown.showPreviewToSide",
    "when": "!notebookEditorFocused && editorLangId == 'markdown'"
  },
  {
    "key": "ctrl+k v",
    "command": "-markdown.showPreviewToSide",
    "when": "!notebookEditorFocused && editorLangId == 'markdown'"
  },
  {
    "key": "ctrl+shift+8",
    "command": "extension.sayHello"
  },
  {
    "key": "ctrl+alt+x",
    "command": "workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "ctrl+b",
    "command": "-workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "ctrl+f5",
    "command": "-workbench.action.debug.run",
    "when": "debuggersAvailable"
  },
  {
    "key": "alt+`",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+`",
    "command": "-workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+shift+q",
    "command": "-workbench.action.quickOpenNavigatePreviousInViewPicker",
    "when": "inQuickOpen && inViewsPicker"
  },
  {
    "key": "ctrl+shift+q",
    "command": "workbench.action.quickOpenView"
  },
  {
    "key": "ctrl+q",
    "command": "-workbench.action.quickOpenView"
  },
  {
    "key": "ctrl+shift+q",
    "command": "workbench.action.quickOpenNavigateNextInViewPicker",
    "when": "inQuickOpen && inViewsPicker"
  },
  {
    "key": "ctrl+q",
    "command": "-workbench.action.quickOpenNavigateNextInViewPicker",
    "when": "inQuickOpen && inViewsPicker"
  },
  {
    "key": "ctrl+shift+f",
    "command": "workbench.action.findInFiles"
  },
  {
    "key": "ctrl+shift+f",
    "command": "-workbench.action.findInFiles"
  },
  {
    "key": "ctrl+alt+f",
    "command": "workbench.action.terminal.searchWorkspace",
    "when": "terminalFocus && terminalProcessSupported && terminalProcessSupported && terminalTextSelected"
  },
  {
    "key": "ctrl+shift+f",
    "command": "-workbench.action.terminal.searchWorkspace",
    "when": "terminalFocus && terminalProcessSupported && terminalProcessSupported && terminalTextSelected"
  },
  {
    "key": "ctrl+m",
    "command": "editor.action.jumpToBracket",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+shift+oem_5",
    "command": "-editor.action.jumpToBracket",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+m",
    "command": "-editor.action.toggleTabFocusMode"
  }
]
```

## troubleshooting
### terminal weird font
settings(JSON) -> `"terminal.integrated.fontFamily": "monospace"`

<https://github.com/microsoft/vscode/issues/120371#issue-848729100>

