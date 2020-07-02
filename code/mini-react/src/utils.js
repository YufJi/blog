


export const merge = (a, b) => {
  const o = {};
  for (const i in a) {
    o[i] = a[i]
  }
  for (const i in b) {
    o[i] = b[i]
  }

  return o;
}
