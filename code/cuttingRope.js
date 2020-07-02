

const cuttingRope = (n) => {

}

let data = null;
const getSth = (config) => {
  setTimeout(() => {
    if (config.success) {
      config.success(250)
    } else {
      data = 250
    }
  },2000)
}


const wx = {
  getSthSync: function() {
    let finish = false;
    let data = null

    setTimeout(() => {
      data = 250;
      finish = true;
    }, 0)

    console.log('finish')

    return data;
  },
  getSth: (config) => {
    getSth(config);
  }
}

console.log(wx.getSth({
  success(data) {
    console.log(data)
  }
}))

console.log('a')

console.log(wx.getSthSync())

console.log('b')


(async function jyf(a, b) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('xhq')
    }, 1000)
  })
  try {
    const data = await p;
    console.log(data)
  } catch (e) {
    console.log(e)
  }

})()
