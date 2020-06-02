

const findRepeatNumber = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (!map[item]) {
      map[item] = true;
    } else {
      return item;
    }
  }
}

const nums = [2, 3, 1, 0, 2, 5, 3]

console.log(findRepeatNumber(nums))
