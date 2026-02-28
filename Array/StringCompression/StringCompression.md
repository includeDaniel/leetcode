# Approach

Literally iterate in chars and the temporary variable receives the char in the i position
When the next caracter is different we sitch the char, so s receives the temp so far and if
his position is more than 1 we also append the number of characters, in the end we just
switch the positions in chars and return the s.length

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```js
function compress(chars: string[]): number {
    let s = "";
    let temp = "";
    for (let i = 0; i < chars.length; i++) {
        temp += chars[i];
        if (chars[i + 1] != chars[i]) {
            s += temp[0] + (temp.length != 1 ? temp.length : "");
            temp = "";
        }
    }

    s.split("").forEach((c, i) => (chars[i] = c));
    return s.length;
}

```
