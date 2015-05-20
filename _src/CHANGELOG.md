<a name"0.0.24"></a>
### 0.0.24 (2015-04-30)


#### Bug Fixes

* **grunt:** `copy:serve` not copying scripts in subdirectories ([ccba58e9](https://github.com/sparanoid/sparanoid.com/commit/ccba58e9))
* **style:** better code appearance ([c6e0f5c2](https://github.com/sparanoid/sparanoid.com/commit/c6e0f5c2))
* **travis:** build error ([b1a9a0af](https://github.com/sparanoid/sparanoid.com/commit/b1a9a0af))
* **style:** remove unwanted margin for last-child ([68d288c0](https://github.com/sparanoid/sparanoid.com/commit/68d288c0))


#### Features

* **post:**
  * new article “Amazon S3 × CloudFront” ([347624c9](https://github.com/sparanoid/sparanoid.com/commit/347624c9))
  * new post “iTunes Artwork Grabber” ([6e562a32](https://github.com/sparanoid/sparanoid.com/commit/6e562a32))
* **style:**
  * disable WebKit hyphens, it sucks ([f119ccc1](https://github.com/sparanoid/sparanoid.com/commit/f119ccc1))
  * refine font size ([7b345668](https://github.com/sparanoid/sparanoid.com/commit/7b345668))
* **template:**
  * update remote server deployment ([6b31c70b](https://github.com/sparanoid/sparanoid.com/commit/6b31c70b))
  * add canonical link support ([84ab1e8d](https://github.com/sparanoid/sparanoid.com/commit/84ab1e8d))
  * better template structures ([c3191b36](https://github.com/sparanoid/sparanoid.com/commit/c3191b36))
  * `twitter-cards` is now `open-graph` ([e3edcff5](https://github.com/sparanoid/sparanoid.com/commit/e3edcff5))
  * add custom head and foot hooks ([1ee7d566](https://github.com/sparanoid/sparanoid.com/commit/1ee7d566))
* **work:** update categories ([445de41c](https://github.com/sparanoid/sparanoid.com/commit/445de41c))

#### Breaking Changes

* This release changes the way you push compiled files to remote servers. Now I changed my server from Linode VPS to Amazon S3 and CloudFront, I also changed my feed URL from /feed/ to /feed.xml since Amazon S3 doesn't support multiple Document Index. You can read more information from my [blog post](http://sparanoid.com/note/amazon-s3-cloudfront/).

 ([6b31c70b](https://github.com/sparanoid/sparanoid.com/commit/6b31c70b))
* Major template update, you should update all your template files if you need further updates.

 ([c3191b36](https://github.com/sparanoid/sparanoid.com/commit/c3191b36))
* Now you can insert custom code snippets into `<head>` and `<footer>` per post. Just simply use the following syntax in post front-matter:

```
head: |
  <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/pjdeblccplohlgedbefopohaedodcgci">
```

or:

```
foot: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Base64/0.3.0/base64.min.js"></script>
```

 ([1ee7d566](https://github.com/sparanoid/sparanoid.com/commit/1ee7d566))


<a name"0.0.23"></a>
### 0.0.23 (2015-04-20)


#### Bug Fixes

* **grunt:** not detecting newly added files ([f386d870](https://github.com/sparanoid/sparanoid.com/commit/f386d870))
* **package:** missing `grunt-html-smoosher` ([c54b001a](https://github.com/sparanoid/sparanoid.com/commit/c54b001a))
* **template:** better Twitter Cards author support ([56f089c3](https://github.com/sparanoid/sparanoid.com/commit/56f089c3))


#### Features

* **build:**
  * try `grunt-release` task ([7ddb2f2d](https://github.com/sparanoid/sparanoid.com/commit/7ddb2f2d))
  * update Travis ([95910f0e](https://github.com/sparanoid/sparanoid.com/commit/95910f0e))
* **grunt:** speed up serve task by passing JS files directly from `copy` ([0165c8db](https://github.com/sparanoid/sparanoid.com/commit/0165c8db))
* **style:** custom inlined-style list ([aae14607](https://github.com/sparanoid/sparanoid.com/commit/aae14607))


<a name="0.0.22"></a>
### 0.0.22 (2015-03-06)


#### Bug Fixes

* **grunt:** cached Jekyll metadata not purged ([b935250b](http://github.com/sparanoid/almace-scaffolding/commit/b935250b74af23f6a5f846964d3c1c2a9b337ce8))
* **homepage:** version not updated ([00d3dbca](http://github.com/sparanoid/almace-scaffolding/commit/00d3dbcaba3adce1668002ef96db715bda67176e))


<a name="0.0.21"></a>
### 0.0.21 (2014-03-06)


#### Bug Fixes

* **style:**
  * wrong .external media query directive ([cf9d5fa1](http://github.com/sparanoid/sparanoid.com/commit/cf9d5fa15d0c139721bdc722d641d2c2e65d553e))
  * wrong GitHub Gist font size ([0544eafc](http://github.com/sparanoid/sparanoid.com/commit/0544eafca92360464589036c8fb60e2cd85f6816))


#### Features

* **config:** update assets URL, CloudFront should be better ([acb54e77](http://github.com/sparanoid/sparanoid.com/commit/acb54e773904507f328dc8a0b406d0d1917efe59))
* **jekyll:** use latest 3.0.0.beta2 ([603069ea](http://github.com/sparanoid/sparanoid.com/commit/603069ea9b6709f5801bd40da713bad55ecc86ce))
* **post:**
  * add new screenshots for “Delicious” ([791566c8](http://github.com/sparanoid/sparanoid.com/commit/791566c805ab7b7fbcfb7d1a77e398cf0c371aa1))
  * new post “Shutdown Like a Boss” ([df164f6c](http://github.com/sparanoid/sparanoid.com/commit/df164f6cb19c46c1527467fde6bd56e31bfe5b02))
  * use markdown for pages ([59bfcb89](http://github.com/sparanoid/sparanoid.com/commit/59bfcb891815cb0179bd4e95aed633617d0cb28a))
* **style:** update media queries position ([826c4966](http://github.com/sparanoid/sparanoid.com/commit/826c4966dbdc6c1e4b2ba015ce0b752b15d8d248))
* **template:** update post date format ([46cf345f](http://github.com/sparanoid/sparanoid.com/commit/46cf345fc779753d89fd55ee097f9e6f92d0cf17))


<a name="0.0.20"></a>
### 0.0.20 (2014-12-14)


#### Bug Fixes

* watch files in subdirectories for grunt tasks ([2234f54b](http://github.com/sparanoid/sparanoid.com/commit/2234f54b0242637eacfb6ce5e9658a382e3b6d44))
* **post:** typo in “Chinese Copywriting Guidelines” ([4f24b6ba](http://github.com/sparanoid/sparanoid.com/commit/4f24b6ba35aeea1eb9c9203ad08d0a7d5b80b25e))
* **style:** update cite position for sparanoid.com ([26ef8c08](http://github.com/sparanoid/sparanoid.com/commit/26ef8c084d0b11f5d558ac14111ad985a2885b1e))
* **test:** lesslint error ([fb341f60](http://github.com/sparanoid/sparanoid.com/commit/fb341f609fef4f332336cf191a15a4ce01af7a87))


#### Features

* reset `site.base` for local development ([cd46627b](http://github.com/sparanoid/sparanoid.com/commit/cd46627bae8d6f69b84cabb152bf559de6cf6e6e))
* **feed:** use `<small>` for external link ([69c0abc9](http://github.com/sparanoid/sparanoid.com/commit/69c0abc9ecd5f34208d3458ad99e1b8ec12840b8))
* **grunt:**
  * add multiple LESS output support ([568041ec](http://github.com/sparanoid/sparanoid.com/commit/568041ec95070c2e17b198661a0e2e685c96daf4))
  * new grunt option `--fast`, build site without minification ([073fed50](http://github.com/sparanoid/sparanoid.com/commit/073fed50ccf531b6af7669bcf038229c8849ba1b))
* **post:** update post “Chinese Copywriting Guidelines” ([3b021f32](http://github.com/sparanoid/sparanoid.com/commit/3b021f3233518038d0d20808a239989b06a3510d))
* **template:**
  * modern page titles ([a1dedc01](http://github.com/sparanoid/sparanoid.com/commit/a1dedc01e5030302c31cf4e0a2c0f2819e6bdfb8))
  * update email subscription template ([af2795d7](http://github.com/sparanoid/sparanoid.com/commit/af2795d736278cec89e6ace87e69ef2fa068fd01))
  * move pages into `_pages` ([6d705c27](http://github.com/sparanoid/sparanoid.com/commit/6d705c274377c4b2f31f4438a74caf6a00f9f083))


#### Breaking Changes

* All pages are moved into `_pages` for better file structure management
 ([6d705c27](http://github.com/sparanoid/sparanoid.com/commit/6d705c274377c4b2f31f4438a74caf6a00f9f083))


<a name="0.0.19"></a>
### 0.0.19 (2014-12-01)


#### Bug Fixes

* sync init config file ([b22cfaf3](http://github.com/sparanoid/sparanoid.com/commit/b22cfaf3c53be25d95f342a8f52ac2b9107b5bfc))
* remove unnecessary task ([0fd0dc23](http://github.com/sparanoid/sparanoid.com/commit/0fd0dc235c4247976845a02fe8b2064a3a06b4aa))
* **grunt:** now also watches Jekyll configuration files ([cf63e34e](http://github.com/sparanoid/sparanoid.com/commit/cf63e34ef44cb65af3413b36155ec9367cf18818))
* **sitemap:** duplicated URL definitions ([5ee82675](http://github.com/sparanoid/sparanoid.com/commit/5ee82675f2d05bfc5e48e047d584da611f13b1ca))
* **style:**
  * `pre` and `code` not aligned properly ([dffc75b0](http://github.com/sparanoid/sparanoid.com/commit/dffc75b07501c54f2c4f5a79183e78a7196753f4))
  * table align overrides by default user agent styles ([45ded474](http://github.com/sparanoid/sparanoid.com/commit/45ded474f4db91ffe32c4b7d0341cb8cfc4f4e8f))
  * `.largetype` not centered ([c4be3b14](http://github.com/sparanoid/sparanoid.com/commit/c4be3b14df34583bef030258c38e34626baa6279))
* **template:** excerpts should be markdownified for predefined `excerpt` YAML front matter ([654ed8d5](http://github.com/sparanoid/sparanoid.com/commit/654ed8d5fc6fd49c9b87bf87d14dfc29450e3cb6))


#### Features

* bump Jekyll version to 2.5.2, better performance ([a0294f88](http://github.com/sparanoid/sparanoid.com/commit/a0294f883f17fb30fcaca02d26db718564263251))
* update `apple-touch-icon.png` for @3x size ([38bf31ac](http://github.com/sparanoid/sparanoid.com/commit/38bf31ac6932320adf74decdb965ce7cfc1a41d0))
* **donate:** update copywriting ([a5f9387b](http://github.com/sparanoid/sparanoid.com/commit/a5f9387bd57b7004d06d5885ed74b747480c710c))
* **grunt:** add `grunt-lesslint` support ([0b928803](http://github.com/sparanoid/sparanoid.com/commit/0b928803f70a301c3766e8f6029261c5d0d23099))
* **style:**
  * placeholder text color ([3f6fbf63](http://github.com/sparanoid/sparanoid.com/commit/3f6fbf63141a1b076353a785ed1662391b3d129c))
  * update `text-align` method ([2665a791](http://github.com/sparanoid/sparanoid.com/commit/2665a791d7e24a62daa6b75b4e5e350776b447d9))
  * simplified align center method ([aa0a5fbf](http://github.com/sparanoid/sparanoid.com/commit/aa0a5fbf9e977c647aff83202280b1046009ca46))
* **template:**
  * add feed excerpt output ([8fd053c5](http://github.com/sparanoid/sparanoid.com/commit/8fd053c5b7d4aaff66c4c52566cf06d51739e84b))
  * remove Google+ authority support, I don't like it. ([0dd4efae](http://github.com/sparanoid/sparanoid.com/commit/0dd4efaec8a4622bdcde0b4a063361519e1c9043))
  * add multiple authors support ([57337fa1](http://github.com/sparanoid/sparanoid.com/commit/57337fa15fa078437bff41536950b811da79cf82))
  * new email newsletter signup page ([a0652321](http://github.com/sparanoid/sparanoid.com/commit/a0652321e3a30dac96c418b8aae6b1cd9278cf63))
  * more centered text for pages ([2e476d91](http://github.com/sparanoid/sparanoid.com/commit/2e476d91166e961044aa21bf7475948344dfb057))


#### Breaking Changes

* Now I can use multiple users for posts, use the following variable in Front Matter:

`author: tunghsiao`

Author information can be added in `./_app/_data/authors.yml`
 ([57337fa1](http://github.com/sparanoid/sparanoid.com/commit/57337fa15fa078437bff41536950b811da79cf82))


<a name="0.0.18"></a>
### 0.0.18 (2014-11-18)


#### Bug Fixes

* **style:** images in posts are not center aligned ([a3cf785b](http://github.com/sparanoid/sparanoid.com/commit/a3cf785b97857ff189278e386fd3819aec4ced0f))


#### Features

* update `abbr` appearance, remove title hack ([a76fe931](http://github.com/sparanoid/sparanoid.com/commit/a76fe931a9056cb11a16b6fc0f8c9da90eeebda1))
* **grunt:**
  * rename all `server` task names to `serve` ([2697fa90](http://github.com/sparanoid/sparanoid.com/commit/2697fa90e71a4ced38d002dd88e78992b65ba8d6))
  * add live reload support (BrowserSync) ([9f78f654](http://github.com/sparanoid/sparanoid.com/commit/9f78f654ffd943b1bb3dd669797c2ebaa969e803))
* **print:** introduce print styles ([39fbb109](http://github.com/sparanoid/sparanoid.com/commit/39fbb10968ade3ddb79fb4d1a20508e583972182))
* **style:** split style fixes for plug-ins into a isolated stylesheet ([8e587481](http://github.com/sparanoid/sparanoid.com/commit/8e5874815d9e2b1067e4a865d4aaf072a218054e))
* **template:** use `<h1>` for post list ([530f63c2](http://github.com/sparanoid/sparanoid.com/commit/530f63c28093ebfc72fc5f99fbcf6440c9e70335))


#### Breaking Changes

* Now this project supports BrowserSync for page live reloading, script snippet is inserted after `<!-- BS_INSERT -->` in `top.html`
 ([9f78f654](http://github.com/sparanoid/sparanoid.com/commit/9f78f654ffd943b1bb3dd669797c2ebaa969e803))


<a name="24.1.4"></a>
### 24.1.4 (2014-11-03)


#### Bug Fixes

* **config:** add missing `force_utf_8` option ([2ef2dc44](http://github.com/sparanoid/sparanoid.com/commit/2ef2dc44a4e4a38572e40a708312886aa3d904b0))
* **style:** re-apply navigation margin fix for align left layout ([77b5fc19](http://github.com/sparanoid/sparanoid.com/commit/77b5fc197e65f80c0864b8e9d921bcd8ba2d3f46))
* **template:** add missing `site.colorful_list ` scope ([8575c197](http://github.com/sparanoid/sparanoid.com/commit/8575c19739b83af154b99fee029c026a9cf359e8))


<a name="0.0.17"></a>
### 0.0.17 (2014-11-03)


#### Bug Fixes

* **post:** remove intense support for "Moonstruck Princess Extended" ([b263b5c9](http://github.com/sparanoid/sparanoid.com/commit/b263b5c97182ce33e683302cbeca82ea5e537619))
* **style:** reset header text align for justified text ([70d49911](http://github.com/sparanoid/sparanoid.com/commit/70d49911ea90d31bb578e7e13c1d11f084621f6e))
* **template:** remove deprecated minimal-ui ([db466892](http://github.com/sparanoid/sparanoid.com/commit/db466892ac59908c6853afe0b5400c3a65c3bfdb))
* **config:** add missing `force_utf_8` option ([2ef2dc44](http://github.com/sparanoid/sparanoid.com/commit/2ef2dc44a4e4a38572e40a708312886aa3d904b0))
* **style:** re-apply navigation margin fix for align left layout ([77b5fc19](http://github.com/sparanoid/sparanoid.com/commit/77b5fc197e65f80c0864b8e9d921bcd8ba2d3f46))
* **template:** add missing `site.colorful_list ` scope ([8575c197](http://github.com/sparanoid/sparanoid.com/commit/8575c19739b83af154b99fee029c026a9cf359e8))


#### Features

* add `force_utf_8` option ([0fb4c702](http://github.com/sparanoid/sparanoid.com/commit/0fb4c702aeaa5dd5306f0b19f40aaacb3f2f5b5f))
* update logo ([8666ee91](http://github.com/sparanoid/sparanoid.com/commit/8666ee917456620ec863c989b15496e47530ae43))
* **post:**
  * update post heading ([9be83090](http://github.com/sparanoid/sparanoid.com/commit/9be83090995ad8986a8a723033f062035af346cc))
  * new post “Chinese Copywriting Guidelines” ([67e3ea35](http://github.com/sparanoid/sparanoid.com/commit/67e3ea3571926cbc02e3fbe1443f41771ed79a73))
  * update external link for “Free” Dribbble Invite ([f5763fe8](http://github.com/sparanoid/sparanoid.com/commit/f5763fe837bcacfe404da626344c134e2c003dab))
  * update post excerpts ([f57c1f46](http://github.com/sparanoid/sparanoid.com/commit/f57c1f460ee809e4bb498d3b7dd505a602a4ff5b))
  * add new post “Space Lover” and “Disable WYSIWYG” ([f9b5f4ad](http://github.com/sparanoid/sparanoid.com/commit/f9b5f4ad945ee42da13cb983c2e1a1dab00b32fe))
* **style:**
  * tweak font size for small devices ([66394316](http://github.com/sparanoid/sparanoid.com/commit/663943163a3a523952b0e0e1084938c2d8255dbc))
  * update header font size for small devices ([52e3ebd7](http://github.com/sparanoid/sparanoid.com/commit/52e3ebd72c4210da504629824b331c9d808d8c78))
  * add a fun transition ([6692e032](http://github.com/sparanoid/sparanoid.com/commit/6692e032de7e599fd088411e0528e4d6fe4dec1e))
  * remove custom CSS background check ([fbfff18c](http://github.com/sparanoid/sparanoid.com/commit/fbfff18c3b537972d7cba35397a239ea2d9227d8))
  * add `colorful_list` option that styles post link color (if defined) for article list ([f2412163](http://github.com/sparanoid/sparanoid.com/commit/f24121635fd1d6b4e3cdb5576794a0323cb388c1))
* **template:**
  * reuse `h1` to post heading ([a85184a9](http://github.com/sparanoid/sparanoid.com/commit/a85184a9ce785fc679e6ce95f7f17323109ed6f5))
  * add alternative text align mode ([008215fc](http://github.com/sparanoid/sparanoid.com/commit/008215fcbe8f47c8079dab42664771f777f42c4b))
  * add `post-content` and `page-content` for convenient ([38be1975](http://github.com/sparanoid/sparanoid.com/commit/38be1975044dd9367fad8abb4dfb2dcfa7e862ff))
  * update list template ([800c5ee3](http://github.com/sparanoid/sparanoid.com/commit/800c5ee3c577011a8a6ce21328b3b0afac155369))


#### Breaking Changes

* Now `<h1>` become the primary post / page title instead of `<h2>`, you should update your post to use the new structure
 ([a85184a9](http://github.com/sparanoid/sparanoid.com/commit/a85184a9ce785fc679e6ce95f7f17323109ed6f5))
* Force UTF-8 encoding, enable this will simply add <meta charset=utf-8> to the head of your pages, it's useful for local development since local server doesn't send charset in their respond header.
 ([0fb4c702](http://github.com/sparanoid/sparanoid.com/commit/0fb4c702aeaa5dd5306f0b19f40aaacb3f2f5b5f))


<a name="0.0.16"></a>
### 0.0.16 (2014-09-19)


#### Bug Fixes

* collar container width ([03c37eb3](http://github.com/sparanoid/almace-scaffolding/commit/03c37eb304049d87dddc2b34d2ba625e21294440))


#### Features

* **docs:** update readme ([c02d22ec](http://github.com/sparanoid/almace-scaffolding/commit/c02d22ec08eb5e360f977010660b8c267b3b5803))
* **template:** better docs for project site ([25414bc7](http://github.com/sparanoid/almace-scaffolding/commit/25414bc739b34b2e4c21d6a27e5d03dda9291934))


<a name="0.0.15"></a>
### 0.0.15 (2014-09-01)


#### Features

* **template:** better demo site ([bc731d4c](http://github.com/sparanoid/almace-scaffolding/commit/bc731d4c8da388cbfcb66a2e78b19867ae48c308))


<a name="0.0.14"></a>
### 0.0.14 (2014-08-21)


#### Bug Fixes

* **post:** update times symbol for post "Antiskill, Judgment Icon Set and Screensaver" ([8f053ae5](http://github.com/sparanoid/sparanoid.com/commit/8f053ae5b18636cdd98959818d345eaeaa97b3fc))
* **style:** correct sub list margin ([e01d8830](http://github.com/sparanoid/sparanoid.com/commit/e01d8830ac1e7d95a99af2fe674cffe213e928d4))
* **template:**
  * correct style and script paths for subdirectory setup ([20f9a50f](http://github.com/sparanoid/sparanoid.com/commit/20f9a50fbcbc8cf2aafa705d38dbbda59851b5c8))
  * avoid “layout not found” error introduced since Jekyll 2.2.0 ([b4f86289](http://github.com/sparanoid/sparanoid.com/commit/b4f86289a084343a28d1dff5f4f6d2a56ad35d94))
  * use Katakana middle dots ([cc0f0720](http://github.com/sparanoid/sparanoid.com/commit/cc0f0720ae99f05311ecc087afa7a0493c33241e))
  * use original post subheading ([e528b137](http://github.com/sparanoid/sparanoid.com/commit/e528b137a000da1c844045236af2da366b41549a))


#### Features

* **style:**
  * move `syntax.less` to `custom.less` ([b6fdb462](http://github.com/sparanoid/sparanoid.com/commit/b6fdb462c95b269cab2e50726dab5534f04e47e0))
  * add some space for tables ([35cd7830](http://github.com/sparanoid/sparanoid.com/commit/35cd78309ed85af069ab6392c686fa9e2be2f49c))
* **template:**
  * add custom CSS support for pages ([742cbfcd](http://github.com/sparanoid/sparanoid.com/commit/742cbfcde3a37206a4a9a0d7c7fd94179979458f))
  * add `lang` YAML front-matter data ([a3d25f97](http://github.com/sparanoid/sparanoid.com/commit/a3d25f978638d42cbd1e8ce5ee55895c66bc92cc))
  * add `lang` YAML front-matter data ([911353f1](http://github.com/sparanoid/sparanoid.com/commit/911353f1b5dabed81d13eb247262673abe382e14))
  * hide post from Atom feed ([32f36de7](http://github.com/sparanoid/sparanoid.com/commit/32f36de79c44a6fc181b328a7489ed35a3bce2ff))


#### Breaking Changes

* Now you can define `lang` tag for your post, simply add `lang` to your post front-matter data. ([a3d25f97](http://github.com/sparanoid/sparanoid.com/commit/a3d25f978638d42cbd1e8ce5ee55895c66bc92cc)):

for example:

```
lang: ar
```

then define your own styles in `custom.less`:

```css
[lang=ar] {
  direction: rtl;
}
```

* Add `hidden: true` as YAML front-matter data to the post you want to hide from your feed output.
 ([32f36de7](http://github.com/sparanoid/sparanoid.com/commit/32f36de79c44a6fc181b328a7489ed35a3bce2ff))


<a name="0.0.13"></a>
### 0.0.13 (2014-07-18)


#### Bug Fixes

* **post:** fix error page links for post “IterCast” ([da1a5fd5](http://github.com/sparanoid/sparanoid.com/commit/da1a5fd5bc85d5e2e8c60375a7564d73693c115c))
* **style:**
  * remove heading hyphens support ([e46edbc3](http://github.com/sparanoid/sparanoid.com/commit/e46edbc368bcc847d29b5d70638b2b1844a4f81f))
  * use `rem` for alternative title font size ([5e77e4e5](http://github.com/sparanoid/sparanoid.com/commit/5e77e4e50cd3bacfc9c8d37dd5d1f9b2a7f1dca8))
  * remove deprecated styles, fix cite footer font color ([61bc2cce](http://github.com/sparanoid/sparanoid.com/commit/61bc2cce2bb76c41d90ef3f15841b1b0ad71008c))
* **template:**
  * apply markdownify for post description ([91e00249](http://github.com/sparanoid/sparanoid.com/commit/91e0024914dd6ffaf553c1d8155e213036536119))
  * correct error page title ([3821c6b2](http://github.com/sparanoid/sparanoid.com/commit/3821c6b2b2796527e698367c4bcb9489aa57ef31))


#### Features

* **script:** add `intense.js` exclude rule ([73a8e250](http://github.com/sparanoid/sparanoid.com/commit/73a8e2501d4fefc6975d3dd3b1d995b4c71d7a0b))
* **style:**
  * dynamic text color for `code` and `pre` ([e153b87a](http://github.com/sparanoid/sparanoid.com/commit/e153b87a87b5e5ede358f928e8f7062d6a8d7f67))
  * update alternative title font size ([416c4161](http://github.com/sparanoid/sparanoid.com/commit/416c4161ee291664e3b3899a0e84798722e5445d))
  * add alternative title font size. By default all heading levels have the same font size, but many people may not like this, so here's an alternative font size stack. ([277ead44](http://github.com/sparanoid/sparanoid.com/commit/277ead44fed62c13f31bdc5b9bfcd76aaf47d8a6))
  * fix GitHub Gist default style, more layout padding and list nesting fixes ([32bb4053](http://github.com/sparanoid/sparanoid.com/commit/32bb4053626ba5be624674ab4be671654d249448))
  * better custom color scheme support, syntax highlighting also support different c ([e17eb740](http://github.com/sparanoid/sparanoid.com/commit/e17eb740516b99abb60c888091e9757eaf9e43fc))
* **template:** remove `amsf` option, add `clean_homepage` and `credits` options ([89016b8d](http://github.com/sparanoid/sparanoid.com/commit/89016b8d0d84c162e2c22fcb4a4af8f0377a0f06))


<a name="0.0.12"></a>
## 0.0.12 (2014-07-14)


#### Bug Fixes

* **grunt:**
  * remove deprecated Grunt task `archive` ([bb62c8eb](http://github.com/sparanoid/sparanoid.com/commit/bb62c8ebed4e93e565b090c6ff8805b8377dd27c))
  * wrong script compile path ([f1bb55aa](http://github.com/sparanoid/sparanoid.com/commit/f1bb55aa1846aab5574d2c2430ac99aaee194fe4))
* **post:**
  * remove a bunch of gibberish generated by Sketch ([6f8eca38](http://github.com/sparanoid/sparanoid.com/commit/6f8eca3846d97d781488153429bf4869029ed6f1))
  * update IterCast SVG title ([3276d9f6](http://github.com/sparanoid/sparanoid.com/commit/3276d9f625185f94624b5671f3ec46e74718b51e))
* **template:**
  * temporary fix HTML entities for post title ([7be60fc2](http://github.com/sparanoid/sparanoid.com/commit/7be60fc274fd1c301b0d732d9dc0614e9f91f667))
  * update footer credit ([2f3aec23](http://github.com/sparanoid/sparanoid.com/commit/2f3aec23fa75072649cece89218045570fea305f))
  * fix SVG title for Safari Reader mode ([8b7cc843](http://github.com/sparanoid/sparanoid.com/commit/8b7cc843f419c6935c806ccc462dac8e82c3c4b4))


#### Features

* split configuration files into 3 files for better user experience ([d5db218f](http://github.com/sparanoid/sparanoid.com/commit/d5db218fdb08862c2e736ab5a3a7ba7d4c414184))
* **grunt:** remove `grunt-usemin` support ([326910e8](http://github.com/sparanoid/sparanoid.com/commit/326910e8ab1ab3fa1d16287fe8e62aa8808f3865))
* **style:**
  * update `.browser` style ([127c5b6d](http://github.com/sparanoid/sparanoid.com/commit/127c5b6dc3251a42485b5a6b673cf0787e91b07e))
  * make highlighter theme works for all color scheme (hint: LESS color functions) ([5556eef4](http://github.com/sparanoid/sparanoid.com/commit/5556eef4c0dab2458e7e452dd22f45b660355ede))
* **template:**
  * better HTML structure ([fea47fdf](http://github.com/sparanoid/sparanoid.com/commit/fea47fdf729faf8dd43402bea8573ca1514bd6aa))
  * simplified script structure ([05de9818](http://github.com/sparanoid/sparanoid.com/commit/05de98185643647dadf1adb213899c1e9bf06ad2))
  * add intense.js support ([58e2c4d8](http://github.com/sparanoid/sparanoid.com/commit/58e2c4d81e232fe1e63db4f9d8aa40dd0599e4b5))
  * better intense.js cursor handling ([9f5b45ac](http://github.com/sparanoid/sparanoid.com/commit/9f5b45ac9880c4fe693bf437f9963ab53322255e))
  * move all custom variables to default `_config.yml` ([92a69fb0](http://github.com/sparanoid/sparanoid.com/commit/92a69fb0944451cbb098b9ae2c696d7c2e81d808))
  * use assign statement for post link ([2b79f39b](http://github.com/sparanoid/sparanoid.com/commit/2b79f39babd38a46b594f342c5bd604b54a92347))


#### Breaking Changes

* Now I can generate production site in a sub-directory in an easier way, just define `base` in `_config.yml` and run `grunt` everything should work
 ([bb62c8eb](http://github.com/sparanoid/sparanoid.com/commit/bb62c8ebed4e93e565b090c6ff8805b8377dd27c))
* It's expected to use something like `escape_once` from Liquid, but it's buggy right now: https://github.com/Shopify/liquid/issues/283
 ([7be60fc2](http://github.com/sparanoid/sparanoid.com/commit/7be60fc274fd1c301b0d732d9dc0614e9f91f667))
* Now all custom variables go to `_config.yml`, original `var.yml` will no longer available. all related template tags have been update for new variable structure. ([92a69fb0](http://github.com/sparanoid/sparanoid.com/commit/92a69fb0944451cbb098b9ae2c696d7c2e81d808))


<a name="0.0.11"></a>
### 0.0.11 (2014-06-05)


#### Features

* **post:** update posts for discontinued external links ([744f32f4](http://github.com/sparanoid/sparanoid.com/commit/744f32f46a5052c57bf7bfe272cd238e39fab621))
* **style:** remove obsoleted FlesSlider styles ([fd75b04c](http://github.com/sparanoid/sparanoid.com/commit/fd75b04c0fb6da967da33083aaf0a18045cba0b5))
* **template:** update Atom template ([73c236bf](http://github.com/sparanoid/sparanoid.com/commit/73c236bfabfcdb9f2628ff382ae6b3534c9bedc2))


#### Breaking Changes

* Now you can use `link_blog` and `rss_excerpt` for your Atom feed ([73c236bf](http://github.com/sparanoid/sparanoid.com/commit/73c236bfabfcdb9f2628ff382ae6b3534c9bedc2)):
  - `link_blog`: Enable this settings to make your feed Daring Fireball-like link blog. This basically change your <link> value to external link you defined in your posts.
  - `rss_excerpt`: Use post excerpt instead of full content for RSS feeds, just like WordPress RSS feed output option


<a name="0.0.10"></a>
### 0.0.10 (2014-05-16)


#### Features

* **style** add FlesSlider example ([33859332](http://github.com/sparanoid/almace-scaffolding/commit/338593320f0f0c07ba150c5b5834a6916cd8f608))
* **docs:** addd video tutorials link ([96379d27](http://github.com/sparanoid/almace-scaffolding/commit/96379d27455bd7e5304b08641d8309a5af6858a4))


<a name="0.0.9"></a>
### 0.0.9 (2014-05-16)


#### Bug Fixes

* **post:** fix post grammar ([d1cdebdd](http://github.com/sparanoid/sparanoid.com/commit/d1cdebdd92a1d38ef81195a21a03346a03b46c1f))
* **style:**
  * fix wrong scoped style use ([79e71de0](http://github.com/sparanoid/sparanoid.com/commit/79e71de08a1be4f7a404c94d8d77889af111497f))
  * avoid line-height override for `amsf` ([d24663fd](http://github.com/sparanoid/sparanoid.com/commit/d24663fddbc4fdac012edd32aab86ad549632d5b))


#### Features

* update apple-touch-icon ([050508b5](http://github.com/sparanoid/sparanoid.com/commit/050508b5aed7553511330650e7d0da629e91607b))
* **grunt:**
  * update `html-minifier`, make all whitespace collapsed to one character. ([93bfb422](http://github.com/sparanoid/sparanoid.com/commit/93bfb4222eeb5e1e5e19b3df2164525b617eee81))
  * better grunt tasks excluding files those need post-process ([bce8cf73](http://github.com/sparanoid/sparanoid.com/commit/bce8cf732f5f691516e04fcc00ab98b904245fac))
* **post:** new post “AVOS Cloud” ([f6ed5f63](http://github.com/sparanoid/sparanoid.com/commit/f6ed5f634fda7209fedee6a4b8a6a3f692b682bf))
* **style:**
  * update status text color ([5a388e1b](http://github.com/sparanoid/sparanoid.com/commit/5a388e1b47123c67994cfcd2cebd9f5c5ed86b10))
  * more viewport unit ([364c5ad1](http://github.com/sparanoid/sparanoid.com/commit/364c5ad1653d01f6e6758205b8ecbe95eed19ee1))
* **template:**
  * make normal image headers responsive ([c5d3a185](http://github.com/sparanoid/sparanoid.com/commit/c5d3a18599fea23650496f1667ff49f6cbbab730))
  * update template variables ([874ccb06](http://github.com/sparanoid/sparanoid.com/commit/874ccb063f99d2625c3fbf0d8b70b833cc73b1e6))
  * remove Alipay donate link ([f42ed071](http://github.com/sparanoid/sparanoid.com/commit/f42ed0716dca40e47a0b2a64d94e99842f5b29dc))
  * better variables structure ([af58b736](http://github.com/sparanoid/sparanoid.com/commit/af58b736e9dab2122519733e0020186819cc747a))
  * remove all FlexSlider instances ([4124d6ad](http://github.com/sparanoid/sparanoid.com/commit/4124d6ada257a79114f22d88e92a62829cecccb1))


#### Breaking Changes

* Now you can have custom CSS styles per post. Simply create a `css` front-matter data like this:

```
css: |
  article header h1 img {
    image-rendering: pixelated;
  }
```
 ([c5d3a185](http://github.com/sparanoid/sparanoid.com/commit/c5d3a18599fea23650496f1667ff49f6cbbab730))


<a name="0.0.8"></a>
### 0.0.8 (2014-04-27)


#### Bug Fixes

* include the missing gem lock file ([2a546df9](http://github.com/sparanoid/sparanoid.com/commit/2a546df94bdeea1ead054ef653627fb9b92a4e2e))
* **style:**
  * avoid smoosh container edge ([75f66dfc](http://github.com/sparanoid/sparanoid.com/commit/75f66dfcfc60ef3e17f26c652a5e9e32006b835f))
  * remove padding reset for last child elements ([62caf45f](http://github.com/sparanoid/sparanoid.com/commit/62caf45fc00132192694a9994a36ba168bf2cf1c))


#### Features

* better external link post indicator ([6393ea07](http://github.com/sparanoid/sparanoid.com/commit/6393ea07d74672599b9cf7dd17ec5a3becb65174))
* change error page permalink for GitHub Pages ([b03097ce](http://github.com/sparanoid/almace-scaffolding/commit/b03097cef9baf7c9ea238e2eeca848cefb0c8718))
* **style:** SVG headlines got viewport units support ([f818a7b1](http://github.com/sparanoid/sparanoid.com/commit/f818a7b1d626a4581c4a1d81df06d17d7c9b4dd1))
* **grunt:** better grunt tasks excluding files those need post-process ([b1dd8c01](http://github.com/sparanoid/almace-scaffolding/commit/b1dd8c017912abe908602439881f8627be112803))
* **template:**
  * better inline SVG post title support ([6c33d1d6](http://github.com/sparanoid/sparanoid.com/commit/6c33d1d678d9a5228f160bae82be8748c966501a))
  * inline SVG headline support ([89d3dac3](http://github.com/sparanoid/sparanoid.com/commit/89d3dac3413e11e5139cf8c96e2adc490d27ad9a))
  * better Twitter Cards support ([39d5c5e9](http://github.com/sparanoid/sparanoid.com/commit/39d5c5e9670c9bedb32bff8f4c807eb156cc1f8f))


#### Breaking Changes

* Now I dynamically include headline SVG based on post front-matter data `svg-headline`:

```
---
title: Hello World!
category: work
svg-headline: svg/post-title.svg
svg-headline-width: 400
svg-headline-height: 145
---
```

Note:

- The method to include SVG files has been changed since ([89d3dac341](http://github.com/sparanoid/sparanoid.com/commit/89d3dac3413e11e5139cf8c96e2adc490d27ad9a)), instead of embedding SVG into post files, now it include SVGs from external files using Liquid template tags `include`
- I use `for` loop here to include SVG file, it doesn't mean you can define multiple SVG headers here, it's just a workaround since include files in a sub-directory with variable [seems buggy](https://github.com/jekyll/jekyll/pull/1495)
- In most cases, you have to define `svg-headline-width` and `svg-headline-height` in order to make your SVG title responsive to your viewport.
 ([6c33d1d6](http://github.com/sparanoid/sparanoid.com/commit/6c33d1d678d9a5228f160bae82be8748c966501a))


<a name="0.0.7"></a>
### 0.0.7 (2014-04-01)


#### Bug Fixes

* **post:** remove unwanted HTML comments for posts ([f5ffc0ee](http://github.com/sparanoid/sparanoid.com/commit/f5ffc0ee55a32cbcbd8710d36d65006a44ec95e2))
* **style:** more aggressive “last-child” reset ([7b55093d](http://github.com/sparanoid/sparanoid.com/commit/7b55093d13e357a72d370b00db529424fba4fc27))


#### Features

* **style:**
  * remove unused `.btn` class ([600121ff](http://github.com/sparanoid/sparanoid.com/commit/600121ff0b16426c1898dbaf526b88c91c88e6fe))
  * simplified transition ([3e8baa82](http://github.com/sparanoid/sparanoid.com/commit/3e8baa82165dae2542ee30fd2b49bfbda8ba1a6f))
* **template:** add Redcarpet footnote support ([2c9d67f4](http://github.com/sparanoid/sparanoid.com/commit/2c9d67f439dbd17c2514475679d40ad515aaa895))


#### Breaking Changes

* New Redcarpet footnote will break existing footnote markup. Update your posts to avoid unwanted breaks.

You can read more about the footnote syntax at https://github.com/vmg/redcarpet
 ([2c9d67f4](http://github.com/sparanoid/sparanoid.com/commit/2c9d67f439dbd17c2514475679d40ad515aaa895))


<a name="0.0.6"></a>
### 0.0.6 (2014-04-01)


#### Bug Fixes

* **style:**
  * fix code block overflow scroll issue ([33be40d1](http://github.com/sparanoid/sparanoid.com/commit/33be40d1196fa42331bbba91cd32725a098695b8))
  * fix mismatched color variables ([865c13d6](http://github.com/sparanoid/sparanoid.com/commit/865c13d6c73f89a8ecabf50666c8391c42241aef))
  * clear float for `blockquote` footer ([1da7cf28](http://github.com/sparanoid/sparanoid.com/commit/1da7cf286d140a7e9076a3c6deec207f4f91dcc1))
* **template:** wrong home link hover effect for specified post color scheme ([9bbca0f7](http://github.com/sparanoid/sparanoid.com/commit/9bbca0f7b630bd8ee118f5433319a6256fb61b25))


#### Features

* better Redcarpet configurations, add some useful Redcarpet extensions ([2bd1c2a1](http://github.com/sparanoid/sparanoid.com/commit/2bd1c2a1c603dcbb686d55b6607989187f9326a1))
* use `rsrc.sparanoid.com` for assets URL ([445257d3](http://github.com/sparanoid/sparanoid.com/commit/445257d3a0898f40118e1563612f474fc2d83f35))
* **style:**
  * add a simple table style ([7b01cf56](http://github.com/sparanoid/sparanoid.com/commit/7b01cf56a56d369f00dd0cd03681a795233e6fb9))
  * add syntax highlight support ([006e14f1](http://github.com/sparanoid/sparanoid.com/commit/006e14f1d9ca04260c6d519ef737f203bf1cdd2e))
  * smaller margin space for image post title ([4eac0fda](http://github.com/sparanoid/sparanoid.com/commit/4eac0fdab6adcd68ddaf40451dd22dc034c83c07))
  * split `amsf` specified styles into `custom.less` ([27061574](http://github.com/sparanoid/almace-scaffolding/commit/27061574d7d2b0ac42b3f0887f4ccfcfacafb8f9))
* **template:**
  * remove `.txt` wrapper ([1f400475](http://github.com/sparanoid/sparanoid.com/commit/1f400475e3f3611919299fdcccad73779539fd16))
  * update footer and read me for new amsf (a.k.a. Almace Scaffolding) branding ([13de5820](http://github.com/sparanoid/sparanoid.com/commit/13de58207961f52204545bf9ac91a03bb5f0bdf5))


#### Breaking Changes

* Removal of `.txt` CSS class may break your existing post layout. Now `.txt` is replaced with `main.content`, a global content wrapper. To fix layout breaks for your existing site: simply remove all `<div class=txt>` containers from your posts
 ([1f400475](http://github.com/sparanoid/sparanoid.com/commit/1f400475e3f3611919299fdcccad73779539fd16))


<a name="0.0.5"></a>
### 0.0.5 (2014-03-31)


#### Features

* add a fancy banner at the bottom of every page ([0760b036](http://github.com/sparanoid/sparanoid.com/commit/0760b036cb1d6daf2d900f9f203802cd0840ded8))
* **Gruntfile:**
  * add a fancy `time-grunt` plugin ([ab1c2822](http://github.com/sparanoid/sparanoid.com/commit/ab1c2822ca6022e6dcbacd3337f1b1fb5b49b32b))
  * new HTML smoosher task ([9d4dcb25](http://github.com/sparanoid/sparanoid.com/commit/9d4dcb25ee6c94da76945f151f0bc7385454a701))
* **package:** introduce grunt-conventional-changelog ([c732236b](http://github.com/sparanoid/sparanoid.com/commit/c732236b0d75c40c95a556ff67a504ebbf8435a4))
* **template:**
  * remove SVG icons ([860f6b4b](http://github.com/sparanoid/sparanoid.com/commit/860f6b4bf85671628b9329ecd6a074a5d37447b7))
  * try `minimal-ui` for iOS 7.1+ ([0215e148](http://github.com/sparanoid/sparanoid.com/commit/0215e148837ecf2ce701ee4da7af950fe76635eb))
  * sync from sparanoid.com ([19680a25](http://github.com/sparanoid/almace-scaffolding/commit/19680a252a6fcda363b58d9f42dd3efd25497cba))


#### Breaking Changes

* This will remove all SVG icon decorations for `.note`, `.store`, and `.download`
 ([860f6b4b](http://github.com/sparanoid/sparanoid.com/commit/860f6b4bf85671628b9329ecd6a074a5d37447b7))
* `smoosher` task will inline all `.css` and .js` files to reduce HTTP requests and increase load performance. It's ideal for small website with some basic styles just like this project.
 ([9d4dcb25](http://github.com/sparanoid/sparanoid.com/commit/9d4dcb25ee6c94da76945f151f0bc7385454a701))



<a name="0.0.4"></a>
### 0.0.4 (2014-02-25)

#### Features

* **package:** add grunt-conventional-changelog support ([8346b783](http://github.com/sparanoid/almace-scaffolding/commit/8346b783c2c8f3634d0d3e21e97aa340c5457bd1))
* **styles:** new `.largetype` class, replaces old button styles ([532bf5f2](http://github.com/sparanoid/almace-scaffolding/commit/532bf5f21a32601dbb26fa75864effbfeb16f659))

### 0.0.3 (2014-02-16)

- Better test task
- Add `custom.less`
- Sync templates from sparanoid.com
  - Logo update
  - Now use viewport units
- Add HTML validation task
- Use `grunt-contrib-less` instead of `grunt-recess`

### 0.0.2 (2014-01-28)
- Bump Jekyll required version
- Update file structure
- Sync Gruntfile from sparanoid.com
- Sync styles from sparanoid.com

### 0.0.1 (2014-01-06)
- First usable version
