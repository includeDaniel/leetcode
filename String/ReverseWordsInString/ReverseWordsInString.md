# Approach

Basically i split the string by space creating a array that contains words and white spaces and after that eliminate the white spaces with the filter, reverse the array and join the string by spaces again

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```js
function reverseWords(s: string): string {
    return s
        .split(" ")
        .filter((w) => w != "")
        .reverse()
        .join(" ");
}
```
