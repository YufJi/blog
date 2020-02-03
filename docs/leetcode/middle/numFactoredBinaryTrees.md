
# 823. 带因子的二叉树

给出一个含有不重复整数元素的数组，每个整数均大于 1。

我们用这些整数来构建二叉树，每个整数可以使用任意次数。

其中：每个非叶结点的值应等于它的两个子结点的值的乘积。

满足条件的二叉树一共有多少个？返回的结果应模除 10 ** 9 + 7。

 

示例 1:
```
输入: A = [2, 4]
输出: 3
解释: 我们可以得到这些二叉树: [2], [4], [4, 2, 2]
```
示例 2:
```
输入: A = [2, 4, 5, 10]
输出: 7
解释: 我们可以得到这些二叉树: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].

```

提示:

1 <= A.length <= 1000.

2 <= A[i] <= 10 ^ 9.


```js
/**
 * @param {number[]} array
 * @return {number}
 */
var numFactoredBinaryTrees = function(array) {
  const MOD = Math.pow(10, 9) + 7;
  const len = array.length;
  array = array.sort((a, b) => a - b);
  const dp = Array.from({ length: len }, () => 1);
  const map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(array[i], i)
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] % array[j] == 0) {  // A[j] is left child
        const right = array[i] / array[j];
        if (map.has(right)) {
          dp[i] = (dp[i] + dp[j] * dp[map.get(right)]) % MOD;
        }
      }
    }
  }

  console.log(dp, 'dp')
  let sum = dp.reduce((pre, cur) => {
    return pre + cur;
  }, 0)
  return sum % MOD;
};


const array = [2,3,4,5,6,7,8,16,17]

console.log(numFactoredBinaryTrees(array))

```



总结：

这道题还是很难，动态规划的思想还是没有很懂，如果理解了动态规划的话，基本很快就写出来了。
