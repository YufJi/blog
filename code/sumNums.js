

const sumNums1 = function(n) {
  n > 0 && (n += sumNums1(n - 1));

  return n;
};

console.log(sumNums1(8))


// 使用位运算
const sumNums2 = function(n) {
  let sum = 0;
  let A = n;
  let B = n + 1;


}


