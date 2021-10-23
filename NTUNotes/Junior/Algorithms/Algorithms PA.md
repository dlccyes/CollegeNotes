# Algorithms PA
## PA1 sort
to execute (in root)
```
make
cd bin
./NTU_sort –[IS|MS|QS|HS] <input_file_name> <output_file_name>
```
`make clean` to clear the results from `make` 

`ulimit -s 262144` to prevent stack overflow

case structure
- case 1: random
- case 2: already sorted
	- 對 [[Algorithms#Quicksort|quicksort]] 來說是 worst case
- case 3: reversely sorted

`./bin/NTU_sort -IS inputs/1000.case1.in outputs/1000.case1.out`

### report
![](https://i.imgur.com/dtXdJWj.png)
![](https://i.imgur.com/OV2ocET.png)
- 實際上 case 2 因為是 sorted 所以 QS 會明顯在其他上面

### submission
![](https://i.imgur.com/GQhb0FD.png)
![](https://i.imgur.com/loZL2eL.png)

- compress
	- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- `tar zxvf b08901001_pa1.tgz`
- to check submission
	- (in utility) `checkSubmitPA1.sh b08901001_pa1.tgz`