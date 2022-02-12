
# 28. 实现 strStr()

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
```
输入: haystack = "hello", needle = "ll"
输出: 2
```
示例 2:
```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

解法一：
slideWindow

```js
function strStr(haystack = '', needle = '') {
  if (needle.length > haystack.length) return -1;
  if (needle.length === '') return 0;

  for (let i = 0; i < (haystack.length - needle.length + 1); i++) {
    if (haystack.slice(i, i+needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

console.log(strStr('hello', 'll'))

```

解法二：
不使用slice方法，通过迭代完成，感觉效率不太好，内存多。
```js

function strStr(haystack = '', needle = '') {
  if (needle.length > haystack.length) return -1;
  if (needle.length === '') return 0;

  let indexi, indexj;
  for (let i = 0; i < (haystack.length - needle.length + 1); i++) {
    indexi = i, indexj = 0;
    while(haystack[indexi] === needle[indexj] && indexj < needle.length) {
      indexi++;
      indexj++;
    }

    if (indexj === needle.length) return i;
  }

  return -1;
}

console.log(strStr('hello', 'll'))

```

