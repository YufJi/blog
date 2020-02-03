# 14. 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:
```
输入: ["flower","flow","flight"]
输出: "fl"
```
示例 2:
```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```
说明:

所有输入只包含小写字母 a-z 。


我的最初解法
```js

function longestCommonPrefix(strs) {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];

  let index = 0, prefix = '';
  while (condition(strs, index)) {
    prefix += strs[0][index];
    index+=1;
  }

  return prefix;
}

function condition(strs = [], index) {
  let flag = true;
  let str = null;
  for (let i = 0; i < strs.length; i+=1) {
    if (strs[i].length - 1 < index || strs[i] === '') {
      flag = false;
      break;
    } else if (str === null) {
      str = strs[i][index]
    } else if (str !== strs[i][index]) {
      flag = false;
      break;
    }
  }
  return flag;
}

```


最优解
```js
function longestCommonPrefix(strs = []) {
  let prefix = strs[0] ? strs[0] : '';
  for (let i = 1; i < strs.length; i++) {
    let reg = new RegExp('^' + prefix);
    while (!reg.test(strs[i]) && prefix.length) {
      prefix = prefix.slice(0, prefix.length - 1);
      reg = new RegExp('^' + prefix);
    }
  }
  return prefix;
}
```