# Approach

My first approach is storage the columns and rows in the string form inside of two HashMaps with a "," delimiter between each element as a key and the occurrences as the value
After that what you need to do is just compare the two HashMaps and multiply the ocurrences when a row and column it's equal

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
    const columnsMap = new Map();
    let lexeme: string = "";
    let answer = 0;

    for (let i = 0; i < grid.length; i++) {
        const key = grid[i].join(",");
        rowsMap.set(key, rowsMap.has(key) ? rowsMap.get(key) + 1 : 1);
        for (let j = 0; j < grid[i].length; j++) {
            if (j == grid[i].length - 1) {
                lexeme += grid[j][i].toString();
                columnsMap.set(
                    lexeme,
                    columnsMap.has(lexeme) ? columnsMap.get(lexeme) + 1 : 1,
                );
                lexeme = "";
            } else {
                lexeme += grid[j][i].toString() + ",";
            }
        }
    }

    if (columnsMap.size > rowsMap.size) {
        for (let i of columnsMap) {
            if (rowsMap.has(i[0])) {
                answer += i[1] * rowsMap.get(i[0]);
            }
        }
    } else {
        for (let i of rowsMap) {
            if (columnsMap.has(i[0])) {
                answer += i[1] * columnsMap.get(i[0]);
            }
        }
    }
    return answer;
}
```
