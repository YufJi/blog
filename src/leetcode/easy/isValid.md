# 20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
```
输入: "()"
输出: true
```
示例 2:
```
输入: "()[]{}"
输出: true
```


```js

function isValid(str = '') {
  let stack = [];
  const types = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < str.length; i++) {
    if (stack.length && types[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i])
    }
  }

  return stack.length === 0;
}


const str = '({[(]})';

console.log(isValid(str));
```


总结： 这类问题的思路最快想到录的就是栈 后入先出， 起初遍历用的while发现执行效率太低了，改成for就好了很多了，这块需要查点资料看看。