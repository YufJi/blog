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
    "revision": "3198d00c22cb7570f199786879301e73"
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
    "url": "assets/js/10.625747bd.js",
    "revision": "6b0a17537e3c52e8cff2d296826c96dc"
  },
  {
    "url": "assets/js/11.13fac0b4.js",
    "revision": "e785d745aeec4968d3243d51abe9b1b1"
  },
  {
    "url": "assets/js/12.8c726959.js",
    "revision": "799ea46cd628da73a278199876669e3c"
  },
  {
    "url": "assets/js/13.c7136440.js",
    "revision": "983437403171cecf3802b68ee8bbcf88"
  },
  {
    "url": "assets/js/14.753bdc9b.js",
    "revision": "a3bccc8dabe89e4a1858f58ba3c95094"
  },
  {
    "url": "assets/js/15.0e8e720b.js",
    "revision": "31962c75a904c1f1730eabeab904c950"
  },
  {
    "url": "assets/js/16.0b46fc03.js",
    "revision": "ecc527108235c36f86d9e59c58850150"
  },
  {
    "url": "assets/js/17.b12c7881.js",
    "revision": "e85911c1c1a8da8a1918d9037a426797"
  },
  {
    "url": "assets/js/18.b241b150.js",
    "revision": "7d0722b1914e9086113b28fcb36c303b"
  },
  {
    "url": "assets/js/19.a294cfb3.js",
    "revision": "9ec54001f365caa5578cc8324a7a765d"
  },
  {
    "url": "assets/js/2.341844bd.js",
    "revision": "37c94b8735265b38fde984ba8397d5f0"
  },
  {
    "url": "assets/js/20.be53b3f6.js",
    "revision": "a6971ed218cb58ce0abd501e38cdc052"
  },
  {
    "url": "assets/js/21.32d92e95.js",
    "revision": "4ffffec8347347da4925455b325323ae"
  },
  {
    "url": "assets/js/22.7b92fc65.js",
    "revision": "80c812cd1502605806cae2365b7142d7"
  },
  {
    "url": "assets/js/23.84d2c896.js",
    "revision": "8ea376e6ca8e27986e6ccdd599905b8d"
  },
  {
    "url": "assets/js/24.4aa0917d.js",
    "revision": "c2b1da407c7dea9830e0444125290077"
  },
  {
    "url": "assets/js/25.25666cd4.js",
    "revision": "de4a7a523e348c0dcf7a51b6975b2532"
  },
  {
    "url": "assets/js/26.a6f4c6ce.js",
    "revision": "9f57bdd99ed25bad5b59cf71ea518391"
  },
  {
    "url": "assets/js/27.892346d6.js",
    "revision": "f85bf92378a754a0b78717fb000721e7"
  },
  {
    "url": "assets/js/28.d38198e3.js",
    "revision": "2113de6a3f768248aa4f8580c69ae360"
  },
  {
    "url": "assets/js/29.475a6bc9.js",
    "revision": "aec5aa9f9721a769706e83a64eaad9ca"
  },
  {
    "url": "assets/js/3.b516bb16.js",
    "revision": "b5897ec68eaacd82cca59d988e843fb0"
  },
  {
    "url": "assets/js/30.623c3336.js",
    "revision": "d8976dd2dfaa025ca1ebaf27e8ce54cb"
  },
  {
    "url": "assets/js/31.c87d5ce9.js",
    "revision": "acd0eef33e11871a9fe2701c357e7fb9"
  },
  {
    "url": "assets/js/32.10226827.js",
    "revision": "5216bf78c83895b8a3e5ed14439221ed"
  },
  {
    "url": "assets/js/33.28695714.js",
    "revision": "6a113dff196a9ab5eb0f6fcaec8a51d0"
  },
  {
    "url": "assets/js/34.cc37c419.js",
    "revision": "5ad72059a62fd566fc26d999ee27b0de"
  },
  {
    "url": "assets/js/35.b70a4ba1.js",
    "revision": "1073fcf631beff0b84a69b816d80e250"
  },
  {
    "url": "assets/js/36.8043477a.js",
    "revision": "27d752fa97bae1675eebf5057b5557ea"
  },
  {
    "url": "assets/js/37.6a3cb732.js",
    "revision": "42c3749622e68cb8d059f7579a30c1f3"
  },
  {
    "url": "assets/js/38.2f3124e0.js",
    "revision": "390c5747ed0a32bb2c884e78a0f79877"
  },
  {
    "url": "assets/js/39.d866f1f3.js",
    "revision": "9535d19196f797c54bab38d7c14a655c"
  },
  {
    "url": "assets/js/4.1c02c2f7.js",
    "revision": "bd5dba835971518e0420307794d32a72"
  },
  {
    "url": "assets/js/40.a15bc6a4.js",
    "revision": "f1122905cd17102c3280e024b3bac8ae"
  },
  {
    "url": "assets/js/41.65a4d9b1.js",
    "revision": "2ae73f036fe91b1750224f4ca084df1e"
  },
  {
    "url": "assets/js/42.05a5e460.js",
    "revision": "714afeb3a09a79897e00c5a3c6ad1bb5"
  },
  {
    "url": "assets/js/43.689756b3.js",
    "revision": "d2aa71f255d38678e5bcbbb86bea7c71"
  },
  {
    "url": "assets/js/44.744dda30.js",
    "revision": "6bfd9131239e04e2786db1127c8d598e"
  },
  {
    "url": "assets/js/45.8ca5ef62.js",
    "revision": "e32ae608e5f66c8bf1081e8ab6704703"
  },
  {
    "url": "assets/js/46.d005ca8d.js",
    "revision": "5d4f33599e6dbecefd4c2a64f5c5cc0a"
  },
  {
    "url": "assets/js/47.64a586be.js",
    "revision": "90398754f12421f2e48760a879a3e3a0"
  },
  {
    "url": "assets/js/48.7a3415e7.js",
    "revision": "cfa22f85d5ebdd1f2c06b187c2df8856"
  },
  {
    "url": "assets/js/49.47fd85aa.js",
    "revision": "26093afc17797a364c36ec6947f8148f"
  },
  {
    "url": "assets/js/5.5575e5be.js",
    "revision": "48a13851056154b11831f880b98a5ba1"
  },
  {
    "url": "assets/js/50.9c59fa20.js",
    "revision": "5f8cea40ebebf48a30d0f0c4cb81dc67"
  },
  {
    "url": "assets/js/51.3614ee6b.js",
    "revision": "40d5f381266c419b5bdf30668f0283ea"
  },
  {
    "url": "assets/js/6.6cb7d0ca.js",
    "revision": "c49dfab6ebaad1a622227fc17827d812"
  },
  {
    "url": "assets/js/7.a993a268.js",
    "revision": "d5d98592995c5013e61ae73aacfb6044"
  },
  {
    "url": "assets/js/8.a24a6389.js",
    "revision": "1022b2b26cd5c6c3d1b8495ba3a27599"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.40e49042.js",
    "revision": "f257acf33260ab30641a09e931e1150c"
  },
  {
    "url": "Design pattern/MP.html",
    "revision": "f229dd1f19c8a888702e1d78ba701012"
  },
  {
    "url": "Design pattern/React.html",
    "revision": "cceeb581121bcaffaa25a44eb26bc0be"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "021f1a9bc118e3a9aa8561dd577345ab"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "ce635ec98c34e1435d756b3d3f6063cd"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "65341fbea3baaf929287c8ff9242e300"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "d821c55f649376de0be3374186d1bab7"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "7a65a977edc730abd495a4d671b5c83c"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "8930076468afd72970a1481979a8409b"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "0c12e5fcb41a8fbd41687652de579eaa"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "0f175634f149d3bc4b50edaf6c9998c5"
  },
  {
    "url": "leetcode/easy/largestTriangleArea.html",
    "revision": "7f58ed267083136c7b5b1566c9b3a58c"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "0239252113400b7055c4e3a9b206aafa"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "149a15ba1a2afeac5c97e7452102c112"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "20176235067a748ae2c7f4c59114b88d"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "5b360b49222ff136a482b5b6943037b5"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "63d1aa2318eb745f5e3628d18b95c0d7"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "b077cbe56148912f55367d151903a4df"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "95545e1b8e3e0dcf95ba258e23b96c0c"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "4595c6ec73e98aa3a80e45979eea9e25"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "6af0e584a8501483e463cf85c49fbbff"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "81b6b2c4761c815a19ff596e73c9686f"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "5006c23e2c7c17a099d2010598cc5933"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "c1792f072bda6e9464c8da0ad3271a81"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "1afd1c32cecd67ac13e3e7b132e4e495"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "66b6cb2dd8f492f1887ec732dc9859ec"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "121cc362de847400c8e35a0fc922b80a"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "f7e00c32d690d56ad6d47947cfdccfab"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "552d532ef75529749f0ad6182b71096f"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "60974dc4b625a87b711b1d9305e59222"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "9e1da89895c054a7abfb47e31b735ae3"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "6f419dadf0db93d8b8b059619a0c2dbc"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "5cd010350147911f749502168ff10105"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "7dcbaa8d6c9080a9ebd2bfeb28222132"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "5aa3f0ef24830f7f699fbe1aa1870801"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "3e38b0d8ca12c3eecb1497568e268426"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "6f0a143b69c5b404b8b230fcdc891788"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "f267fd139c1ca1b27affd989b647b83e"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "8673e244815f79e1ca0e3dee69cf793f"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "bd2c8a7bd047590219b2f21e29916fad"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "56877ae59ae793a25524e7c47ffa6764"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "6a0e74aa02faee5dfd6af805d9d31a39"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "834834c88dbe3e7ebbc1be38f47a5580"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "cc26032e7b5dca3df639a586eb7772d7"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "b7fa7faaeaf1a45b039c602da10fbc78"
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
