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
    "revision": "823a8f6c973966bb32edbba5f13f1aff"
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
    "url": "assets/js/app.0fa52327.js",
    "revision": "5a9dd6c3036a4ae4b248744e653778bc"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "f079d6b1a1e5581c36f3de6b120900e2"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "a95aeb1a6b7be3b5b5583e98850f0fde"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "b3e0eccc4e0d0180d56e9bef1e5045b6"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "59c6e863f4a2c7c809cbe55860a81712"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "cb24f2a65233d654efde9be480b61e99"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "e021600545f50234625d55ee3e465707"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "88333d4d0eb92809ff1b0c084c898f8f"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "27bef8501a0dd49f050c24fab64c8692"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "5a220b9168f69cc9ecde21f3694cfeed"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "0a5565e8d0dc0a7d0bb46d0e7c2b2494"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "50c5baa2e8f4922a704a97106501b497"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "2733f2605ed4773e42f1af9c49cb52e6"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "b8b33a729f8589d5c90ac12436141122"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "1e319a2104eb7d61943ffb2af58a1fa9"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "7ad7532eb6de8168f83b550ea467143b"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "3c829ef7d2c89b368ea00375fad079e5"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "dcfb8f023dda5e0a27b9cbd3d08c5918"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "57538915310cf989e5fe91a4b590538a"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "09a754fd2f5abe1d45160b57a6a4fbe6"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "8e58043d6460ae8aad6a59a27534a21d"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "14c5c9218ddee8799c927d083ba6419b"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "63b60fe31ffb464d1b4704803046c634"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "5ee04af9af2435fb02e780db3addf80d"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "55acc07a30735d41323c975dce85b14c"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "2f96a96fbb5a891682f2929d4de4c5aa"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "ed0039f808e3e515f76c5ae479f978b1"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "2705d3857cbe26b4920a8fd9f75a5d00"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "82ffe6fbdcaed65c526c93ae0227786f"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "9d19858f224d38bf813d001011eb80b9"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "4efd1baedef958c84ab99fad507e2bf4"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "5269a40fba8ceff0b0343ad99069e72b"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "012089dcae508d144679987dadc34380"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "b252afd10c30e67a1500739694fe2e7f"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "ba30b4ac88689744ce73986a33f136c3"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "a61f7bcc30dc2adf05ff7e67b258d074"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "194692645df8e93647ec262864659fab"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "be9840603e78a25368741cc13256e746"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "e68f2ca1860d7ebfc307f37b02e0f5a5"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "2dcd47f3b25513f9f92e6ddc0294d1ef"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "4749cf32f40d195c9a2806c872972bfa"
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
