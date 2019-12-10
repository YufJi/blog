```js
const arr = [23,1,34,5,9]

console.log(firstMissingPositive(arr))

function firstMissingPositive(arr) {
  const len = arr.length

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0 && element <= len && i !== element-1) {
      const temp = arr[element-1]
      arr[element-1] = element
      arr[i] = temp
    }
  }
  let result
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element-1 !== i) {
      result = i + 1
      break;
    }
  }
  return result;
}

```
