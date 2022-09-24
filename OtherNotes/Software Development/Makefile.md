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
<makefile_target>:
	<shell_command>
<makefile_target>: <another makefile_target>
```

Note that when calling another target , that target should be under the current target.

## hide command

put `@` in front of your command

## Pass arguement

```
make <command> <var>=<value>
```

And then use your `${var}` like in regular command

## Target pattern

`%` -> match anything

## Troubleshooting

### Makefile:4: *** missing separator.  Stop.

Make sure a tab precedes your command, instead of spaces. You can convert spaces to tab with vscode.

### make: `<target>` is up to date.

You have a file/dir with the same name as the target