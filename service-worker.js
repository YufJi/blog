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
    "revision": "c670fc9b5de6680224e0d867fd6e8000"
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
    "url": "assets/js/10.ea3a960e.js",
    "revision": "70b6a7dff940387df697de1f71bd455f"
  },
  {
    "url": "assets/js/11.510052a1.js",
    "revision": "91c72401ad517a07052f8dd0c03f6e31"
  },
  {
    "url": "assets/js/12.58add903.js",
    "revision": "f7460c092e9490b7a143fefca5a9547d"
  },
  {
    "url": "assets/js/13.176921de.js",
    "revision": "87c4a68413ce952f9ca95eaec05c25cb"
  },
  {
    "url": "assets/js/14.5c5e6d6d.js",
    "revision": "aff80b5faf78ef8f40abab3a7236335b"
  },
  {
    "url": "assets/js/15.61259627.js",
    "revision": "e9a5af97c2abf72c5c1d30061be5a551"
  },
  {
    "url": "assets/js/16.7b64ed79.js",
    "revision": "49e49e22f47e81ca85d41ff0f24e5d6e"
  },
  {
    "url": "assets/js/17.aba99f1d.js",
    "revision": "2cf2710f57dc36019dc2e23f1d785031"
  },
  {
    "url": "assets/js/18.63254333.js",
    "revision": "4b610ac15b5e974cc10923cd5c2ebd5c"
  },
  {
    "url": "assets/js/19.205205f9.js",
    "revision": "dff2c410c07d9e8aba0502b19375074b"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.b84b3f85.js",
    "revision": "c62273f5abb4d1dc040766d406d904aa"
  },
  {
    "url": "assets/js/21.2ea5c789.js",
    "revision": "b4a31c733d4b7e99b8d2f9732cfea340"
  },
  {
    "url": "assets/js/22.e1a27b80.js",
    "revision": "6c43e25d5f84f7371fdb3cea2e4f840f"
  },
  {
    "url": "assets/js/23.c1f861dc.js",
    "revision": "1de998fc116da085e7bcf1ea4346ece6"
  },
  {
    "url": "assets/js/24.2ad8b2b6.js",
    "revision": "dee30f86b6029a5b8ba2dc4b40dc30a2"
  },
  {
    "url": "assets/js/25.79a890d6.js",
    "revision": "eb0ce93bee880b0891d391c0389094d6"
  },
  {
    "url": "assets/js/26.cb0c10c8.js",
    "revision": "568a3dafb1c0df481799f152ceb49ceb"
  },
  {
    "url": "assets/js/27.0443f740.js",
    "revision": "2673c8cf41955560778554799ea31d8e"
  },
  {
    "url": "assets/js/28.de5345f1.js",
    "revision": "c9924d9165483e0789d0270779577617"
  },
  {
    "url": "assets/js/29.29d76ddc.js",
    "revision": "72d1ac312b4c151765913e6ed7146be7"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.d0ed9882.js",
    "revision": "1f05c1766b18f440bba5773fa2f5fcb8"
  },
  {
    "url": "assets/js/31.362483d0.js",
    "revision": "770eccf879ec238087634dc019da24b5"
  },
  {
    "url": "assets/js/32.9a8e07d2.js",
    "revision": "aba5987918cf8ae5e874e3d7b6ccd6a2"
  },
  {
    "url": "assets/js/33.56385866.js",
    "revision": "0d7a16307571807b0d9b75fd5f21a586"
  },
  {
    "url": "assets/js/34.dbd25b16.js",
    "revision": "cb5b71bfd4f0e77130aeff9ad4d8a62e"
  },
  {
    "url": "assets/js/35.f2f3670d.js",
    "revision": "eae8da96585155ec8232422e447bcca5"
  },
  {
    "url": "assets/js/36.90cd710a.js",
    "revision": "55db46f8668f68dfb254c056d0c17ce1"
  },
  {
    "url": "assets/js/37.32c9384b.js",
    "revision": "abb885be967eb2339a8e854bdfa206cd"
  },
  {
    "url": "assets/js/38.57d66fe1.js",
    "revision": "22dc883eec59508a3ab283067959bd80"
  },
  {
    "url": "assets/js/39.81e70921.js",
    "revision": "1bc0e50f920a3dbee80f303e652ed531"
  },
  {
    "url": "assets/js/4.59b406e1.js",
    "revision": "11e314cc07bb1f2ed5ff7eef3b0b7d3e"
  },
  {
    "url": "assets/js/40.3e2bce68.js",
    "revision": "1d0e138ad58d638199e1ac83bbc866e1"
  },
  {
    "url": "assets/js/41.ccda6bc8.js",
    "revision": "5a48a3f7bde87a6ddb787a726e76e04a"
  },
  {
    "url": "assets/js/42.ca66c759.js",
    "revision": "bc98b129bd439269396319508c99a8dc"
  },
  {
    "url": "assets/js/5.e230d034.js",
    "revision": "7da5ad6646ecbbe34d30765be3c87b4f"
  },
  {
    "url": "assets/js/6.22a2f676.js",
    "revision": "45f421b7e3e25ff9c7b0c7d1118bcb81"
  },
  {
    "url": "assets/js/7.2f26604d.js",
    "revision": "4db37f689a5bb6e1f24f0222d35fe739"
  },
  {
    "url": "assets/js/8.2dc94c5b.js",
    "revision": "6c91bf36b45c57f13c8e576e7e1b7855"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.7f4469c1.js",
    "revision": "cf1ae26dfa132327d4b22871a7ec1399"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "8c1ac7e4904fa56261451c4b286ba2c6"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "99df49e0e11f30b64c4f91bd29b1da69"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "e90d10255c6ad049777f4c632e738349"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "bc2233ea05ba5163e787b870fd767b26"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "1a47fa0ca4f14e6568aba4b3814de3fa"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "61207b4ed0ea27f97bd75bbd200d3a6d"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "80821417a78096c3591fd1c913002dfd"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "7a6416327ed37d559d8b423281110489"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "0a8467b2e71836fb5ecca0a6f9fc2106"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "8bde9074d0d40c673b939aa0a012d0ca"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "202baab4d77f95d078d4c3d01595f494"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "cf5464d4a7cb73ddc76acc5018f7a7e4"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "f4b51af16e9404232ee6c90b5b614ed9"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "39aafba8679ad54053eb8ce37ec06fc1"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "19803e43f7098b3bbef60a482c4d5287"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "2b5a8ea1adeb89612ab47111c228fed5"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "ca9c332c156b38c9eb34b0ca0c93530f"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "06a5464bd865ed0eb4cf3cc1bcb5c8b4"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "441cc2bf3f3832a8891cea1b2eec6b83"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "28c354e88642ce4157f90a1343e587f1"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "b822e607838843767b0d5b2d811e1e97"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "93c401fccb9a27e8fe519effa9a3902e"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "d06b76f2051dd15c5a95a47a4963b167"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "5299896b98c787498c56c7fe825bf8cc"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "82717c33dc40d98a69cec109a918a6ab"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "b7ffed1298fe9eb440489add76cbe4a8"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "c77856bee6d5df1ee1020963f0f38ce3"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "9ee31bb7d727ab857e358e07dcb7497d"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "68c280be5cdc9a1521b0ab902636418d"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "cfc20670e21b9765616e667d9ffa0d7e"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "6682eb58a5f7b03ceb06006516cacdcf"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "1bc052f6e75f83ec53d772db7c54402f"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "45229e6d579b10d76ede513ed298876c"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "effa4021de682a238e8343c5af28a5ea"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "171574c4366ff86cd42e12bf9370fd49"
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
