---
layout: post
title: "From 2.4 MB down to 400 KB"
date: 2013-12-06
categories: [Web Development]
---
It's [been](http://gigaom.com/2012/05/23/the-growing-epidemic-of-page-bloat/) [fairly](http://www.websiteoptimization.com/speed/tweak/average-web-page/) [well](http://www.websiteoptimization.com/speed/tweak/average-number-web-objects/) [documented](http://www.webperformancetoday.com/2012/05/24/average-web-page-size-1-mb/) that the average size of webpages has been growing by leaps and bounds, with images making up the majority of the size. Based on my own stats for [160+ HigherEd responsive sites](/highered-rwd-directory/), images account for 73% of the total download. And when you're dealing with a long-form page like [www.ND.edu](http://www.nd.edu/), images can account for even more (92% to be exact). In a situation like this, finding ways to cut down on the number of images, or deferring the loading of images, can result in a huge impact on not just the download size, but load-time as well.<!-- more -->

ND.edu was built (good or ill) with three major breakpoints in mind: mobile, tablet, and desktop. We did this so we could really focus during our two month deadline on optimizing for our mobile users. So from day one, our mobile payload has been pretty light:

- 260 KB
- 25 Requests (13 Images)

## The Problem

In the year and a half since we launched this version of ND.edu, we had limited time to optimize as much as we'd like. Initially we focused on the two carousels at the top, only loading the front-most image and delaying the rest until the user chose to interact with them. But that still left us with a lot of content images. So when the time came to really get into optimizing, we were working from the following baseline for our desktop size:

- 2.4 MB
- 132 requests (117 images)

## Potential Areas to Optimize

We've made a habit of tracking everything on our sites using [Google Analytics Event Tracking](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide). Because of this, we know how many of our visitors were seeing which images. So if we start at the top of the page and start scrolling down, naturally visitors start dropping off.

### News and Events

![About](/images/2013/400k-news-and-events.jpg)

24 images (646.5 KB total) viewed by 21.4% of visitors

### About

![About](/images/2013/400k-header-about.jpg)

6 images (208.3 KB total) viewed by 8.9% of visitors

### Academics

![Academics](/images/2013/400k-header-academics.jpg)

14 images (406.9 KB total) viewed by 6.5% of visitors

### Admissions

![Admissions](/images/2013/400k-header-admissions.jpg)

4 images (140 KB total) viewed by 4.1% of visitors

### Faith & Service

![Faith & Service](/images/2013/400k-header-faith.jpg)

9 images (328.1 KB total) viewed by 3.5% of visitors

### Tour Flyout

![Tour](/images/2013/400k-nddotedu-flyout.jpg)

Now heading all the way back to the top of the page to the feature location sidebar (click on "Learn More" below the location name in the top right).

26 images (169 KB total) viewed by 0.25% of visitors

## The Solution

So obviously we need to lazy-load these images instead of penalizing so many users that never see them. We ended up using base64 encoded gray inline images. We did this because it was fairly easy for us to switch to them and get the added benefit that the replacements are the exact same size as the actual image, and they'll behave exactly like the image they're replacing. This is important because of the way clicking on a top-level nav item scrolls a user quickly down the page. If the placeholders weren't exactly the same dimensions, then as we replaced the placeholders with the real images, our content would shift and users wouldn't end up in the right spot. For those concerned about users with javascript turned off, we have the real images linked in `noscript` tags, so they get images, but not the optimization.

## The Results

As you may recall from above, we started with 132 requests and 2.4 MB. We also had a loadtime that averaged 4.9s and a [WebPagetest](http://www.webpagetest.org/) score that looked like this:
![Pre-optimization webpage test of C A A B F B](/images/2013/400k-webpagetest-before.png)

After the optimization, we were down to 39 requests and 364 KB (changes by the day). The loadtime also dropped to an average of 1.8s. Additionally, our WebPagetest score improved to this:
![Post-optimization webpage test of A A A A A A](/images/2013/400k-webpagetest-after.png)

## Wrapping Up

Natually, if a user decides to scroll all the way down the homepage, as well as interact with every section of the page, they'll still end up with the full payload. But for those that don't, they get a much improved experience. Our next step is to update our lazy-loading script to better handle mobile images. Currently we're passing most of them through a server-side image optimization service by [Sencha](http://www.sencha.com/). Similar services include [imgble](http://imgble.com/) and [ReSRC.it](http://www.resrc.it/).

If you're interested in trying your hand at lazy-loading images, [here's a handy case study on Smashing Magazine](http://mobile.smashingmagazine.com/2013/09/16/responsive-images-performance-problem-case-study/) by [Anders Andersen](https://twitter.com/andmag) and [Tobias Järlund](https://twitter.com/jarlund). You may also want to [check out this post by the BBC News developers](http://responsivenews.co.uk/post/50092458307/images) on how they handle images.

Good luck and happy optimization.

**NOTE:** The total size on www.ND.edu depends a lot on the primary feature image. Since this article was originally posted, we updated to a new image that refuses to compress well, which is resulting in larger than 400 KB total download size. So as that image changes, so will these results.