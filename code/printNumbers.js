

const printNumbers = (n) => {
  let max = Math.pow(10, n) - 1;
  let res = [];
  for (let i = 1; i <= max; i++) {
    res.push(i)
  }
  return res;
}
