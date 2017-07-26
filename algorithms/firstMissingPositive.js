/**
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    let temp
    for (let i = 0; i < nums.length; i++)
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]) {
            temp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = temp
        }
    for (let i = 0; i < nums.length; i++)
        if (nums[i] != i + 1)
            return i + 1;
    return nums.length + 1;
};
