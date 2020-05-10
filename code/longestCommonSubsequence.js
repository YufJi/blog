

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const LCS = function longestCommonSubsequence(text1, text2) {
  const col = text1.length;
  const row = text2.length;
  const dp = Array.from(new Array(col+1), () => new Array(row+1).fill(0));

  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= row; j++) {
      if(text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[col][row];
}

const text1 = 'xhqqw';
const text2 = 'jyqwf';

console.log(LCS(text1, text2))