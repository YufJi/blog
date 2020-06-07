

const hammingWeight1 = (n) => {
  let count = 0;
  while (n !== 0) {
    count+=1;
    n = n & n - 1;
  }
  return count;
}


// 效率不如上一种
const hammingWeight2 = (n) => {
  let count = 0;
  while (n !== 0) {
    if(n & 1) {
      count += 1;
    }
    n = n >>> 1;
  }
  return count;
}

console.time(1)
console.log(hammingWeight1(11111111111111111111111111111101));
console.timeEnd(1)

console.time(2)
console.log(hammingWeight2(11111111111111111111111111111101));
console.timeEnd(2)