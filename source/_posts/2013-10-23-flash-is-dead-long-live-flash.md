---
layout: post
title: "Flash is Dead. Long Live Flash!"
date: 2013-10-22
categories: [Performance, Web Development, Opinion]
---
If you've been doing web development for a while, you've no doubt worked with Flash. It was amazing in its heyday, allowing us to do things we couldn't do with vanilla html/css/javascript. But like many technologies in the web, it was abused and used it ways it shouldn't have, or were just plain obnoxious (Flash splash pages anyone?). But it wasn't until the iPhone shipped without Flash support that most of us started to doubt its longevity. <!-- more -->And it can be argued the largest nail in its coffin was [hammered in by Steve Jobs in April of 2010](http://www.apple.com/hotnews/thoughts-on-flash/). Even before Steve put his thoughts on Flash down on virtual paper, Apple and other web technology providers were [hard at work on ways to replace Flash](https://www.webkit.org/blog/138/). Those efforts brought us great technologies like CSS transitions and animations and we were all happy to have them.

## Lessons Forgotten

Flash was often used to hijack the native web experience. When entire sites were built using Flash, certain problems began to arise. Sometimes there was no "real" content for search engines to use. Quite often the download sizes were far higher than optimal. But with the rise of "HTML5" and the tools we needed to start replacing Flash animations, we were finally able to address these problems in a real way. But recently I've started to doubt that developers remember the problems we left behind.

<img src="/images/2013/flash-snowfall.jpg" alt="Snowfall" title="Snowfall" class="alignright">

The issue first popped up on my radar when The New York Times released their immersive feature titled &ldquo;[Snow Fall](http://www.nytimes.com/projects/2012/snow-fall/)". We all "ooh-ed" and "aah-ed" over the site. It was beautiful. The interactions and storytelling were extremly well done. It was an emotional piece, and the media and interaction of the site helped to tell that story. The problem? The first section alone is 23.2 MB when fully loaded, and the story in it entirety is over 70 MB. As a one-off, that's not a big deal. But this feature started to inspire a lot of other people to copy, and not often well, the same parallax/media heavy format, even when it didn't serve the content well.

## Here We Go Again

This problem reared its head again this week when Apple unveiled the [iPad Air](http://www.apple.com/ipad-air/) and new [Mac Pro](http://www.apple.com/mac-pro/). Shortly after the pages went live, it sparked a conversation in our office. The conversation centered around two viewpoints. The first was a love for the story-telling and the second a hate for the functionality. [Nevin](http://www.mcelwrath.com/) started by making the excellent point that "There's definitely two frames of mind - of which are quite opposite. One is hand holding (which some users may hate) and those who want to find the content on their own. Some like to be shown, others like to find. If I approach it as being told a story, I enjoy it, if I approach it like I'm after one thing, I hate it.". [Alec](https://twitter.com/xionon) followed up with "It reminds me of Flash in the mid 00's. The only difference is that I can select the text. Now that HTML5 is more-or-less caught up with Flash in the parts that Flash excels at, I expect people will start wanting to see more of this kind of interaction".

<figure>
  <img src="/images/2013/flash-mac-pro.jpg" alt="Mac Pro" title="Mac Pro" class="aligncenter">
  <figcaption>The new Mac Pro site</figcaption>
</figure>

Both excellent points.

I have two major issues with the two Apple pages. The first is that they're both extemely large. When loaded on my computer, the iPad Air page is 32.2 MB, and the Mac Pro page is 24.8 MB. Certainly not as large as the [Oakley Moto page](http://moto.oakley.com/) ([more info here](http://hawksworx.com/blog/oakleys-monster-page-of-baubles/)) that on initial launch this past summer weighed in at 85.4 MB, but still too large.

My second issue is that these pages are overriding native browser scrolling. Did you want to quickly scroll throught the Mac Pro page to find some information low on the page? Too bad. You'll get there when Apple is finished telling you the story they want to tell, in the way they want to tell it. If you're a visitor who is in a story telling frame of mind (like Nevin mentioned above), that's not a big deal. But if all you want is to be able to scroll through quickly and find what you want, you're in for a world of hurt. Why? Because scrolling through the page, as fast as I could, on an already primed cache, took 47 seconds. Is it a beautifully done page? Yes. Does it tell the story well? Also yes. Is it necessary? I'd argue that it isn't. As [Trent Walton so eloquently stated today](http://trentwalton.com/2013/10/23/scroll-hijacking/), "If the goal is to eliminate one’s ability to browse freely within a page then maybe it doesn’t belong in a web browser after all". Now granted, I'm not a marketing expert or an Apple employee. I don't know their audience as well as they do. Maybe this will work fantastically for them and sell more Mac Pro's than if they didn't.

<figure>
  <img src="/images/2013/flash-ipad-air.jpg" alt="iPad Air" title="iPad Air" class="aligncenter">
  <figcaption>The new iPad Air site</figcaption>
</figure>

I'm not saying that these implemenations are on the same level as Flash sites. Even with their problems, they're still an improvement. When done right, they can have fully accessible markup. They can be accessed by most devices. In fact, the Mac Pro page works better on my iPhone 5 (opinion) than on my laptop, but some of the basic features of Safari don't work (touching the top of the page to scroll to the top). But they're still painful to interact with (once again, my opinion). And even worse, they're mainstream enough that many of the non-developer decision makers in website projects are aware of them and think they're "cool". And when we're asked to add "cool" just because it's "cool", nobody wins. And at that point it's up to the developers and designers to argue the right and wrong of it, as we should with any web technology or technique. But we don't always win. As Alec pointed out at the end of our conversation: "Frankly I think Apple's thing works well for some kinds of pages. The problem I have is 1) often times pages like Apple's don't have an easy way to 'get out' or switch to a regular scroll mode where I can discover content on my own and 2) Marketing types see these pages and think that their page about nuns in the Congo needs a similar experience". This kind of story-telling may not be the best idea for nuns in the Congo. Or for your [police department](http://www.milwaukeepolicenews.com/).

## TL;DR

The web has gone through many phases in its short life. Today, unfortunately, is the day of overly large RWD sites and resurgance of Flash-like interaction. Both of which seem highly contradictory to the industries recent focus on cross-device experiences and performance. But as we're pushing our way forward, let's not forget our roots of [progressive enhancement](http://danielmall.com/articles/progressive-enhancement/) and accessibility. Don't forget that many people still don't have broadband. And don't sacrifice content and accessiblity on the altar of cool and flashy.