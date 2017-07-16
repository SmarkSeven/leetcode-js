// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return 0
    
    if (nums.length === 1) return 1
    
    let count = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[count]) {
            nums[++count] = nums[j]
        }
    }
    return count + 1
};
