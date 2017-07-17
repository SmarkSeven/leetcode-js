/**
Given an integer array, find three numbers whose product is maximum and output the maximum product.
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
    let max1 = -100000,  max2 = max1, max3 = max2, min1 = 100000, min2 = min1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= min1) {
            min2 = min1
            min1 = nums[i]
        } else if (nums[i] <= min2) {
            min2 = nums[i]
        }
        if (nums[i] >= max1) {            // n is greater than max1, max2 and max3
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] >= max2) {     // n lies betweeen max1 and max2
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] >= max3) {     // n lies betwen max2 and max3
            max3 = nums[i];
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3)
};
