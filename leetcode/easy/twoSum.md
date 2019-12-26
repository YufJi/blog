# 两数之和

```js

const arr = [1,2,3,4,11,14,7,90]
const target = 9

console.log(twoSum(arr, target))

function twoSum(arr, target) {
  const record = {}
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const rest = target - element;
    if (record[rest]) {
      return ([record[rest], i])
    }
    record[element] = i;
  }
}

```
