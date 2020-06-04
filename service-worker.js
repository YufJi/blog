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
    "revision": "a06c933510494428d108d0ec209a0f60"
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
    "url": "assets/js/32.c26f6744.js",
    "revision": "c0bf9cb2b612c09528c9342bfbbf9434"
  },
  {
    "url": "assets/js/33.393c42f7.js",
    "revision": "75a7d896df4848a17b58799e42a397aa"
  },
  {
    "url": "assets/js/34.5107a48f.js",
    "revision": "d38b8fa5e2f5a9681aa92022d2a586ae"
  },
  {
    "url": "assets/js/35.c3001e62.js",
    "revision": "7f5cad506e39c4bee742e66e0b8963ad"
  },
  {
    "url": "assets/js/36.6c84e831.js",
    "revision": "57f28577ff8424758106d35540e394f2"
  },
  {
    "url": "assets/js/37.8b8281f3.js",
    "revision": "ce7af66fdbbb9d85f9b98f24ab21d5a4"
  },
  {
    "url": "assets/js/38.6d7a3751.js",
    "revision": "f43c40fc5afe7582ec15c632cb9220e7"
  },
  {
    "url": "assets/js/39.8e3418ef.js",
    "revision": "e5aa0d3328e7decd6be0d4ac21681ff2"
  },
  {
    "url": "assets/js/4.62e342d3.js",
    "revision": "51a230b2cf831ded5b077cde0e7c2657"
  },
  {
    "url": "assets/js/40.755bc589.js",
    "revision": "34b9721d0eeada1af5ebfcb294574c89"
  },
  {
    "url": "assets/js/41.8ac65311.js",
    "revision": "60d679ab1a0a7162b164c4b6b6f3ff36"
  },
  {
    "url": "assets/js/42.832b258b.js",
    "revision": "ef284a2e359e7918cfd5c2fae1474af2"
  },
  {
    "url": "assets/js/43.63a0dc73.js",
    "revision": "970c589f1eeae462c306465d5b2aab2d"
  },
  {
    "url": "assets/js/44.e6afc5cf.js",
    "revision": "bd341e4afcea4c912cddfacadf4fce50"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.b65b70b4.js",
    "revision": "9247e1d6330229c364b2ee1bd9413c83"
  },
  {
    "url": "assets/js/7.948f0834.js",
    "revision": "0b4bdb1c719469e4376734c7e1a1e747"
  },
  {
    "url": "assets/js/8.3154bfc2.js",
    "revision": "c666110f52c93e49778e6c23378d8032"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.5ba85b2c.js",
    "revision": "d434813c9a4612203e959de30818d01b"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "25b6baedaafa974c092356599123b43c"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "b5a03b976723ed4f9202ffe1e5c78611"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "8ff1087f6f38abc74c2ce0950da7a384"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "229845a67fcf540b90820a1e734c32cd"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "454dc4d6d1582519521de3f3af88e45e"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "723c1121fc7b42e05d182a2c28882a44"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "a2a7721dfff5140c9e9a0c5fe87af3fb"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "af175e7f4a87e4210979ff5917e88f3a"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "b4b20a26916b7e2856647e68ac6455c0"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "db49389ec200995bcb26bce56043cb71"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "22fdb373c1a9733513dc48b8ab351236"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "1cfc948669f70b46bdedd970225d376e"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "78d9ac8d52c3545a108a1d6b984ad954"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "9e7665fa2a55ba09c42d3a8892d732c3"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "bc4f8bb09c35270b6517c0e7e9f75f07"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "c5efffcc882a8789e1231f1a2bb13316"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "c9aa19b13998388ca78571aa16c5a211"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "bba77545583c7bc5fb07e536b7d136fa"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "d3f53c0200621cec598d1baacccf1a05"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "1cb33efd1fc06a468d5f14074d96704c"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "0a4dd2533cac887efb883291ce13f5e9"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "bdafd096dd35335047f16274a75e3010"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "16c1838f35f88aca04bc1e4d9b286059"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "102b995dd1ae690d163ab9fe073158d3"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "515d34dfb04d1a8ce6b0bd7032c8f4dc"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "2a6786bdbcada56ccd505416808c95c8"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "5740be48a091ba87097260a2e797bd74"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "db46fad40413f1a54d47fb4ca024980f"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "001aa1ba4c58b84df55732e3d89cba21"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "e056ca392df0a0a5798bf407bb86427c"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "71ec882ac80013d50cdd5308d7b0acef"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "806a4dc687c48021b9dfeb8b99c34eec"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "99ab437e8939b444c5f36d43105598da"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "41031ca534acc60022a2d1c4e509c0ce"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "49147e2e5e4985712f910dd2777ba309"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "78db29a327eec8323aeb72da940cfe99"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "9148615b2589e6cee24d9661e0e9c300"
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
