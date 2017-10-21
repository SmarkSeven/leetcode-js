/**
 * 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
 */

 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let subs = s.split(' ')
  for (let i = 0; i < subs.length; i++) {
      let j = 0, k = subs[i].length - 1
      let arr = subs[i].split('')
      while (j < k) {
          let temp = arr[j]
          arr[j] = arr[k]
          arr[k] = temp
          j++
          k--
      }
      subs[i] = arr.join('')
  }
  return subs.join(' ')
};
