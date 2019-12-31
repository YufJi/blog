
# 组合

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  if (n < k || n === 0) return [];

  if (k === 1) {
    for (let i = 1; i < n+1; i++) {
      res.push([i]);
    }
    return res;
  }

  const array = Array.from({ length: n }, (v, k) => k+1);

  if (n === k) return [array];

  function backTrack(recived, could) {
    if (could.length === k) {
      res.push(could.slice(0));
    }

    for (let i = recived; i < n+1; i++) {
      could.push(i);
      could.length < k+1 && backTrack(i+1, could.slice(0));
      could.pop();
    }
  }

  backTrack(1, [])

  return res;
};

console.log(combine(2, 2))

```

总结：

回溯算法， 往往配合递归实现，将当前值带到下一次计算中；
先枚举出特殊情况，本题的要点是开始值可以是数组中的任意一个， 所以采用迭代包裹着每一次回溯；
