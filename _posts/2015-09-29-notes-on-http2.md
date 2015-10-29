---
layout: post
title: "Notes on HTTP/2"
date: 2015-09-29
categories: [Web Development]
published: true
---
HTTP/2, the successor to [SPDY](https://en.wikipedia.org/wiki/SPDY) is finally gaining traction on both browsers and web servers. For my own benefit (and hopefully yours), I'll be documenting relevant articles and information here.<!-- more -->

## NGINX

HTTP/2 is [supported on NGINX as of version 1.9.5](http://nginx.org/en/CHANGES). To get it working on my dev environment, I followed the instructions on a couple of different sites (listed below), but needed to run both "`brew update`", and then "`brew reinstall --devel --with-spdy nginx`". When I tried to just install NGINX using the "`--devel`" command, I was greeted by a message stating that 1.8.0 was already installed.

## Apache

HTTP/2 support is now available in Apache httpd 2.4.17. A great write-up is available at [mod_h[ttp]2: how to h2 in apache](https://icing.github.io/mod_h2/howto.html).

## Gotchas

Even though SSL is not enforced in the RFC, [all browsers that support HTTP/2 require it](https://www.nginx.com/blog/http2-r7/). So if you plan on going down the HTTP/2 route, be sure that SSL is an option, or already enabled on your site/app.

## Helpful Links

- [HTTP/2: the Pros, the Cons, and What You Need to Know](http://www.sitepoint.com/http2-the-pros-the-cons-and-what-you-need-to-know/) - October 23, 2015
- [Load Impact's HTTP/1 vs HTTP/2 test](http://http2.loadimpact.com/entry/)
- [Setup nginx with HTTP/2 for local development OS X](http://tech.finn.no/2015/09/25/setup-nginx-with-http2-for-local-development/) - September 25, 2015
- [Enable HTTP/2 in Nginx](https://ma.ttias.be/enable-http2-in-nginx/) - September 22, 2015
- [HTTP/2 Now Fully Supported in NGINX Plus](https://www.nginx.com/blog/http2-r7/) - September 18, 2015
- [HTTPS Everywhere With Nginx, Varnish And Apache](http://www.smashingmagazine.com/2015/09/https-everywhere-with-nginx-varnish-apache/) - September 17, 2015
- [Installing nginx on OS X Yosemite](http://codingexplained.com/operating-systems/mac/installing-nginx-os-x-yosemite) - December 17, 2014
