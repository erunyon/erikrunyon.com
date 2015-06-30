---
title: iOS 5.1 Position Fixed Bug
author: Erik Runyon
layout: post
permalink: /2012/04/ios5-position-fixed-bug/
categories:
  - Apple
  - Mobile
  - Notre Dame
  - Web Development
---
While building the most recent [ND.edu][1], I ran into a little iOS 5.1 bug (at least I think it’s a bug). One of the features of the site is a menu with “position:fixed”. Another feature is we load a number of top-level pages on to the homepage for larger screens. So the functionality is such that, if someone is on the homepage, and they click one of the main navigation items, we scroll them to that section rather than loading that page. But we quickly ran into an issue on iOS devices.<!-- more -->

## The Issue

When jQuery is used to scroll the content to a specific spot, an element with a fixed position visually appears where it should, but cannot be clicked/touched immediately after the scroll. After some tinkering, I discovered that even though the navigation stayed in place as it should, it was technically still in its previous location in the viewport. So for instance, if you click on one of the nav items while at the top of the screen, the viewport will scroll down the page. But if you inspect the “top” of the navigation, it reports that it is still in its original position. However, as soon as you manually scroll the page, its position is updated and can once again be interacted with.

## Demo Time

If you [view the demo][2] on any iOS 5.1 device and touch one of the nav items, you will scroll down the page. A javascript alert will inform you of the navs top position. Next, it you try to touch one of the navigation items in an attempt to scroll to the next section, nothing will happen. However, if you scroll the page in the slightest, the nav will once again work. I’m including the actual top of each sections h2 as a visual indicator of what the alert SHOULD be reporting.

I tried a series of tests to see if there was any way through javascript to get the nav to update its position after scroll, but couldn’t find anything that worked. In the end, what we ended up doing was hiding the nav for iPad’s when the scroll begins. Then, as soon as the user scrolls, we bring the nav back in, since at that point its position has updated and will once again function as expected. If anyone has any insights into how to fix this, or if it is indeed a bug and not intentional, please let me know.

[View the demo][2].

 [1]: http://nd.edu
 [2]: /demos/ios5-position-fixed/