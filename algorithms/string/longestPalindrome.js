/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  if (len === 0 || len === 1) return s
  let start = 0, maxLen = 1
  for (let i = 0; i < len;){
      let j = i ,k = i
      if (len - i <= maxLen / 2) break
      while (k < len - 1 && s[k+1] === s[k]) k++
      i = k + 1
      while (k < len - 1 && j > 0 && s[k+1] === s[j-1]) {
          j--
          k++
      }
      let newLen = k - j + 1 
      if (newLen > maxLen) {
          maxLen = newLen
          start = j
      }
  }
  return s.substr(start, maxLen)
};
