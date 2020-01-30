
# 最长回文字

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```
示例 2：
```
输入: "cbbd"
输出: "bb"
```

```js
function longestPalindrome(s = '') { 
  if (!s || !s.trim()) return '';
  if (s.length === 1) return s;

  let start = end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i+1);
    const len = Math.max(len1, len2)
    if (len > end - start + 1) {
      const half = len % 2 === 0 ? (len-2)/2 : (len-1)/2;
      end = len % 2 === 0 ? i+1 : i;
      start = i - half;
      end += half;
    }
  }
  function expandAroundCenter(s, left, right) {
      let L = left, R = right;
      while (L >= 0 && R < s.length && s[L] === s[R]) {
          L--;
          R++;
      }
      return R - L - 1;
  }

  return s.substring(start, end+1);
}

const str = "babad";

console.log(longestPalindrome(str))
```