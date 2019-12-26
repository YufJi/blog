# 三数之和

```js
const nums = [-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]

var threeSum = function(nums) {
  let sum, result = [];
  if(!nums || nums.length < 3) {
    return [];
  }
  nums = nums.sort((a,b) => a-b);
  for (let i = 0; i < nums.length - 2; i++) {
    // 后面肯定大于0
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i-1]) continue;

    let L = i+1, R = nums.length - 1;

    while (L < R) {
      sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L+1]) {
          L+=1
        }
        while (L < R && nums[R] === nums[R-1]) {
          R-=1
        }
        L+=1;
        R-=1;
      } else if (sum < 0) {
        L+=1;
      } else if (sum > 0) {
        R-=1;
      }
    }
  }
  return result;
};

console.log(threeSum(nums))

```
