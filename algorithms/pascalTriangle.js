/**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
**/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    let result = []
    if (typeof numRows !== 'number') return result
    for (let i = 0; i < numRows; i++) {
        let row = [1]
        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j -1] + result[i - 1][j])
        }
        if (i > 0) {
            row.push(1)
        }
        result.push(row)
    }
    return result
}
