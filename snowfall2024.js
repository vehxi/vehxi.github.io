// Тут подключить JQuery
var style = document.createElement('style');
style.innerHTML = `
  .sf-snow-flake {
position: fixed;
top: -20px;
z-index: 99999;
}
.sf-snow-anim {
top: 110%;
}
  `;
document.head.appendChild(style);

/*
Copyright (c) 2014 Matthew Hudson - MIT License
device.js 0.1.61
*/
(function () { var a, b, c, d, e, f, g, h, i, j; a = window.device, window.device = {}, c = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), device.ios = function () { return device.iphone() || device.ipod() || device.ipad() }, device.iphone = function () { return d("iphone") }, device.ipod = function () { return d("ipod") }, device.ipad = function () { return d("ipad") }, device.android = function () { return d("android") }, device.androidPhone = function () { return device.android() && d("mobile") }, device.androidTablet = function () { return device.android() && !d("mobile") }, device.blackberry = function () { return d("blackberry") || d("bb10") || d("rim") }, device.blackberryPhone = function () { return device.blackberry() && !d("tablet") }, device.blackberryTablet = function () { return device.blackberry() && d("tablet") }, device.windows = function () { return d("windows") }, device.windowsPhone = function () { return device.windows() && d("phone") }, device.windowsTablet = function () { return device.windows() && d("touch") && !device.windowsPhone() }, device.fxos = function () { return (d("(mobile;") || d("(tablet;")) && d("; rv:") }, device.fxosPhone = function () { return device.fxos() && d("mobile") }, device.fxosTablet = function () { return device.fxos() && d("tablet") }, device.meego = function () { return d("meego") }, device.cordova = function () { return window.cordova && "file:" === location.protocol }, device.nodeWebkit = function () { return "object" == typeof window.process }, device.mobile = function () { return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego() }, device.tablet = function () { return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet() }, device.desktop = function () { return !device.tablet() && !device.mobile() }, device.portrait = function () { return window.innerHeight / window.innerWidth > 1 }, device.landscape = function () { return window.innerHeight / window.innerWidth < 1 }, device.noConflict = function () { return window.device = a, this }, d = function (a) { return -1 !== j.indexOf(a) }, f = function (a) { var b; return b = new RegExp(a, "i"), c.className.match(b) }, b = function (a) { return f(a) ? void 0 : c.className += " " + a }, h = function (a) { return f(a) ? c.className = c.className.replace(a, "") : void 0 }, device.ios() ? device.ipad() ? b("ios ipad tablet") : device.iphone() ? b("ios iphone mobile") : device.ipod() && b("ios ipod mobile") : b(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && b("cordova"), e = function () { return device.landscape() ? (h("portrait"), b("landscape")) : (h("landscape"), b("portrait")) }, i = "onorientationchange" in window, g = i ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(g, e, !1) : window.attachEvent ? window.attachEvent(g, e) : window[g] = e, e() }).call(this);
/*
snowFlurry JS - version 2.0
Copyright Ð’Â© 2015 S.W. Clough (https://www.html5andbeyond.com)
Licensed Under MIT
*/
(function ($) {
  $.fn.snowFlurry = function (options) {
    var s = $.extend({
      maxSize: 5,
      numberOfFlakes: 25,
      minSpeed: 10,
      maxSpeed: 15,
      color: '#fff',
      timeout: 0
    }, options);
    var windowWidth = $(window).innerWidth(),
      WidthArray = [],
      DelayArray = [],
      animateArray = [],
      flakeSize = [],
      snowInterval;
    if (s.maxSize <= 10) {
      for (var i = 1; i < s.maxSize; i++) {
        flakeSize.push(i);
      }
    } else {
      for (var i = 1; i < 10; i++) {
        flakeSize.push(i);
      }
    }
    for (var i = 0; i < windowWidth - 20; i++) {
      WidthArray.push(i);
    }
    for (var i = 0; i < s.numberOfFlakes; i++) {
      $('<div class="sf-snow-flake"></div>').appendTo('body');
    }
    for (var i = 0; i < 10; i++) {
      DelayArray.push(i);
    }
    for (var i = s.minSpeed; i < s.maxSpeed; i++) {
      animateArray.push(i);
    }
    function getRandomFlakeSize() {
      var item = flakeSize[Math.floor(Math.random() * flakeSize.length)];
      return item;
    }
    function getRandomPosition() {
      var item = WidthArray[Math.floor(Math.random() * WidthArray.length)];
      return item;
    }
    function getRandomDelay() {
      var item = DelayArray[Math.floor(Math.random() * DelayArray.length)];
      return item * 1000;
    }
    function getRandomAnimation() {
      var item = animateArray[Math.floor(Math.random() * animateArray.length)];
      return item * 1000;
    }
    $('.sf-snow-flake').each(function () {
      var elem = $(this);
      elem.attr('data-speed', getRandomAnimation());
      elem.attr('data-delay', getRandomDelay());
      var elemSpeed = elem.attr('data-speed'),
        elemDelay = elem.attr('data-delay');
      var flakeSize = getRandomFlakeSize();
      elem.css({
        'width': flakeSize,
        'height': flakeSize,
        'border-radius': flakeSize / 2,
        'background-color': s.color,
        'box-shadow': '0 0 2px 1px' + s.color
      })
      function activateAnim() {
        setTimeout(function () {
          elem.css('left', getRandomPosition());
          elem.addClass('sf-snow-anim');
          elem.css('transition', 'top ' + elemSpeed / 1000 + 's linear');
          setTimeout(function () {
            elem.css('transition', '');
            elem.removeClass('sf-snow-anim');
          }, elemSpeed);
        }, elemDelay);
      }
      if (device.mobile() || device.tablet() || Modernizr.touch || $('html').hasClass('no-csstransitions')) { } else if (device.desktop()) {
        activateAnim();
        snowInterval = setInterval(function () {
          activateAnim();
        }, +elemDelay + +elemSpeed);
      }
      if (s.timeout != 0) {
        setTimeout(function () {
          clearInterval(snowInterval);
          $('.sf-snow-flake').fadeOut(1500, function () {
            $(this).remove();
          })
        }, s.timeout * 1000);
      }
    });
  };
}(jQuery));
jQuery(document).ready(function ($) {
  $(document).snowFlurry({
    maxSize: 10,
    numberOfFlakes: 100,
    minSpeed: 10,
    maxSpeed: 20,
    color: '#fff',
    timeout: 0
  });
});