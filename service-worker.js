/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52a20aa718627dcb1feca9088aa9858e"
  },
  {
    "url": "assets/css/0.styles.22fb32f6.css",
    "revision": "7252b34bc2ac6fc4fc8647d43bd6073e"
  },
  {
    "url": "assets/img/docs.db788ad3.png",
    "revision": "db788ad33c6493b82ec98b19b5b56532"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.904fafdb.js",
    "revision": "d16cfdb020ade4e1587cc47b4d1d9935"
  },
  {
    "url": "assets/js/11.900d5924.js",
    "revision": "c57d4869c4f739b156e1b34212fe1744"
  },
  {
    "url": "assets/js/12.e03d7175.js",
    "revision": "fb0b5eddd69fc83edd8dffed57ffec49"
  },
  {
    "url": "assets/js/13.4d57fc0a.js",
    "revision": "e0363543e24dbd74b76ea9486ad66ce7"
  },
  {
    "url": "assets/js/14.f0750315.js",
    "revision": "0d45ad924ea8eeeb867dce4721a17b53"
  },
  {
    "url": "assets/js/15.d62417d2.js",
    "revision": "35c475c234b29c3c589aed98c674288d"
  },
  {
    "url": "assets/js/16.e052a7c6.js",
    "revision": "d936af17323f3ee42dc980492a3ebf25"
  },
  {
    "url": "assets/js/17.56c195c9.js",
    "revision": "e3d028b0933993e5ce722c762980d7f0"
  },
  {
    "url": "assets/js/18.acaede67.js",
    "revision": "e15b4398641ee5152a1846a7409ac70b"
  },
  {
    "url": "assets/js/19.90b5173e.js",
    "revision": "3b3c294a7b5e72e370a98381cbb3f175"
  },
  {
    "url": "assets/js/2.3185b5b6.js",
    "revision": "1a8701f6c211229d718557d50b690642"
  },
  {
    "url": "assets/js/20.41b1f538.js",
    "revision": "e3d9fc16bc3dcaccf703a7798d54cddd"
  },
  {
    "url": "assets/js/21.ab26beb5.js",
    "revision": "f537217a7c9b03da7143b13fe9452cec"
  },
  {
    "url": "assets/js/22.a6f9384f.js",
    "revision": "4f7986ec05e9434b351834294afe84e2"
  },
  {
    "url": "assets/js/23.cac6178c.js",
    "revision": "7c2c1191a9234b6bd6274828c0920ecf"
  },
  {
    "url": "assets/js/24.31877318.js",
    "revision": "fb4f71a15de20ee511a05962ee517101"
  },
  {
    "url": "assets/js/25.94618b90.js",
    "revision": "9ce18f401f608fd7680170481d54fc1b"
  },
  {
    "url": "assets/js/26.48f69736.js",
    "revision": "d5256ad843fd5413293470af10ed3650"
  },
  {
    "url": "assets/js/27.8b4b0453.js",
    "revision": "6cf0f856dd74c8657416147e2082a72b"
  },
  {
    "url": "assets/js/28.47ba3bc4.js",
    "revision": "a21897c62e90b4995c38969773ba27d7"
  },
  {
    "url": "assets/js/29.5f66cd85.js",
    "revision": "a1ceceeb0ae0647436d89d2cd68bb5a6"
  },
  {
    "url": "assets/js/3.1f4717a5.js",
    "revision": "e2083f393ac1acdf3f5d11155bd8e00d"
  },
  {
    "url": "assets/js/30.0378e27c.js",
    "revision": "da9d5363166eb73ebd37ed3893bf27f2"
  },
  {
    "url": "assets/js/31.8b170116.js",
    "revision": "274f2dda733412b53dbeeb767b222f43"
  },
  {
    "url": "assets/js/32.8b0eaacf.js",
    "revision": "481e78b2d4483f358196a49119087340"
  },
  {
    "url": "assets/js/33.393050ab.js",
    "revision": "f171a7c809d46ecc18ca5370c23e2d05"
  },
  {
    "url": "assets/js/34.b0e5a0d8.js",
    "revision": "775d87744bd86bc71e9a8aca6fbdb29e"
  },
  {
    "url": "assets/js/35.a9b94f55.js",
    "revision": "944e907026dac45a6e2e5f88c3eef02c"
  },
  {
    "url": "assets/js/36.e42ab4c3.js",
    "revision": "ef6967cce982f491eb35ef0689bccba0"
  },
  {
    "url": "assets/js/37.4203c427.js",
    "revision": "8dc4717acd5d42e4083c36c478b968c9"
  },
  {
    "url": "assets/js/4.26e844a0.js",
    "revision": "2580d9f6c1a4fc6b8f5f9a1630edefcf"
  },
  {
    "url": "assets/js/5.183aad4e.js",
    "revision": "5a8529e6ccc02de4caa61e978c9f795c"
  },
  {
    "url": "assets/js/6.4180bf5a.js",
    "revision": "9f411136e5de251f09ce7b187873516f"
  },
  {
    "url": "assets/js/7.ff7117de.js",
    "revision": "f2c50eb8c6137a6183ad83369c0dbe0e"
  },
  {
    "url": "assets/js/8.51e4e9de.js",
    "revision": "52ec3b3c8f457d02e046809a8b203fa9"
  },
  {
    "url": "assets/js/9.10c4fef5.js",
    "revision": "b39f7fa503871736ed332caf93c1fbfc"
  },
  {
    "url": "assets/js/app.7a51d241.js",
    "revision": "3920fd8a4383aa57af912be95ebc0e8b"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "bdf9f0313394f28dae660870c3de6400"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "3040bf35a9195d84d77e0c022fc19455"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "0e7f2ef0a5f3925d01755d83d8774cc6"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "e3e0a50f638d23b491237f2c31e79a90"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "abb2d001cff6d31d0c4bb9fffe8250b9"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "d8ebee1c365a7a3ba0a2b7a8c8c2418c"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "1ba2c8444b6ff047a548847378dad8a7"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "ecc8315e80c44c0bbab474a83f819f0a"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "08f3382451658a9b1ae0d0918baa13b3"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "cae1ef73bf54fd03eda1dd79cecaa430"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "2878e40a2f98113eba9b928d5f485f66"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "4ad39cd9d787b2e0bf5467d45533708d"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "330e64f1420e6beb50a0e1700a8b6679"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "392832a59600e65700993302c660d1b9"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "3cc00525e04f7b5299adb602539b8f42"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "48967b302d979102aee4f870caaacb74"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "1875631c5b5c658c33fc2fb49e1f4d14"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "2df4e4dab986ac20c9141f9540effdc9"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "c112fd100d0b7ced95cb5d3830d89ac6"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "ba124838cc9b2d2a63122d840c76d41a"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "e11fea1fac934ca7577bccdb285ce5fb"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "0009e05711fccbb065083688a8c1d21b"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "305ab41167b66a6d9bb64ba69ba630bd"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "ea5747b5966af7ac909315c0dc4a96a2"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "9ff2536d930ce50550a4a8c00c56e3c4"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "345a45dd9a2fcf919e1d7c7d9438889c"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "90b56d6b188273c141f392bcb2c485bd"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "49e6024415f9911188d020418369a36a"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "21227d360e161854f70624b831328462"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "af24dcd4e19972e2a97a9b8564997250"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "1fb5bd126aac5d20518647a08f63f4ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
