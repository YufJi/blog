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
    "revision": "6410958151ddc4e04f7c3b13f63fc7b7"
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
    "url": "assets/js/18.dab82d67.js",
    "revision": "bcecce1b3ed491494f141f572652574e"
  },
  {
    "url": "assets/js/19.f8696569.js",
    "revision": "5f638059a17588b5a6445984d4e974f5"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.16ca2c38.js",
    "revision": "1994776eec47c7a79c1a41c5a9586137"
  },
  {
    "url": "assets/js/21.3206c6d6.js",
    "revision": "aea69b6ed9036e501b63f9b1b0569098"
  },
  {
    "url": "assets/js/22.886a90f2.js",
    "revision": "4fb40f2c5243f9979e8ad46442087cad"
  },
  {
    "url": "assets/js/23.46519fb4.js",
    "revision": "2a2640a7ecc5a2502c8e679ea37786a5"
  },
  {
    "url": "assets/js/24.26decfe9.js",
    "revision": "6287d185ab0258c3517160aabf4a8c16"
  },
  {
    "url": "assets/js/25.ef85daf1.js",
    "revision": "00fd100446d8e4afe585b495dd9e6dfa"
  },
  {
    "url": "assets/js/26.c6d60608.js",
    "revision": "e967ee391f770ce0b387d18d87340a4b"
  },
  {
    "url": "assets/js/27.dbed6125.js",
    "revision": "0b80f905bee09f628ce5296e71b20a6d"
  },
  {
    "url": "assets/js/28.048d685b.js",
    "revision": "8cd4ece3080e81326e9938255bcd0532"
  },
  {
    "url": "assets/js/29.5561219c.js",
    "revision": "65db9dd9dd3ee3137e2c4aa422952cf8"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.105e2492.js",
    "revision": "cba14544801c8e43e5a2f140a2a5a7a0"
  },
  {
    "url": "assets/js/31.8737c01a.js",
    "revision": "d4f7beeae56074bd10c24a01d66702ee"
  },
  {
    "url": "assets/js/32.dbeeb8fb.js",
    "revision": "9faeaec69a76cbb371054c89a2f8fd81"
  },
  {
    "url": "assets/js/33.992014f7.js",
    "revision": "505c55d2e644e23cd8d86d4acd2e3ac0"
  },
  {
    "url": "assets/js/34.f39441c1.js",
    "revision": "b3ab7cd44cd133e75236280b8ecb63fe"
  },
  {
    "url": "assets/js/35.dbb6da09.js",
    "revision": "5a3cdbdfae738d3477fefdcaae91d8b0"
  },
  {
    "url": "assets/js/36.c663ab88.js",
    "revision": "330ceb5236b408e5ff69850944ed9edb"
  },
  {
    "url": "assets/js/37.ffe9d135.js",
    "revision": "be34f6ef840c07af0ec3b6edbd8ee262"
  },
  {
    "url": "assets/js/38.cf4b3231.js",
    "revision": "b9301d2338469e9a9ee8539068c9ea5a"
  },
  {
    "url": "assets/js/39.0ac96813.js",
    "revision": "60bdf8a4faf90567bd701a996c3cf186"
  },
  {
    "url": "assets/js/4.5329815c.js",
    "revision": "a03d4133fa261505f7ddb8ce989ff7c2"
  },
  {
    "url": "assets/js/40.61eb480a.js",
    "revision": "e20dd09a6ffd5e15e384458007a1d137"
  },
  {
    "url": "assets/js/41.bd290bfb.js",
    "revision": "b4661afdbbc7db44da2a71caa9562309"
  },
  {
    "url": "assets/js/42.6fa88c4c.js",
    "revision": "8073bbdbdd102f8acfc2617c09e7b37c"
  },
  {
    "url": "assets/js/43.5798fde2.js",
    "revision": "8291c5bf1ec6cf2ad54465b856c0d8e6"
  },
  {
    "url": "assets/js/44.fe6301d2.js",
    "revision": "a25810c9aca3b634ed9ef174a5a61609"
  },
  {
    "url": "assets/js/45.26822550.js",
    "revision": "499810a139755ea428aa91840b7bf5ad"
  },
  {
    "url": "assets/js/46.937806e7.js",
    "revision": "c59951e9df42850ebe99f37d8d160c21"
  },
  {
    "url": "assets/js/47.0a410f62.js",
    "revision": "4466cde975e8f47997898c38434b073e"
  },
  {
    "url": "assets/js/48.f9a5338e.js",
    "revision": "0fbc20a49ff845c84e21424195faed27"
  },
  {
    "url": "assets/js/49.e8a352e7.js",
    "revision": "3f80a2d9be39c34b5c7fc5c3eced6616"
  },
  {
    "url": "assets/js/5.945ff853.js",
    "revision": "da67f967db16962eb6527ec5661bdeb4"
  },
  {
    "url": "assets/js/6.6408b16f.js",
    "revision": "3ccff688b833ee4d53c17074d7af769a"
  },
  {
    "url": "assets/js/7.dd123b3e.js",
    "revision": "50d3f8e33196567d644f674a368b44d3"
  },
  {
    "url": "assets/js/8.0c13dd55.js",
    "revision": "4299cb59d1e6fe6d356c821608d7f976"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.5f2b6b7c.js",
    "revision": "4291c10e2408b122bd4126552bb5790b"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "43d46147e4006b1bb683e30194175be8"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "f879dfe002b5d0fd9d5c1b9768c40735"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "b531357f963a417d34eb1315af84e897"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "2839abc67b40e416cae3a7030c7f516b"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "ba42984252bdbe2c3a525a947c62825a"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "9494b5986b9bb26d1fdff4b127048f9e"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "d90bbf8ec8b6b9129714a876f25cae8d"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "c36f511c442cc0d7baad876349ae259c"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "12e880d6fec283618dab3ef207079fc9"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "941467b4f8c729762a95c0118bf37769"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "754d60224886029980ef7ecd98b47d04"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "c031ae7f49eda0976f6c44c78f62250d"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "690e2c640bd53c072484ba79dbccb8d8"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "f765b5d98927574639a6cfb1f734f2dc"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "51b2a963293181e8f91176a2d07c1393"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "8bd39a979ab161405a00f33e739e1c5c"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "af18d7f25b3651e6eea974468d19e4bb"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "fb64b5ee26448b325d9e52f7b6811c3f"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "b60afb839733a431f577317b3a24c928"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "639343e816bc30c6316a9ac9eb0f833b"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "5a10045e9913156c6cdab063950b3bcf"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "2f3ef9d7fa3b4c5f20d9f6f63cbf1d28"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "c290876c678ebbb8be270fc6fda8c3f5"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "506dcb30053e20400dbde82242755b09"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "865aab6c632c58c028b03116144a799a"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "b5f751ef67209c653ec093c4f5d47b05"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "363ff4e0f605bdb43ce62c317782fd69"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "02be33398f610548ee461eb3b74b70fb"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "afce247cd6b53286fe9eaf3ee36d76df"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "247d895e5e8ba32f4c4a2db1669d684c"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "8fd80aa913948ac5a51b81c9f15b4f9a"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "fb8a4e526e67332772f759cd0599cec4"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "6f05b875c123e890b825bda9995e7b30"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "f08d9732d626d9c7044ce381c7110230"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "4002517b4918b7dca2fbfae8e214c3d4"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "fc9d860899dc3b10bf27a690c635b26f"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "0ea34cc2a8df9a380ccece5496d6b4c9"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "677ac00ca0348742880e236ca4903530"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "596114b1924cb33a8e960cdcacec1441"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "c7c2d9601fc2395ccf297623e84048b2"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "a403259da801559ccf2d219a56a11b59"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "6d712d4e0e1d088128160a93609d326f"
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
