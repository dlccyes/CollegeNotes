---
parent: Algorithms
---
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
![[algorithms-pa-1.png]]
![[algorithms-pa-2.png]]
- 實際上 case 2 因為是 sorted 所以 QS 會明顯在其他上面

### submission
![[algorithms-pa-3.png]]
![[algorithms-pa-4.png]]

- compress
	- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- `tar zxvf b08901001_pa1.tgz`
- to check submission
	- (in utility) `checkSubmitPA1.sh b08901001_pa1.tgz`

## PA2 dynamic programming
<https://github.com/jason88012/Maximum-Planner-Subset>
<https://github.com/blacktomato/Algorithms/blob/master/pa2/b02901001-p2/maxPlanarSubset.cpp>
top-down，分一半存值，一半存 case
`reserved`

my bottom-up stat
```
alg21f032@edaU6:~/b08901064_pa2/pa2$ ./bin/mps inputs/100000.in outputs/100000.out
100000
566
ho many traversed? 705082704
486.446
```

my top-down stat
```
alg21f032@edaU6:~/b08901064_pa2/pa2$ time ./bin/mps inputs/100000.in outputs/100000.out
real    4m15.829s
user    3m43.621s
sys     0m27.887s
```

top-down 單個 2Nx2N matrix stat
```
alg21f032@edaU6:~/b08901064_pa2/pa2$ time ./bin/mps inputs/100000.in outputs/100000.out
real    1m34.693s
user    1m14.506s
sys     0m20.155s
```

```
alg21f032@edaU6:~/b08901064_pa2/pa2$ time ./bin/mps inputs/100000.in outputs/100000.out

real    2m20.060s
user    1m16.116s
sys     0m40.273s
```
用 14.8 % memory

如果 map 成一維
只會用 7.4% memory
```
alg21f032@edaU6:~/b08901064_pa2$ time ./bin/mps inputs/100000.in outputs/100000.out

real    1m39.321s
user    1m29.190s
sys     0m10.119s
```

跑 180k 還沒漲完主要 matrix/vector 就會 seg fault