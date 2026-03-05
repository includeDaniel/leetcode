# Approach

This approach involves selecting the non-zero values ​​and moving them to the left in the current order.
As a consequence, the zeros will be moved to the right.

1. Creating two pointers, l and r, that start with 0.
2. Iterating through the nums array, checking if the value at position r is different from 0.
   If it is, swap it with the pointer l.
3. We always increment the pointer r and increment the pointer l only if we enter the if structure.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Easy

# Code

```js
function moveZeroes(nums: number[]): any {
    let l = 0,
        r = 0;
    while (r < nums.length) {
        let temp;
        if (nums[r] != 0) {
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
        r++;
    }
}
```
