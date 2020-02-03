
# 22. 括号生成

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
```
例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

```js
function generateParenthesis(n) {

  let res = [];
  function backTrack(cur = '', open, close) {
    if (cur.length === 2*n) {
      res.push(cur)
    } else {
      if (open < n) {
        backTrack(cur+"(", open+1, close);
      }

      if (close < open) {
        backTrack(cur+")", open, close+1);
      }
    }
  }

  backTrack('', 0, 0)
  return res
}

console.log(generateParenthesis(3))
```

总结：

回溯算法，写这道题的时候回溯算法使用正确，但是对字符串传的拼接技巧上，出现了错误的设计，我采用迭代字符串然后插入，这样就导致了结果有重复！！
题解里对字符串拼接，使用的有点类似括号闭合的技巧，get！
