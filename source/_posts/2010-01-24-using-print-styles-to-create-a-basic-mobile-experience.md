---
title: Using Print Styles to Create a Basic Mobile Experience
author: Erik Runyon
layout: post
permalink: /2010/01/using-print-styles-to-create-a-basic-mobile-experience/
categories:
  - Mobile
  - Web Development
---
[In the last article](/2010/01/print-styles-your-first-step-to-basic-mobile/), we made our print stylesheet. Now we’re going to take that stylesheet and turn it into a basic mobile stylesheet. Now when I say basic, I’m talking VERY basic. This is not what you’re displaying to your iPhone and Android users.<!-- more -->

## Copy, Paste and Tweak Your Way to Mobile

First off, create an empty your mobile stylesheet and link it up:

<pre>&lt;link href="/css/mobile.css" media="handheld" rel="stylesheet" type="text/css" /&gt;</pre>

<img class="alignright" src="/images/2010/basic-mobile.png" alt="Basic mobile display" />

Grab your print styles and paste them into your mobile stylesheet. You’ll need to take a few of the items you hid (such as navigation), bring them back and give them some style. As with print, focus on what’s important to this user experience and hide what’s not.

## Branding is Still Important

We’re going to use the same in-line images we included in our print stylesheet to brand our mobile site. How you have them set up in your print style may be all you need. If not, feel free to use “width” on them to make them fit. I typically recommend against using css to change the height/width of images, but I make an exception in this case. <!--more-->

### Images

Since most of your content images are going to be wider than the screens of most phones, you should add max-width:100% to images in your content.

### Text

One of the first things a basic mobile user should see on your page (either immediately preceding or following the header) is skip links. This is a list of anchor tags to key elements on your page. At a minimum, it should include links to navigation and content. As an added bonus, these links are helpful to screen readers as well. Be sure to hide this list in your print and screen stylesheets.

When it comes to body copy on the web, there has been a long-standing serif vs sans-serif debate. As a personal preference, I usually go with sans-serif for screen body copy (serif for titles), and serif for print. If you look at my print stylesheet, you’ll see the following font stack:

<pre>Georgia, Times, "Times New Roman", serif</pre>

For screen and basic mobile, I’m using:

<pre>"Lucida Grande", Lucida, Helvetica, Arial, sans-serif</pre>

## And Off We Go

If recent trends tell us anything, it’s that an increasing percentage of web users are going to be accessing our sites on small screens. As developers, it’s our responsibility to to give at least a passing nod to these users and give them a pleasant experience. Offering basic mobile styles is the first step.

<div class="note">

Two of the easiest way to test your newly crafted mobile view:
  
* Opera 10′s small screen view (View > Small Screen)
* Switching your style view if Firefox using the <a href="http://chrispederick.com/work/web-developer/">Web Developer extension</a>. (CSS > Display CSS By Media Type)

</div>
