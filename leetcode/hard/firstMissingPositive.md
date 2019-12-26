# 缺失的第一个正数

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
