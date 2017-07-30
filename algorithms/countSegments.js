/**
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
**/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i]== ' ') {
            continue
        } else if (i === 0 || s[i - 1] === ' '){
            count++
        }
    }
    return count
};
