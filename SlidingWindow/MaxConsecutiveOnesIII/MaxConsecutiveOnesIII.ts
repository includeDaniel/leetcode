function longestOnes(nums: number[], k: number): number {
    let l = 0,
        r = 0,
        maxL = 0,
        z = 0;
    while (r < nums.length) {
        if (nums[r] == 0) z++;
        if (z > k) {
            if (nums[l] == 0) {
                z--;
            }
            l++;
        }
        if (z <= k) {
            maxL = Math.max(maxL, r - l + 1);
        }
        r++;
    }

    return maxL;
}
