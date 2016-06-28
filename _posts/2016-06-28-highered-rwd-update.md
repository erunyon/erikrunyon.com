---
layout: post
title: "Higher Ed RWD Update"
date: 2016-06-28
categories: [Stats,Performance,Web Development,RWD]
---
My [last report on Higher Ed homepage performance](https://erikrunyon.com/2015/01/higher-ed-rwd/) was January 2015. According to the [HTTP Archive report for January 2015 through June 2016](http://httparchive.org/trends.php?s=All&minlabel=Jan+1+2015&maxlabel=Jun+15+2016), page weight increased from 1.94 MB to 2.5 MB, and the average number of requests went from 94 to 116. So how is Higher Ed stacking up to the rest of the industry? Let's find out.<!-- more -->

## Current Stats for the Higher Ed RWD Directory sites

As expected, [the Higher Ed RWD directory](/highered-rwd-directory/) has grown steadily over the years, bringing the current total to 302 (an increase of 50 [since the last report in January 2015](https://erikrunyon.com/2015/01/higher-ed-rwd/)).

The following numbers were compiled using [WebPageTest](http://www.webpagetest.org/) [Dulles, VA location](http://www.webpagetest.org/getLocations.php). Desktop stats are using Chrome (Dulles:Chrome) and mobile stats are using iOS (Dulles_iPhone5c).

### Desktop

- Load time<sup>[1](#f1)</sup>: 8.9s
- Speed index<sup>[2](#f2)</sup>: 5580
- Requests: 77
- Document Complete Size: 2.9 MB
- Fully Loaded Size: 3.7 MB

### Mobile

- Load time<sup>[1](#f1)</sup>: 23.5s
- Speed index<sup>[2](#f2)</sup>: 15182
- Requests: 73
- Document Complete Size: 2.5 MB
- Fully Loaded Size: 2.6 MB

## Changes Jan 2015 - June 2016

### Industry

- 1944 KB to 2486 KB = 27.9% increase
- 94 to 116 requests = 23.4% increase

### RWD Directory: Desktop
- 2.4 MB to 3.7 MB = 54% increase
- 69 to 77 requests = 11.6% increase
- Load time increased by 2.6 seconds
- Speed index increased by 1322

### RWD Directory: Mobile

- 1.7 MB to 2.6 MB = 52.9% increase
- 58 to 73 requests = 25.9% increase
- Load time **decreased** by 5.9 seconds
- Speed index stayed about even at 15182

## The issues

So while Higher Ed's number of requests are lower than the industry average, the download size for both desktop AND mobile are higher. This is especially alarming considering the increase for both was more than 50%. Even more alarming is that there are a number of mobile sites in the list that well exceed 10 MB.

So please [test your site](http://www.webpagetest.org/). If it's over 1 MB (especially on mobile), take the necessary steps bring the size and load time down. If you don't know how, or would like assistance optimizing your site, [drop me a note](/contact/).

## Previous Reports

- [January 2015](https://erikrunyon.com/2015/01/higher-ed-rwd/)
- [June 2013](https://erikrunyon.com/2013/06/the-numbers-behind-highered-rwd-june-2013/)
- [January 2013](https://erikrunyon.com/2013/01/the-numbers-behind-highered-rwd/)

If you know of any Higher Ed homepages that belong on the list, please [let me know](/contact/).

1. **<span id="f1">Load Time</span>** is measured as the time from the start of the initial navigation until the beginning of the window load event (onload).
2. **<span id="f2">[Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)</span>** is the average time at which visible parts of the page are displayed. It is expressed in milliseconds and dependent on size of the view port.
