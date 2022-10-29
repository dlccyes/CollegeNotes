---
layout: meth
parent: Software Development
---

# Makefile

<https://makefiletutorial.com/>

## Format

like yaml

```Makefile
<makefile target>:
	<shell command>
<makefile target>: <another makefile target>
	<shell command>
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

## Ignore errors

```
make -i <target>
```

See <https://www.gnu.org/software/make/manual/make.html#Errors>

## Troubleshooting

### Makefile:4: *** missing separator.  Stop.

Make sure a tab precedes your command, instead of spaces. You can convert spaces to tab with vscode.

### make: target is up to date.

You have a file/dir with the same name as the target