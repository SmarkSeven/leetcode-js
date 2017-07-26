/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
**/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
 let ans = 0, left = 0, right = height.length - 1, left_max = 0, right_max = 0
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] > left_max ? (left_max = height[left]) : (ans += left_max - height[left])
            left++
        } else {
            height[right] > right_max ? (right_max = height[right]) : (ans += right_max - height[right])
            right--
        }
    }
    return ans
};
