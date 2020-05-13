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
    "revision": "279e87763cda036246a7ccda9932e404"
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
    "url": "assets/js/26.d2e0e368.js",
    "revision": "56eccbf32d3f8789a2aec2dc1f1a2966"
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
    "url": "assets/js/38.0393ddf5.js",
    "revision": "d9f64a067f5f5a8ad679ed0c325583ec"
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
    "url": "assets/js/app.31556286.js",
    "revision": "edf1290e553ec38b529f9dafe8c9fe68"
  },
  {
    "url": "Design pattern/封装.html",
    "revision": "35ad44353b51d24d110f275aa414617a"
  },
  {
    "url": "Design pattern/继承.html",
    "revision": "a4ad4c889e59909e95d467ded1f1be3c"
  },
  {
    "url": "icons/icon.png",
    "revision": "bbed78a1d0aa17254d5c146ed4096b7a"
  },
  {
    "url": "index.html",
    "revision": "166585b41202a91e6f13401377d7b896"
  },
  {
    "url": "leetcode/easy/binarySearch.html",
    "revision": "856acdb3114fd9c54bba62bac0ada33c"
  },
  {
    "url": "leetcode/easy/distributeCandies.html",
    "revision": "45c19c4c2b9e8963c456ce6d12c36005"
  },
  {
    "url": "leetcode/easy/findContentChildren.html",
    "revision": "0200874153aa701181c91193312e577d"
  },
  {
    "url": "leetcode/easy/isSymmetric.html",
    "revision": "4a3004a263c04d52e93715899a486dd0"
  },
  {
    "url": "leetcode/easy/isValid.html",
    "revision": "322a16172d8c5469de4987c8787197f1"
  },
  {
    "url": "leetcode/easy/longestCommonPrefix.html",
    "revision": "7d8cc534e51c06119cde0b5dbd9c2973"
  },
  {
    "url": "leetcode/easy/mergeTwoLists.html",
    "revision": "7541a3ba6f3a6096df92158d5d84b17a"
  },
  {
    "url": "leetcode/easy/removeElement.html",
    "revision": "a654c946b23eab1c3cbdc55a10f0131d"
  },
  {
    "url": "leetcode/easy/reverse.html",
    "revision": "c14671432f6396f50abb6095ddf9bcbc"
  },
  {
    "url": "leetcode/easy/searchInsert.html",
    "revision": "1a20cddd73121d353cab7d3f159bd0d7"
  },
  {
    "url": "leetcode/easy/strStr.html",
    "revision": "3e9069b7967ed7ee67b2e03c7524b39a"
  },
  {
    "url": "leetcode/easy/twoSum.html",
    "revision": "9ef501e30d58627fe0636133c5d57387"
  },
  {
    "url": "leetcode/easy/waysToStep.html",
    "revision": "cbb008aebb977996f2759cac26dba3b8"
  },
  {
    "url": "leetcode/hard/findMedianSortedArrays.html",
    "revision": "aaf659b25d1b5f7af521d8f1de05cf55"
  },
  {
    "url": "leetcode/hard/firstMissingPositive.html",
    "revision": "0e8e7d5651f86f6e5138d8655fbbd132"
  },
  {
    "url": "leetcode/hard/minWindow.html",
    "revision": "13182f6e0504ac5bf20fc5451b1fd2c7"
  },
  {
    "url": "leetcode/hard/solveNQueens.html",
    "revision": "2d6f787740d63108ab23437cf6a424bd"
  },
  {
    "url": "leetcode/middle/addTwoNumbers.html",
    "revision": "c59bdfbe94f5bbec182bd31f78043cc0"
  },
  {
    "url": "leetcode/middle/carPooling.html",
    "revision": "4399d53fda5ae56bbced5f33dad09f97"
  },
  {
    "url": "leetcode/middle/combine.html",
    "revision": "8ea729bdbb446a20b3e2755fb9b93b78"
  },
  {
    "url": "leetcode/middle/findMinArrowShots.html",
    "revision": "492511d2103f6084837faa00a6315982"
  },
  {
    "url": "leetcode/middle/generateParenthesis.html",
    "revision": "2233ca820109b89d9dbbc8546f028f74"
  },
  {
    "url": "leetcode/middle/lengthOfLongestSubstring.html",
    "revision": "e9551f9125eb9bda6541d8a00f647292"
  },
  {
    "url": "leetcode/middle/longestCommonSubsequence.html",
    "revision": "965bef07c8cd2a658c16ed798abdbb77"
  },
  {
    "url": "leetcode/middle/longestPalindrome.html",
    "revision": "5a88fd04c1266cf31cce45606d2e38cc"
  },
  {
    "url": "leetcode/middle/numFactoredBinaryTrees.html",
    "revision": "4b2dd84cc873893ab08b7050cc31b049"
  },
  {
    "url": "leetcode/middle/pow.html",
    "revision": "099cf5241006be6ba8fba46f41956434"
  },
  {
    "url": "leetcode/middle/threeSum.html",
    "revision": "7be316db4142aec6907951da4ff9ea9a"
  },
  {
    "url": "leetcode/middle/uniquePaths.html",
    "revision": "80f31e15a7fffb712213fd16a8764ff7"
  },
  {
    "url": "leetcode/middle/uniquePathsWithObstacles.html",
    "revision": "d3992974be008513716f0c50573e059f"
  },
  {
    "url": "shared/css/BFC.html",
    "revision": "4a487eb43dc26f272d4d1b81e4590d5c"
  },
  {
    "url": "shared/js/babel定义.html",
    "revision": "257cd263a1d8cd34e14972ac38cf2a76"
  },
  {
    "url": "shared/js/继承.html",
    "revision": "89f7de3d65907b2440b1d8ea130328b0"
  },
  {
    "url": "shared/practice/实现组件文档工具.html",
    "revision": "007aa86b59a96731723790668c0a1b34"
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
