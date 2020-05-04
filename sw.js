importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "53875a4846d15798eb83740b9bc9025c"
  },
  {
    "url": "about/index.html",
    "revision": "c0b10039dcd91a71914bd44f8696fe58"
  },
  {
    "url": "assets/css/style.css",
    "revision": "6118e6b5ae26923af9497d1d9cfc0039"
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
    "url": "assets/img/android-chrome-192x192.webp",
    "revision": "be30ff34132e68d3b5494ceafed8662b"
  },
  {
    "url": "assets/img/android-chrome-512x512.webp",
    "revision": "3c4f9e9ce314e57fd3d667ad065f24f4"
  },
  {
    "url": "assets/img/apple-touch-icon.webp",
    "revision": "7f82ca5c79d838475e7e2fd3e14f1d35"
  },
  {
    "url": "assets/img/asset-allocation.webp",
    "revision": "55d06022df0403aee95a8426f4d0dd94"
  },
  {
    "url": "assets/img/blur-chart-data-159888.webp",
    "revision": "e8634023bb34d0de4d85cadedba65a93"
  },
  {
    "url": "assets/img/blur-chart-data.webp",
    "revision": "4f756f89e12450e7666e4f44dd6a4a2a"
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
    "url": "assets/img/cloud-server.webp",
    "revision": "40e2848063865a05449e4dea3e0c1513"
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
    "url": "assets/img/foldingathome.webp",
    "revision": "65a5c8c8854814c0bb72fd2798f4cd81"
  },
  {
    "url": "assets/img/google-syndication.webp",
    "revision": "e7eb12b6b2c003b73e2b8736df8f5287"
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
    "url": "assets/img/jekyll.webp",
    "revision": "94c8e78f30078316a6ddda9dd8a9db25"
  },
  {
    "url": "assets/img/logo-travisci-wide1.webp",
    "revision": "a84c54dd4f2caedc916a9f45149958c1"
  },
  {
    "url": "assets/img/money-matters-1173105.webp",
    "revision": "8ef781245b4ac76a7c29b066a63119fb"
  },
  {
    "url": "assets/img/month-of-august.webp",
    "revision": "7f1431b91f2e0338c6a480bcb5f27486"
  },
  {
    "url": "assets/img/nextcloud-setup.webp",
    "revision": "240c2367a15bb69f0884fe68955699f7"
  },
  {
    "url": "assets/img/nextcloud.webp",
    "revision": "7313bfafcc5271c6dc535743d84c61ca"
  },
  {
    "url": "assets/img/NextcloudLogo.webp",
    "revision": "d598fae1834f90569f9ce1309ae492e5"
  },
  {
    "url": "assets/img/openvpn-pihole.webp",
    "revision": "33720589b83b55186336012f43b99095"
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
    "url": "assets/img/pi-hole-stats.webp",
    "revision": "b040ba001354f0e1902d41999668638d"
  },
  {
    "url": "assets/img/pihole-step-1.webp",
    "revision": "9152696559d1638af34e6239b273cb1b"
  },
  {
    "url": "assets/img/pihole-step-10.webp",
    "revision": "e482f97b6751c7c323afe47a8488652e"
  },
  {
    "url": "assets/img/pihole-step-2.webp",
    "revision": "421b68fa9d3cbd808e93c9fb8f3a8bc5"
  },
  {
    "url": "assets/img/pihole-step-3.webp",
    "revision": "3cfa97e27f610f9249339363d1eff179"
  },
  {
    "url": "assets/img/pihole-step-4.webp",
    "revision": "30d3f1c239918155afb9b4f4a0d6e9d6"
  },
  {
    "url": "assets/img/pihole-step-5.webp",
    "revision": "73e7184ccd475c36bb9da29e7ae1d150"
  },
  {
    "url": "assets/img/pihole-step-6.webp",
    "revision": "335c270cfc57c567887cf9060965e943"
  },
  {
    "url": "assets/img/pihole-step-7.webp",
    "revision": "711bafd0bf5fee759a7d3a5209bb3e0e"
  },
  {
    "url": "assets/img/pihole-step-8.webp",
    "revision": "4fad234e32dc1b004840a3ea2feb99c9"
  },
  {
    "url": "assets/img/pihole-step-9.webp",
    "revision": "42b1458b82c0e622da386868d36f2a40"
  },
  {
    "url": "assets/img/pihole-wireguard-1.webp",
    "revision": "d16aca2f0444f41fc249cfbc07b4c167"
  },
  {
    "url": "assets/img/pihole-wireguard-2.webp",
    "revision": "95cb4b702a788c55cee0777f67bda257"
  },
  {
    "url": "assets/img/pihole-wireguard-3.webp",
    "revision": "ce130ea031e17a8473bf9e0a826fe362"
  },
  {
    "url": "assets/img/pihole-wireguard-4.webp",
    "revision": "d55b5d6d04cc753823c0c40b5d96da8d"
  },
  {
    "url": "assets/img/pihole-wireguard-5.webp",
    "revision": "6c70ca2ba991c8fa0c9371fb852da7c5"
  },
  {
    "url": "assets/img/pihole-wireguard-6.webp",
    "revision": "8f19c2e64be491903e140bb2d791f9a4"
  },
  {
    "url": "assets/img/pihole-wireguard-7.webp",
    "revision": "89b1e341504a95c535b6d3fc3da86b32"
  },
  {
    "url": "assets/img/postage-stamps-484991_640.webp",
    "revision": "c308e4700c49e2d3cfbcb2624793429f"
  },
  {
    "url": "assets/img/postgresql-vs-mysql-features.webp",
    "revision": "8ac351e5cf98909b09e0dd825775adea"
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
    "revision": "c6bb8f0d9d4458d0afd55a9196880a8f"
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
    "url": "assets/img/scripts.webp",
    "revision": "b3de0f727754b9edb00b47c1b3a78cb5"
  },
  {
    "url": "assets/img/spark.webp",
    "revision": "0f6a3eabefaf69e2e3ff69c3f8c22a8d"
  },
  {
    "url": "assets/img/ssh.webp",
    "revision": "d90cccfc987fdac96bcd2c7f22cb27d6"
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
    "url": "assets/img/the-month-october.webp",
    "revision": "635047d5c73f896a5089c37a727964cb"
  },
  {
    "url": "assets/img/the-month-september.webp",
    "revision": "14009dd367de026fe0659b4da19db659"
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
    "url": "assets/img/xbrowsersync-setting.webp",
    "revision": "afb506f2228a388849803db7f117c63b"
  },
  {
    "url": "assets/img/xbrowsersync.webp",
    "revision": "5d857484827e95ca4540f7ed6bf436ea"
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
    "url": "assets/js/ga-lite.min.js",
    "revision": "51cbcd88389cf398b2f920d3d4c9ba79"
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
    "revision": "4e866afef789b382d543b3a4b073fc29"
  },
  {
    "url": "assets/minima-social-icons.svg",
    "revision": "3a70b871c930a7ed8af27caa162af123"
  },
  {
    "url": "blog/2018/06/10/browser-extensions/index.html",
    "revision": "572a15824b72066c9ceb5a1b6293f9a8"
  },
  {
    "url": "blog/2018/06/12/secure-your-passwords/index.html",
    "revision": "9b31f7c4d29b02d292ece77d8d683ff9"
  },
  {
    "url": "blog/2018/06/13/how-to-create-interactive-map-with-mapbox-and-leafletjs/index.html",
    "revision": "4d0898426e2b397ca037488c9789974e"
  },
  {
    "url": "blog/2018/06/16/thoughts-on-being-multilingual/index.html",
    "revision": "0d96c3ffb468790957b8d6044edf00b7"
  },
  {
    "url": "blog/2018/07/15/dear-wife/index.html",
    "revision": "b9040ea7c8fbf13fe5eea393020b0693"
  },
  {
    "url": "blog/2018/09/03/10-most-used-linux-commands/index.html",
    "revision": "1c594d46b820857762e03a272f23e67a"
  },
  {
    "url": "blog/2019/06/05/thoughts-on-url-shortener-service/index.html",
    "revision": "c59f87b160a0148acbe02f079d98f9de"
  },
  {
    "url": "blog/2019/06/12/about-unit-tests/index.html",
    "revision": "112ce08f48918b20fe27ff6e0ed04873"
  },
  {
    "url": "blog/2019/06/13/financial-tools/index.html",
    "revision": "3f5f562f0229933999e24a63bb2c82bf"
  },
  {
    "url": "blog/2019/06/16/regrowing-my-succulents/index.html",
    "revision": "71b2493b36e9bb72d71e5f9babc2af64"
  },
  {
    "url": "blog/2019/06/30/your-life-or-your-money/index.html",
    "revision": "6ef2a0ca8f53e52bcd7c3295f20dbf6d"
  },
  {
    "url": "blog/2019/07/15/so-you-have-some-money/index.html",
    "revision": "1e2d893e19a8ca650b0d44f01bf8dc88"
  },
  {
    "url": "blog/2019/07/16/the-existence-of-anniversaries/index.html",
    "revision": "90898d681805d0719c890c5c1959049f"
  },
  {
    "url": "blog/2019/07/18/changes-i-made-for-my-blogs-theme/index.html",
    "revision": "d2c0361cc8c5171278b55420187537e9"
  },
  {
    "url": "blog/2019/07/20/bai-tieng-viet/index.html",
    "revision": "f1def1f83d0efbf54d178836e1f22193"
  },
  {
    "url": "blog/2019/07/22/how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems/index.html",
    "revision": "f02f587b4379795ce4ffc1e2598e3f69"
  },
  {
    "url": "blog/2019/07/23/how-to-deploy-to-github-pages-using-travisci/index.html",
    "revision": "9dd3bb5f4158395a5c69ce3445812a36"
  },
  {
    "url": "blog/2019/07/24/useful-commands-for-postgresql-mysql/index.html",
    "revision": "5a2436f0d9303d440ff8867d5393a245"
  },
  {
    "url": "blog/2019/07/25/tinyalias-url-shortener-design-and-features/index.html",
    "revision": "787b1e3e58bd107c01467a547a18ad67"
  },
  {
    "url": "blog/2019/07/26/customize-part-of-your-life-with-ifttt/index.html",
    "revision": "339d30b00caddc9f417e35313a458291"
  },
  {
    "url": "blog/2019/07/26/my-blog-pagespeed-insights-score-jasonthai-me/index.html",
    "revision": "2c9495f6990108d9a6c378f25d7f2fe2"
  },
  {
    "url": "blog/2019/07/27/apply-different-styles-to-mobile-vs-web-view-using-media/index.html",
    "revision": "68ac4f8e26d239e0d1c4deb861205310"
  },
  {
    "url": "blog/2019/07/28/42nd-biofreeze-sf-marathon-1st-half/index.html",
    "revision": "9cc30023f1171c1c96ba46baf23a0a75"
  },
  {
    "url": "blog/2019/08/02/what-im-up-to-in-july-2019/index.html",
    "revision": "a0ee7c1aeb1d9b8bf82abd3e531c4c33"
  },
  {
    "url": "blog/2019/08/04/three-proofs-total-stock-market-is-efficient/index.html",
    "revision": "af793e57d484f57252475ee795a949f8"
  },
  {
    "url": "blog/2019/08/06/enable-offline-support-to-websites-with-workbox/index.html",
    "revision": "803743f40fd6518212a1c9a43c9cd812"
  },
  {
    "url": "blog/2019/08/07/i-turned-my-blog-into-a-web-progress-app/index.html",
    "revision": "649099664216e4d53fc06f255a4e60f9"
  },
  {
    "url": "blog/2019/08/12/how-to-host-commento-on-apache-webserver/index.html",
    "revision": "723414588620c9f391e8c4ea0dbecff6"
  },
  {
    "url": "blog/2019/08/25/how-to-host-openvpn-and-pi-hole-on-ubuntu-1804-vps/index.html",
    "revision": "d3c2541865aa6fec81f55db43dbb52cd"
  },
  {
    "url": "blog/2019/09/01/what-im-up-to-in-august-2019/index.html",
    "revision": "cc36aad9dcf3d5b2daf63bce948f1425"
  },
  {
    "url": "blog/2019/10/07/what-im-up-to-in-september-2019/index.html",
    "revision": "8e00368936242dbc9f5b100bb9fa8d78"
  },
  {
    "url": "blog/2019/11/03/deploy-nextcloud-with-docker-compose/index.html",
    "revision": "62b72b8e1e74c0b5241133ee7212ac26"
  },
  {
    "url": "blog/2019/12/26/december-list-of-selfhosted-apps/index.html",
    "revision": "a5e4f76195bfd10e59bb7793f2eaaf58"
  },
  {
    "url": "blog/2020/01/03/free-public-xbrowsersync-service/index.html",
    "revision": "ccc7e41157749db7367391b20bb20ee0"
  },
  {
    "url": "blog/2020/02/12/setup-shell-script-for-linux-based-servers/index.html",
    "revision": "0c4567c857ede23ced797618c0390191"
  },
  {
    "url": "blog/2020/02/19/better-ssh-keys-management-with-authorizedkeyscommand/index.html",
    "revision": "17090dad2964df787f87b081caa35a46"
  },
  {
    "url": "blog/2020/02/27/some-notes-on-apache-spark-memory-management/index.html",
    "revision": "0c52ee4150f049b22207cc8c9a50a98f"
  },
  {
    "url": "blog/2020/03/14/donate-compute-power-to-foldinghome-to-cures-for-covid-19/index.html",
    "revision": "65e3ee933dcc84c6406212b1e34d2311"
  },
  {
    "url": "blog/2020/05/01/how-to-setup-wireguard-pi-hole-on-debian-10-ubuntu-1804/index.html",
    "revision": "138807971f63cb26baf11dc159a459a2"
  },
  {
    "url": "categories/index.html",
    "revision": "a48108b93518123cc56538dd73e271f8"
  },
  {
    "url": "default/index.html",
    "revision": "dd124948d2dee8b91ea867d471a1360e"
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
    "revision": "5843d05a2feaee2db7113f2f858abb8d"
  },
  {
    "url": "manifest.json",
    "revision": "a7a76ca0092294394bf7df3fe5000df5"
  },
  {
    "url": "page/2/index.html",
    "revision": "e06b6d42b2dd73b95e115571a848a903"
  },
  {
    "url": "page/3/index.html",
    "revision": "f968377c64e0955cd8215aeaec8c26a6"
  },
  {
    "url": "page/4/index.html",
    "revision": "a03abec1191cd75ecd7710a5a45092d9"
  },
  {
    "url": "posts/index.html",
    "revision": "bd770c1a5dedade91c95e8d37325c599"
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
    "url": "services/index.html",
    "revision": "dff5007000c3aa19ae5b87b7de73a823"
  },
  {
    "url": "tags/index.html",
    "revision": "c8f583262cd9865742da4d9c3fe46cee"
  },
  {
    "url": "vi/index.html",
    "revision": "edb08bb295ae36b997669900c93e27f4"
  },
  {
    "url": "visited-places/index.html",
    "revision": "a8a5e0e55705f700af29dfea70d671ee"
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