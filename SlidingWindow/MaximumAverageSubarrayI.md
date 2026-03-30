# Approach

Use the sliding window technique to maintain a subarray sum, because the subarray with the maximum average will be the subarray with the maximum sum.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Easy

# Code

```js
function maxArea(height: number[]): number {
    let maxW = 0
    let l = 0, r = height.length - 1
    while(l != r) {
        let x = r - l, y
        if(height[r] < height[l]) {
            y = height[r]
            r--
        } else {
            y = height[l]
            l++
        }
        let w = x * y
        if(maxW < w) maxW = w
    }
    return maxW
};
```
