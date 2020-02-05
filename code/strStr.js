

function strStr(haystack = '', needle = '') {
  if (needle.length > haystack.length) return -1;
  if (needle.length === '') return 0;
  // for (let i = 0; i < (haystack.length - needle.length + 1); i++) {
  //   if (haystack.slice(i, i+needle.length) === needle) {
  //     return i;
  //   }
  // }

  let indexi, indexj;
  for (let i = 0; i < (haystack.length - needle.length + 1); i++) {
    indexi = i, indexj = 0;
    while(haystack[indexi] === needle[indexj] && indexj < needle.length) {
      indexi++;
      indexj++;
    }

    if (indexj === needle.length) return i;
  }

  return -1;
}

console.log(strStr('hello', 'll'))