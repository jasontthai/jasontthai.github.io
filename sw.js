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
    "url": "ads.txt",
    "revision": "d5af770eea579e1ce7e3dc14331c50d6"
  },
  {
    "url": "assets/css/style.css",
    "revision": "2d6e64ca388f3ed81eee7fa7090372f6"
  },
  {
    "url": "assets/img/3years_featured.png",
    "revision": "16f7a1e81e83f59c9bf5bc97b6177afa"
  },
  {
    "url": "assets/img/3years_featured.webp",
    "revision": "dd6a69b33a927bff9cf7d4ba64692b0d"
  },
  {
    "url": "assets/img/3years.jpg",
    "revision": "f98fd801f3c7b2aa1b75eaab84e4e015"
  },
  {
    "url": "assets/img/3years.webp",
    "revision": "d11e011a698d76e7c50ec09eeae6ed84"
  },
  {
    "url": "assets/img/accounting-black-budget.jpg",
    "revision": "0539cc8995f410d26e8fe4b1ce392237"
  },
  {
    "url": "assets/img/accounting-black-budget.webp",
    "revision": "0baf1cf503352b15ffb3c090aad44544"
  },
  {
    "url": "assets/img/asset-allocation.png",
    "revision": "ca06aae44313bfdb8264576ff1ebeda4"
  },
  {
    "url": "assets/img/asset-allocation.webp",
    "revision": "55d06022df0403aee95a8426f4d0dd94"
  },
  {
    "url": "assets/img/blur-chart-data-159888.jpg",
    "revision": "dd436d7d9ae6122bf75c52acff169170"
  },
  {
    "url": "assets/img/blur-chart-data.webp",
    "revision": "1b5f133eb62d240f5de0aaaae015ca8a"
  },
  {
    "url": "assets/img/blur-close-up-environment-401213.jpg",
    "revision": "67d53aab119b3af7bba3d2230ec64948"
  },
  {
    "url": "assets/img/blur-close-up-environment-401213.webp",
    "revision": "5697fb90df91c7433ccc3ca138adbc7d"
  },
  {
    "url": "assets/img/browser-2457113_1280.png",
    "revision": "01f79474504f7b2f82125bd2c54d9b57"
  },
  {
    "url": "assets/img/browser-2457113_1280.webp",
    "revision": "51f3dbfaf8dfe86fdda3c528609fe17e"
  },
  {
    "url": "assets/img/circleci-build.png",
    "revision": "acb29dfd4ab6685d303d7a06e919e527"
  },
  {
    "url": "assets/img/circleci-build.webp",
    "revision": "e107abd1989ae254b7f2e2b78d298f22"
  },
  {
    "url": "assets/img/circleci-logo-1200x630.png",
    "revision": "1761a26a81a69f14932431c90c6ef762"
  },
  {
    "url": "assets/img/circleci-logo-1200x630.webp",
    "revision": "4efd97ebc1d2dd027859682d794f2e3d"
  },
  {
    "url": "assets/img/half-marathon-cover.png",
    "revision": "8dfe2f786d5b65b4cced061dc255374d"
  },
  {
    "url": "assets/img/half-marathon-cover.webp",
    "revision": "3b1e1e0e323820931dbb1ba9bca2e00a"
  },
  {
    "url": "assets/img/half-marathon.png",
    "revision": "9865db838ebe9784792788279b087773"
  },
  {
    "url": "assets/img/half-marathon.webp",
    "revision": "e68000677d43966036b5b78a32babb8d"
  },
  {
    "url": "assets/img/hello-1907233_1280.png",
    "revision": "edc4c855d09dec7c5079bdb66c66b882"
  },
  {
    "url": "assets/img/hello-1907233_1280.webp",
    "revision": "f69edd3bfc208c36992a01fa426b4dd3"
  },
  {
    "url": "assets/img/ifttt-featured.png",
    "revision": "95af529e4dc769df3db2864b020c8adc"
  },
  {
    "url": "assets/img/ifttt-featured.webp",
    "revision": "d3540508507f4184a512933332c1c190"
  },
  {
    "url": "assets/img/jasonthai-mobile-view.png",
    "revision": "15dabe83a7dca51eda9c3157d43b25a9"
  },
  {
    "url": "assets/img/jasonthai-mobile-view.webp",
    "revision": "96f545935ef61945b4f9bda03874a1f3"
  },
  {
    "url": "assets/img/jasonthai-web-view.png",
    "revision": "23b0118b364ecdac9a3aa3691943efea"
  },
  {
    "url": "assets/img/jasonthai-web-view.webp",
    "revision": "8df6f2d17d3071f96b23153170ffd7e4"
  },
  {
    "url": "assets/img/logo-travisci-wide1.jpg",
    "revision": "f61d77cb52275d3044842b17b42ce8ab"
  },
  {
    "url": "assets/img/logo-travisci-wide1.webp",
    "revision": "a84c54dd4f2caedc916a9f45149958c1"
  },
  {
    "url": "assets/img/money-matters-1173105.jpg",
    "revision": "0cff4978df6ebbdbf08e6c9bd3ef9e48"
  },
  {
    "url": "assets/img/money-matters-1173105.webp",
    "revision": "b1a4cdabcc05f8a73e35ace110804e2d"
  },
  {
    "url": "assets/img/pagespeed-featured.png",
    "revision": "af3d45202ffe62dd8907c85723cadafc"
  },
  {
    "url": "assets/img/pagespeed-featured.webp",
    "revision": "986b659fabd25c6f2a28ebc3b704de88"
  },
  {
    "url": "assets/img/pagespeed-full.png",
    "revision": "834f3e6d9b7da53bed2d66fde25c7332"
  },
  {
    "url": "assets/img/pagespeed-full.webp",
    "revision": "4f12e06567c17af92eabc1900b03e0fb"
  },
  {
    "url": "assets/img/password-checker.png",
    "revision": "764c2026a7b3e6253bcb4eca50034198"
  },
  {
    "url": "assets/img/password-checker.webp",
    "revision": "44530d2e9aa5ac1b4ca9e1a8e024f482"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.jpg",
    "revision": "c59b230a31d0666ecbce84144ae8244a"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.webp",
    "revision": "fb28067eeef90e00ae79b6085b890547"
  },
  {
    "url": "assets/img/postgresql-vs-mysql-features.jpg",
    "revision": "20ecd3d820285d66e9f86a3616801010"
  },
  {
    "url": "assets/img/postgresql-vs-mysql-features.webp",
    "revision": "810b3a78726b4ac5be6311bc70c18e7b"
  },
  {
    "url": "assets/img/puuung-cooking.jpg",
    "revision": "55eb3eb9952bc6b6175b710d5fc60436"
  },
  {
    "url": "assets/img/puuung-cooking.webp",
    "revision": "b8ea0cf8e13cc2d15b9ba73675b8d80a"
  },
  {
    "url": "assets/img/puuung-dear-wife.jpg",
    "revision": "b852f5bc2d6b2e9f35bedbce016eb144"
  },
  {
    "url": "assets/img/puuung-dear-wife.webp",
    "revision": "40fb5c8199e9d971d557cb879da57296"
  },
  {
    "url": "assets/img/puuung-traveling.jpg",
    "revision": "22742516a1bcc6abcb337eb6888c8b49"
  },
  {
    "url": "assets/img/puuung-traveling.webp",
    "revision": "61bb1a6dfa4933cdd2e8437a5814de7e"
  },
  {
    "url": "assets/img/responsive-media-queries.png",
    "revision": "70d4e9f60b3cc9bdb3af08773e350bb8"
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
    "url": "assets/img/the-month-july.jpg",
    "revision": "17916f3cc48c6805a29797bf95d56a6f"
  },
  {
    "url": "assets/img/the-month-july.webp",
    "revision": "a3442a8d8657a936f2ee2a4c59d6573d"
  },
  {
    "url": "assets/img/tinyalias-analytics.png",
    "revision": "361bdffb4ad7e5ca03e5c3aa0d9834ca"
  },
  {
    "url": "assets/img/tinyalias-analytics.webp",
    "revision": "a868ece8de2192b99641132ae283f569"
  },
  {
    "url": "assets/img/tinyalias-authentication.png",
    "revision": "7902b7fac68aaf9d28d7e918e2b07e5d"
  },
  {
    "url": "assets/img/tinyalias-authentication.webp",
    "revision": "211eba794a70ab29e1af5d8c9d7d6d22"
  },
  {
    "url": "assets/img/tinyalias-diagram.png",
    "revision": "ec0bfd8ce9f669e868d3c1ef709553bf"
  },
  {
    "url": "assets/img/tinyalias-diagram.webp",
    "revision": "58f3c1d0fff3fe59ffd69045219a82c9"
  },
  {
    "url": "assets/img/tinyalias-mindful.png",
    "revision": "8cb92bd8b3d03d0d1a269f840801ba95"
  },
  {
    "url": "assets/img/tinyalias-mindful.webp",
    "revision": "073cacc4ed05424fecbb99a5a0f5b6a7"
  },
  {
    "url": "assets/img/tinyalias-news.png",
    "revision": "094c67f3a82501d65e5d0edc9996616e"
  },
  {
    "url": "assets/img/tinyalias-news.webp",
    "revision": "a7ad126475a33431f2eccccb0927bf4c"
  },
  {
    "url": "assets/img/tinyalias-password.png",
    "revision": "43881ac37a09e2ff69bdb77a7e806085"
  },
  {
    "url": "assets/img/tinyalias-password.webp",
    "revision": "271988583eb6fe38b501c9508c4d9796"
  },
  {
    "url": "assets/img/tinyalias.png",
    "revision": "5970e1a11cc8a4d55c570d46079a1a9e"
  },
  {
    "url": "assets/img/tinyalias.webp",
    "revision": "0c13375b0c7bd7ff8c4b5d067be882d4"
  },
  {
    "url": "assets/img/travisci-build.png",
    "revision": "b4b692cddfeee9b5830e2caf32655376"
  },
  {
    "url": "assets/img/travisci-build.webp",
    "revision": "7768b4ef74a043b18afddda029638f00"
  },
  {
    "url": "assets/img/visited-map.png",
    "revision": "881cf473d0278459481f6ef4617f8c40"
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
    "url": "default.md",
    "revision": "a719c0b9f6b817bb2aeb60b7c66c4d98"
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
    "url": "favicon.png",
    "revision": "bd7c6777ccc5330238b84ffd9d96f102"
  },
  {
    "url": "feed.xml",
    "revision": "ae07df23833809322c09cd3ac1af8083"
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
    "revision": "7461ce9f93ac4d6fb56c9841502cbddc"
  },
  {
    "url": "sitemap.xml",
    "revision": "4d0129dc14c5c54fd6ee193c4ca10965"
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
    "revision": "ff21279d3326ed5a0e078432ede36535"
  }
])