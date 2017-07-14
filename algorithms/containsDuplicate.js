ram {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return true
        }
        
        map[nums[i]] = 1
    }
    return false
};
