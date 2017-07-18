/**
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let  n = nums.length
    for (let i = 0; i < nums.length; i++) {
        n += i - nums[i]
    }
    return n
};
