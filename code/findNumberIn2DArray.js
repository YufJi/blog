

const findNumberIn2DArray = (matrix, target) => {
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[i].length) {
    const cur = matrix[i][j];
    if (cur > target) {
      i-=1;
    } else if (cur < target) {
      j+=1;
    } else {
      return true;
    }
  }
  return false;
}
