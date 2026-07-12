# Approach

My approach is storage the rows in the string form inside of a HashMaps with a "," delimiter between each element as a key and the occurrences as the value
After that what you need to do is just iterate over the columns and find a sequence thatw match one row, if you find just sum the occurrences

# Complexity

- Time complexity:
  O(n)^2

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```ts
function equalPairs(grid: number[][]): number {
    const rowsMap = new Map();
    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        const key = grid[i].join(",");
        rowsMap.set(key, (rowsMap.get(key) || 0) + 1);
    }
    for (let i = 0; i < grid.length; i++) {
        let col = [];
        for (let j = 0; j < grid.length; j++) {
            col.push(grid[j][i]);
        }
        answer += rowsMap.get(col.join(",")) || 0;
    }
    return answer;
}
```
