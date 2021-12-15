# nushell
https://www.nushell.sh/book/
## install
1. `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
	- if no `cargo`
2. `cargo install nu`
	- very slow

https://www.nushell.sh/book/installation.html

## commands
- git
	- list contributers
		- `git log --pretty=%h»¦«%aN»¦«%s»¦«%aD | lines | split column "»¦«" sha1 committer desc merged_at | histogram committer merger | sort-by merger | reverse`
	- list 10 commits
		- `git log --pretty=%h»¦«%aN»¦«%s»¦«%aD | lines | split column "»¦«" sha1 committer desc merged_at | first 10`