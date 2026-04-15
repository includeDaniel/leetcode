# Approach

To find the longest subarray of 1s after flipping at most K zeros, we can use a sliding window approach. We maintain a window that contains at most K zeros. As we expand the window to the right, if we exceed K zeros, we shrink from the left. The maximum window size during this process is our answer.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```ts
function longestOnes(nums: number[], k: number): number {
    let l = 0,
        r = 0,
        maxL = 0,
        z = 0;
    while (r < nums.length) {
        if (nums[r] == 0) z++;
        if (z > k) {
            if (nums[l] == 0) {
                z--;
            }
            l++;
        }
        if (z <= k) {
            maxL = Math.max(maxL, r - l + 1);
        }
        r++;
    }

    return maxL;
}
```
