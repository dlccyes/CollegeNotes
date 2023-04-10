---
layout: meth
parent: Software Development
---

# LeetCode Engineering

## Important

### Power is not constant time

So if you want to do for example substring hashing, better maintain the factor in the for loop instead of calling `RADIX**i` each time.

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

1. make each number at it's sorted position by swapping `nums[nums[i]]` & `nums[i]`
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

### References

- <https://leetcode.com/discuss/study-guide/1902662/>

## String Pattern Matching

There are many ways to check if a string is a substring to another string in linear time.

### Z Algorithm

In the z array of string `s`, `z[i]` = the length of longest matching prefix between `s` and `s[i:]`

To construct a z array:

```python
def get_z_array(s: str) -> list[int]:
	"""construct z array with z algorithm"""
	n = len(s)
	z = [0] * n
	l = r = 0
	for i in range(1, n):
		if i > r: # find new window
			l = r = i
			# move r for max matched string window
			while r < n and s[r] == s[r-l]:
				r += 1
			r -= 1 # rollback
			z[l] = r - l + 1
		else: # i is in the window
			if z[i-l] < r - i + 1: # the prefix starting from i-l is within the window
				z[i] = z[i-l] # since i in l~r window is the same as i-l in 0~? window
			else: # the prefix starting from i-l will extend over the window, so it won't apply to i
				while r < n and s[r] == s[r-i]: # see how far the window can extend
					r += 1
				r -= 1 # rollback
				z[i] = r - i + 1
				l = i
	return z
```

To find if a string is a substring of another string, follow the steps. Assuming the target string is `haystack` and the potential substring `needle`

1. Construct z array for the target string `<needle>$<haystack>`
2. Traverse the z array from after `$` and early return the index if the number = len(needle)

**Reference**

- <https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/>
- <https://codeforces.com/blog/entry/3107>
- ChatGPT

### KMP Algorithm

Construct a longest-prefix-suffix (lps) array first. If `lps[i]` = k, then in the substring `s[:i+1]`, the first k letters and the last k letters are the sam真真e.

Watch a youtube video or some figures to understand it more easily.

```python
def get_lps_array(s: str) -> list[int]:
	n = len(s)
	lps = [0] * n
	l = 0
	r = 1
	while r < n:
		if s[l] == s[r]:
			l += 1
			lps[r] = l
			r += 1
		else:
			if l == 0:
				r += 1
			else:
				l = lps[l-1]
	return lps
```

### Double Hashing

**Single Hashing**

To hash a substring i.e. convert a substring to a unique integer (in the scope of the string), you can do it like this

$$\sum_{i=l}^rs[i]r^{i}$$

where `s[l:r+1]` is the substring and `r` is the radix/base. In the case of small case letters, if we convert all of them to 0 ~ 25, the radix/base should be at least 26 so that a collision won't happen.

**Double Hashing**


It is very possible that the calculated hash will overflow, so we need to mod the result after every calculation. However, this also provides another chance for collision. To make the probability of collision ignorable, we can calculate another hash with a different radix/base and mod.
Be aware that **calculating the power of a number isn't constant time**.

Reference: the editorial of [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

### Problems

- [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [1392. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/description/)
- [2223. Sum of Scores of Build Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)
