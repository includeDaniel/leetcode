# Approach

Use a sliding window that allows at most one `0` inside the window.

When a second `0` appears, move the left pointer to the position right after the previous `0`, keeping a valid window with only one deletable zero.

At each step, calculate the best length with `r - l` (not `r - l + 1`) because one element must be deleted.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```js
function longestSubarray(nums: number[]): number {
    let l = 0, r = 0, maxL = 0, z = 0, zPosition = 0
    while(r < nums.length) {
        if(nums[r] == 0) {
            z++
            if(z > 1) {
                l = zPosition + 1
                z--
            }
            zPosition = r
        }
        maxL = Math.max(maxL, r - l)
        r++
    }

    return maxL
};
```
