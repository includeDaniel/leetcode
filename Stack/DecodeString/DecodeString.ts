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
