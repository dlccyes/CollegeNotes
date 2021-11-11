# git

## history
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
- `git log`
- `git reflog`
	- each commit oneline
- `git log -p abcdef`
	- commit details of `abcdef`

## squash
### using reset & amend
設你有最近 3 個 commit 為
- 9a7792
- 9a7791
- 9a7790
- 9a7789

想要把三個 commits squash 在一起
1. `git reset --soft 9a7990`
2. `git commit --amend` OR 直接去 gui 
	- new commit message
3. `git push -f`
	- 此時 remote & local diverge若 pull 則會把 remote pull 下來剛剛步驟就白費了所以直接 force push
4. 完成

ref
https://www.burntfen.com/2015-10-30/how-to-amend-a-commit-on-a-github-pull-request option 3
https://gitbook.tw/chapters/using-git/reset-commit.html about git reset

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
https://gitbook.tw/chapters/rewrite-history/merge-multiple-commits-to-one-commit.html

## config related
`git config --global XXX YYY` will add or change XXX's value to YYY in `~/.gitconfig`

### store credentials
1. `git config --global credential.helper store`
2. push or pull in your repo, enter your username & passphrase, then they will be saved to `~/.git-credentials`
3. next time you push or pull, you won't need to enter the credentials

<https://stackoverflow.com/questions/35942754/how-can-i-save-username-and-password-in-git>
