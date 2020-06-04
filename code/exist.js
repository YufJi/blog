// 深度优先搜索

const exist = function(board, word) {
  const dfs = (board, word, i, j, k) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) {
      return false;
    }
    if (k === word.length - 1) {
      return true;
    }
    const temp = board[i][j];
    board[i][j] = '/'; // 防止往回走
    const result = dfs(board, word, i - 1, j, k+1) || dfs(board, word, i, j + 1, k+1) || dfs(board, word, i + 1, j, k+1) || dfs(board, word, i, j - 1, k+1);
    board[i][j] = temp;

    return result;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // 一定要先匹配到了才开始dfs
      if(board[i][j] === word[0]) {
        if(dfs(board, word, i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
};

const board = [
  ['a', 'b', 'c'],
  ['a', 'd', 'c'],
  ['a', 'e', 'c'],
];

const word = 'bde';

console.log(exist(board, word))
