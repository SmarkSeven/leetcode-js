/**
You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
**/

/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function(s) {
    let countA = 0, countL = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            countA++
            if (countA > 1) {
                return false
            }
            countL = 0
        } else if (s[i] === 'L') {
            countL++
            if (countL > 2) {
                return false
            }
        } else {
            countL = 0
        }
    }
    return true
};
