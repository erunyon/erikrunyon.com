CodeHighlighter.addStyle("css", {
  comment : {exp : /\/\*[^*]*\*+([^\/][^*]*\*+)*\//},
  keywords : {exp : /@\w[\w\s]*/},
  selectors : {exp : "([\\w-:\\[.#][^{};>]*)(?={)"},
  properties : {exp : "([\\w-]+)(?=\\s*:)"},
  units : {
    exp : /([0-9])(em|en|px|%|pt)\b/,
    replacement : "$1<span class=\"$0\">$2</span>"
  },
  urls : {exp : /url\([^\)]*\)/}
});

CodeHighlighter.addStyle("ruby",{
  comment : {exp  : /#[^\n]+/},
  brackets : {exp  : /\(|\)/},
  string : {exp  : /'[^']*'|"[^"]*"/},
  keywords : {exp  : /\b(do|end|self|class|def|if|module|yield|then|else|for|until|unless|while|elsif|case|when|break|retry|redo|rescue|require|raise)\b/},
  symbol : {exp : /([^:])(:[A-Za-z0-9_!?]+)/}
});

jQuery(function($) {
  $('.skip-links').on('click','.s2n',function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('#nav').offset().top
    });
  });
  $(".fitvid").fitVids();
});

/*
 * Normalized hide address bar for iOS & Android
 * (c) Scott Jehl, scottjehl.com
 * MIT License
 */ (function(win) {
  var doc = win.document;
  if (!location.hash && win.addEventListener) {
    window.scrollTo(0, 1);
    var scrollTop = 1,
      getScrollTop = function() {
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
      bodycheck = setInterval(function() {
        if (doc.body) {
          clearInterval(bodycheck);
          scrollTop = getScrollTop();
          win.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 15);
    win.addEventListener("load", function() {
      setTimeout(function() {
        if (getScrollTop() < 20) {
          win.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 0);
    });
  }
})(this);

/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);
