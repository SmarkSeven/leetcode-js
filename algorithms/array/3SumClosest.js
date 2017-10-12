/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * @param {any} nums 
 * @param {any} target 
 * @returns 
 */
function threeSumClosest (nums, target) {
  let res = 0
  nums.sort((a,b) => a - b)
  res = nums[0] + nums[1] + nums[2]
  if (res === target) {
      return res
  }
  for(let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] != nums[i-1])) {
        let l = i + 1, r = nums.length - 1 
        while (l < r) {
          let sum = nums[i] + nums[l] + nums[r]
          if (Math.abs(sum - target) < Math.abs(res - target)) {
              res = sum
              if (res === target) return res
          }
          sum > target ? r-- : l++
        }
      }
  }
  return res
 }
