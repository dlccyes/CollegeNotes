# shell
## awk
- substring index
	- `awk 'BEGIN{print index("abcdes","bc")}'` → 2
	- `echo "My name is Deepak" | awk '{print index($0,"Deepak")}'` → 12

## variable
- `$variable_name`
- no spacing around `=`

## output
- `var=$(git status)`

## string
- concat
	- `allmsg="${allmsg}\n${msg1}\n${msg2}\n${msg3}\n"`

## output to file
- write to file
	- `echo haha > file.txt`
- append to file
	- `echo haha >> file.txt`

## tar
- compress
	- compress `b08901001_pa1` to `b08901001_pa1.tgz`
		- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- extract `b08901001_pa1.tgz`
		- `tar zxvf b08901001_pa1.tgz`
