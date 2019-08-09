importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "1c32d7200a51539f578978ce7cd39251"
  },
  {
    "url": "about/index.html",
    "revision": "f131b9885177ce20c18d3bf0fa7b9d6c"
  },
  {
    "url": "assets/css/main.css",
    "revision": "adabff4a6db3d6d944065bd5ffccab06"
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
    "url": "assets/js/lunr/lunr-en.js",
    "revision": "8c1c664d8ed573e484258337e048286a"
  },
  {
    "url": "assets/js/lunr/lunr-gr.js",
    "revision": "9363d4be641b9be823bba6f17fd87871"
  },
  {
    "url": "assets/js/lunr/lunr-store.js",
    "revision": "69da308b6c9266fd9a0d735af2f5dbad"
  },
  {
    "url": "assets/js/lunr/lunr.js",
    "revision": "725bf83f6b217652b51d98480a7d060b"
  },
  {
    "url": "assets/js/lunr/lunr.min.js",
    "revision": "7eac9eb2bea17aeda59860eea734d786"
  },
  {
    "url": "assets/js/main.min.js",
    "revision": "d8d6e312dfd298106cea56b384b523a6"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "ee0b441e3528ffe5f1f840d4157f3998"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "afd8df82a3423b06c196ff24a79795c6"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "cc4f38cbfd63e5dbd1e0484f7e9836eb"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "1da7d9897521ae62b3e33268273e7d9a"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "ae7dbb99052ca6ad3eaced4abc9859de"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "d00508e74dcaf6de3f3111d555dcaa03"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "83c1b30f629e8055add1e581a39d7dca"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "7424281b9a0a07f4e56c044902b4ff8a"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "44e241b4b95f0b2584cde88fb506daed"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "d2b3a98e4da4ffa6a45f5d36844c4cac"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "1a7b55005bd39690b15a9a070c3e6588"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "c0640361b848a6bf9fcd975c46f4367f"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "32c2df3eb8dc9188a1d374c7263711af"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "b01484234955398853ca61db3533cec5"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "3ff8bc3172db8061ea0640e1cd503cda"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "376df2fd635414e3c9f44e11f15c9c6b"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "14da12331fa18f9754459443f7376952"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "bb98ba73dcfe9d9aedc76f9445d84fe6"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "2d5c85724dc0bc8fb385b28cf39879b6"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "b7ea8a0414fc8afa6ee62d205e772541"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "2509516ac0cf383a34c1a3e798b1e2fb"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "9cfc1313315ad41884b60088f862f284"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "6d51f2f1dd9d7d9af75e2f51cb7a3287"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "305e6992d1e738157679f17cb7e5f008"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "b586244943d65632217378a8e1b9b714"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "a7fb9dde54404b13e4f126a15cf743f0"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "a543f7d496104efe2e7e63a3d59e4c31"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "2aba9a99376bd8f084e24f745c6fe32f"
  },
  {
    "url": "categories/finance/index.html",
    "revision": "692069e6a92f6a1ac16303e024d630eb"
  },
  {
    "url": "categories/index.html",
    "revision": "01ae58a21c45abd55e36d165311ab2ed"
  },
  {
    "url": "categories/tech/index.html",
    "revision": "992dddca64c9a60a8c22ef04637756dc"
  },
  {
    "url": "favicon.ico",
    "revision": "d45dae1c4971840baa50643d92208269"
  },
  {
    "url": "index.html",
    "revision": "c9789ef9154bc6e8b62a131fa19c31b1"
  },
  {
    "url": "manifest.json",
    "revision": "341768a8729bf2202ecffa5f36da3560"
  },
  {
    "url": "page2/index.html",
    "revision": "2895a871f902ac85fc8fa7505df25ee1"
  },
  {
    "url": "page3/index.html",
    "revision": "23aadb10cacb71231d3a290f78ae386f"
  },
  {
    "url": "page4/index.html",
    "revision": "5ff5d4ee24f3524f4376a6cb8efeb32d"
  },
  {
    "url": "page5/index.html",
    "revision": "9ded070bf6ee36ca683a94784c877ce8"
  },
  {
    "url": "page6/index.html",
    "revision": "09b8e2dcf62f993db0741f7fd4c8dbb9"
  },
  {
    "url": "robots.txt",
    "revision": "2fac8a129285b1b58020ae33bd484690"
  },
  {
    "url": "tags/index.html",
    "revision": "eb4abe9b08a37acba66606e3992282a4"
  },
  {
    "url": "visited-places/index.html",
    "revision": "bb9937152df2c88a1e0e7de0cf1e5921"
  },
  {
    "url": "workbox-config.js",
    "revision": "ea01ee827d6da686aa3dbb09fb2783a0"
  },
  {
    "url": "year-archive/index.html",
    "revision": "1d5e48298929935949ee3a65262fadea"
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