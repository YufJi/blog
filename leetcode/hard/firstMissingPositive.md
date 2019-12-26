# 缺失的第一个正数

给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:
```
输入: [1,2,0]
输出: 3
```
示例 2:
```
输入: [3,4,-1,1]
输出: 2
```
示例 3:
```
输入: [7,8,9,11,12]
输出: 1
```
说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

```js
const arr = [3,4,-1,1];

console.log(firstMissingPositive(arr))

function firstMissingPositive(arr) {
  const len = arr.length
  let i = 0;

  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  while (i < len) {
    // 当前数值不在[1, n]区间，移动下标
    if(arr[i] > len || arr[i] < 1) {
      i++;
      continue;
    }
    // 若arr[i] !== arr[arr[i] - 1]，交换下标i与arr[i]-1的值
    if (arr[i] !== arr[arr[i] - 1]) {
      swap(arr, i, arr[i] - 1);
    } else {
      // 若arr[i] === arr[arr[i] - 1]，则移动下标
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element !== i + 1) {
      return i+1;
    }
  }
  return len + 1;
}

```
