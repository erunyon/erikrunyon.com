---
layout: post
title: "Updating Service Worker cache version using Jekyll"
date: 2016-03-25
categories: [General, Service Workers]
---
I've been diving deep into [Service Workers](http://www.w3.org/TR/service-workers/) lately. There are a lot of great resources, and others sharing their stories and work such as [Jeremy Keith](http://adactio.com/links/tags/serviceworker) and [Lyza Danger Gardner](https://www.smashingmagazine.com/2016/02/making-a-service-worker/) have proved invaluable. One issue that has continually bothered me is the manual updating of the cache version every time I modify my site. So after a little digging, I've found a very simple way to update my Service Worker version number whenever I update this site.<!-- more -->

The Service Worker file on this site (at the time of writing) is a modified version of Jeremy Keith's [from his personal site](http://adactio.com/). One of my favorite features of his example is that static files (CSS, javascript, etc.) are served from cache, while pages default to the network. This ensures that the visitor will always get a fresh copy of the content if they have an internet connection. Part of this is having multiple caches available all using the same version number. This allows the developer to have some level of control of keeping caches manageable by clearing out older cached files if an individual cache becomes too large.

## Programatically setting the version number

Ideally, we would only increment the version number of our Service Worker file if static assets were updated, not pages, since we default to the network for pages. However, as I'm still learning Service Workers, I'm fine with using a hammer, and will come back and iterate with a scalpel later. Jekyll has a [decent collection of variables](https://jekyllrb.com/docs/variables/) available, and for our purposes, we're going to make use of "site.time". One thing you may not know about Jekyll is that it will process any file that has the YAML front-matter at the top of the file, even if the front-matter is empty. So the first thing we do is add two rows of three dashes to the top of our Service Worker file. After that, we use liquid to set the version number based on the last date/time our site was processed by Jekyll. In my case, the top of the file looks like the following:

<pre><code>---
---
'use strict';
const version = '&lbrace;&lbrace;site.time | date: '%Y%m%d%H%M%S'}}::';</code></pre>

By using site.time and formatting it to use the full date and time, we get a version number that's accurate down to the second. This will leave us with a version number that looks like this:

<pre><code>const version = '20160325132146::';</code></pre>

So, not ideal if all we're doing is modifying pages, but it will work for now.
