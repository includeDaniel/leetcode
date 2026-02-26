# Approach

Using the prefix-postfix approach, which basically uses two separate iterations to form a array containing the left and right elements multiplied by themselves, considering a fixed point.

After structuring this array just return him.

(Note: this problem has a time complexity of O(n) and cannot be solved with the division operation.)

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```js
function productExceptSelf(nums: number[]): number[] {
    const { length } = nums;
    const result = new Array(nums.length);

    let prefix = 1;
    for (let i = 0; i < length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}
```
