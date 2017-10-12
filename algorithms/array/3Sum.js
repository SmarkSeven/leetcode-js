/**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

 function threeSum (nums) {
  let res = []
  if (!nums || nums.length < 3) {
      return res
  }
  nums.sort((a,b) => a - b)
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return res
  }
  for(let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] != nums[i-1])) {
        let l = i + 1, r = nums.length - 1, num = nums[i]
        while (l < r) {
          let sum = num + nums[l] + nums[r]
          console(i, l, r)
          if (sum === 0) {
            res.push([nums[i], nums[l], nums[r]])
            while(l < r && nums[l] === nums[l + 1])
              l++
            while(l < r && nums[r] === nums[r - 1])
              r--
            l++
            r--
          } else if (sum < 0) {
            l++
          } else {
            r--
          }
        }
      }
  }
  return res
 }
