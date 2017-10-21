/**
 * Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let times = Math.ceil(B.length / A.length)
  for (let i = 0; i < 2; i++) {
      if (A.repeat(times + i).indexOf(B) >= 0 ) return times + i
  }
  return -1
};
