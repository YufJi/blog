
# 452. 用最少数量的箭引爆气球

在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以y坐标并不重要，因此只要知道开始和结束的x坐标就足够了。开始坐标总是小于结束坐标。平面内最多存在104个气球。

一支弓箭可以沿着x轴从不同点完全垂直地射出。在坐标x处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。

Example:
```
输入:
[[10,16], [2,8], [1,6], [7,12]]

输出:
2
```
解释:
对于该样例，我们可以在x = 6（射爆[2,8],[1,6]两个气球）和 x = 11（射爆另外两个气球）。


```js
const P = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]

function findMinArrowShots(points) {
  if (points.length === 0) return 0;

  points = points.sort((a, b) => (a[1] - b[1]));

  let perviousPosition = points[0][1];
  let res = 1;
  let i = 1;
  while (i < points.length) {
    // 前一次射击就干掉当前这个了
    if (points[i][0] <= perviousPosition && perviousPosition <= points[i][1]) {
      i++;
    } else {
      perviousPosition = points[i][1];
      i++;
      res++;
    }
  }
  return res;
}

console.log(findMinArrowShots(P))
```

总结：

还是贪心算法，本题最重要的第一步就是排序，但排序的规则是什么呢？开始我选择按开始排序，然后射击结束位置，这样带来的问题就是可能会出现[[0,3][0,1]]，这样就问题来所以我们应该按结束排序，然后射击结束位置，后面就直接迭代计算就可以了， 抛开排序时间O(n)
