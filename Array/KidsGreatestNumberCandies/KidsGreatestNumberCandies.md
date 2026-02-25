# Approach

Storing the max value of the array in the beginning

Iterate of candies and calculate with the current candy plus the extra candies are greater or equal the max value in the array

if it's push true in the response array
if not push false

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Easy

# Code

```js
const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
    const m = Math.max(...candies)
    const res = []
    for(let n of candies) {
        if(n + extraCandies >= m) {
            res.push(true)
            continue
        }
        res.push(false)
    }
    return res
};
```
