
// 面试题11. 旋转数组的最小数字

const minArray = (numbers) => {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    const mid = (low + high) >> 1;
    if(numbers[mid] > numbers[high]) {
      low = mid + 1;
    } else if (numbers[mid] < numbers[high]) {
      high = mid;
    } else {
      high-=1;
    }
  }

  return numbers[low];
}
