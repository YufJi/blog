# 63. 不同路径 II

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

<img src="../assets/robot_maze.png" />

网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:
```
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
```
解释:
```
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```


```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    for(let i=0; i < n; i++) {
        for(let j=0; j < m; j++) {
            if (i === 0 && j === 0) {
                obstacleGrid[i][j] = 1;
            } else {
                const isBlocked = !!obstacleGrid[i][j];
                if (isBlocked) {
                    obstacleGrid[i][j] = 0;
                } else {
                    if (i>0) {
                        obstacleGrid[i][j] += obstacleGrid[i-1][j]
                    }
                    if(j>0) {
                        obstacleGrid[i][j] += obstacleGrid[i][j-1]
                    }
                }
            }

        }
    }
    return obstacleGrid[n-1][m-1];
};
```