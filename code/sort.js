
const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
      }
    }
  }
  return numbers;
}

const quickSort = (numbers) => {
  numbers = numbers || [];
  if(!numbers.length) {
    return numbers;
  }

  function sort(arr) {
    if (!arr.length) {
      return arr;
    }
    const base = arr[arr.length - 1];
    let left = [];
    let mid = [base];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] < base) {
        left.push(arr[i])
      }
      if (arr[i] === base) {
        mid.push(arr[i])
      }
      if (arr[i] > base) {
        right.push(arr[i])
      }
    }

    return sort(left).concat(mid, sort(right));
  }

  return sort(numbers)

}

const numbers = [5,7,1,2,3,4]

console.time('bubble')
console.log(bubbleSort(numbers))
console.timeEnd('bubble')

console.time('quick')
console.log(quickSort(numbers))
console.timeEnd('quick')
