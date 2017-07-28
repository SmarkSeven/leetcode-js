/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
**/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let hash = {
        '(': ')',
        '{': '}',
        '[': ']'
    },
    stack = []
    
    for (let c of s) {
        if (c === '(') {
            stack.push(')')
        } else if (c === '[') {
            stack.push(']')
        } else if (c === '{') {
            stack.push('}')
        } else if (stack.length === 0 || stack.pop() !== c) {
            
            return false
        }
    }
    return stack.length === 0
};
