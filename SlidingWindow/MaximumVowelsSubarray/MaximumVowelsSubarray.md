# Approach

Use the sliding window technique to keep track of the number of vowels counted in a substring and compare the substring with the maximum number (maxNumber) obtained so far to find the maximum number of vowels in that matrix in a window of k elements.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```js
function maxVowels(s: string, k: number): number {
    const set = new Set(["a","e","i","o","u"])
    let v = 0
    for(let i = 0; i < k; i++) {
        if(set.has(s[i])) v++
    }
    let maxV = v
    for(let i = k; i < s.length; i++) {
        if(set.has(s[i])) v++
        if(set.has(s[i - k])) v--
        maxV = Math.max(maxV, v)
    }
    return maxV
};
```
