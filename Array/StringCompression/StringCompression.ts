function compress(chars: string[]): number {
    let s = "";
    let temp = "";
    for (let i = 0; i < chars.length; i++) {
        temp += chars[i];
        if (chars[i + 1] != chars[i]) {
            s += temp[0] + (temp.length != 1 ? temp.length : "");
            temp = "";
        }
    }

    s.split("").forEach((c, i) => (chars[i] = c));
    return s.length;
}
