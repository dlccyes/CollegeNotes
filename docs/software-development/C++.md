---
layout: meth
parent: Software Development
---
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

<https://stackoverflow.com/a/58724503/15493213>

### nested vector
2-dimensional NxN
`vector<vector<int>> M(N, vector<int>(N))`

3-dimensional NxNxN
`vector<vector<vector<int>>> M(N, vector<vector<int>>(N, vector<int>(N)))`

<https://stackoverflow.com/a/9812469/15493213>

## class
### this
like python's `self`
```cpp
class Solution {
public:
    vector<int> arr;
    int climbStairs(int n) {
        vector<int> arr(n+1);
        this->arr = arr;
        return fib(n);
    }
    int fib(int n) {
        if(n==0 || n==1) return 1;
        if(this->arr[n]) return this->arr[n];
        this->arr[n] = fib(n-1)+fib(n-2);
        return this->arr[n];
    }
};
```

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
`unordered_map`
- O(1) lookup
- hash table

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;
 
int main()
{
    // Declaring umap to be of <string, int> type
    // key will be of string type and mapped value will
    // be of int type
    unordered_map<string, int> umap;
 
    // inserting values by using [] operator
    umap["GeeksforGeeks"] = 10;
    umap["Practice"] = 20;
    umap["Contribute"] = 30;

    // Traversing an unordered map
    for (auto x : umap)
      cout << x.first << " " << x.second << endl;
}
```
<https://www.geeksforgeeks.org/unordered_map-in-cpp-stl/>

`map`
- O(logn) lookup
- binary tree

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
ref: <https://www.geeksforgeeks.org/associative-arrays-in-cpp/>

## set
`unordered_set`
- average O(1) lookup
- hash table

```cpp
bool containsDuplicate4(vector<int>& nums) {
    set<int> mySet;
    for (auto& num: nums) {
        if (mySet.find(num) != mySet.end())
            return true;
        mySet.insert(num);
    }
    return false;
}
```

`set`
- O(logn) lookup
- binary tree

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