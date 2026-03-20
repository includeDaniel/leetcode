function maxOperations(nums: number[], k: number): number {
    let count = 0,
        l = 0,
        r = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (l < r) {
        let s = nums[l] + nums[r];
        if (s == k) {
            l++;
            r--;
            count++;
        } else if (s < k) {
            l++;
        } else {
            r--;
        }
    }
    return count;
}
