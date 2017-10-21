/**
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let count = 0, i = 0, j = s.length - 1
  while (i < j) {
      if (s[i] !== s[j]) {
        return isPalindromic(s, i, j - 1) || isPalindromic(s, i + 1, j)
      } 
      i++
      j--
  }
  return true
};


function isPalindromic (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false
    start++
    end--
  }
  return true
}
