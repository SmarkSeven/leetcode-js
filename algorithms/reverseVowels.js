/**

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
**/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        chars = s.split('')
        i = 0, j = s.length - 1

    while (i < j) {
        if (vowels.has(chars[i])) {
            if (vowels.has(chars[j])) {
                [chars[i], chars[j]] = [chars[j], chars[i]]
                i++
                j--
            } else {
                j--
            }
            continue
        }
        if (vowels.has(chars[j])) {
            if (vowels.has(chars[i])) {
                [chars[i], chars[j]] = [chars[j], chars[i]]
                i++
                j--
                
            } else {
                i++
            }
            continue
        }      
        i++
        j--
    }
    return chars.join('')
};

const reverseVowels2 = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        arr = [], res = ''
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            arr.push(s[i])
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            res += arr.pop()
        } else {
            res += s[i]
        }
    }
    return res
}
