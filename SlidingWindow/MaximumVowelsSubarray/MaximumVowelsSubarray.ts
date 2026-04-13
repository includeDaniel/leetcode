function maxVowels(s: string, k: number): number {
    const set = new Set(["a", "e", "i", "o", "u"]);
    let v = 0;
    for (let i = 0; i < k; i++) {
        if (set.has(s[i])) v++;
    }
    let maxV = v;
    for (let i = k; i < s.length; i++) {
        if (set.has(s[i])) v++;
        if (set.has(s[i - k])) v--;
        maxV = Math.max(maxV, v);
    }
    return maxV;
}
