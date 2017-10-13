/**
 * iven a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.

 */

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if ((board[i][j] === word[0]) && checkExist(board, i, j, word, 0)) return true
      }
  }
  return false
}

function checkExist(board, i, j, word, k) {
  if (k === word.length) return true
  if (i>=0 && i < board.length && j >=0 && j < board[i].length && board[i][j] === word[k]) {
      let temp = board[i][j]
      board[i][j] = ''
      let res = checkExist(board, i + 1, j, word, k + 1) || checkExist(board, i - 1, j, word, k + 1) || checkExist(board, i, j + 1, word, k + 1) || checkExist(board, i, j - 1, word, k + 1)
      board[i][j] = temp
      return res
  }
  return false
}
