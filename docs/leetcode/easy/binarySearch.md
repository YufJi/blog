# 704. 二分查找

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:
```sh
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```
示例 2:
```sh
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

```js

const array = [1,3,5,6,7,8,9,12,23,34,54,76,87,97]
const target = 87

// log2 13

function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (array[low] <= array[high]) {
    let mid = Math.floor(low + (high - low + 1)/2)
    const guess = array[mid]

    if(guess < target) {
      low = mid + 1;
    }
    if(guess === target) {
      return mid
    }
    if (guess > target) {
      high = mid - 1;
    }
  }
  return -1
}

console.log(binarySearch(array, target))
```
