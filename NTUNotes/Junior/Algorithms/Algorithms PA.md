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
- case 3: reversely sorted

`./bin/NTU_sort -IS inputs/1000.case1.in outputs/1000.case1.out`

![](https://i.imgur.com/dtXdJWj.png)
