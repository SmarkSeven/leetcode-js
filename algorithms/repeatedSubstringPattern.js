/**

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
**/

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let sub
    for (let i = 1; i <= s.length / 2; i++) {
        if(s.length % i !== 0){
          continue;
        }
        let sub = s.substring(0, i)
        for (let j = i; j <= s.length - sub.length; j += sub.length) {
            if (sub !== s.substring(j, j + sub.length))
                break
            if (j === s.length - sub.length)
                return true
        }
    }
    return false
};
