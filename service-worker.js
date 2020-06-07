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
    "revision": "11673201795f2f487e3c463ec9c8db87"
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
    "url": "assets/js/34.fe3b8501.js",
    "revision": "fac40053d69748eb689c5271d2c83504"
  },
  {
    "url": "assets/js/35.95e44b63.js",
    "revision": "58ac95d1364c288ccc0e6d6378c3d9c6"
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
    "url": "assets/js/39.fea6c1c6.js",
    "revision": "aa40b1e52061cfb88c5c6aef1bf5e79a"
  },
  {
    "url": "assets/js/4.6582cc33.js",
    "revision": "1666f48f60e7df6214eedd7fedcfd39e"
  },
  {
    "url": "assets/js/40.cd0da738.js",
    "revision": "0f2ba9404fae044064bf65185a2a2356"
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
    "url": "assets/js/app.92da4cca.js",
    "revision": "9454920b95a9a4c8629c718d4fb24141"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "3b9254548f893e27d424c4e9b3297ca8"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "b0be5ddd7d4d791f08dfa8bfcb899180"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "f363209cc18a53cd2832543740838c77"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "739f338b95b9757570a87650f771adbd"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "38bda2b1cc4f005f59ae5146f3542bae"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "5877ede945ea55c20c6b6a312f3cd687"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "e7344884be7cf36e811c4d8343f063d5"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "5eda0d4622b319ba1b88669a2d6a0a53"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "60e7afacf1cbf0a9f813e90b14c1d58a"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "7b6aae3a5b66d7729b05e2edf6b787b5"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "5cf0bad7d4b78cb1afda4cb691cc0c80"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "0823ade79146f651c12506374854d324"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "28b2b6042559068b70de31a6b18335d7"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "c8de7e61f507853f4ae47d62c7321390"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "0356cdf899f6fe45ca4df5de1e3ae1fd"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "15c5e19186cd485a1b453a048c0b049b"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "5b207322d6094682ab58a2375c10bfb2"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "a004ddb4eb671fef2d7c09a459cc0392"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "153a3b7ee5106a7ea72a4d01d36eb00c"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "bb475d292fe0d057078f7864aecb550d"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "a540e42ef99bacbbf881ea52d8dcdab1"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "6507dd24ccc83d1b4c8c98ff5899bda5"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "d2e994a94c707746cb7df982ab9b5fa2"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "4c058e5cedb01b43fd834341eee051f4"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "721c0e9850bd579ace362ac8694e337d"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "062da6a7ca2d1dae0ef6110e669b7894"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "ca8aaed881e0ee55e184a5b0e1e5db23"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "7674a890d9e2fed355a2c13d46d9243e"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "c9a079e6bba223da6bde6a02ca4bfcd0"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "0181dc293f4be3024e7c1fa701e1c49c"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "cfd041bd406b57470a5f23e3722bdf33"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "a89f32756f77c983a05dae90a4934102"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "4f36df38c02353a1895b75d9aba9b0f5"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "8dfd07e9b19e0571d2fd6cd57b4dcd73"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "7a84cded76ec8d5a9285e583abdd5a1b"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "41bd44f69e1b497e6befb9081a181323"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "f0b2af4db0e80ca784e653ed2c74337b"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "2b6d87925fc4f7e5858a36b26a93408a"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "c6e157464ad856e8bbb3afaf0d9dc1c6"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "cc50faef8a668a1cb80902b6a5ae0a91"
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
