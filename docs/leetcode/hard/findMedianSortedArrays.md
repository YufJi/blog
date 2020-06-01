
# 4. 寻找两个有序数组的中位数

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:
```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```
示例 2:
```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1 = [], nums2 = []) => {
  let m = nums1.length;
  let n = nums2.length;
  if (m > n) {
    [nums1, m, nums2, n] = [nums2, n, nums1, m];
  }

  const totalCount = Math.floor((m + n + 1)/2);
  
  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = totalCount - i;

    const num1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const num1RightMin = i === m ? Infinity : nums1[i];
    const num2leftMax = j === 0 ? -Infinity : nums2[j - 1];
    const num2RightMin = j === n ? Infinity : nums2[j];

    if (num1LeftMax <= num2RightMin && num2leftMax <= num1RightMin) {
      return (m + n)%2 === 1 ? Math.max(num1LeftMax, num2leftMax) : (Math.max(num1LeftMax, num2leftMax) + Math.min(num1RightMin, num2RightMin))/2;
    } else if (num1LeftMax > num2RightMin) { // [left, i-1]
      right = i - 1;
    } else { // [i+1, right]
      left = i + 1;
    }
  }
}
```
