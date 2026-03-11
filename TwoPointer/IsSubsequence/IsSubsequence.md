# Approach

This approach uses two pointer, one to search in "s" array and the other iterating through the "t" array, whe the two arrays have a match we increment the "s" array pointer
and when the iteration finish we verify if the "s" array pointer are equals to s.length
if yes return true, if it's not return false

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Easy

# Code

```js
function isSubsequence(s: string, t: string): boolean {
    let p = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[p] === t[i]) p++;
    }
    if (p === s.length) return true;
    return false;
}

```
