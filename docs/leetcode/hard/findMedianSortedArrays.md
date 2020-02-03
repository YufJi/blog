
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
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if (n < m) {
      [nums1, nums2, m, n] = [nums2, nums1, n, m];
  }
  const flag = (m + n)%2 === 0;
  let imin = 0;
  let imax = m;
  let maxLeft, minRight;
  while(imin <= imax) {
      const i = Math.floor((imin + imax)/2);
      const j = flag ? (m+n)/2 - i : (m+n+1)/2 - i;
      if (i < m && nums2[j-1] > nums1[i]) {
          imin = i + 1
      }
      else if (0 < i && nums1[i-1] > nums2[j]) {
          imax = i - 1;
      }
      else {
          if (i === 0) {
              maxLeft = nums2[j-1]
          }
          else if (j === 0) {
              maxLeft = nums1[i-1]
          }
          else {
              maxLeft = Math.max(nums1[i-1], nums2[j-1])
          }

          if (!flag) {
              return maxLeft;
          }

          if (i === m) {
              minRight = nums2[j]
          }
          else if (j === n) {
              minRight = nums1[i]
          }
          else {
              minRight = Math.min(nums1[i], nums2[j])
          }

          return (maxLeft + minRight)/2;
      }
  }
};
```
