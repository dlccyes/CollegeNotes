---
layout: meth
parent: Programming
---
# leetcode
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## sliding window
<https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/523136/JavaC++Python-Slilegding-Window/556706>

**num of contiguous subarrays with k different integers**

basically
write a function counting the num of subarrays with at most k different integers
maintain a sliding window
the right pointer keeps sliding
while the left pointer slides when diff integers > k
the sum of the length of each legal subarray
is the answer

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