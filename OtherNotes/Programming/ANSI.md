---
layout: meth
parent: Programming
---
# ANSI Escape Code
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

format
`\033[<fg/bg>;<color-format>;<color>m<text-to-display>\033[0m`
- fg/bg
	- fg -> 38
	- bg -> 48
- color-format
	- 8-bit -> 5
	- 24-bit -> 2
- color
	- 8-bit -> 0-255
	- 24-bit -> 0-255;0-255;0-255
- m = end of sequence
- `\033[0m` = normal style, s.t. your style won't extend indifinitely

e.g.
```
# foreground (255,95,255)
\033[38;2;255;95;255m
```

simple coloring  
- ![](https://i.stack.imgur.com/9UVnC.png)
e.g.
```
PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

`\033[93mpp\033[0m` → yellow(pp)

`\033[4m` → underline

in python
`print('')`

in linux
`echo -e ''`

all 3 can
- `\e`
	- python can't
- `\033`
- `\x1B`
 
Explanation:
- `echo -e` 
	- The -e option means that escaped (backslashed) strings will be interpreted
- `\033`
	- escaped sequence represents beginning/ending of the style
- `m`
	- indicates the end of the sequence
- `1`
	- Bold attribute (see below for more)
- `[0m`
	- resets all attributes, colors, formatting, etc.

The possible integers
- 0 - Normal Style
- 1 - Bold
- 2 - Dim
- 3 - Italic
- 4 - Underlined
- 5 - Blinking
- 7 - Reverse
- 8 - Invisible

>38 is the xterm-256 extended foreground color code; 30-37 are simply 16-color foreground codes (with a brightness controlled by escape code 1 on some systems and the arguably-supported 90-97 non-standard 'bright' codes) that are supported by all vt100/xterm-compliant colored terminals.
>The ;2 and ;5 indicate the format of the color, ultimately telling the terminal how many more sequences to pull: ;5 specifying an 8-bit format (as Blue Ice mentioned) requiring only 1 more control segment, and ;2 specifying a full 24-bit RGB format requiring 3 control segments



linux don't support italic & bold

---
ref  
<https://stackoverflow.com/questions/2924697/how-does-one-output-bold-text-in-bash>  
<https://gist.github.com/RobinMalfait/7881398>  
<https://stackoverflow.com/a/26665998/15493213> how to rgb
