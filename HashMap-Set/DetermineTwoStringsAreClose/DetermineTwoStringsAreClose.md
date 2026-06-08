# Approach

Basically, create two sets to store the words and use the hashmap to calculate the frequency of each string

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```ts
function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const set1 = new Set(word1);
    const set2 = new Set(word2);
    const map1 = new Map();
    const map2 = new Map();

    for (let s of word1) {
        map1.set(s, (map1.get(s) ?? 0) + 1);
    }
    for (let s of word2) {
        map2.set(s, (map2.get(s) ?? 0) + 1);
    }

    const sortedMap1 = [...map1.values()].sort((a, b) => a - b);
    const sortedMap2 = [...map2.values()].sort((a, b) => a - b);

    const equalFrequency =
        JSON.stringify(sortedMap1) === JSON.stringify(sortedMap2);
    const equalCharacters =
        set1.size == set2.size && [...set1].every((v) => set2.has(v));

    if (equalFrequency && equalCharacters) return true;

    return false;
}
```
