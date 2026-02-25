const kidsWithCandies = (
    candies: number[],
    extraCandies: number,
): boolean[] => {
    const m = Math.max(...candies);
    const res = [];
    for (let n of candies) {
        if (n + extraCandies >= m) {
            res.push(true);
            continue;
        }
        res.push(false);
    }
    return res;
};
