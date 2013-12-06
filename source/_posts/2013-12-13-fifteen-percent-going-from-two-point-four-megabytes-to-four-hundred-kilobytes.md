---
layout: post
title: "15% - Going from 2.4 MB to 400 KB"
date: 2013-11-13
categories: [Web Development]
published: false
---
It's been fairly well documented that images make up the majority of a sites download size. Based on my own stats for 160+ HigherEd responsive sites, images account for 7X%. And when you're dealing with a long-form page like [www.ND.edu](http://www.nd.edu/), images can account for even more. It's situations like this, where finding ways to cut down on the number of images, or deferring the loading of images, can result in a huge impact on not just the download size, but the load-time as well.<!-- more -->

ND.edu was built (good or ill) with three major breakpoints in mind, mobile, tablet, and desktop. We did this so we could really focus on optimizing for our mobile users. So from day one, our mobile payload has been pretty light:

- 25 requests
- 260 KB
- X images

## The Problem

In the year and a half since we launched this version of ND.edu, we had limited time to optimize as much as we'd like. Initially we focused on the two carousels at the top, only loading the front-most image and delaying the rest until the user chose to interact with them. But that still left us with a lot of content images. So when the time came to really get into optimizing, we were working from the following baseline for our desktop size:

**Desktop Stats**
- 132 requests
- 2.4 MB
- 117 images

## Potential Areas to Optimize

We've also made a habit to track everything on our homepage using Google Analytics event tracking. Because of this, we know how many of our visitors were seeing which images. So if we start at the top of the page and start scrolling down, naturally visitors start dropping off.

### News and Events

24 Images (646.5 KB total) viewed by 21.4% of visitors

### About

![About](/images/2013/400k-header-about.jpg)

6 Images (208.3 KB total) viewed by 8.9% of visitors

### Academics

![Academics](/images/2013/400k-header-academics.jpg)

14 Images (406.9 KB total) viewed by 6.5% of visitors

### Admissions

![Admissions](/images/2013/400k-header-admissions.jpg)

4 Images (140 KB total) viewed by 4.1% of visitors

### Faith & Service

![Faith & Service](/images/2013/400k-header-faith.jpg)

9 Images (328.1 KB total) viewed by 3.5% of visitors

### Tour Flyout

![Tour](/images/2013/400k-nddotedu-flyout.jpg.jpg)

Now heading all the way back to the top of the page to the feature location sidebar (click on "Learn More" below the location name in the top right)

26 Images (169 KB total) viewed by 0.25% of visitors

## The Solution

So obviously we need to lazy-load these things instead of penalizing so many users that never see the images that are loading. We ended up using base64 encoded gray inline images since it was fairly easy for us to switch to them and get the added benefit that the replacements are the exact same size as the actual image, and they'll behave exactly like the image they're replacing. This is important because of the way clicking on a top-level nav item scrolls a user quickly down the page. If the placeholders weren't exactly the same dimensions, then as we replaced the placeholders with the real images, our content would shift and users wouldn't end up in the right spot.

## The Results

Before we did the optimization, we had a [webpagetest](http://www.webpagetest.org/) score that looked like this:
![Pre-optimization webpage test of C A A B F B](400k-webpagetest-before.png)

38 requests *
393 KB *
(down from 130 requests and 2.4 MB)
* Varies by day and browser

![Post-optimization webpage test of A A A A A A](400k-webpagetest-after.png)

Load Time
Before: 4.9s
After: 1.8s