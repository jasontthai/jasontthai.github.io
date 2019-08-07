importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "e28ae972c810a0f20d3fc56944c0852c"
  },
  {
    "url": "about/index.html",
    "revision": "233f565ba53599ea856c52c5c9d3f789"
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
    "revision": "9227f51993d0d43ab879859f7e45d5b7"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "bdfc2db1c4cbf006466939b5ece8c22d"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "78ce13373c212bb9829128726552e814"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "8e1f237bc4a2343a6e7e15029cfe88b1"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "9b66c68eb6c22f39e3efcdcc706a86b4"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "916c67316e03882caf0e3292b2a7c413"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "8728dc07dc9c974d43f10d8e780414a2"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "7c8e95d0fd6ed53ce8f4c9452b323fa1"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "0f19e5b6c9be25c70b67a1c3dbc69a1c"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "cbf2aefb0491398828ab2b30489ee83a"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "b5c149f963399d45f28cf10dd4323261"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "29d37b26118c71c202893c94cb894892"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "5712ab52eac0c099fe140845e3ad98bd"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "d2478682fccc027df7465d1c47bd7640"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "a1ff0da039bbf4f571f281ebb97733ec"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "f9c791aac9f044e34326dcda452a1a0a"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "8931d03998ea9f9c668bc1777a8df220"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "e760dc9825d5476b3797fb71526b348d"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "259f712e17c7195ab03fed33f548cea7"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "5ecb72ab9aa20e5ff685485f4a113120"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "2748264c6cb104ed323836e39719147a"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "ab6084a427e7631f9d64ab330ae02850"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "9eb7f5af8f006788f24e5124905a8db7"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "2694ed088cee18f19713602138d1813d"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "674bf720f28079fe07e5bfcb3ad41443"
  },
  {
    "url": "default/index.html",
    "revision": "1ddf794d173a2823b51a6201ec340c08"
  },
  {
    "url": "favicon.ico",
    "revision": "4524e5e12b9a834dee36113c81bbc667"
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
    "revision": "cc68d717829e44a7151e732fe9d965e3"
  },
  {
    "url": "package-lock.json",
    "revision": "6da598e2dc428f55ee1a57aa044133e3"
  },
  {
    "url": "page/2/index.html",
    "revision": "151024e3344e2b8c1d870c90f25ab491"
  },
  {
    "url": "page/3/index.html",
    "revision": "118960e7358d35d75253b6d9a042a4cb"
  },
  {
    "url": "posts/index.html",
    "revision": "44d319abd8838ae490b72caa942b0d36"
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
    "revision": "6c8b14b71f11a77a741867930ff7e358"
  },
  {
    "url": "vi/index.html",
    "revision": "e667157a30ea75fc93e695fe9994bb62"
  },
  {
    "url": "visited-places/index.html",
    "revision": "3a7644a6929ef7bcb3c908b5720c37cb"
  },
  {
    "url": "workbox-config.js",
    "revision": "ea01ee827d6da686aa3dbb09fb2783a0"
  }
])

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