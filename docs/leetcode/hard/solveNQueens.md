 
# N皇后

n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

<img src="../assets/8-queens.png">

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:
```
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```

```js
function solveNQueens(n) {
  let result = [];

  function backTrack(i, cur = []) {
    if (i === n) {
      result.push(cur.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
    }
    let j = 0;
    while (j < n) {
      if (!cur.some((col, row) => col === j || j - col === i - row || j - col === row - i)) {
        backTrack(i + 1, [...cur, j]);
      }
      j++;
    }
  }
  backTrack(0, []);
  return result;
}

console.log(solveNQueens(4))
```

总结：

看了题目tag为回溯算法后，大体就知道了解题思路，看下面最开始的提交，虽然通过了，但是函数写的罗里吧嗦，而且没有很好的应用Array自身的一些过滤方法，而且还存在了很多无用参数，导致性能没有最佳，👇为最开始的shi~~ 

```js
var solveNQueens = function(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Array.from({length: n}, (v, k) => k)
  }

  if (arr.length === 0) {
    return arr;
  }

  let result = [];

  function backTrack(list, cur = [], index) {
    // 第一个参数有什么屁用？？？？

    // 下面这部分为什么 没有想到用some 然后取反
    // 等等
    let nogood = [];
    for (let y = 0; y < cur.length; y++) {
      const x = cur[y];
      nogood.push(x)
      nogood.push(index-y+x);
      nogood.push(-1*index + y + x)
    }

    let j = 0;
    while (j < n) {
      if (!nogood.includes(list[j])) {
        if (index === n-1) {
          result.push([...cur, list[j]].map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        } else {
          backTrack(arr[index+1], [...cur, list[j]], index+1);
        }
      }
      j++;
    }
  }
  backTrack(arr[0], [], 0);
  return result;
};
```