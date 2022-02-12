# 812. 最大三角形面积


给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

示例:
输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出: 2
解释:
这五个点如下图所示。组成的橙色三角形是最大的，面积为2。

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png" />

注意:

3 <= points.length <= 50.
不存在重复的点。
 -50 <= points[i][j] <= 50.
结果误差值在 10^-6 以内都认为是正确答案。



```js
const largestTriangleArea = (points) => {
  if (!points || points.length === 0) {
    return 0;
  }

  let maxArea = 0;

  //三角形面积 = |(x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1)| / 2

  const len = points.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const a = points[i];
        const b = points[j];
        const c = points[k];

        const area = Math.abs(a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - a[1] * b[0] - b[1] * c[0] - c[1] * a[0])

        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }
  return maxArea/2;
}


const points = [[0,0],[0,1],[1,0],[0,2],[2,0]]

console.log(largestTriangleArea(points))


```
