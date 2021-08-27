# Use Typora From Shell or Cmd

## macOS

You could use `open -a typora xxx.md` to open target markdown in Typora. If Typora is your default editor for `.md` file, when `open xxx.md` would be enough.

You could also add

```text
alias typora="open -a typora"
```

in your `.bash_profile` or other configuration file, then you would be able to do `typora xxx.md` to open the markdown file from shell/terminal directly.

## Windows

If Typora is set as the default markdown editor, then in cmd.exe, input `.md` file path directly would open target markdown file. For example: `./example.md`.

You would also add `{typora-installed-folder}/bin/typora.exe` into system Path, then you would be able to use `typora xxx.md` to open markdown file in Typora from command line. Usually, `{typora-insatlled-folder}` is `C:\Program Files (x86)\Typora`.

## Linux

After [install typora on Linux](https://github.com/dlccyes/CollegeNotes/tree/f078283d8da9674de95cba67c3e16e897e98ed4f/Typora-on-Linux/README.md), user could run `typora` directly in terminal, for example:

```bash
typora ~/Document/test.md
```

