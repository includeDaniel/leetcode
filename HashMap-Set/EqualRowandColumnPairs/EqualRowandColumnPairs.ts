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
