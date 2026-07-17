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
