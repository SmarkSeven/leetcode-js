/**
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
**/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let hash = {}
    for (let c of s) {
        if (hash[c])
            hash[c]++
        else 
            hash[c] = 1
    }
    for (let c of t) {
        if (hash[c] === undefined)
            return false
        else if (--hash[c] < 0)
            return false
    }
    return true
};
