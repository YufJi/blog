function calcCount(input, x) {
  let count = 0;
  let temp

  for (let i = 1; (temp = ~~(input / i)) !== 0; i *= 10) {
    count += ~~(temp / 10) * i;
    const current = temp % 10;

    if (current > x) {
        // 还会出现i次
        count += i;
    } else if (current === x) {
        // (input - temp * i)代表当前位置的低位数字
        count += input - temp * i + 1;
    }
  }

  return count;
}

console.log(calcCount(221, 1));
