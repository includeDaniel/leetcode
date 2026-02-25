function productExceptSelf(nums: number[]): number[] {
    const { length } = nums;
    const result = new Array(nums.length);

    let prefix = 1;
    for (let i = 0; i < length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}
