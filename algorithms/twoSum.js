/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    const map = {}
    if (!Array.isArray([]) || nums.length === 0 || typeof target !== 'number') {
            return [];
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        let index = map[complement]
        
        if (index !== undefined) {
            return [index, i]
        }
        
        map[nums[i]] = i
    }
}
