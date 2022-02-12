
# 1094. 拼车

假设你是一位顺风车司机，车上最初有 capacity 个空座位可以用来载客。由于道路的限制，车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向，你可以将其想象为一个向量）。

这儿有一份行程计划表 trips[][]，其中 trips[i] = [num_passengers, start_location, end_location] 包含了你的第 i 次行程信息：

必须接送的乘客数量；
乘客的上车地点；
以及乘客的下车地点。
这些给出的地点位置是从你的 初始 出发位置向前行驶到这些地点所需的距离（它们一定在你的行驶方向上）。

请你根据给出的行程计划表和车子的座位数，来判断你的车是否可以顺利完成接送所用乘客的任务（当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false）。

示例 1：
```
输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
```
示例 2：
```
输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
```
示例 3：
```
输入：trips = [[2,1,5],[3,5,7]], capacity = 3
输出：true
```
示例 4：
```
输入：trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
输出：true
```
```
提示：

你可以假设乘客会自觉遵守 “先下后上” 的良好素质
trips.length <= 1000
trips[i].length == 3
1 <= trips[i][0] <= 100
0 <= trips[i][1] < trips[i][2] <= 1000
1 <= capacity <= 100000
```

```js
function carPooling(trips, capacity) {
  const hashMap = {};
  let start, end;
  for (let i = 0; i < trips.length; i++) {
    const [num, up, down] = trips[i];
    if (!start) {
      start = up;
    } else {
      start = Math.min(start, up);
    }
    if (!end) {
      end = down;
    } else {
      end = Math.max(end, down);
    }

    if (hashMap[up] !== undefined) {
      hashMap[up] -= num;
    } else {
      hashMap[up] = -1 * num;
    }

    if (hashMap[down] !== undefined) {
      hashMap[down] += num;
    } else {
      hashMap[down] = num;
    }
  }

  while (start < end + 1) {
    const count = hashMap[start] || 0;
    capacity = capacity + count;
    if (capacity < 0) {
      return false;
    }
    start++;
  }

  return true;
}


const trips = [
  [3,2,7],
  [12,7,8]
]

console.log(carPooling(trips, 11))
```


总结：

这道题我是一次过的，基本思路就是hashMap存值，然后一次迭代找出每个站点分别上下后的正负值，然后再迭代一次期间 计算同时和capacity比较！ 不难
时间复杂度 最多 O(2n)
