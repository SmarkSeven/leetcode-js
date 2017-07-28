/**

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
**/

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
    let count = 0
    if (word[0].codePointAt() <= 90) 
        count++
    for (let i = 1; i < word.length; i++) {
        if (word[i].codePointAt() <= 90) {
            count++
            if (word[i - 1].codePointAt() > 90) {
                return false
            }
        }
    }
    if (count > 1 && count < word.length) 
        return false
    return true
};

const detectCapitalUse2 = function(word) {
    if (word.toUpperCase() === word || word.toLowerCase() === word) {
        return true
    }
    let first = word.substring(0, 1), rest = word.substring(1, word.length)
    if (first === first.toUpperCase() && rest === rest.toLowerCase()) {
        return true
    }
    return false
}
