/**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
**/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  // let arr = []
  // for (let c of s) {
  //     if ((c.codePointAt() >= 65 && c.codePointAt() <= 90) || (c.codePointAt() >= 97 && c.codePointAt() <= 122) || (c.codePointAt() >= 48 && c.codePointAt() <= 57))
  //     arr.push(c.toLowerCase())
  // }
    
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let i = 0, j = s.length - 1
  while (i < j) {
    if (s[i++] !== s[j--])
        return false
  }
    return true
};
