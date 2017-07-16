/* Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let maxAverage =  sum / k
    for (let i = 1; i <= nums.length - k; i++) {
        sum += -nums[i - 1] + nums[i - 1 + k]
        maxAverage  = Math.max(sum / k, maxAverage)
    }
    return maxAverage
}
