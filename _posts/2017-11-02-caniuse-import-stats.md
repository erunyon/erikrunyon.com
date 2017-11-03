---
layout: post
title: "'Can I Use' Import Statistics"
date: 2017-11-03
categories: [Web Development, Stats]
---
I've been using [Can I Use](http://caniuse.com/) for years to check current support for various web features. Today I learned (thanks [@rachelandrew](https://twitter.com/rachelandrew)) that you can [import your personal (or company) statistics](http://caniuse.com/#stats_import) into Can I Use and it will display it next to the U.S. and Global stats.<!-- more -->

## Why this is important

Stats from elsewhere *can* be helpful, but the best are from your own site(s). Having the ability to look up features and see numbers for your users specifically is fantastic. For instance, [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) has started appearing in most of the major browsers. Looking at the [CSS Grid stats on Can I Use](http://caniuse.com/#feat=css-grid) you'll see that (in November 2017) the U.S. stats are at 84% and global is 75%. Compare that to stats from our CMS (home of 576 Notre Dame websites) which is at almost 89%.

<figure><img src="/images/2017/can-i-use-grid.png" alt="Can I Use stats showing the percentage of support for CSS Grid Layout"></figure>

Granted, it's not that big of a difference over the rest of the U.S., but it IS higher. And when making decisions about the code that's going to be powering those 576+ websites, it can make the difference of whether we use a feature now, or wait a little while longer. As for CSS Grid Layout, we're starting to use it now… with fallbacks of course.
