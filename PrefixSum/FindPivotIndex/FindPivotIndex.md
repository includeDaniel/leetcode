# Approach

Using the prefixed sum to calculate the left and right sides of the sum in each iteration relative to a pointer that may or may not be the correct pivot, if there is a point where the sum of the left side and the sum of the right side are equal, we have found the pivot.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Easy

# Code

```ts
function pivotIndex(nums: number[]): number {
    const tSum = nums.reduce((acc, curr) => acc + curr, 0);
    let lSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const rSum = tSum - lSum - nums[i];
        if (rSum === lSum) return i;
        lSum += nums[i];
    }
    return -1;
}
```
