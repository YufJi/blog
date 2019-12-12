
const array = [1,3,5,6,7,8,9,12,23,34,54,76,87,97]
const target = 87

// log2 13

function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (array[low] <= array[high]) {
    let mid = Math.floor(low + (high - low + 1)/2)
    const guess = array[mid]
   
    if(guess < target) {
      low = mid + 1;
    }
    if(guess === target) {
      return mid
    } 
    if (guess > target) {
      high = mid - 1;
    }
  }
  return -1
}

console.log(binarySearch(array, target))