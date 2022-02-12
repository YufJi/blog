# 面试题13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：
```
输入：m = 2, n = 3, k = 1
输出：3
```
示例 2：
```
输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20
```

```js
const movingCount = (m, n, k) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  const sums = (x) => {
    let count = 0;
    while(x !== 0) {
      count += x%10;
      x = ~~(x/10);
    }
    return count;
  }

  const dfs = (arr, i, j, k) => {
    if (i >= m || j >= n || arr[i][j]) {
      return 0;
    }
    arr[i][j] = true;
    return 1 + dfs(arr, i, j+1, k) + dfs(arr, i+1, j, k);
  }

  const array = Array.from({ length: m }, () => new Array(n).fill(0));
  return dfs(array, 0, 0, k)
}
```