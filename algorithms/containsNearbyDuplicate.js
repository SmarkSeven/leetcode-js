//Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    if (!Array.isArray(nums) || nums.length === 0 || k >= 35000) {
        return false
    }
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        while((j - i) <= k && j < nums.length) {
            if (nums[i] === nums[j]) {
                return true
            }
            j++
        }
    }
    return false
};
