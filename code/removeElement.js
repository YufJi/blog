
// 移除指定元素，返回新的长度

function removeElement(nums = [], val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  console.log(nums, 'nums');
  return i; // 如果只需要返回长度
  // return nums.slice(0, 5) // 如果需要返回新数组
}

const nums = [0,1,2,2,3,0,4,2];

console.log(removeElement(nums, 2))
