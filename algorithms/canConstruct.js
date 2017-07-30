/**
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
**/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    // let demand = {}, inventory = {}
    // for (let c of ransomNote) {
    //     if (demand[c]) 
    //         demand[c]++
    //     else 
    //         demand[c] = 1
    // }
    // for (let c of magazine) {
    //     if (inventory[c]) 
    //         inventory[c]++
    //     else 
    //         inventory[c] = 1
    // }
    // for (let c in demand) {
    //     if (inventory[c] === undefined ||inventory[c] < demand[c]) {
    //         return false
    //     }
    // }
    // return true
    
    let inventory = new Array(26).fill(0)
    
    for (let c of magazine) {
        inventory[c.codePointAt() - 97]++
    }
    
    for (let c of ransomNote) {
        if (--inventory[c.codePointAt() - 97] < 0)
            return false
    }
    return true
};

