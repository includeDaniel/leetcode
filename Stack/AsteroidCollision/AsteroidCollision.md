# Approach

The approach is use a stack to push and pop elements in the right conditions

- Create the stack and iterate through the asteroids
- Use while to compute more than one colision in a single iteration of the for loop
- At the top of the for create a variable that will be pushed after the while if it's necessary
- Add the colisions logic inside of the while
- Return the stack

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```typescript []
function asteroidCollision(asteroids: number[]): number[] {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        let remain = asteroids[i];
        while (stack.length > 0 && stack[stack.length - 1] > 0 && remain < 0) {
            const last = stack.pop();
            if (last > Math.abs(remain)) {
                remain = last;
                break;
            }
            if (remain + last == 0) {
                remain = 0;
                break;
            }
        }
        if (remain) stack.push(remain);
    }
    return stack;
}
```
