const gcdOfStrings = (str1, str2) => {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    if (!(str1 + str2 == str2 + str1)) return "";
    let l = gcd(str1.length, str2.length);
    return str1.substring(0, l);
};
