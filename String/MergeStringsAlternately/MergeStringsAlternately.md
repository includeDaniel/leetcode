# Approach

Creating a new string by adding char by char if the i-th exists in the currenty string

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Code

```js
const mergeAlternately = (word1, word2) => {
    let r = "";
    let k = Math.max(word1.length, word2.length);
    for (let i = 0; i < k; i++) {
        if (word1[i]) r += word1[i];
        if (word2[i]) r += word2[i];
    }
    return r;
};
```
