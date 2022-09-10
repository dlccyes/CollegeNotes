---
layout: meth
parent: Software Development
---

# Makefile
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

<https://makefiletutorial.com/>

## format

like yaml

```Makefile
<makefile_command>:
	<shell_command>
<makefile_command>: <another makefile_command>
```

## hide command

put `@` in front of your command

## Troubleshooting

### Makefile:4: *** missing separator.  Stop.

Make sure a tab precedes your command, instead of spaces. You can convert spaces to tab with vscode.