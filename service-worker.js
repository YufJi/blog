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
    "revision": "30cc7455c48245c3178edf384a7ba877"
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
    "url": "assets/js/33.407f41a1.js",
    "revision": "442fb90c651ab785d5210a4568507749"
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
    "url": "assets/js/39.cb80362b.js",
    "revision": "7c80db1f804e485800157cc4319f8ddd"
  },
  {
    "url": "assets/js/4.6582cc33.js",
    "revision": "1666f48f60e7df6214eedd7fedcfd39e"
  },
  {
    "url": "assets/js/40.88c8e334.js",
    "revision": "eb00cf3b137d15ec66fc89867b29252c"
  },
  {
    "url": "assets/js/41.73e3df99.js",
    "revision": "c529a07357fd6479a7c2ac8304c7a30f"
  },
  {
    "url": "assets/js/42.0f2bd3e0.js",
    "revision": "ac29feb4e3227609271137789e7df27b"
  },
  {
    "url": "assets/js/43.b48ef087.js",
    "revision": "2deba155bb5f0932a11c41d0f3c0360e"
  },
  {
    "url": "assets/js/44.a899bc7f.js",
    "revision": "084c66b3e4dc68dcdb8375822693a9bc"
  },
  {
    "url": "assets/js/45.048d8c5c.js",
    "revision": "19af0defb617ea257cb2b463c8e3fc84"
  },
  {
    "url": "assets/js/46.cfe6406f.js",
    "revision": "1582b2dccc7118ac2de989ad6c133455"
  },
  {
    "url": "assets/js/47.846cf916.js",
    "revision": "f4d40443af2c43397e239877674b3ea5"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.6e4197fe.js",
    "revision": "c5980de67a95d4b816b2b2e9dc71fcce"
  },
  {
    "url": "assets/js/7.7fed567c.js",
    "revision": "6252719b5a429babca8bf993d8e55b1c"
  },
  {
    "url": "assets/js/8.685d5caf.js",
    "revision": "2ceb885af706d1ea4dc03469671ea6f0"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.82fed6bf.js",
    "revision": "a727b772cac6743516f885ca276966f3"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "c79cdc4459bd46f93e375fe374c2ff6c"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "f8489ec5bfe2b636d96bf84ee992756e"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "ac848787686205217766dffd4a71eb24"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "2def87dc3f5e80a002f15022556358d3"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "5d890fcd4cbca3ede0228dbc1453cf05"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "6fe753e5c9d87dcb25f06dbebc83ac65"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "6947f4bb4df7174b8670b3c0199e3784"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "6a49df0d579030fb827fda8b11c83989"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "bbc531f713d71837dc8b890c162fdc2b"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "701529a34b7446fbb80ced21a716295e"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "914e05f02fc9812f005dd1ee14e0e27a"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "7693310d387000e80d5c1e57c133e71e"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "7c5228c2bc64fd46729648c6840ca26c"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "41f29004a9ef01a44e529385fc7f421b"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "c5f787b53102f4d0d37ff076753b1df0"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "b5dfb4f31f17aae1cdb0de1f8180da48"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "eb023f4d4fe0b9f847baad6955501e55"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "b7f6ea36fdac2c465ca8e0326ade9e39"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "b1b4685811b8f11f696c91c8d1777d50"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "7cd08d9c9e20deffa2f5a46b0a716d2f"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "8fe6e2ece16943ba0ea461564d4e19ee"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "37cbeeb59d8d773e1a01bb626644d02d"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "94d1b1f27cdd0884504ca1e2647f6432"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "04ff6171bb9e1f8be5dddf05ce5ceaa9"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "450c41bec3346970faf0da7454780681"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "dfe48e06adc407f4b66691564a8d6ec9"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "09a30b24561f3b1e268e13d0c9b6c41e"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "510364d69d50d04bccff2ff628639d16"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "23eb12c2566995a892e9567c55bcecc2"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "d9dc20bd36eb370a21a50ba0af2c77c1"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "eb6466b835263e366a08c667fd89d237"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "4d0360b4bf51d106841c553011646457"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "371e19edbe458dd0f9ea516b0edcbcab"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "65d6d2fa18e93b9bc9237bf8cfaad66e"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "5007ecdf40bc78e7ca9b5b5f9e2c44d4"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "dc24f8708ba454043cfd208110151833"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "e41b8a04b1507bc68457a1002d14e3ee"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "01c0d7be0eeb918e7063956713525063"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "e149a1c84d097bcc0276cfaa2066b38c"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "5e3b79d76b9241b7be6bc59f633002d2"
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
