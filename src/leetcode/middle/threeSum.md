# 15. 三数之和

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。
```
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

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
