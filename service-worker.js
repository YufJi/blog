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
    "revision": "e3a9cf9fbe1ad1a107635085354a7a90"
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
    "url": "assets/js/app.7247dbc8.js",
    "revision": "12dc9d877fe49c48b1ace1d80ec0b1f2"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "c63992221110e56fedae6d53d0dad9d4"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "966ba8d289eef010acb1c2cc011b671c"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "7fa15acef5d74b1f88323d8a092944a4"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "3f3ac01c235669051f2860ad95cb3590"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "3785fb4d5405497f5bee0fb5fdc5801b"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "67a3ceac0a9e4a1b1ddc5b3c84f32c79"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "4c82541617b7bf9e927e9d5dd0959b43"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "19ef1afb58d6179c8d8219cf7252c7ce"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "3a5d63e323746f82509f7ee07f45ab07"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "c0fffe7bf7eb1aa6d3cc83f8b2ad8127"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "339869f14f753f27f86ce0cc0f2b66ee"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "1e326a3b0fced30789f7602bf9267280"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "de6b7e576a5993ab7d267c69b5b0227d"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "223336ab7b05e4f1720e53860b0a7616"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "62fe2125e4c778c29d97c3ccc4828e13"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "71b836f0aeb30d3b2a83aa80b6af62fa"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "f39058445abe22eb5c2b99a6bf49e52a"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "773647dd81725ba1215fdf8c6e0fcc32"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "f29da9cf9b61740b9a328b501a7bdcfa"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "af1bb8c49de022bbcb78f363f3b9a68b"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "373083b00145a264e10415fe9449889b"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "8b1efe3e020a3e146b9817de037c2393"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "0938d37286da0d9b7e8b53572ced52cd"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "270fa7b2cbee32f03ac1dd5064bb7a46"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "b97d81bee07f128444bfd76b54675e58"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "16bbaccceec7a12a7fac278ca1c8dc3d"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "b1d56a95a0ee0c6bc4f809a79ce02435"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "9942e12ae4d42d374754b00d400ab8a1"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "846ff5a99632261fd7577ec27408feeb"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "c464412b356272594bc7e2fe4ed5db39"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "4c3d7f77b0f092bddd580736d9387cab"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "78021219b50965f9a82eb454b61bd7f2"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "5d94a3910f105f72d8fe07b2e7575604"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "80c2ce074892e98116744c45b5f4d3cc"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "e33eac531c3d07949a701bc1dba7ddba"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "c2896cb074ee322749e35d5da6a7ec6c"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "217ecdf15c09a42ca9e946b490f2a524"
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
