function isSubsequence(s: string, t: string): boolean {
    let p = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[p] === t[i]) p++;
    }
    if (p === s.length) return true;
    return false;
}
