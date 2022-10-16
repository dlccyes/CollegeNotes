---
layout: meth
parent: Software Development
---
# shell
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## variable
- `$variable_name`
- no space around `=`
- enclose variable with space with `"`
	- `echo "$variable"`

## make as variable output
- `var=$(git status)`

## swallow output
```
<some command> &> /dev/null
```

## string

### concat

`allmsg="${allmsg}\n${msg1}\n${msg2}\n${msg3}\n"`

### slice

for `str[1]`  
```sh
echo $str | cut -c2
```

for str[0:4]  
```
echo $str | cut -c1-4
```

### split
for `str.split(',')[0]`  
```sh
echo $str | cut -d ',' -f 1
```

## replace
### sed
`echo xxx | sed "s/<find>/<replace>/<position>"`  
`sed -i "s/<find>/<replace>/<position>" input.txt`   

for `<position>`
- `g` = all
- `1` = 1
- `2g` = 2:

<https://stackoverflow.com/a/44898816/15493213>

use `\bword\b` for whole word

### tr
`tr 'find' 'replace'`

### paste
`paste -sd'abc'`  
replace every `\n` with `a` `b` `c` in a round robin manner

## array
`arr=((1 2 3))`

### get index
`echo ${arr[2]}`

### replace
`echo ${arr[@]/<find>/<replace>}`

## awk

`awk '{print $1, ":", ($2>=50 && $3>=50 && $4>=50) ? "Pass" : "Fail"}'`

`awk '{print "2 " $2 " 3 " $3}' file.txt`  

`awk '{avg=($2+$3+$4)/3; print $0, ":", (avg>=80)?"A":(avg>=60)?"B":(avg>=50)?"C":"FAIL"}'`

- substring index
	- `awk 'BEGIN{print index("abcdes","bc")}'` → 2
	- `echo "My name is Deepak" | awk '{print index($0,"Deepak")}'` → 12

## find

Find all files under the current directory recursively

List all the files named `haha`

```
find . -name haha
```

List all the files > 50MB

```
find . -size +50M
```

List all the files < 50MB

```
find . -size -50M
```

Delete all the files matching the pattern `*pat*`

```
find . -name '*pat*' -delete
```

## scp

remote to local  
```
scp -P <port> <remote username>@<remote host>:path/to/file path/to/file
```

local to remote
```
scp -P <port> path/to/file <remote username>@<remote host>:path/to/file
```

<https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/>

## processes

- `ps aux`
- `top`
- `htop`
- proc
	- <https://www.kernel.org/doc/html/latest/filesystems/proc.html>
- `free -h` for total memory usage

## output to file

- write to file
	- `echo haha > file.txt`
- append to file
	- `echo haha >> file.txt`

## curl
curl + python to extract json

e.g.
```bash
curl -s "http://ws.audioscrobbler.com/2.0/?method=user.getrec  
enttracks&user=<user>&api_key=<api key>&format=json" | python3 -c "import json,sys;result=json.load(sys.stdin);print(result['recenttracks']['track'][0]['name'])"
```

## disk
- usage and available space of all partitions
	- `df -h`
- size of all top level non-hidden directories or files
	- `du -sh *`
	- `du -sh * | sort -rh`
		- with reversedsorting
- size of all top level directories or files
	- `du -ahd1 . | sort -h`
- `df -i`
- `df -ah`

## sort
- `sort -n` for numerial sort
- `sort -r` for reverse
- `sort -k 2` to sort with 2nd column


## alias
- double quote -> evaluate at creation time
	- ![](https://i.imgur.com/lYxsveB.png)
- single quote -> evaluate at runtime
	- ![](https://i.imgur.com/4PDOMd2.png)

## tar

- compress
	- compress `b08901001_pa1` to `b08901001_pa1.tgz`
		- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- extract `sample.tgz`
		- `tar zxvf sample.tgz`
	- extract `sample.tgz` into an existing directory `sample`
		- `tar zxvf sample.tgz -C sample`

## zip

- zip `haha` to `haha.zip`
	- `zip -r haha.zip haha`

## find files

[fzf](https://github.com/junegunn/fzf)

## history

- `history` to show history
- `!5` to execute 5th commands in history
- `ctrl+r` to search history command

## commands

### memory

`free -h`

### exec time
`time command`

### meta

- autocomplete from history
	- `ctrl+R`
- cd to previous directory
	- `cd -`

## softlink & hardlink
- softlink
	- `ln -s ogfile softlink`
	- create a pointer to ogfile
	- deleting ogfile will make softlink unsuable
	- like Windows shortcut
- hardlink
	- `ln ogfile hardlink`
	- create a pointer to the data ogfile points to
	- deleting ogfile won't affect hardlink

## python
- `python -c <script>`
- pass things in with input()
	- `echo 2 | python -c "print(int(input())+2)"` → 4

## calculate
- `bc`
- `bc -l` use some library
- `echo 2+2 | bc` → 4
