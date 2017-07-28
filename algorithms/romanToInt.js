/**
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
**/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let hash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = hash[s[s.length - 1]]
    for (let i = s.length - 2; i >= 0; i--) {
        if (hash[s[i]] < hash[s[i + 1]]) {
            sum -= hash[s[i]]
        } else {
            sum += hash[s[i]]
        }
    }
    return sum
}
