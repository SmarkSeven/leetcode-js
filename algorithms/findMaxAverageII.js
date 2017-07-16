/**
Given an array consisting of n integers, find the contiguous subarray whose length is greater than or equal to k that has the maximum average value. And you need to output the maximum average value.
**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
    function check (nums, mid, k) {
        let sum = 0, prev = 0, min_sum = 0
        for (let i = 0; i < k; i++) {
            sum += nums[i] - mid
        }
        if (sum >= 0) {
            return true
        }
        for (let i = k; i < nums.length; i++) {
            sum += nums[i] - mid;
            prev += nums[i - k] - mid;
            min_sum = Math.min(prev, min_sum);
            if (sum >= min_sum)
                return true;
        }
        return false
    }
    
    let max = -10000, min = 10000
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
    }
    
    let prev_mid = max, error = max
    while (error > 0.00001) {
        let mid = (max + min) / 2
        if (check(nums, mid, k)) {
            min = mid
        } else {
            max = mid   
        }   
        error = Math.abs(prev_mid - mid)
        prev_mid = mid
    }
    return min
}
