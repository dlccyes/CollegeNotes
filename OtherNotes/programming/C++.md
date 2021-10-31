# C++
## vector
`#include<vector>`
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