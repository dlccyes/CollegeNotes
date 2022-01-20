# shell

## variable
- `$variable_name`
- no spacing around `=`

## output
- `var=$(git status)`

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
`sed "s/<find>/<replace>/<position>"`  

for `<position>`
- `g` = all
- `1` = 1
- `2g` = 2:

<https://stackoverflow.com/a/44898816/15493213>

### tr
`tr 'find' 'replace'`

### paste
`paste -sd'abc'`  
replace every `\n` with `a` `b` `c` in a round robin manner

## array
`arr=((1 2 3))`  

### replace
`echo ${arr[@]/<find>/<replace>}`

## output to file
- write to file
	- `echo haha > file.txt`
- append to file
	- `echo haha >> file.txt`

## commands
### memory
`free -h`

### exec time
`time command`

## python
- `python -c <script>`
- pass things in with input()
	- `echo 2 | python -c "print(int(input())+2)"` → 4

## calculate
- `bc`
- `bc -l` use some library
- `echo 2+2 | bc` → 4
