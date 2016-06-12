// External Link Tracking
(function trackOutbounds() {
  var hitCallbackHandler = function(url,win) {
    if (win) {
      window.open(url, win);
    } else {
      window.location.href = url;
    }
  };

  var addEvent = function(el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
      } else {
      el.attachEvent('on' + eventName, function(){
        handler.call(el);
      });
    }
  }

  if(document.getElementsByTagName) {
    var el = document.getElementsByTagName('a');
    var getDomain = document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0];

    // Look thru each a element
    for (var i=0; i < el.length;i++) {
      // Extract it's href attribute
      var href = (typeof(el[i].getAttribute('href')) == 'string' ) ? el[i].getAttribute('href') : '';

      // Query the href for the top level domain (xxxxx.com)
      var myDomain = href.match(getDomain);

      // If link is outbound and is not to this domain
      if ((href.match(/^(https?:|\/\/)/i)  && !myDomain) || href.match(/^mailto\:/i)) {
        // Add an event to click
        addEvent(el[i],'click', function(e) {
          var url = this.getAttribute('href'),
              win = (typeof(this.getAttribute('target')) == 'string') ? this.getAttribute('target') : ''
          ;
          // Log even to Analytics, once done, go to the link
          ga('send', 'event', 'UserAction', 'External Link', url,
            {'hitCallback': hitCallbackHandler(url,win)},
            {'nonInteraction': 1}
          );
          e.preventDefault();
        });
      }
    }
  }
})();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
  window.addEventListener('load', function () {
    if(navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ 'command': 'trimCaches' });
    }
  });
}

/*!
 * Responsive wrapper embeds, iframes, etc
 * @author Erik Runyon
 * Updated 2016-06-03
 * Inspired by https://gist.github.com/davatron5000/e9ef20f1d2ba4d9099711064c644d155
 */
function fitEmbed(embeds){
  for(var i=0; i<embeds.length; i++) {
    var embed = embeds[i],
        width = embed.getAttribute('width'),
        height = embed.getAttribute('height'),
        aspectRatio = height/width,
        parentDiv = embed.parentNode,
        divOuter = document.createElement('div'),
        divInner = document.createElement('div')
    ;

    embed.removeAttribute('height');
    embed.removeAttribute('width');

    // Prevents the embed from exceeding the intial width
    divOuter.className = 'embed-outer';
    divOuter.style.maxWidth = width + 'px';
    divInner.className = 'embed-inner';
    divInner.style.paddingBottom = aspectRatio * 100 + "%";
    divOuter.appendChild(divInner);

    embed.parentNode.replaceChild(divOuter, embed);
    divInner.appendChild(embed);
  }
}
var sources = [
      'iframe[src*="youtube.com"]',
      'iframe[src*="vimeo.com"]',
      'iframe[src*="speakerdeck.com"]'
    ],
    embeds = document.querySelectorAll(sources.join(','))
;
if(embeds.length) {
  fitEmbed(embeds);
}

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

/*!
  loadCSS: load a CSS file asynchronously.
  [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT
  https://github.com/filamentgroup/loadCSS
*/
(function(w){"use strict";var loadCSS=function(href,before,media){var doc=w.document;var ss=doc.createElement("link");var ref;if(before){ref=before;}
else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1];}
var sheets=doc.styleSheets;ss.rel="stylesheet";ss.href=href;ss.media="only x";function ready(cb){if(doc.body){return cb();}
setTimeout(function(){ready(cb);});}
ready(function(){ref.parentNode.insertBefore(ss,(before?ref:ref.nextSibling));});var onloadcssdefined=function(cb){var resolvedHref=ss.href;var i=sheets.length;while(i--){if(sheets[i].href===resolvedHref){return cb();}}
setTimeout(function(){onloadcssdefined(cb);});};function loadCB(){if(ss.addEventListener){ss.removeEventListener("load",loadCB);}
ss.media=media||"all";}
if(ss.addEventListener){ss.addEventListener("load",loadCB);}
ss.onloadcssdefined=onloadcssdefined;onloadcssdefined(loadCB);return ss;};if(typeof exports!=="undefined"){exports.loadCSS=loadCSS;}
else{w.loadCSS=loadCSS;}}(typeof global!=="undefined"?global:this));
/*! CSS rel=preload polyfill. Depends on loadCSS function. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT  */
(function( w ){
  // rel=preload support test
  if( !w.loadCSS ){
    return;
  }
  var rp = loadCSS.relpreload = {};
  rp.support = function(){
    try {
      return w.document.createElement( "link" ).relList.supports( "preload" );
    } catch (e) {
      return false;
    }
  };

  // loop preload links and fetch using loadCSS
  rp.poly = function(){
    var links = w.document.getElementsByTagName( "link" );
    for( var i = 0; i < links.length; i++ ){
      var link = links[ i ];
      if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){
        w.loadCSS( link.href, link );
        link.rel = null;
      }
    }
  };

  // if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
  if( !rp.support() ){
    rp.poly();
    var run = w.setInterval( rp.poly, 300 );
    if( w.addEventListener ){
      w.addEventListener( "load", function(){
        w.clearInterval( run );
      } );
    }
    if( w.attachEvent ){
      w.attachEvent( "onload", function(){
        w.clearInterval( run );
      } )
    }
  }
}( this ));
