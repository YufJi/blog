
const search = (nums, target) => {
  nums = nums || [];
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high)/2);
    const guess = nums[mid];
    if (guess > target) {
      high = mid - 1;
    } else if (guess < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}


const searchInsert = (nums, target) => {
  nums = nums || [];
  let low = 0;
  let high = nums.length - 1;
  // 处理边界
  if (target < nums[low]) {
    return low;
  }

  if (target > nums[high]) {
    return high + 1;
  }

  while (low <= high) {
    const mid = Math.floor((low + high)/2);
    const guess = nums[mid];
    if (target > guess) {
      low = mid + 1;
    } else if (target < guess) {
      high = mid - 1
    } else {
      return mid;
    }
  }
  return low;
}


const myPow1 = function(x, n) { // 递归
  function quickMul(N) {
    if (N === 0) return 1;
    const half = quickMul(Math.floor(N/2));
    return N%2 === 0 ? half * half : half * half * x;
  }

  return n < 0 ? 1/quickMul(-1 * n) : quickMul(n);
};

const myPow2 = function(x, n) { // 迭代
  function quickMul(N) {
    if (N === 0) return 1;
    let result = 1;
    let temp = x;
    while (N > 0) {
      if (N%2 === 1) {
        result *= temp;
      }
      temp *= temp;
      N = Math.floor(N/2)
    }
    return result;
  }

  return n < 0 ? 1/quickMul(-1 * n) : quickMul(n);
}


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

