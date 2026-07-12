# Approach

The approach is simple, just use the stack behavior:

- First iterate over the string and as long as you don't find the " \* " push elements onto the stack
- When you find a " \* " just pop elements from the stack

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```ts
function removeStars(s: string): string {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
}
```
