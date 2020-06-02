

const replaceSpace = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += '%20'
    } else {
      result += str[i]
    }
  }
  return result;
}


console.log(replaceSpace("We are happy."))
