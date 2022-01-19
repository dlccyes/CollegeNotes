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
### tr
`tr 'find' 'replace'`

### paste
`paste -sd'abc'`  
replace every `\n` with `a` `b` `c` in a round robin manner

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
