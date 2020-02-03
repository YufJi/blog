# 3. 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: "pwwkew"

输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

```js
const str = "bbtablud"

function lengthOfLongestSubstring(str) {

  let max = 0;
  let startIndex = 0;
  let endIndex = 0;

  while (endIndex < str.length) {
    const code = str[endIndex];

    const n = str.slice(startIndex, endIndex).indexOf(code)

    if (n > -1) {
      startIndex += (n + 1)
    } else {
      max = Math.max(max, endIndex - startIndex + 1)
    }

    endIndex++;
  }
  return max;
}

console.log(lengthOfLongestSubstring(str))
```


总结：

开始时间复杂度高是因为我每次超找到重复的之后，又开始从重复位置继续遍历，所以时间复杂度是大于O(n)

看了题解后，主要思路差别就是，我还特地那个变量来存start end的数据 其实直接通过string.prototype.slice就可以了 ，其他思路一样。
