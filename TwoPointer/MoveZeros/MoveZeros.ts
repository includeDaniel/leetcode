function moveZeroes(nums: number[]): any {
    let l = 0,
        r = 0;
    while (r < nums.length) {
        let temp;
        if (nums[r] != 0) {
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
        r++;
    }
}
