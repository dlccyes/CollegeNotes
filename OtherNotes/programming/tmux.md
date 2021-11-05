# tmux
## guides
cheatsheet
https://tmuxcheatsheet.com/
## environment
### enable color
```
vim ~/.tmux.conf
set -g default-terminal "screen-256color"
```
and then restart terminal or whatever

ref: https://unix.stackexchange.com/a/355391

## plugins
### tmux plugin manager
https://github.com/tmux-plugins/tpm
#### install
1. `git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm`
2. `vim ~/.tmux.conf`
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

3. `tmux source ~/.tmux.conf`

#### add plugins
1. `vim ~/.tmux.conf`
2. `set -g @plugin 'tmux-plugins-XXXX'`
3. `tmux source ~/.tmux.conf`
	- need to have running session

### save tmux layouts (no success yet)
https://github.com/tmux-plugins/tmux-resurrect
https://github.com/tmux-plugins/tmux-continuum


#### install  
using [[#tmux plugin manager]]
- `vim ~/.tmux.conf` 
- `set -g @plugin 'tmux-plugins/tmux-resurrect'`
- `tmux source ~/.tmux.conf`

#### usage
`ctrl+b s`

## commands
- default prefix = `ctrl+b`
- help
	- `ctrl+b ?`
- detach (quit but don't end)
	- `ctrl+b d`
- list all sessions
	- `tmux ls`
- go to session 3
	- `tmux a -t 3`
	- `tmux attach -t 3`
- rename session 3 to hahaha
	- `tmux rename-session -t 3 hahaha`
- kill session bruh
	- go inside and `ctrl+d`
	- `tmux kill-session -t bruh`
- split window vertically
	- `ctrl+b %`
- change focus to another pane
	- `ctrl+b arrow_key`
- new session named hahaha
	- `tmux new -s hahaha`
