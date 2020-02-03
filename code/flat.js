const arr = [1,2,[3,4, [5,6,7], 8], 9, 10]

function flat(array, num = 1) {
  return num > 0 ? array.reduce((pre, cur) => {
    return Object.prototype.toString.call(cur) === '[object Array]' ? pre.concat(flat(cur, num-1)) : pre.concat(cur)
  }, []) : array;
}

console.log(flat(arr, 1))

