/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
**/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
//     if (s.length === 0) {
//         return 0
//     }
    
//     let count = 0, pre = 0
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             count++
//         } else {
//             if (count !== 0) {
//              pre = count 
//              count = 0
//             }
//         }
//     }
//     return count === 0 ? pre : count
    let count = 0, i = s.length
    while (i) {
        if (s[--i] === ' ') {
            if (count === 0)
                continue
            else
                break
        }
        count++
    }
    return count
};
