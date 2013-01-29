---
layout: post
title: "The Numbers Behind HigherEd RWD"
date: 2013-01-29 08:02
comments: true
categories: [Web Development, Stats, RWD]
---
Yesterday [Luke Wroblewski](http://www.lukew.com/) [asked the interwebs](https://twitter.com/lukew/status/296003059010650113) about the average size of a RWD site. While I obviously can't speak to the wider range of RWD sites, I do happen to [maintain a list of HigherEd RWD sites](/highered-rwd-directory/). The numbers that I track are by no means the whole story when it comes to performance, but I find them interesting.
<!-- more -->
## HigherEd RWD Sites: 54

### Desktop

I tested with a browser width of ~1200px. Load time is based on a combination of tests from SW Michigan and Northern Indiana. Distance to hosts could definitely be a factor.

* **Load Time:** 3.501 seconds
* **Requests:** 59.08
* **Size:** 1.543 MB
* **CSS Files:** 6.19
* **CSS Size:** 94.12 kb
* **JS Files:** 11.49
* **JS Size:** 181.38 kb

### Small Screen

These numbers were gathered using a desktop browser at a narrow width (~320px) and an iPhone 5 UA string to attempt a simulation of a mobile device. For this reason, "load time" should be taken with an extremely large grain of salt.

* **Load time:** 3.092 seconds
* **Requests:** 54.96
* **Size:** 1.206 MB
* **CSS Files:** 6.71
* **CSS Size:** 97.19 kb
* **JS Files:** 12.38
* **JS Size:** 215.39 kb

### Mobile Sites

Out of curiosity, I tried to find "mobile" sites for each of the 54 RWD sites in the directory, of which I found 23, to compare numbers. The focus here was on size, not load time.

* **Load Time:** 2.05 seconds
* **Size:** 180.16 kb

Last fall I [gave a presentation at HighEdWeb](/2012/10/highedweb-2012/) where I challenged attendees to work toward getting the "mobile" view of their RWD sites below 500 kb (totally arbitrary number that I use as my max for [ND.edu](http://www.nd.edu/)). I'm happy to say I've received comments from some of the attendees that they have decreased the size of their sites, and I know of others that are working to that end. I would love to see the average small screen size for this list drop below 1 MB (500 kb would be even better). There has been a lot of chatter over the past couple of days about "[Performance as Design](http://bradfrostweb.com/blog/post/performance-as-design/)" and "[Setting Performance Budgets](http://www.timkadlec.com/2013/01/setting-a-performance-budget/)" which is fantastic. It's something we all need to keep in mind.