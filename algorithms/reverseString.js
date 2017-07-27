/**
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
**/

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
    // let chars = s.split(''), i = 0, j = s.length - 1
    // while (i < j) {
    //     let temp = chars[i]
    //     chars[i] = chars[j]
    //     chars[j] = temp
    //     i++
    //     j--
    // }
    // return chars.join('')
    
    let rev = ''
    for (let i = s.length - 1; i >=0; i--) {
        rev += s[i]
    }
    return rev
};

