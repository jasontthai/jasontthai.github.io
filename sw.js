importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "1595b44e2540463e618d277d16391bb3"
  },
  {
    "url": "about/index.html",
    "revision": "3a73111d55c11fe61ec8012db64613d4"
  },
  {
    "url": "assets/css/style.css",
    "revision": "2d6e64ca388f3ed81eee7fa7090372f6"
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
    "revision": "d1c64cfd220fa0f136f033995e84fb2d"
  },
  {
    "url": "assets/minima-social-icons.svg",
    "revision": "3a70b871c930a7ed8af27caa162af123"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "cadedad996edd31735ffe91c75260e71"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "93b02849962d89833f2abd5f55cdd603"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "83d62469f2ac12c9efab7611c94cd3dd"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "32dbb119e92159fddca53d886e1e7373"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "6fdd748e5fbfdc2e3a1447f1e97b1474"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "f97b6eaacdccdc3533f5eddf94e807ef"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "fa1c2fffb32c8452c19b225c7874940a"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "47e2f4fae4785418a5de0cd9ef20a537"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "4e65858152b4e5b89585b18b4796eb87"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "bb1b5c0d08b99428597dafe104786b03"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "13bc1024b479f0e40c12c87edac0f554"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "fdf6dfa6895205ec562686a5c5835382"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "4ab9b7cb4fd6733745e89441cee94c57"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "18cf8a67d6c04cff9dfd5aee80e8223e"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "87c09276a142cfa0aacf55ec0db9f984"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "a728d6f61fed8002bb8a7f3038d444f1"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "4358ada50eea07fbfabb21e038b7b206"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "9f6df8553f21398d88135e851d8471c8"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "012cb4ecfba5a9a4f1dd84c7850bcb02"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "e117dd3319c5b2cb56b74d43792f2248"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "3279bc65360b74c0f196943053f41b2c"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "dcb29e9895e3504c5bfa20fd8861d1b2"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "0a691e318e004d6e666e9846d913000a"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "91e7499842570c3a28789336e6584cc4"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "642ca2e462b498bfb57d4dfa056673dc"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "b1d7ece2f4cf152310f5b89d3e1d4571"
  },
  {
    "url": "default/index.html",
    "revision": "a8d37315af5dbea5c8aa87f40c15c995"
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
    "revision": "2303144724cc0c7b5c8d5df24087f7c3"
  },
  {
    "url": "manifest.json",
    "revision": "341768a8729bf2202ecffa5f36da3560"
  },
  {
    "url": "package-lock.json",
    "revision": "6da598e2dc428f55ee1a57aa044133e3"
  },
  {
    "url": "page/2/index.html",
    "revision": "4934a1c2bfb2a60565c637131db5e516"
  },
  {
    "url": "page/3/index.html",
    "revision": "0b61299a15767aa92304cda65c514af2"
  },
  {
    "url": "posts/index.html",
    "revision": "d0b9325be55ba945f77f782098c15a40"
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
    "revision": "36189c19165af3e9d4e4b4cd83028b8d"
  },
  {
    "url": "vi/index.html",
    "revision": "b1cbe33d0621760be63744692419306d"
  },
  {
    "url": "visited-places/index.html",
    "revision": "3721a5c0ac123f6326b7c594b392d883"
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
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Caching Content from Multiple Origins
workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);