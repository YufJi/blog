

const movingCount = (m, n, k) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  const sum = (x) => {
    let count = 0;
    while (x !== 0) {
      count += x%10;
      x = ~~(x/10)
    }

    return count;
  }

  const dfs = (arr, i, j, k) => {
    if (i < 0 || i >= m || j < 0 || j >= n || k < (sum(i) + sum(j)) || arr[i][j]) {
      return 0
    }
    arr[i][j] = true;
    return 1 + dfs(arr, i-1, j, k) + dfs(arr, i, j+1, k) + dfs(arr, i+1, j, k) + dfs(arr, i, j-1, k);
  }

  const arr = Array.from(new Array(m), () => new Array(n).fill(0));

  return dfs(arr, 0, 0, k);
}

const movingCount2 = (m, n, k) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  const sum = (x) => {
    let count = 0;
    while (x !== 0) {
      count += x%10;
      x = ~~(x/10)
    }

    return count;
  }

  const dfs = (arr, i, j, k) => {
    if (i >= m || j >= n || k < (sum(i) + sum(j)) || arr[i][j]) {
      return 0
    }
    arr[i][j] = true;
    return 1 + dfs(arr, i+1, j, k) + dfs(arr, i, j+1, k);
  }

  const arr = Array.from(new Array(m), () => new Array(n).fill(0));

  return dfs(arr, 0, 0, k);
}

console.time('1')
console.log(movingCount(10,20,8))
console.timeEnd('1')

console.time('2')
console.log(movingCount2(10,20,8))
console.timeEnd('2')