# Approach

Using a stack to resolve the square brackets from inside to outside

- iterate in the given string
- if the char isn't a close square bracket just push to the stack
- if it's we need to capture the intire lexeme that are inside of the bracket, so using the pop method until we found a open - - - square bracket
- remove the open square bracket
- after that we need to storage the multiplication number
- then push to the stack the lexeme times multiplication number
- in the end just make a join of the stack to transform in a string

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```typescript []
function decodeString(s: string): string {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != "]") {
            stack.push(s[i]);
        } else {
            let curr = "";
            while (stack.length > 0 && stack[stack.length - 1] != "[") {
                curr = stack.pop() + curr;
            }
            stack.pop();

            let num = "";
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            stack.push(curr.repeat(+num));
        }
    }
    return stack.join("");
}
```
