---
title: Simple Feed Caching with PHP
author: Erik Runyon
layout: post
permalink: /2012/04/simple-feed-caching-with-php/
categories:
  - PHP
  - Web Development
---
The latest version of [ND.edu][1] makes use of A LOT of external data sources. To make sure the site runs reliably, even in the case of an outage by one of the external feeds, I put together a fairly simple [PHP class][2] to handle the local caching of feeds.

It basically works like this:

1.  Create the class with the local file-name (whatever you want) and the external source (and an optional expires)
2.  The class will check if the local file exists and if it has expired
3.  If it has expired, it will try and fetch the remote source
4.  If the remote source is a-ok, it will pull a fresh copy and save it to a “cache” folder
5.  If remote source is unavailable or too slow, the class will fall-back to the expired (cached) file
<!-- more -->
Since I’m dealing with a variety of data sources, I’m doing most of my error handling in the calling function and not the class. And the reason I have it fall-back to the cached file, even if it’s technically expired is because in the use-case of this site, it’s better to have outdated data than nothing at all.

If any PHP gurus feel inclined to look it over, please make suggestions for changes or improvements. Feedback would be welcome. Feel free to leave comments here or [fork it on GitHub][3]. If you use it in a production site and it causes servers explode, I will deny any knowledge of the scripts existence, so use at your own risk.

 [1]: http://nd.edu/
 [2]: http://bit.ly/PHPFeedCache
 [3]: https://github.com/erunyon/FeedCache