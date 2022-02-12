# 50. Pow(x, n)

实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:
```
输入: 2.00000, 10
输出: 1024.00000
```
示例 2:
```
输入: 2.10000, 3
输出: 9.26100
```
示例 3:
```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const myPow1 = function(x, n) { // 递归
  function quickMul(N) {
    if (N === 0) return 1;
    const half = quickMul(Math.floor(N/2));
    return N%2 === 0 ? half * half : half * half * x;
  }

  return n < 0 ? 1/quickMul(-1 * n) : quickMul(n);
};

const myPow2 = function(x, n) { // 迭代
  function quickMul(N) {
    if (N === 0) return 1;
    let result = 1;
    let temp = x;
    while (N > 0) {
      if (N%2 === 1) {
        result *= temp;
      }
      temp *= temp;
      N = Math.floor(N/2)
    }
    return result;
  }

  return n < 0 ? 1/quickMul(-1 * n) : quickMul(n);
}


```
