function reverseVowels(s: string): string {
    let string = s.split(""), v = [], p = []
    for(let i = 0; i < string.length; i++) {
        const l = string[i].toLowerCase()
        if( l == "a" || l == "e" || l == "i" || l == "o" || l == "u" ) {
            v.push(string[i])
            p.push(i)
        }
    }
    v = v.reverse()
    for(let i = 0; i < p.length; i++) {
        string[p[i]] = v[i]
    }
    return string.join("")
};