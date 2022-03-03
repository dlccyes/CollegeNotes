# C++

## compile
with optimization `g++ -O2 --static`

## vector
`#include<vector>`

### sort
https://stackoverflow.com/a/14669733/15493213

### array to vector
```cpp
int arr[] = {1,2,3,4,5};
vector<int> oldd(begin(arr),end(arr));
```

### create subvector
```cpp
vector<int> neww = {oldd.begin()+1, oldd.end()-1}; //neww = oldd[1:-1]
```
https://stackoverflow.com/a/58724503/15493213

### nested vector
2-dimensional NxN
`vector<vector<int>> M(N, vector<int>(N))`

3-dimensional NxNxN
`vector<vector<vector<int>>> M(N, vector<vector<int>>(N, vector<int>(N)))`
https://stackoverflow.com/a/9812469/15493213

## for loop
```
for element in vec
```
=
```
for (auto & element : vec)
```

## string
`#include<string>`

## pointer
```cpp
int main(){
    int Array[] = {1,2,3,4,5};
    int *Memarray=Array;
    int result = 0;
    for(int i=0; i<5; i++){
        result += *Memarray; //result += Array[i]
        Memarray ++;
    }
    cout << result << endl; //15
}
```

## associative array
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    map<string, int> marks{ { "Rithvik", 78 },
            { "Suraj", 91 }, { "Jessie", 100 },
            { "Praveen", 99 }, { "Bisa", 84 } };
    marks["Haha"] = 50; //add element just like in python
    cout << marks["Bisa"] << endl;
    cout << marks["Haha"] << endl;
}
```
ref: https://www.geeksforgeeks.org/associative-arrays-in-cpp/

## read file
```
#include <bits/stdc++.h>
using namespace std;
int main(int argc, char* argv[]){
    fstream fin(argv[1]);
    int one,two;
    map<int, int> chords{};
    char buffer[200];
    fin.getline(buffer,200);
    while (fin >> one >> two){ //separated by space
        // printf("one=%d, two=%d\n",one,two);
        chords[one] = two;
        chords[two] = one;
    }
    cout << chords[5] << endl;
}
```