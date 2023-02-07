---
layout: meth
parent: Software Development
---

# Git

## Github CLI

### install

<https://github.com/cli/cli/blob/trunk/docs/install_linux.md>

```
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

## Git GUI

### Github Desktop

- simple
- fast
- intuitive
- only core features

### GitKraken

- many features
- nice UI
- slow

### login

```
gh auth login
```

### repo

#### view all repos

```
gh repo list
```

#### create repo

```
gh repo create
```

## pull related

### git pull all subdiretories

```
for i in */.git; do ( echo $i; git -C $i/.. pull; ); done
```

### commands

- login
	- `gh auth login`
- create repo
	- `gh repo create`

## history

<https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History>

- `git log`
- `git reflog`
	- each commit oneline
- `git log -p abcdef`
	- commit details of `abcdef`

## maintenance

[doc](https://git-scm.com/docs/git-maintenance)

optimize your git repo  
might free up some space

```
git maintenance run
```

```
git maintenance run --task=gc
```

## line endings lf & crlf

### check the eol of a file

- `cat -A <file>`
	- CRLF -> end with `^M$`
	- LF -> end with `$`
- `file <file>`
	- <https://stackoverflow.com/a/3570574/15493213>

### auto eol translation

#### with gitattributes

auto translation for files when checked out (into LF for Unix, CRLF for Windows)  
```
echo ""* text=auto" >> .gitattributes
git commit -m "something"
```

#### with core.autocrlf

- `git config --global core.autocrlf true` for Windows
	- convert to LF when commit
	- convert to CRLF when checkout
- `git config --global core.autocrlf input` for Unix
	- convert to LF when commit

### convert entire directory to LF

(there might be some redundant steps but idk & idc)

auto translation for files when checked out (into LF for Unix, CRLF for Windows)  
```
echo ""* text=auto" >> .gitattributes
git commit -m "something"
```

renormalize current directory
```
git add --renormalize .
git commit -m "something"
```

```
git rm --cached -r .  # Remove every file from git's index.
git reset --hard      # Rewrite git's index to pick up all the new line endings.
```

- main refs
	- <https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#about-line-ending>
	- <https://stackoverflow.com/a/42135910/15493213>
- supplementary refs
	- <https://www.edwardthomson.com/blog/advent_day_1_gitattributes_for_text_files.html>
	- <https://blog.opasschang.com/confusing-git-autocrlf/>

## Working on a branch

### Integrate new changes into your dev branch

In your dev branch

```
git rebase <remote>/<target branch>
```

e.g.

```
git rebase origin/master
```

### Make your branch identical to a branch

```
git reset --hard <remote>/<target branch>
```

e.g.

```
git reset --hard origin/master
```

## Stash

### Stash all changes

```
git stash -u
```

`-u` to include untracked files

### Show stashed entries

```
git stash list
```

### Retrieve stash files

```
git stash apply <number>
```

The latest one would be `0`

## commit related

### delete all commits

`git update-ref -d HEAD`

<https://stackoverflow.com/a/6637891/15493213>

### reset

`git reset HEAD~2` to reset to latest_commit.parent.parent

### revert a certain file to a version

`git checkout <sha> -- <path-to-file>`

### discard changes
relevant docs
- <https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository>
- <https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things>

#### for tracked files

- `git reset HEAD --hard`
- `git restore .`
- `git checkout -- .`
	- `git checkout -- haha.txt`
		- unmodify the modified untracked file `haha.txt`

#### for untracked files

- `git clean -df`
	- clear all untracked files
- `git clean -f haha.txt`
	- clear the untracked file `haha.txt`

### remove remote but keep local

```
git rm --cached <file>
```

### how many insertions and deletions for a user

```
git log --pretty=format:'' --numstat --author 'dlccyes' | awk 'NF' | awk '{insertions+=$1; deletions+=$2} END {print NR, "files changed,", insertions, "insertions(+),", deletions, "deletions(+)"}';
```
<https://stackoverflow.com/a/48575013/15493213>

### all commits

- `git log`
- `git reflog`
	- every action
- `git log --graph --decorate --oneline $(git rev-list -g --all)`
	- tree graph of your git and where HEAD is at
- commit counts
	- `git rev-list HEAD --count`

### diff

- `git diff`
- git diff with vimdiff
	- `git config --global diff.tool vimdiff` set git tool to vimdiff
	- `git difftool` to view
	- <https://stackoverflow.com/a/3713803/15493213>

###  by user

- all commits
	- `git shortlog`
- commit counts
	- `git shortlog -s -n`

<https://stackoverflow.com/questions/677436/how-do-i-get-the-git-commit-count>

## squash

### using reset & amend

設你有最近 3 個 commit 為
- 9a7792
- 9a7791
- 9a7790
- 9a7789

想要把三個 commits squash 在一起

1. `git reset --soft 9a7789`
2. `git commit --amend` OR 直接去 gui 
	- new commit message
3. `git push -f`
	- 此時 remote & local diverge若 pull 則會把 remote pull 下來剛剛步驟就白費了所以直接 force push
4. 完成

ref

- <https://www.burntfen.com/2015-10-30/how-to-amend-a-commit-on-a-github-pull-request> option 3
- <https://gitbook.tw/chapters/using-git/reset-commit.html> about git reset

### using rebase & squash

設你有最近 4 個 commit 為
- 9a7792
- 9a7791
- 9a7790
- 9a7789

想要把 9a7792 & 9a7791 squash 到 97790

1. `git rebase -i 9a7790`
2. 出現 editor，把 9a7792 & 9a7791 改成 squash (注意這時較早的 commit 是在上面)
3. 出現 editor，把 多個 message 改成單一個 message
4. `git push -f`
5. 完成

ref

<https://gitbook.tw/chapters/rewrite-history/merge-multiple-commits-to-one-commit.html>

## Credential

### Store credentials as a text file

1. `git config --global credential.helper store`
2. push or pull in your repo, enter your username & passphrase, then they will be saved to `~/.git-credentials`
3. next time you push or pull, you won't need to enter the credentials

<https://stackoverflow.com/questions/35942754>

### Store credentials in Mac's keychain Access app

Mac will store your credentials there automatically, **even if you use `credentials.helper store`**. So if you want to change your password/token, you'll need to go the the keychain Access app for it to take effect.

## config related

`git config --global XXX YYY` will add or change XXX's value to YYY in `~/.gitconfig`

## clone related

### partial clone

Clone only a certain directory

```
git init
git remote add -f origin <url>
git config core.sparsecheckout true
echo <dir1>/ >> .git/info/sparse-checkout
echo <dir2>/ >> .git/info/sparse-checkout
echo <dir3>/ >> .git/info/sparse-checkout
git pull origin master
```

works like a charm

ref:  
- <https://stackoverflow.com/a/43902478/15493213>
	- pasta from <https://stackoverflow.com/a/17075665/15493213>
		- pasta from <http://jasonkarns.com/blog/2011/11/15/subdirectory-checkouts-with-git-sparse-checkout/>

## branch related

### show branch

show all branch

```
git branch
```

show all remote/branch

```
git branch -a
```

### create branch

```
git checkout -b <branch_name>
```

### delete branch

delete local branch
```
git branch -d <local branch>
```

delete remote branch
```
git push <remote> --delete <branch>
# e.g. git push origin --delete test
```

if `git branch -a` still show the deleted branch

```
git remote prune <remote>
```

### rename branch

```
git branch -m <old_name> <new_name>
```

### switch branch
```
git checkout <branch>
```

### set/switch tracking remote branch
```
git branch -u <remote>/<branch>
# or
git branch --set-upstream-to=<remote>/<branch>
```
<https://stackoverflow.com/a/23458073/15493213>

### merge branch

To merge `branch_1` into `branch_2`

```
# in branch_2
git merge branch_1
```

### copy everything from another branch to current branch

```
git checkout <other_branch> .
```

<https://stackoverflow.com/a/7188232/15493213>

### push to another branch

Say you're on `branch_1` and want to push to `branch_2`

```
git push <remote> branch_1:branch_2
```

or

```
git push <remote> HEAD:branch_2
```

<https://stackoverflow.com/questions/13897717>

## remote related

### Check if you have access to a git repo

You can use

```
git ls-remote <git repo>
```

### check remote

```
git remote -v
```

### push to another remote

```
git push <remote>
```

### add remote

```
git remote add origin2 http://gitlab.com/name/repo
```

### switch default tracking repo

```
git branch --set-upstream-to origin2/master
```

<https://stackoverflow.com/a/32469272/15493213>

### ssh method

You can use the remote starting with `git@` and add the ssh public key to your github repo (or account) to use ssh method.

1. generate ssh key ([doc](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key))
	1. open git bash / linux terminal
	2. `ssh-keygen -t ed25519 -C <email>`
	3. press enter to til the end
	4. `eval ssh-agent -s`
		- should return `Agent pid <a number>`
	5. copy the content in `~/.ssh/id_ed25519.pub`
2. add it your github repo github ([doc](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account))
	1. go to your repository (or account)
	2. settings
	3. deploy keys (or ssh key)
	4. add key
	5. paste your public key
	6. check "allow write"

## tag

<https://git-scm.com/book/en/v2/Git-Basics-Tagging>

Only point at a specific commit, to indicate version for example.  
A tag can't be used on multiple commits.

## Troubleshooting

### Unsafe directory error

git addressed a security vulnerability and changed something to solve it in April, 2022  
see <https://github.blog/2022-04-12-git-security-vulnerability-announced/>

As a result, git directories can't normally use git by non-owners.

Workarounds:

1. do git as the owner

2. Add directories to ignore in gitconfig
```
git config --global --add safe.directory <your directory>
```

to add all subdiretories
```
for dir in */; do git config --global --add safe.directory $(realpath $dir); done
```

### push hung

Restart ssh agent

```
killall ssh-agent; eval `ssh-agent`
```

[Ref](https://stackoverflow.com/a/58962127/15493213)

### XXX: needs merge

```
git reset -- <path/to/file>
```

See <https://stackoverflow.com/a/9749773/154932132>