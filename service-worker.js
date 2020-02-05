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
    "revision": "5535355713a40635ff3f4cdceecbbb03"
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
    "url": "assets/js/35.7a2c64cf.js",
    "revision": "564ac00f4cb88a2bc9944248f984721a"
  },
  {
    "url": "assets/js/36.2c79998d.js",
    "revision": "675d3a00dd76d22821392d7f4454caa2"
  },
  {
    "url": "assets/js/4.2e189d14.js",
    "revision": "954017aa37823c1c1ce91cc901891bc1"
  },
  {
    "url": "assets/js/5.183aad4e.js",
    "revision": "5a8529e6ccc02de4caa61e978c9f795c"
  },
  {
    "url": "assets/js/6.e3352b8f.js",
    "revision": "55d684fcd32ec771c9e4c639b6b55157"
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
    "url": "assets/js/app.6f636c4b.js",
    "revision": "799658000e928b6f2527415cf200345d"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "d036915a8234ef731cb1980ce9fd4e39"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "c14ae438c5eb21a8e8061f6355372f0c"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "f685339d9339cb5242f2fe1a5f30e779"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "76a5e64c0b1714d6388b7d6ce9dc1e62"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "90d62375d2cbd84887ce15adb34b6ffe"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "cc1ff8706a8d4661aeeeb59e880d0e81"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "72b86191fbd97c605217a7c9ed6ca233"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "649d12fa4e42c08a1820ef13c07b3034"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "7449d5576cf6ddce8fb47e681e4fd583"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "948191d7c11da32079384625a93a97e8"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "d538b24797f7dc52341b71a4e603415a"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "7c578c1e34347afaa61c8d9d223f3277"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "8c860cf1d0e4b9df1aa58010ea9f1951"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "060438a1cc023047e891f5bcfff5a821"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "91e3b6f2542752894d24c132197c7a88"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "fa56dab4b56a4e10a11cc685125dbdd0"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "5280edc1ebf46410e8fdf13c8f114905"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "2e0c41499baedac68f6a055319bfc853"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "126c482a6bb457dfc4c1aed513cd0255"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "8b6e0300f3ec1b78d77a2783a762eb64"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "1bd85cc027199cc3fe09e64f60e90f4e"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "31937445b7394c33417e53032e48890c"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "346c40f8f618b738cff4e74fca7e44e0"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "a2645bdf72381e8421c8844759bc3f74"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "347e20058d5b3a0f5723132a4b512817"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "6d91a86c5b5cd1446ee3abeb43068651"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "5e867113689a245f87d875585f0d7add"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "3465985ffd81cb71c8681136f20ff2f4"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "8769854903c4244f46b49e0b3adbe5ca"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "10163923c732d50de364e687597fb302"
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
