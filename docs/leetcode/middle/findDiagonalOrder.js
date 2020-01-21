
function findDiagonalOrder(matrix = []) {
  const rows = matrix.length;
  const cols = matrix[0] ? matrix[0].length : 0;
  let result = [];
  if (rows === 0 || cols === 0) {
    return result;
  }


  let x = 0, y = 0;
  let direction = true;

  while((x < cols || y < rows)) {
    result.push(matrix[y][x])

    if (direction) {
      if (x+1 > cols - 1) {
        direction = !direction;
        y++;
      } else if (y-1 < 0) {
        direction = !direction;
        x++
      } else {
        x++;
        y--;
      }
    } else {
      if (y+1 > rows - 1) {
        direction = !direction;
        x++
      } else if (x-1 < 0) {
        direction = !direction;
        y++;
      } else {
        x--;
        y++
      }
    }
  }

  return result;
}

const matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

console.log(findDiagonalOrder(matrix))
