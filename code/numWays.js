

const numWays = function(n) {
  const dp = [];
  const m = 1000000007;
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2])%m
  }

  return dp[n]
};
