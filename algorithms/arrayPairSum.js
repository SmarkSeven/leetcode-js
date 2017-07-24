/**
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    let sum = 0
    // nums.sort((a, b) => a -b)
    quicksort(nums)
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]
    }
    return sum
}
function quicksort (nums) {
  quicksort_helper(nums, 0, nums.length - 1)
}

function quicksort_helper (nums, start, end) {
  if (start >= end) return
  let pivot = partition(nums, start, end)
  quicksort_helper(nums, start, pivot - 1)
  quicksort_helper(nums, pivot + 1, end)
}

function partition (nums, start, end) {
  let pivot = nums[end]
  let j = start - 1
  for (let i = start; i < end; i++) {
    if (nums[i] <= pivot) {
      j++
      swap(nums, j, i)
    }
  }
  swap(nums, ++j, end)
  return j
}

function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
