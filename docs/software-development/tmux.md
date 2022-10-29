---
layout: meth
parent: Software Development
---

# tmux

## guides
cheatsheet
<https://tmuxcheatsheet.com/>

## environment
### enable color
```
vim ~/.tmux.conf
set -g default-terminal "screen-256color"
tmux source ~/.tmux.conf
```

ref: <https://unix.stackexchange.com/a/355391>

## use your vimrc
in `~/.tmux.conf`  
```
set -g default-terminal "xterm"
```

to apply immediately
```
tmux source ~/.tmux.conf
```

## enable mouse scrolling
in `~/.tmux.conf`  
```
set -g mouse on
```

press q to come back to current line

<https://superuser.com/a/510310>

## plugins
### tmux plugin manager
<https://github.com/tmux-plugins/tpm>

#### install
install  
```
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

setup plugins  
in `~/.tmux.conf`  
```
# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'

# Other examples:
# set -g @plugin 'github_username/plugin_name'
# set -g @plugin 'github_username/plugin_name#branch'
# set -g @plugin 'git@github.com:user/plugin'
# set -g @plugin 'git@bitbucket.com:user/plugin'

# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'
```

to apply immediately
```
tmux source ~/.tmux.conf
```

in tmux, `ctrl+b I` to load plugins (will freeze for a while)

#### add plugins
in `~/.tmux.conf`

```
set -g @plugin 'tmux-plugins-XXXX'
```

to apply immediately  
```
tmux source ~/.tmux.conf
```

### save tmux layouts
<https://github.com/tmux-plugins/tmux-resurrect>
<https://github.com/tmux-plugins/tmux-continuum>

#### install  
using [[#tmux plugin manager]]

in `~/.tmux.conf` 
```
set -g @plugin 'tmux-plugins/tmux-resurrect'
```

```
tmux source ~/.tmux.conf
```

#### usage
- `ctrl+b I` to activate it
- `ctrl+b ctrl+s` to save all sessions (will display "saving")
- `ctrl+b ctrl+r` to restore all sessions (will display "restoring")

## commands
- default prefix = `ctrl+b`
- help
	- `ctrl+b ?`

### sessions
- list all sessions
	- (outside) `tmux ls`
	- (inside) `ctrl+b s` (and switch) (sorted by name)
- go to session 3
	- `tmux a -t 3`
	- `tmux attach -t 3`
- new session named hahaha
	- (outside) `tmux new -s hahaha`
	- (inside) `ctrl+b :new -s hahaha`
- rename session 3 to hahaha
	- (outside) `tmux rename-session -t 3 hahaha`
	- (inside) `ctrl+b $`
- detach (quit but don't end)
	- `ctrl+b d`
- kill session bruh
	- (inside) `ctrl+d`
	- (outside) `tmux kill-session -t bruh`
- kill all sessions
	- `tmux kill-server`

### multiple panes
- split window vertically
	- `ctrl+b %`
- change focus to another pane
	- `ctrl+b arrow_key`

### multiple windows
- new window
	- `ctrl+b c`
- switch to next window
	- `ctrl+b n`
- switch to previous window
	- `ctrl+b p`

### navigation
- scroll mode
	- `ctrl+b [` to enter
	- up/down arrow key become navigation
	- `q` to exit