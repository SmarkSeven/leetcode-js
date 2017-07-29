/**
Write a function to find the longest common prefix string amongst an array of strings.
**/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 0)  return ''
    if (strs.length === 1)  return strs[0]
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (prefix === '')
            return prefix
        let str = strs[i]
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== str[j]) {
                prefix = str.substring(0, j)
                break
            }
        }
        
    }
    return prefix
};
