/**
 * Given an unsorted array of integers, find the length of longest continuous increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
 * 
 * @param {any} nums 
 * @returns 
 */
function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0
  let cns = 1, res = 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          cns++
          if (cns > res) res = cns
      } else {
          cns = 1
      }
  }
  return res
};