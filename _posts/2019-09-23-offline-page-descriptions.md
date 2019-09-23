---
layout: post
title: "Offline Page Descriptions"
date: 2019-09-23T12:55:20-04:00
categories:
---
This month a couple of articles regarding displaying offline pages in a nice way were posted by [Remy Sharp](https://remysharp.com/2019/09/05/offline-listings) and [Jeremy Keith](https://adactio.com/journal/15844). We're doing something very similar on [www.nd.edu](https://www.nd.edu/), but since it an informational site and not a blog, it may be helpful to some to show the differences between their implementations and ours.<!-- more -->

By default, we cache the top ten visited pages (not the images) when the service worker is actived. As the user moves throughout the site, we cache each new page (including the images). Remy and Jeremy display their cached pages in chronological order based on when the user visited. This makes complete sense in their context. But since our users are most likely looking for a specific page on our site, we opted to go alphabetical, with the exception of moving the homepage to top of the list.

<img src="/images/2019/nd-offline-listing.png" alt="A listing of available pages with the title, url, and description for each in alphabetical order">

The result is an easily scannable listing of page titles along with url and description. This is done by opening the cache set aside specifically for pages, doing some manipulation, and updating the Offline page. I won't get into the technical details since the implemenation is very similar to the other two articles.

If you have a service worker and offline page, I highly recommend reading Remy and Jeremy's posts. Just a little extra work can really improve the offline user experience.