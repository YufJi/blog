
function isValid(str = '') {
  let stack = [];
  const types = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < str.length; i++) {
    if (stack.length && types[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i])
    }
  }

  return stack.length === 0;
}


const str = '({[(]})';

console.log(isValid(str));
