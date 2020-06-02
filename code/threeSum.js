

const threeSum = (nums) => {
  let result = []
  if (!nums || nums.length < 3) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i+=1) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum < 0) {
        L+=1;
      }
      if (sum > 0) {
        R-=1;
      }
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) {
          L+=1;
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R-=1;
        }
        L+=1;
        R-=1;
      }
    }
  }

  return result;
}

const nums = [-4,-1,-1,0,1,2]


console.log(threeSum(nums))
