# Approach

Create a queue that the first element is removed when it's less than t - 3000

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Easy

# Code

```typescript []
class RecentCounter {
    queue: number[] = [];
    ping(t: number): number {
        this.queue.push(t);
        while (this.queue.length > 0 && this.queue[0] < t - 3000) {
            this.queue.shift();
        }
        return this.queue.length;
    }
}
```
