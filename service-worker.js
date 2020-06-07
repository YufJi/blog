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
    "revision": "280ca62167cd95e072d1e622e4cb8f0d"
  },
  {
    "url": "assets/css/0.styles.f5581cdf.css",
    "revision": "8e5fe8c9ca67036451011b2d9745f001"
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
    "url": "assets/js/10.55c8072f.js",
    "revision": "3663950c376f887a24a603d79f8cd842"
  },
  {
    "url": "assets/js/11.ae5d2622.js",
    "revision": "0e7182fb18f2005a7716a803cd0ad927"
  },
  {
    "url": "assets/js/12.2971b604.js",
    "revision": "5cf48bd1aecab732ba86cc3a87a546c3"
  },
  {
    "url": "assets/js/13.ae051416.js",
    "revision": "f294ff846fc25e4c6c0960518445d3ed"
  },
  {
    "url": "assets/js/14.9e4af765.js",
    "revision": "958bbfb8a5fa828e44d730f146cb9785"
  },
  {
    "url": "assets/js/15.a8b2dcab.js",
    "revision": "686ecd5c47b6346ebb910c3abdb0be94"
  },
  {
    "url": "assets/js/16.e9e034c0.js",
    "revision": "8968821087c706150e989f2b8ea38962"
  },
  {
    "url": "assets/js/17.dc2657cb.js",
    "revision": "64ad12e5c1b37097c52c59470d6c5ff0"
  },
  {
    "url": "assets/js/18.206a2c57.js",
    "revision": "b0a83ec66dc9dbe0c1ad5c4e57ae3014"
  },
  {
    "url": "assets/js/19.22229180.js",
    "revision": "94eb16b773a57f4ee42cb0a2ce536bd2"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.662f645c.js",
    "revision": "e624aadb76da570aeb45f053bcf53ebb"
  },
  {
    "url": "assets/js/21.0a377b97.js",
    "revision": "fb01ba6f51e080bedec4e5af820b51d2"
  },
  {
    "url": "assets/js/22.366c57be.js",
    "revision": "64b984eee7151c126cc5eb0bc764750d"
  },
  {
    "url": "assets/js/23.8cf6108d.js",
    "revision": "146c3c14b37651637997b7d558dd0290"
  },
  {
    "url": "assets/js/24.3ca089a1.js",
    "revision": "889738c5407f9ab8a837ca79c76dbc60"
  },
  {
    "url": "assets/js/25.5d2b7516.js",
    "revision": "a84568a4821a71012ecd3b82003b507f"
  },
  {
    "url": "assets/js/26.28bef7df.js",
    "revision": "85e365c8a2f328cf5e6c2a29f91ec141"
  },
  {
    "url": "assets/js/27.ba3320f3.js",
    "revision": "ff964fa28029c2ab6f79b3260eaece2e"
  },
  {
    "url": "assets/js/28.6ef8c621.js",
    "revision": "cca46217fbc1ce2410502cb1c621a99b"
  },
  {
    "url": "assets/js/29.29a3d8d5.js",
    "revision": "9e7e3a2980321e422a2d974e7c1e07ec"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.b16c3585.js",
    "revision": "415dd64233161c7c856b16fb34a59d34"
  },
  {
    "url": "assets/js/31.f0edd232.js",
    "revision": "0233f83b5abd7bf1b3ec1f2fc8327e3e"
  },
  {
    "url": "assets/js/32.10865b0b.js",
    "revision": "30a2379b879ad95b0aef1dce914ec1a4"
  },
  {
    "url": "assets/js/33.1d7faa58.js",
    "revision": "c446bede042e41791e7a16e658325210"
  },
  {
    "url": "assets/js/34.4567ed92.js",
    "revision": "f9941e6df48e6a93c57a895a15f73548"
  },
  {
    "url": "assets/js/35.d75eb700.js",
    "revision": "f46d5303bf702659f829a8fbda2b9aec"
  },
  {
    "url": "assets/js/36.6c80c256.js",
    "revision": "98ff2ef0ed1a3d74d32ec42f3eb965f4"
  },
  {
    "url": "assets/js/37.241f2f9d.js",
    "revision": "0f05b0fa38de7588756828f3cc4b4c51"
  },
  {
    "url": "assets/js/38.507f0325.js",
    "revision": "a8a3c798c0fee7496a6367a242b26de7"
  },
  {
    "url": "assets/js/39.36ee66ac.js",
    "revision": "49c917f9913a8454de7db46f1737fb8d"
  },
  {
    "url": "assets/js/4.6442baa4.js",
    "revision": "7c62cd100ce04df6970d7f48f92c36bc"
  },
  {
    "url": "assets/js/40.d3fa2193.js",
    "revision": "0ea9ae274b9287c5a600deb19ef1a791"
  },
  {
    "url": "assets/js/41.c48ce0d3.js",
    "revision": "662c7b1dc7d0a9b152b324d8bf70bdc3"
  },
  {
    "url": "assets/js/42.a54d7800.js",
    "revision": "e3ea24bd0c9c75ae2ad50c2d1ce868eb"
  },
  {
    "url": "assets/js/43.34bf3cd6.js",
    "revision": "0f3d9b30ef25d3be06bb285cdef510f1"
  },
  {
    "url": "assets/js/44.c93a2515.js",
    "revision": "4231e7a6b8dbd26be8f1c7ec2771e53a"
  },
  {
    "url": "assets/js/45.a7292f55.js",
    "revision": "9d2c68512cdf7c7fcd704981dc8c6e84"
  },
  {
    "url": "assets/js/46.ad639cd9.js",
    "revision": "8067d7c81a045fa2ef28e281942ec66a"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.d47e22ec.js",
    "revision": "6ef4be612a487bc50b665588fd8e7f2a"
  },
  {
    "url": "assets/js/7.707cd254.js",
    "revision": "8a03af4ddf78de90a12e1f568234d3d9"
  },
  {
    "url": "assets/js/8.821eef5b.js",
    "revision": "710123b34cfbf1c38d7e2bc9e2c200d7"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.eaa647ab.js",
    "revision": "42cfcdbbf1c1426f6f753b444193eb45"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "ee9e3cea2ed650709821f0b92a78a5e8"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "98dc5bd4d50dd85acdefecccc7ea2625"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "7d96e18f145cde71bc5b0310f9291c57"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "04e84be7470f7336fb370a9d752c5794"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "4c8365d6e7c6476365271158d13b314d"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "73973b7d9be15f3cf4d0b9a605cd3898"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "381d60cd13cdfd2d2063dbde5f5f83a3"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "a14476557fea80cd3b3effbfcb4747dd"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "c0110b58149c0e2bda1c357aed13e23a"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "49b08fa583041f665cfab3bcde60d3c6"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "dd27056a9d8591467c942e4f4261a033"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "fd5cd64c669b5cc697593fd0ce4c3f5b"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "3d2b1aa071f9b3d37694ed6a412c01d4"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "87cb1282e4f40a51daa32ffa2e43a7bf"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "32c33d808f7bbaaf96ea8f0e1ae4b14c"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "5e2e1a3ff557cef6185741837068390b"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "64f8d14fefb06fdf8f746c9584650c90"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "cc74932bfafbabef5015ddb92c9620bc"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "972f14ec4c5d78fa05e5b0b1e3416bcb"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "1ae7f2c15a335d81625ffca7ef4f9015"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "7289ea67043bfbecf32d8f81b10dcc6a"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "79cfff9c459533374795001a02c44fd4"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "f73022da750ea127216c3a40850be87b"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "cf1002cb63171af8ae057de06c532109"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "a4f7691f3a77aa170c42cec55f3f3ffc"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "ec00bfbd1f1d2f51c96c83095923aa77"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "6e3be4d544b60d8e95bb6e877909dba2"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "4a87d8a873d05395b328e56f8904a7b2"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "b54304b2467f0cb5b41a7a5ade94c01c"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "dd61033df96179f919333a857ffa6437"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "310c737c63f75d2d1475e7550d9154aa"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "950632bc9aac22cad7b2fe87e5daf409"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "d92ecc56ac2e89f7def6980744fadbee"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "e01149a4b1484531b31b1f82ee979702"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "cac138e622dcb66c9dfc2bccb01427d7"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "7a480e1e86f91809a9f053fe97ef4456"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "9fc8a51c13e885382798107779cbb9e0"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "7f40fd715f82eafc52847ec50d33410c"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "dd3406a7d955da0bfec54044ee5742ff"
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
