# Approach

This approach uses two pointers, one at the beginning and one at the end of the array.
In each iteration, we calculate the volume of water and store the largest value.
After calculating the volume of water, we increment to the left or to the right, depending on which is the smallest value.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

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
