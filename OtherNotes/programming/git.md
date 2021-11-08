# git

## squash
### using amend
method 1: reset & ammend設你有最近 3 個 commit 為
- 9a7792
- 9a7791
- 9a7790

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
method 2: rebase & squash設你有最近 4 個 commit 為
- 9a7792
- 9a7791
- 9a7790
- 9a7789

想要把 9a7792 & 9a7791 squash 到 97790
1. `git rebase -i 9a7790`
2. 出現 editor，把 9a7792 & 9a7791 改成 squash
3. 出現 editor，把 多個 message 改成單一個 message
4. `git push -f`
5. 完成

ref
https://gitbook.tw/chapters/rewrite-history/merge-multiple-commits-to-one-commit.html
