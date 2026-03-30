function findMaxAverage(nums: number[], k: number): number {
    let a = 0,
        maxA,
        n = nums.length;
    for (let i = 0; i < k; i++) {
        a += nums[i];
    }
    maxA = a;
    for (let i = k; i < n; i++) {
        a += nums[i] - nums[i - k];
        maxA = Math.max(maxA, a);
    }

    return maxA / k;
}
