---
title: A Case for RESS
author: Erik Runyon
layout: post
permalink: /2012/05/a-case-for-ress/
categories:
  - Mobile
  - Notre Dame
  - Web Development
---
On the new [ND.edu][1] we used a combination of server-side detection, media queries and javascript to determine content. We made the decision that not all content needed to be initially loaded for mobile devices, and instead made it available through top-level navigation. This allowed us to drastically reduce the amount of resources that are initially downloaded and the result is a very fast mobile experience. They say a picture is worth a thousand words, so I’ll leave you with an image of the site on a phone next to a 70″ display and some stats.<!--more-->

**Large screens:** 136 requests  ❘  3.00MB  
** Mobile phone:** 23 requests  ❘  291.94KB

<img class="alignnone size-full" title="ND.edu on an iPhone and 70&quot; monitor" src="/images/2012/nd-mobile-tv.jpg" alt="ND.edu on an iPhone and 70&quot; monitor" />

 [1]: http://nd.edu/