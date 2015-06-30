---
title: 'What&#8217;s your css style?'
author: Erik Runyon
layout: post
permalink: /2008/11/whats-your-css-style/
categories:
  - Web Development
---
Let's talk for a moment about style. More specifically, CSS style. Every web developer I've met has had a personal way they write their style declarations. And typically if you have five developers in the room, you'll have five distinct styles. It's probably safe to say these styles are developed early on in a developers career and tend to change ever so slightly as time goes on to suit individual preference. I know that I had basically the same style for the first seven years of my CSS using web career (I'm talking post table/font= days).<!-- more -->

About a year and a half ago, however, [I switched jobs][1] and found myself dealing with the CSS of others that was quite different from my own. They went on about how nice their style was and how in time I would come around. After all, they all eventually adapted to the same style. I was fairly adamant at the time that, no, I was pretty set in my style ways and didn't see myself switching any time soon. It only took a couple of months.

My style at the time was a declaration with each property on its own line.

<pre><code class="css">
body {
  margin:0;
  padding:0;
}
</code></pre>

The style of the new shop was to use single line styles as follows:

<pre><code class="css">
body {margin:0; padding:0;}
</code></pre>

Since the time I switched over, I've grown to love this format. My initial argument against it was I felt it was harder to read and find the individual declaration I was looking for. But if you follow a simple set of rules, it's actually very easy to scan a large css file and find what you're looking for.

Out of curiosity, I checked out the CSS of some bloggers I read to see what styles they use.

The closest I could find to my old style was [Paul Boag][2]. Here's a sample:

<pre><code class="css">
body {
  background:#d6e59b url(../images/background.jpg);
  padding:2em 0;
}

#content {
  width:600px;
  padding:0 20px 0 30px;
}
</code></pre>

Very similar to that style is Dan Cederholm of [simplebits.com][3]

<pre><code class="css">
body {
  margin: 0;
  padding: 0;
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  color: #474a51;
  background: #f4f4ed;
  }
a:link, a:visited {
  color: #317b9e;
  text-decoration: none;
  }
</code></pre>

You can see two differences here. The closing brace is tabbed in with the declarations, and he puts a space between the declaration and the values, as Boag does not.

Now we'll get into some developers using single line declarations. First off is [Eric Meyer][4]. You'll notice he does ‚Äòmostly' single line. The body declaration is broken over a couple of lines. If you scan through the css at meyerweb, you'll see several instances of that treatment. Eric also does the space between the declaration and the value.

<pre><code class="css">
* {font-size: 100%; padding: 0; margin: 0;}
body {font: 0.84em/1.333 Arial, sans-serif; margin: 0; padding: 0;
  color: #202020; background: #FFF;
  min-width: 40em; margin: 0 auto;}
h1 {font-size: 2em; margin: 2em 0 0.5em; padding: 0.25em 0;}
h2 {font-size: 1.5em; margin: 2em 0 0.33em; padding: 0.25em 0;}
</code></pre>

Next up is [A List Apart][5] and Dan Rubin from [superflousbanter.org][6]. Both use primarily single line styles. The differences you'll notice are A List Apart puts spaces between pretty much everything.

<pre><code class="css">
* {margin: 0; padding: 0;}
body {font: 0.8125em Verdana, sans-serif; line-height: 1; color: #333; background: #FFF;}
html body a:hover {color: #000; background-color: #F4F2E4;
  border-bottom: 1px solid #9A8E51;}
h2 {font: 1.5em Georgia, "Times New Roman", serif; letter-spacing: 1px;}
h3 {font: bold 1em Verdana, Arial, sans-serif; letter-spacing: 2px;
  text-transform: uppercase;}
</code></pre>

Dan Rubin on the other hand uses no spaces except for the right before and after the braces.

<pre><code class="css">
body { background-color:#210D00;font-family:helvetica,arial,sans-serif;font-size:small;text-align:center;min-width:1000px;margin:0; }
#content { float:left;background:url(../i/bg_content_top.gif) no-repeat;width:618px;margin:58px 0 0 37px;padding:16px 0 0; }
#content2 { background:url(../i/bg_content_bottom.gif) no-repeat bottom;padding:0 0 16px; }
#content3 { background:#fff url(../i/bg_content_middle.gif) repeat-y;padding:3px 60px 1px; }
</code></pre>

Finally, we come to [Ordered List][7]. This style is almost exactly like the what I use. This is because the two members of OL are both former lead developers of my department.

<pre><code class="css">
.wrapper††† ††† ††††{float:left; display:inline; width:940px;}
.primary††† ††† ††† {float:left; display:inline; width:630px; border-left:320px solid transparent; margin:0 0 0 10px;}
div#post_info h4††† {color:#C0BA8D; font-size:116%; margin:0 0 15px;}
</code></pre>

I realize that some people style a certain way due to the editor used when cutting the site. For instance, I use [Coda][8] to code HTML/CSS. When it auto-completes a style, it will put a space between the colon and the value. I find this very annoying. Especially since editors such as [CSSEdit][9] (also in my Dock) has had a preference for default spacing for years. Hopefully their upcoming all-in-one editor, [Espresso][10], will have that as well (the current beta does not).

One final note. This site was styled prior to my metamorphasis with a lot of WordPress styles rolling over, so yes, it's in the old style, and probably will be for quite some time.

 [1]: /2007/07/enter-the-monkey-wrench/
 [2]: http://boagworld.com
 [3]: http://simplebits.com
 [4]: http://meyerweb.com/
 [5]: http://www.alistapart.com/
 [6]: http://superflousbanter.org
 [7]: http://orderedlist.com/
 [8]: http://www.panic.com/coda/
 [9]: http://macrabbit.com/cssedit/
 [10]: http://macrabbit.com/espresso/