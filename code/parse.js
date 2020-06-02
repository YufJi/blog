

const parse = (caller, value) => {
  value = value.replace(/\[(\d+)\]/, (...args) => {
    return '.' + args[1];
  })

  const callPath = value.split('.')
  for (let i = 0; i < callPath.length; i++) {

    caller = caller[callPath[i]]
  }

  return caller;
}


const obj = {
  a: {
    b: 'b',
  },
  c: [
    {
      d: 'd',
    },
    {
      e: 'e',
    }
  ]
}

console.log(parse(obj, 'a.b')) // 'b'
console.log(parse(obj, 'c.0.d')) // 'd'
console.log(parse(obj, 'c[0].d')) // 'd'
console.log(parse(obj, 'f')) // undefined
