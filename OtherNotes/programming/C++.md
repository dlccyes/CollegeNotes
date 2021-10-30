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