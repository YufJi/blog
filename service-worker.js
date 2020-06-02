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
    "revision": "f897adef548dd82915fd15d804d45a2c"
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
    "url": "assets/js/app.181edbbc.js",
    "revision": "7807f622ee78893b3fa2e030e19b6f62"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "85f3e3777d2d9096ae5ad4cb32ad003c"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "754c5f9ee0c4d59dbaff0c4a6e06a4fd"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "e142bb1c1779d41118a985d7b4b6af6b"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "04d9fdf06325b16d0a29b594325a8482"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "a6c67b22e5d7a216cb697fa6801e8d4c"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "1e5047fcd3258d8ecc1381e19db4116c"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "82a3759eca1935960d48121fcbf6c71f"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "922c6d895294880d56aabebfa32b1932"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "a563fafafa42a0d0be3178275272d90b"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "979b4bfe5d9716f6fda8b0831a82c141"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "d7b708ac6b8a332599601cf8d057768f"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "7cd8215034581502b365ec99dbf72066"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "a2109dc0df335904e9c57ae887ead8d4"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "6b771e33ea2cf000dd4143aee2a6a551"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "28e64a2d6dcf22736effce612a295e13"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "cd085d31db3d03f9b177d7c2b63eef61"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "0d6eb709e0f37741902e369268837d18"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "365854cc16e46fc8a434b8cc49a0ebe1"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "c85a8181f0de791c598b8283eac1fa74"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "3710f4e2a45f00e49738cae597814f90"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "d7163e2b9493cc8e90f084af109b04ff"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "f070d7c6f4e9933401fd8a5a9b3159eb"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "2fe2ef4245936ad31f315af712acd131"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "3a8069efea1ab3be63b4dfbbabcf35ec"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "faaf404b058f7a5ba064a4a238ebe9d7"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "000a17216f1f9ba3e61ea90f9c5e25f6"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "97469edca127d783b519a26efac53784"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "75c1edbfbea6c49efd4a5a55ecd723b3"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "477253eabb442fa866ac1dc1cbf3db68"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "af004c7cfc00d8675e8d3767b1b56e58"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "4283e38f53eef448257e890f45067584"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "6dc36ea2d3c642c7bc587b2d574d9149"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "62af30a5cb26b75bca238802e71fc271"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "14ce4b572b3d8a0a2daa66639948004b"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "4f6549d28a2c300395eb61a8b9b16c7c"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "f89537cd2b3a0c7d767746ce3597fa23"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "2709a9f0a6b634c34b13b43560a64a90"
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
