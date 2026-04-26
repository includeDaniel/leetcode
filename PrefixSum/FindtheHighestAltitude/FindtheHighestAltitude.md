# Approach

Using prefix sum to calculate the altitude in each iteration and the max altitude to return in the end

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Easy

# Code

```ts
function largestAltitude(gain: number[]): number {
    let altitude = 0,
        max = 0;
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        max = Math.max(altitude, max);
    }

    return max;
}
```
