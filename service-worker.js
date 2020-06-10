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
    "revision": "0da3d9d02cb2f1211d58b8bb7a4cbad0"
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
    "url": "assets/js/30.7f107608.js",
    "revision": "333b267474c93effee51baeb06118abe"
  },
  {
    "url": "assets/js/31.185d7183.js",
    "revision": "b7f71d8fb59924f24264adc9a2623b4f"
  },
  {
    "url": "assets/js/32.7a343f1a.js",
    "revision": "88cdf8687a66fe5ee7914839528d9683"
  },
  {
    "url": "assets/js/33.6d045f40.js",
    "revision": "82a72bd64667c39a8cce293c1beb6e8c"
  },
  {
    "url": "assets/js/34.7bc1afdd.js",
    "revision": "dde8aa47c6aa3f06bbe9525dfb6b58dc"
  },
  {
    "url": "assets/js/35.e3d0de69.js",
    "revision": "d360a771357f8925adf01b121ad8d6a7"
  },
  {
    "url": "assets/js/36.03d730b2.js",
    "revision": "ec8dfdb1cdffc55684c1e23789e5bdac"
  },
  {
    "url": "assets/js/37.900d74b1.js",
    "revision": "6a8491f680291aefb75711f60e4c872b"
  },
  {
    "url": "assets/js/38.c89636b1.js",
    "revision": "5964ccfa4220ab899d73b073d213b69d"
  },
  {
    "url": "assets/js/39.afb40b62.js",
    "revision": "cd811fac3274f45b5a7b08e9d8e48c90"
  },
  {
    "url": "assets/js/4.f3244b9a.js",
    "revision": "05e37afd6f913c39378f985a52641666"
  },
  {
    "url": "assets/js/40.a0e58198.js",
    "revision": "cfc72d6ac643267aad4fc360c72499b7"
  },
  {
    "url": "assets/js/41.bb460884.js",
    "revision": "49b2fee2ffb04278879861145405d5d1"
  },
  {
    "url": "assets/js/42.bf2b71fa.js",
    "revision": "4cdf3695e6b53521d58de2c46faee5cf"
  },
  {
    "url": "assets/js/43.ab077b0e.js",
    "revision": "9afbee60bfa9375cd6eaced8b689bf2d"
  },
  {
    "url": "assets/js/44.b89a70bf.js",
    "revision": "725861f76b4c26a39587e9e66b35a24c"
  },
  {
    "url": "assets/js/45.58757ecc.js",
    "revision": "2de627484d6c3191a8118e813459d843"
  },
  {
    "url": "assets/js/46.fa21db12.js",
    "revision": "80aa3703001d4c3923a3c19e1c6997dd"
  },
  {
    "url": "assets/js/47.38d76420.js",
    "revision": "64aa075a37d1fabe23edd2b473f46308"
  },
  {
    "url": "assets/js/48.a229ae3d.js",
    "revision": "7b2d88908d2a4ecaffa3da3dcf7a0a9c"
  },
  {
    "url": "assets/js/5.f56acf8e.js",
    "revision": "fbc7ebbc17c9710aba44ff7221a58729"
  },
  {
    "url": "assets/js/6.27657168.js",
    "revision": "5516db25401dac7e4556d14dd8699c2f"
  },
  {
    "url": "assets/js/7.ddb541f8.js",
    "revision": "f6364a769a83d8b8af06e167a5a341c9"
  },
  {
    "url": "assets/js/8.678cb4a4.js",
    "revision": "7ed72a069bdf4c698b80f18581aa8cbc"
  },
  {
    "url": "assets/js/9.870f8f58.js",
    "revision": "1493e3406507750d4a34fabefbd31b94"
  },
  {
    "url": "assets/js/app.8f96dc3e.js",
    "revision": "69e67ae2652628d578f08c11b11c6e3c"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "83abce94d8cf3769d905375e4173188f"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "0483199336d9a00fd9870740df2d55e0"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "8bff1d28d32d312ff24a98aeac65c3a4"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "89e3c64463017ab1b978d9d3e5bd2adc"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "70576ce0ea5baffd31b273d746f83d3b"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "023937d25522ff09ebcde58f4957bdc9"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "d19285f4d8824000ac67986558ca3e4a"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "5e912f93507e816c6234147a4cc308a6"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "9f12c2e6a5705dc945e20132f3de0e66"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "b3389c99d6e19b3b0dac7beb829796c7"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "c24a7161407b1b1ca92ac734d0266202"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "5075fcbf658b7c9a494a83c00d61ae30"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "0c94c0492da0c26007db8b5d01b68369"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "b9b4f274706ed2549fcd588e814de5e1"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "4b2089797d5c5bb6e10882d4d851557d"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "e1eadfbe2f07a093f0a094e52b7f7bdf"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "789e5d1a66bb105035ae76a2aae07785"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "754b4fdb5843c2c39363eeef0de2144d"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "c9797d90a3b64f2757f285e66fcda017"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "7ff65dd86c167a0ec3f471be21fd46ae"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "a15284d3579fd7ba61a0afa99901fb98"
  },
  {
    "url": "leetcode/middle/buildTree.html",
    "revision": "4b01970c9d43ea986f800180bf561ccb"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "28ec55500634039ac0fe6de9fec0013e"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "70db4da4e6ab41425a5609aeaba27ac2"
  },
  {
    "url": "leetcode/middle/convert.html",
    "revision": "4b388af159781067668019491eb7e9b4"
  },
  {
    "url": "leetcode/middle/exist.html",
    "revision": "52233d6f89235d0f5f9ef3acc48c71ba"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "e1123f481560a0780037d942113b5657"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "40f399bec439909a891149f8fff9df7b"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "064f254dae85e8471eafe6019b63a7a8"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "2ea98c0404135c81ffca1d39f94a6d08"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "0b1c05b490601f82f15cfef0dc4ea399"
  },
  {
    "url": "leetcode/middle/movingCount.html",
    "revision": "b3880733f4b4cd3402ce16cc126f9075"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "482125abad750bf53cd508d4cc60a5dd"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "9aceedecf4eaeae295251b8ebf4db446"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "2d73b0c023e8bf3bc0ad64b5e3e4e8c2"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "c5d8406d4ab0318a32097d510ab1080d"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "8e9b5ec2ba7795b5561ac36be6dfaef7"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "6e901674607a634f3f332fefd24ab893"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "848d221cb9fd4f204856699069209c97"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "1e58a226c8aba1a16dd8c930ea491936"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "55f6000977834ccc1abd397601fdfb05"
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
