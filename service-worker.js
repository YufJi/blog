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
    "revision": "c1bef880f2589a346f3ad0acfe29ee33"
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
    "url": "assets/js/33.8c64a732.js",
    "revision": "f4d3d4a2c5a2d1aeeabe6c5ef4fc27a1"
  },
  {
    "url": "assets/js/34.752c38f2.js",
    "revision": "f8968841d21ae85b452ffe7509bd0c65"
  },
  {
    "url": "assets/js/35.354f3cff.js",
    "revision": "5cec3032d4b123055fd86dcc7eee489f"
  },
  {
    "url": "assets/js/36.48dff6dd.js",
    "revision": "23a429565ab77a6ca43bacdb4fc1057d"
  },
  {
    "url": "assets/js/37.de034af2.js",
    "revision": "7113d50df2b66e40a9550b74b346cb2d"
  },
  {
    "url": "assets/js/38.0ccb32b7.js",
    "revision": "3092922ed4648e17c945e2ada810acc9"
  },
  {
    "url": "assets/js/39.5dbab012.js",
    "revision": "e88361d9a97a5e9add8259aeca31345a"
  },
  {
    "url": "assets/js/4.cf6f3b93.js",
    "revision": "7412aec6cd6b18d26fc7357ea250b59e"
  },
  {
    "url": "assets/js/40.73b13de4.js",
    "revision": "9ef652ad39725a0d4222bb463d850e17"
  },
  {
    "url": "assets/js/41.dd4ff95b.js",
    "revision": "8783c603ad90762b47377545286d876d"
  },
  {
    "url": "assets/js/42.2b0d560e.js",
    "revision": "51c75e6c86a9f1f35215ed8b191a65f3"
  },
  {
    "url": "assets/js/43.ac56bffb.js",
    "revision": "65592b9f56c86fe5a3e73d87fe545d18"
  },
  {
    "url": "assets/js/44.3d19721b.js",
    "revision": "125a1a9f7c28c66513f9b4aaba5e3bb5"
  },
  {
    "url": "assets/js/45.28dd28c2.js",
    "revision": "cc5af19e95e1e5b14244cd92a9535225"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.9c21cf9f.js",
    "revision": "dadf6eb89dd1ce6e6aa1daaf8a37e611"
  },
  {
    "url": "assets/js/7.bbdf566a.js",
    "revision": "cdbbd51c3f8367c951ba9a3fbb659724"
  },
  {
    "url": "assets/js/8.3193148f.js",
    "revision": "b15ea00512c48cefae53d0175d2e4658"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.f6b25795.js",
    "revision": "64f1b33fcd6845557429510fd3e29746"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "9fc42e89cf538946d55c5b2ce0d87047"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "e378a5fb7e5fe29bb36b05e6b1a3e173"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "617cf6989699e8ac70af75875073f8bf"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "6ccaf707dcc6bedbb2d1c092a2761042"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "f51c92d7810e7fb8b7de56ed047714bb"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "614bffb5d25146f869a703c26da1e2c1"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "3b415b7012c92e7538ce34c119aee037"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "9e3fa057ef374b8b602eaa3fafb4cc23"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "635b1d2c05245fc768a77d8bedfc92eb"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "705ad3d61f08003e1260243c8507c3e3"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "878fa21b253c0d0d95532d863b7f34b7"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "5e1fc9608317247cdae665582de0c7a0"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "4bae2018fd9dfc5098310a12bddacf43"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "342aa3eff78f81887baf322ae69ac733"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "2cbfd1e539c4ce7f4dcee5b282089a5e"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "1c6186db609bcc8b6dc52d1d08bb7f54"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "7c430db5eb6d09b1677e89297f4b63bd"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "a21e2382a97acbe5808ccb9cfe7b4d0b"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "920896e066c6d25ec5d35531de68867e"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "25337b75e68a9337b2fcd4a699c20d51"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "2da178b0f44eee0a3b7ee0dcd7ab47b4"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "1dcce1d4105a687909ed12d080c3e0ec"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "43186c31202b53986e8d08f8875b8fc6"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "b3164e9648d587c5c9b823e08307f5a2"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "a7c330e5673247cf4f0af9be4cd35dde"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "e4fb713e165ee542a6f9f3f1f3ebb89e"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "34ae44660ecaeea195dbb51272020dd3"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "e2ae7c91e4395c8e5cccbc71ea677235"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "8ea3f522c0f285e1c17d22770473ea2c"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "a1a7b013eb199ce8ceda0a9fa2a016f4"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "67f2cdbf695c58e2b586b08ab51cef25"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "42ff91fd2ce5f22b95869f92a10c6d82"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "c23b22cb66b8e70908b8c96860a90573"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "4263f369bfaa0764b9836a12c62e1cc9"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "49ceca91e93c4a00534ba3531d514512"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "cd40e211ae65f1e884b3d5277126b07a"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "0b4d051f086ebfdccb779e84c96c226f"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "cd64e11f0df0c6d5ea3a79de882f7a80"
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
