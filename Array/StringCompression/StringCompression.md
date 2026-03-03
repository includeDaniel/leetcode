# Approach

i → read pointer (scan the array)

write → write pointer (overwrite compressed result)

For each group:

Count how many times the same char repeats
Write the character once
If count > 1, write each digit of the count

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```js
function compress(chars: string[]): number {
    let i = 0
    let write = 0
    while(i < chars.length) {
        let curr = chars[i]
        let count = 0
        while(i < chars.length && chars[i] == curr) {
            i++
            count++
        }
        chars[write] = curr
        write++
        if(count > 1) {
            for(let digit of count.toString().split("")) {
                chars[write] = digit
                write++
            }
        }
    }
    return write
};

```
