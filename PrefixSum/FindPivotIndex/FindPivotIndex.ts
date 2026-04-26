function pivotIndex(nums: number[]): number {
    const tSum = nums.reduce((acc, curr) => acc + curr, 0);
    let lSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const rSum = tSum - lSum - nums[i];
        if (rSum === lSum) return i;
        lSum += nums[i];
    }
    return -1;
}
