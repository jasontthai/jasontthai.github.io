importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "cfee2354499ecb59a368b52923c4be90"
  },
  {
    "url": "about/index.html",
    "revision": "e74358e51a8c83596a63f066eb271a18"
  },
  {
    "url": "assets/css/style.css",
    "revision": "690a35c31f852607136b432c931bf49a"
  },
  {
    "url": "assets/css/syntax.css",
    "revision": "6a933aa35d1779fca5ebabec6f4cf4bc"
  },
  {
    "url": "assets/img/3years_featured.webp",
    "revision": "dd6a69b33a927bff9cf7d4ba64692b0d"
  },
  {
    "url": "assets/img/3years.webp",
    "revision": "d11e011a698d76e7c50ec09eeae6ed84"
  },
  {
    "url": "assets/img/accounting-black-budget.webp",
    "revision": "0baf1cf503352b15ffb3c090aad44544"
  },
  {
    "url": "assets/img/asset-allocation.webp",
    "revision": "55d06022df0403aee95a8426f4d0dd94"
  },
  {
    "url": "assets/img/blur-chart-data.webp",
    "revision": "1b5f133eb62d240f5de0aaaae015ca8a"
  },
  {
    "url": "assets/img/blur-close-up-environment-401213.webp",
    "revision": "5697fb90df91c7433ccc3ca138adbc7d"
  },
  {
    "url": "assets/img/browser-2457113_1280.webp",
    "revision": "51f3dbfaf8dfe86fdda3c528609fe17e"
  },
  {
    "url": "assets/img/circleci-build.webp",
    "revision": "e107abd1989ae254b7f2e2b78d298f22"
  },
  {
    "url": "assets/img/circleci-logo-1200x630.webp",
    "revision": "4efd97ebc1d2dd027859682d794f2e3d"
  },
  {
    "url": "assets/img/commento-logo.webp",
    "revision": "0887ae3f52c161c74d8ca74dbb342ecb"
  },
  {
    "url": "assets/img/commento.webp",
    "revision": "4b4020361b37988244fb2481957dcca8"
  },
  {
    "url": "assets/img/devtool-audits.webp",
    "revision": "da9dbf21238d4ff002f34ae753eb6ca6"
  },
  {
    "url": "assets/img/half-marathon-cover.webp",
    "revision": "3b1e1e0e323820931dbb1ba9bca2e00a"
  },
  {
    "url": "assets/img/half-marathon.webp",
    "revision": "e68000677d43966036b5b78a32babb8d"
  },
  {
    "url": "assets/img/hello-1907233_1280.webp",
    "revision": "f69edd3bfc208c36992a01fa426b4dd3"
  },
  {
    "url": "assets/img/ifttt-featured.webp",
    "revision": "d3540508507f4184a512933332c1c190"
  },
  {
    "url": "assets/img/jasonthai-mobile-view.webp",
    "revision": "96f545935ef61945b4f9bda03874a1f3"
  },
  {
    "url": "assets/img/jasonthai-web-view.webp",
    "revision": "8df6f2d17d3071f96b23153170ffd7e4"
  },
  {
    "url": "assets/img/logo-travisci-wide1.webp",
    "revision": "a84c54dd4f2caedc916a9f45149958c1"
  },
  {
    "url": "assets/img/money-matters-1173105.webp",
    "revision": "b1a4cdabcc05f8a73e35ace110804e2d"
  },
  {
    "url": "assets/img/pagespeed-featured.webp",
    "revision": "986b659fabd25c6f2a28ebc3b704de88"
  },
  {
    "url": "assets/img/pagespeed-full.webp",
    "revision": "4f12e06567c17af92eabc1900b03e0fb"
  },
  {
    "url": "assets/img/password-checker.webp",
    "revision": "44530d2e9aa5ac1b4ca9e1a8e024f482"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.webp",
    "revision": "fb28067eeef90e00ae79b6085b890547"
  },
  {
    "url": "assets/img/postgresql-vs-mysql-features.webp",
    "revision": "810b3a78726b4ac5be6311bc70c18e7b"
  },
  {
    "url": "assets/img/profile.webp",
    "revision": "2f946d0df136e05ac9535aa661ee28b8"
  },
  {
    "url": "assets/img/puuung-cooking.webp",
    "revision": "b8ea0cf8e13cc2d15b9ba73675b8d80a"
  },
  {
    "url": "assets/img/puuung-dear-wife.webp",
    "revision": "40fb5c8199e9d971d557cb879da57296"
  },
  {
    "url": "assets/img/puuung-traveling.webp",
    "revision": "61bb1a6dfa4933cdd2e8437a5814de7e"
  },
  {
    "url": "assets/img/pwa-logo.webp",
    "revision": "ff1103cc4d47d959894096e1823a1818"
  },
  {
    "url": "assets/img/pwa.webp",
    "revision": "22b0a6f0e5ad27392ffa8a50ea6f7ede"
  },
  {
    "url": "assets/img/responsive-media-queries.webp",
    "revision": "40df0f31f890356b4d6b23e39e4d157d"
  },
  {
    "url": "assets/img/succulent.webp",
    "revision": "53a18d3ed541a8bde79d3c868344ced8"
  },
  {
    "url": "assets/img/the-month-july.webp",
    "revision": "a3442a8d8657a936f2ee2a4c59d6573d"
  },
  {
    "url": "assets/img/tinyalias-analytics.webp",
    "revision": "a868ece8de2192b99641132ae283f569"
  },
  {
    "url": "assets/img/tinyalias-authentication.webp",
    "revision": "211eba794a70ab29e1af5d8c9d7d6d22"
  },
  {
    "url": "assets/img/tinyalias-diagram.webp",
    "revision": "58f3c1d0fff3fe59ffd69045219a82c9"
  },
  {
    "url": "assets/img/tinyalias-mindful.webp",
    "revision": "073cacc4ed05424fecbb99a5a0f5b6a7"
  },
  {
    "url": "assets/img/tinyalias-news.webp",
    "revision": "a7ad126475a33431f2eccccb0927bf4c"
  },
  {
    "url": "assets/img/tinyalias-password.webp",
    "revision": "271988583eb6fe38b501c9508c4d9796"
  },
  {
    "url": "assets/img/tinyalias.webp",
    "revision": "0c13375b0c7bd7ff8c4b5d067be882d4"
  },
  {
    "url": "assets/img/travisci-build.webp",
    "revision": "7768b4ef74a043b18afddda029638f00"
  },
  {
    "url": "assets/img/visited-map.webp",
    "revision": "b271321badd92b935b235dd33860641a"
  },
  {
    "url": "assets/img/workbox.webp",
    "revision": "1013955747d181bbca054f4fc7b952e9"
  },
  {
    "url": "assets/js/countries.js",
    "revision": "9655c6e2fc0472433407ff8a50d4c35c"
  },
  {
    "url": "assets/js/custom.geo.js",
    "revision": "7af09e786b16f198cd1961e7d73b0568"
  },
  {
    "url": "assets/js/jasonthai.me-20190726T112605.json",
    "revision": "c0d4bdf9c151c8ddcf1d40148cb57b19"
  },
  {
    "url": "assets/js/lazysizes.min.js",
    "revision": "149ff45fc6c2f13e892e438a58abb77f"
  },
  {
    "url": "assets/js/ls.unveilhooks.min.js",
    "revision": "26520cf1c19aca4f9fe526db7f6f9944"
  },
  {
    "url": "assets/main.css",
    "revision": "3a2438add1789c63ff5537216f3e6d13"
  },
  {
    "url": "assets/minima-social-icons.svg",
    "revision": "3a70b871c930a7ed8af27caa162af123"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "c971b0900f92bc21e56b7a52e0800fb8"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "3dc0f8e4a3028cdc480c9558edfc9259"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "da15b2e665d88804520a8542a0c151d7"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "39e1983cd80e78d1a9fc9d58c527c66b"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "eec60faaf1d603b1147c96be8c629e7c"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "81b9ad7702e0bb791373fb3274a9e627"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "36ea0d185f571a8f05273cbde8f5563d"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "da16bffd5c51e53b90d9a7fa14a62ee5"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "10a44f5d011b32ba20bc882ef71d7d6f"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "bea50cd3b00442e29da621bb87a8d1c0"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "60d62e3d1184f4e326ce177f46ff2e9e"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "1113be7d3f7bdacf32b746d3fe770043"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "014630825ea7298b84bbd9d079bda227"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "1c5890232e3f6d486290a6e532682093"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "5c1db21db40c63839b9ba9c5afa52bac"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "ec7aab8a3074890d7c2a47d8de06ab37"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "feb22f685fc48848a226286c0d06df57"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "e01d4c7165f6e713798ea477a8a08fb1"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "c7ebf3f0fb5564366ba86f66042b0f0d"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "e3f2b538ca6a934408eb65f7116758a5"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "1ee5a1ee8067758f0b66bf0ba16b1cde"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "beb869f9e6462c1ae3e6e7bd572de96f"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "54c8645626320e3573980d81e44e31af"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "2980104d2effa9203ea6a668a3deb598"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "9fda6393349186eb9ea6ee11f8beced0"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "9c2906ad8216128ad5c2fb58d1042b6b"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "a9404642c9618089a50a119e54504e35"
  },
  {
    "url": "blog/2019/08/12/how-to-host-commento-on-apache-webserver/index.html",
    "revision": "2ff31dbb7ded63407eaf75ba2d299c4b"
  },
  {
    "url": "categories/index.html",
    "revision": "7156a48500b4bd1c5986030f5db7de26"
  },
  {
    "url": "default/index.html",
    "revision": "78a95994898d3fb8cd8c36ce3e465ba6"
  },
  {
    "url": "favicon.ico",
    "revision": "d45dae1c4971840baa50643d92208269"
  },
  {
    "url": "go/robinhood/index.html",
    "revision": "32133c2962246945ebe1f74834e6ddc8"
  },
  {
    "url": "go/wealthfront/index.html",
    "revision": "ec7844f03947933239687924c1513d9f"
  },
  {
    "url": "go/ynab/index.html",
    "revision": "7b93db56d77f59ed3ce5a7000a2f6f0e"
  },
  {
    "url": "index.html",
    "revision": "99401eb3c2de13e8c4dbeda011887611"
  },
  {
    "url": "manifest.json",
    "revision": "341768a8729bf2202ecffa5f36da3560"
  },
  {
    "url": "page/2/index.html",
    "revision": "eeb271a0c293807b9f411bb2b884ed74"
  },
  {
    "url": "page/3/index.html",
    "revision": "74adadcfe69e8b98fa6b5c06fd6a59de"
  },
  {
    "url": "posts/index.html",
    "revision": "09916592b2214bee7782f444137154cd"
  },
  {
    "url": "redirects.json",
    "revision": "b45bb3f153aeb6a887f6db9b1f1e491c"
  },
  {
    "url": "robots.txt",
    "revision": "2fac8a129285b1b58020ae33bd484690"
  },
  {
    "url": "tags/index.html",
    "revision": "2bfa858a069b670a3d2c27938576422b"
  },
  {
    "url": "vi/index.html",
    "revision": "931e353f603b8f06a44c998811ede55c"
  },
  {
    "url": "visited-places/index.html",
    "revision": "7de2529ef8dbdc3fe82bb1c5f35c8ee5"
  },
  {
    "url": "workbox-config.js",
    "revision": "ea01ee827d6da686aa3dbb09fb2783a0"
  }
]);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|json|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Caching Content from Multiple Origins
workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);