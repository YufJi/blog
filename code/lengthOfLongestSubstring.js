const findNoRepeat = (str) => {
  const arr = [];
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const j = arr.indexOf(element)
    if(j > -1) {
      arr.splice(0, j+1)
    }
    arr.push(element)
    maxLen = Math.max(maxLen, arr.length)
  }
  return maxLen;
}


const lengthOfLongestSubstring = (str = '') => {
  let max = 0, start = 0;

  for (let k = 0; k < str.length; k++) {
    const word = str[k];
    const idx = str.slice(start, k).indexOf(word);
    if (idx > -1) {
      start += idx + 1;
    } else {
      max = Math.max(max, k - start + 1);
    }
  }
  return max;
}

console.time('1')
console.log(findNoRepeat('sdasdfa12312'))
console.timeEnd('1')


console.time('2')
console.log(lengthOfLongestSubstring('sdasdfa12312'))
console.timeEnd('2')