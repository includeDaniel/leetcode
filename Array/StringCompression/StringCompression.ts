function compress(chars: string[]): number {
    let i = 0;
    let write = 0;
    while (i < chars.length) {
        let curr = chars[i];
        let count = 0;
        while (i < chars.length && chars[i] == curr) {
            i++;
            count++;
        }
        chars[write] = curr;
        write++;
        if (count > 1) {
            for (let digit of count.toString().split("")) {
                chars[write] = digit;
                write++;
            }
        }
    }
    return write;
}
