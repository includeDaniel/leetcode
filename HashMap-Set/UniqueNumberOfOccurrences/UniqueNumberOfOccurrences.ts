function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    for (let n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    const set = new Set(map.values());
    return set.size == map.size;
}
