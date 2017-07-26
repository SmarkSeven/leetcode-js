/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    let curr = 0, last = 0, res = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > last) {
            last = curr
            res++
        }
        curr = Math.max(curr, nums[i] + i)
    }
    return res
};
