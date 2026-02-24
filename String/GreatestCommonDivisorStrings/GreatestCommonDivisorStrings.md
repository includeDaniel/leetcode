# Approach

Check if the concatenations of str1 and str2 in different orders are the same.

If not, return "".
Get the GCD gcdLength of the two lengths of str1 and str2.

Return the prefix string with a length of gcdLength of either str1 or str2 as the answer.

# Complexity

- Time complexity:
  O(m + n)

- Space complexity:
  O(m + n)

# Leetcode Rank

- Easy

# Code

```js
const gcdOfStrings = (str1, str2) => {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    if (!(str1 + str2 == str2 + str1)) return "";
    let l = gcd(str1.length, str2.length);
    return str1.substring(0, l);
};
```
