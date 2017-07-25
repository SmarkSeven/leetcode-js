/**
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].

**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    let sum = 0, count = 0, map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        let n = map.get(sum)
        map.set(sum,  n ? n + 1: 1)
    }
    return count
}
