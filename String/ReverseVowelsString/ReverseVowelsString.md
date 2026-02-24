# Approach

Using two pointer to analyze if the char is a vowel and switch the earliest vowel with the endness vowel

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Easy

# Code

```js
const reverseVowels = (s: string): string => {
    const set = new Set(["a", "e", "i", "o", "u"]);
    let i = 0,
        j = s.length - 1,
        temp,
        res = [...s];
    while (i < j) {
        const vI = set.has(s[i].toLowerCase());
        const vJ = set.has(s[j].toLowerCase());
        if (vI && vJ) {
            temp = res[i];
            res[i] = res[j];
            res[j] = temp;
            i++;
            j--;
        }
        if (!vI) i++;
        if (!vJ) j--;
    }
    return res.join("");
};

```
