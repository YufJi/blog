# 最小覆盖串

给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

示例：
```
输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
```
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。


```js
const S = 'ab'
const T = 'aa'

function minWindow(s, t) {
  if (s.length === 0 || t.length === 0) return "";
  let tMap = new Map(); // 目标子串t的辅助map，用于记录t中每个字符的出现次数
  // 对tMap进行初始化，记录每一个字符出现的次数
  for (let i = 0; i < t.length; i++) {
      let char = t[i];
      if (tMap.has(char)) {
          tMap.set(char, tMap.get(char) + 1);
      } else {
          tMap.set(char, 1);
      }
  }

  let windowMap = new Map();
  let miniSize = 0

  let L = 0, R = 0;
  let miniLength = -1; // 记录最小长度
  let miniLeft = 0; // 长度最小是左指针下标
  let miniRight = 0; // 长度最小时右指针下标

  while (R < s.length) {
    let char = s[R];
    if (windowMap.has(char)) {
      windowMap.set(char, windowMap.get(char)+1);
    } else {
      windowMap.set(char, 1);
    }

    if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) {
      miniSize++
    }

    while (miniSize === tMap.size) {

      if(miniLength === -1 || R-L+1 < miniLength) {
        miniLength = R-L+1;
        miniLeft = L;
        miniRight = R;
      }

      char = s[L];

      windowMap.set(char, windowMap.get(char)-1);

      if (tMap.has(char) && windowMap.get(char) < tMap.get(char)) {
        miniSize--;
      }
      L++;
    }
    R++;
  }
  return miniLength === -1 ? '' : s.substring(miniLeft, miniRight+1)
}

console.log(minWindow(S, T))
```


总结：

比较是否包含的方式是通过Map来表示window+一个计数变量
