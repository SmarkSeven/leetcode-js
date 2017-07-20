/**
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
**/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    let result = new Array(rowIndex + 1).fill(0)
    result[0] = 1
    for(let i=1; i<rowIndex+1; i++)
      for(let j=i; j>=1; j--)
         result[j] += result[j-1];
    return result;

