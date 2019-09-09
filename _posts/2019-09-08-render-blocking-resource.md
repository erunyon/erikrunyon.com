---
layout: post
title: "The Curious Case of the Render Blocking Resource"
date: 2019-09-09
categories: [Javascript, Web Development]
---
We were recently notified by a client that when he visited his department site from China, the site would take a very long time to load. Everything seemed fine on first inspection, so we tested the site using [WebPageTest](https://www.webpagetest.org/) with the Beijing, China (Firefox) location. After waiting in a fairly long queue, one glance at the waterfall made the issue clear.<!-- more -->

As a preface, this site is quite old. The site was launched in 2010. It has mobile styles, but was not using RWD ([Ethan's article](https://alistapart.com/article/responsive-web-design/) was published only two months prior). The site is "we were still using gifs" old. We've always tried our best to create fast sites, but a common practice of the time came back to bite us.

## Before

The [inital test](https://www.webpagetest.org/result/190829_12_1c2aa19d179d190b608d1d82c07b38f7/) showed us that site was taking over 100 seconds to load. Here's the beginning of the waterfall.

<figure>
  <img src="/images/2019/jquery-before.png" alt="Network waterfall showing the CDN hosted version of jQuery blocking rendering for 90 seconds.">
  <figcaption>Waterfall before</figcaption>
</figure>

Our problem was happening on line six. We were linking to a Google CDN version of jQuery which was blocking rendering for 90 seconds. A single render blocking request in the head for a domain we don't control was all it took to create a subpar user experience.

## After

To quickly solve the issue, we grabbed a copy of the Google CDN hosted jQuery and moved it local to the site. [After running the test again](https://www.webpagetest.org/result/190829_R4_9e5fe99e422554bc6db3e2065214b132/), we were presented with a much improved load time of approximately 14 seconds.

<figure>
  <img src="/images/2019/jquery-after.png" alt="Network waterfall showing a locally hosted version of jQuery blocking rendering for 3 seconds.">
  <figcaption>Waterfall after</figcaption>
</figure>

In higher ed, it's not uncommon for 9+ years-old websites to be lurking on the network. I'm sure we'll find more sites with this same issue. Big thanks to WebPageTest for making it easy to diagnose the problem.