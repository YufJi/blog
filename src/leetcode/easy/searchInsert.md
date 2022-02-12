# 35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
```
输入: [1,3,5,6], 5
输出: 2
```
示例 2:
```
输入: [1,3,5,6], 2
输出: 1
```
示例 3:
```
输入: [1,3,5,6], 7
输出: 4
```
示例 4:
```
输入: [1,3,5,6], 0
输出: 0
```

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    if (target < nums[low]) {
      return low;
    }
    if (target > nums[high]) {
      return high + 1;
    }

    while(low <= high) {
      const mid = Math.floor(low + (high - low + 1)/2);
      const guess = nums[mid]

      if (guess === target) {
        return mid;
      }
      if (guess < target) {

        low = mid + 1;
      }
      if (guess > target) {

        high = mid - 1;
      }
    }
    return low;
};
```
