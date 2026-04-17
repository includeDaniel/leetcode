function longestSubarray(nums: number[]): number {
    let l = 0,
        r = 0,
        maxL = 0,
        z = 0,
        zPosition = 0;
    while (r < nums.length) {
        if (nums[r] == 0) {
            z++;
            if (z > 1) {
                l = zPosition + 1;
                z--;
            }
            zPosition = r;
        }
        maxL = Math.max(maxL, r - l);
        r++;
    }

    return maxL;
}
