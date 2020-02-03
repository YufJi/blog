
function longestCommonPrefix(strs) {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];

  let index = 0, prefix = '';
  while (condition(strs, index)) {
    prefix += strs[0][index];
    index+=1;
  }

  return prefix;
}

function condition(strs = [], index) {
  let flag = true;
  let str = null;
  for (let i = 0; i < strs.length; i+=1) {
    if (strs[i].length - 1 < index || strs[i] === '') {
      flag = false;
      break;
    } else if (str === null) {
      str = strs[i][index]
    } else if (str !== strs[i][index]) {
      flag = false;
      break;
    }
  }
  return flag;
}


// function longestCommonPrefix(strs = []) {
//   let prefix = strs[0] ? strs[0] : '';
//   for (let i = 1; i < strs.length; i++) {
//     let reg = new RegExp('^' + prefix);
//     while (!reg.test(strs[i]) && prefix.length) {
//       prefix = prefix.slice(0, prefix.length - 1);
//       reg = new RegExp('^' + prefix);
//     }
//   }
//   return prefix;
// }

const strs = ["c","c","c"]

console.log(longestCommonPrefix(strs))
