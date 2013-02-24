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

/* Unobtrustive Code Highlighter By Dan Webb 11/2005
   Version: 0.4
*/
if("a".replace(/a/,function(){return"b"})!="b")(function(){var default_replace=String.prototype.replace;String.prototype.replace=function(search,replace){if(typeof replace!="function"){return default_replace.apply(this,arguments)}
var str=""+this;var callback=replace;if(!(search instanceof RegExp)){var idx=str.indexOf(search);return(idx==-1?str:default_replace.apply(str,[search,callback(search,idx,str)]))}
var reg=search;var result=[];var lastidx=reg.lastIndex;var re;while((re=reg.exec(str))!=null){var idx=re.index;var args=re.concat(idx,str);result.push(str.slice(lastidx,idx),callback.apply(null,args).toString());if(!reg.global){lastidx+=RegExp.lastMatch.length;break}else{lastidx=reg.lastIndex;}}
result.push(str.slice(lastidx));return result.join("")}})();var CodeHighlighter={styleSets:new Array};CodeHighlighter.addStyle=function(name,rules){if([].push)this.styleSets.push({name:name,rules:rules,ignoreCase:arguments[2]||false})
function setEvent(){if(typeof Event!='undefined'&&typeof Event.onReady=='function')
return Event.onReady(CodeHighlighter.init.bind(CodeHighlighter));var old=window.onload;if(typeof window.onload!='function'){window.onload=function(){CodeHighlighter.init()};}else{window.onload=function(){old();CodeHighlighter.init();}}}
if(this.styleSets.length==1)setEvent();}
CodeHighlighter.init=function(){if(!document.getElementsByTagName)return;if("a".replace(/a/,function(){return"b"})!="b")return;var codeEls=document.getElementsByTagName("CODE");codeEls.filter=function(f){var a=new Array;for(var i=0;i<this.length;i++)if(f(this[i]))a[a.length]=this[i];return a;}
var rules=new Array;rules.toString=function(){var exps=new Array;for(var i=0;i<this.length;i++)exps.push(this[i].exp);return exps.join("|");}
function addRule(className,rule){var exp=(typeof rule.exp!="string")?String(rule.exp).substr(1,String(rule.exp).length-2):rule.exp;rules.push({className:className,exp:"("+exp+")",length:(exp.match(/(^|[^\\])\([^?]/g)||"").length+1,replacement:rule.replacement||null});}
function parse(text,ignoreCase){return text.replace(new RegExp(rules,(ignoreCase)?"gi":"g"),function(){var i=0,j=1,rule;while(rule=rules[i++]){if(arguments[j]){if(!rule.replacement)return"<span class=\""+rule.className+"\">"+arguments[0]+"</span>";else{var str=rule.replacement.replace("$0",rule.className);for(var k=1;k<=rule.length-1;k++)str=str.replace("$"+k,arguments[j+k]);return str;}}else j+=rule.length;}});}
function highlightCode(styleSet){var parsed,clsRx=new RegExp("(\\s|^)"+styleSet.name+"(\\s|$)");rules.length=0;var stylableEls=codeEls.filter(function(item){return clsRx.test(item.className)});for(var className in styleSet.rules)addRule(className,styleSet.rules[className]);for(var i=0;i<stylableEls.length;i++){if(/MSIE/.test(navigator.appVersion)&&stylableEls[i].parentNode.nodeName=='PRE'){stylableEls[i]=stylableEls[i].parentNode;parsed=stylableEls[i].innerHTML.replace(/(<code[^>]*>)([^<]*)<\/code>/i,function(){return arguments[1]+parse(arguments[2],styleSet.ignoreCase)+"</code>"});parsed=parsed.replace(/\n( *)/g,function(){var spaces="";for(var i=0;i<arguments[1].length;i++)spaces+="&nbsp;";return"\n"+spaces;});parsed=parsed.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");parsed=parsed.replace(/\n(<\/\w+>)?/g,"<br />$1").replace(/<br \/>[\n\r\s]*<br \/>/g,"<p><br></p>");}else parsed=parse(stylableEls[i].innerHTML,styleSet.ignoreCase);stylableEls[i].innerHTML=parsed;}}
for(var i=0;i<this.styleSets.length;i++){highlightCode(this.styleSets[i]);}}
CodeHighlighter.addStyle("ruby",{comment:{exp:/#[^\n]+/},brackets:{exp:/\(|\)/},string:{exp:/'[^']*'|"[^"]*"/},keywords:{exp:/\b(do|end|self|class|def|if|module|yield|then|else|for|until|unless|while|elsif|case|when|break|retry|redo|rescue|require|raise)\b/},symbol:{exp:/([^:])(:[A-Za-z0-9_!?]+)/}});CodeHighlighter.addStyle("css",{comment:{exp:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//},keywords:{exp:/@\w[\w\s]*/},selectors:{exp:"([\\w-:\\[.#][^{};>]*)(?={)"},properties:{exp:"([\\w-]+)(?=\\s*:)"},units:{exp:/([0-9])(em|en|px|%|pt)\b/,replacement:"$1<span class=\"$0\">$2</span>"},urls:{exp:/url\([^\)]*\)/}});CodeHighlighter.addStyle("javascript",{comment:{exp:/(\/\/[^\n]*\n)|(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)/},brackets:{exp:/\(|\)/},string:{exp:/'[^']*'|"[^"]*"/},keywords:{exp:/\b(arguments|break|case|continue|default|delete|do|else|false|for|function|if|in|instanceof|new|null|return|switch|this|true|typeof|var|void|while|with)\b/},global:{exp:/\b(toString|valueOf|window|element|prototype|constructor|document|escape|unescape|parseInt|parseFloat|setTimeout|clearTimeout|setInterval|clearInterval|NaN|isNaN|Infinity)\b/}});CodeHighlighter.addStyle("html",{comment:{exp:/&lt;!\s*(--([^-]|[\r\n]|-[^-])*--\s*)&gt;/},tag:{exp:/(&lt;\/?)([a-zA-Z]+\s?)/,replacement:"$1<span class=\"$0\">$2</span>"},string:{exp:/'[^']*'|"[^"]*"/},attribute:{exp:/\b([a-zA-Z-:]+)(=)/,replacement:"<span class=\"$0\">$1</span>$2"},doctype:{exp:/&lt;!DOCTYPE([^&]|&[^g]|&g[^t])*&gt;/}});CodeHighlighter.addStyle("erb",{tag:{exp:/(&lt;%=?|%&gt;)/},comment:{exp:/#[^\n]*/},brackets:{exp:/\(|\)|\[|\]|\{|\}/},string:{exp:/'[^']*'|"[^"]*"/},keywords:{exp:/\b(do|end|self|class|def|if|module|yield|then|else|for|until|unless|while|elsif|case|when|break|retry|redo|rescue|require|raise)\b/},constants:{exp:/\b(true|false|__[A-Z][^\W]+|[A-Z]\w+)\b/},symbol:{exp:/:[^\W]+/},instance:{exp:/@+[^\W]+/},method:{exp:/[^\w]*\.(\w*)[!?]*/}});

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