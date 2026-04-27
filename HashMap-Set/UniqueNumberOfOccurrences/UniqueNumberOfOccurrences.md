# Approach

Using a HashMap to count repeated values ​​and a Set to check if any item in the map has the same frequency.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Easy

# Code

```ts
function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    for (let n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    const set = new Set(map.values());
    return set.size == map.size;
}
```
