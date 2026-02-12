const mergeAlternately = (word1, word2) => {
    let r = "";
    let k = Math.max(word1.length, word2.length);
    for (let i = 0; i < k; i++) {
        if (word1[i]) r += word1[i];
        if (word2[i]) r += word2[i];
    }
    return r;
};
