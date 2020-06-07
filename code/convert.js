

const convert = (str, numRows) => {
  if (numRows < 2) {
    return str;
  }

  const res = Array.from({ length: numRows }, () => '');
  let row = 0;
  let direction = -1;

  for (let i = 0; i < str.length; i++) {
    res[row] += str[i];
    if (row === 0 || row === (numRows-1)) {
      direction = -1 * direction;
    }
    row += direction;
  }

  let result = '';
  for (let j = 0; j < res.length; j++) {
    result += res[j]
  }

  return result;
}


console.log(convert('LEETCODEISHIRING', 3));