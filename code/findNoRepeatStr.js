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

console.log(findNoRepeat('sdasdfa12312'))
