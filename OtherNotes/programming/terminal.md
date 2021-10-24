# terminal

## awk
- substring index
	- `awk 'BEGIN{print index("abcdes","bc")}'` → 2
	- `echo "My name is Deepak" | awk '{print index($0,"Deepak")}'` → 12


## tar
- compress
	- compress `b08901001_pa1` to `b08901001_pa1.tgz`
		- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- extract `b08901001_pa1.tgz`
		- `tar zxvf b08901001_pa1.tgz`

## zip
- zip `haha` to `haha.zip`
	- `zip -r haha.zip haha`