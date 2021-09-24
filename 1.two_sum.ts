function twoSum(nums: number[], target: number): number[] {

    for (let index1 = 0; index1 < nums.length; index1++) {
        const num1 = nums[index1];

        const index2 = nums.findIndex(num => num == target - num1);

        if (index2 >= 0 && index2 != index1) {
            return [index1, index2];
        }
    }

    return [];

};
