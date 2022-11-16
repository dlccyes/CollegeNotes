---
layout: meth
parent: Software Development
---
# leetcode

## Sliding window

<https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/523136/JavaC++Python-Slilegding-Window/556706>

**num of contiguous subarrays with k different integers**

basically  
write a function counting the num of subarrays with at most k different integers  
maintain a sliding window  
the right pointer keeps sliding  
while the left pointer slides when diff integers > k  
the sum of the length of each legal subarray is the answer

e.g.
given [1, 2, 1, 2, 3] & k=2  
[1] -> 1 new  
[1, 2] -> 2 new ([1, 2] & [2])  
[1, 2, 1] -> 3 new ([1, 2, 1] & [2, 1] & [1])  
and so on and so forth  

to generalize  
from [a1, a2, ..., ak] to [a1, a2, ..., ak+1]  
new subarrays are [ak+1] & [ai, ..., ak+1] for i = 1 to k  
so there are k+1 new subarrays

```python
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        self.nums = nums
        return self.atMost(k) - self.atMost(k-1)
    
    def atMost(self, n):
        p = 0
        wind = dict()
        res = 0
        for q, num in enumerate(self.nums):
            if num not in wind:
                wind[num] = 0
            wind[num] += 1
            # slide p to make num of diff <= n
            while len(wind) > n:
                curr = self.nums[p]
                wind[curr] -= 1
                if wind[curr] == 0:
                    del wind[curr]
                p += 1
            res += q-p+1
        return res
```

## Cyclic Sort

Given 

- `nums` = an array of n integers
- each element in `nums` is in range `[0, n]`

`nums[i]` = the index of `nums[i]` if the it's sorted

1. make each number at it's sorted position by swaping `nums[nums[i]]` & `nums[i]`
2. iterate again and find the out-of-place ones

### Problems

- numbers in a certain range
	- without duplicates
		- [268. Missing Number](https://leetcode.com/problems/missing-number/)
	- with duplicates
		- [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
		- [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
	- Min swaps to sort
		- [Minimum number of swaps required to sort an array | GeeksforGeeks](https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/)
			- [archive](https://web.archive.org/web/20220609104301/https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/)
		- [2471. Minimum Number of Operations to Sort a Binary Tree by Level](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/)
- numbers are not in a certain range
	- [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

### Reference

- <https://leetcode.com/discuss/study-guide/1902662/>
