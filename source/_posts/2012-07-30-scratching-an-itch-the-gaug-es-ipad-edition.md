---
title: 'Scratching an Itch: The Gaug.es iPad Edition'
author: Erik Runyon
layout: post
permalink: /2012/07/scratching-an-itch-the-gaug-es-ipad-edition/
categories:
  - CSS
  - Mobile
  - Web Development
---
Two things up front. I love stats, and I love [Gaug.es][1]. I love Gaug.es so much, I have it open as a tab 100% of the time on both my development machine and my iPad. What I don’t love is using Gaug.es on my iPad. There are two small issues that bug me while on the iPad.

1.  I can’t drill-down to the browser detail in the Technology section
2.  The layout is fixed-width and doesn’t work well in portrait

Like I said, small issues. As we developers tend to do, I decided to write a little hack to fix these issues.
<!-- more -->
## Technology Drill-Down

This was by far the easiest of the two. But first, let’s look at why it’s not working on iPad. Gaug.es is current running on jQuery v1.6.2 and using “live” to register the clicks on the table rows that open and close the detail. The problem is that table rows aren’t natively clickable elements in iOS (think buttons). Therefore the “click” event in iOS on a table row does not bubble to the document which results in it not getting picked up by “live”. This could be addressed by switching to “delegate” or “on” (in jQuery 1.7), but since I don’t have access to the js, I used a little hack that was unknown to me until this project. Thanks to the [jQuery API docs for “live”][2], I found that setting “cursor:pointer” on the table rows fixes the issue. See the docs for warning about this solution. The only other change I made here was to increase the height of the rows in this view to make them slightly bigger targets.

## Portrait Layout

I’m not going to go too in-depth here. You can [view the CSS for yourself][3]. As you can see, there’s not a lot there. For the most part I just removed some widths and allowed the site list to rise above the data. I’ll probably do more work on this in future to accommodate the upcoming 8″ iPad, but it’s possible this version will work fine.

<img class="alignnone size-full wp-image-331 noborder" title="Before and after layout adjustments" src="/images/2012/gauges-side-by-side.jpg" alt="Before and after layout adjustments" />

## How to Use

If you’re interested in trying it out, drag the link below to your bookmarks and sync it to your iPad. Then when you visit Gaug.es on your iPad, select that bookmark from your bookmarks menu and it will load the CSS which is hosted here.

[**Gaug.es/iPad**][4] <– Drag that link to your bookmarks.

I’ve only tested this on my own account, so depending the number of sites you have set up in Gaug.es, your mileage may vary. Feel free to let me know if you run into any issues. Also, please note that I am NOT a designer, so this is not going to look as good as an [@orderedlist][5] styled layout.

**Update 2012-08-04:** Updated the logo to a high-res version for retina screens.

 [1]: http://gaug.es
 [2]: http://api.jquery.com/live/
 [3]: /demos/gauges-ipad/gauges.css
 [4]: javascript: (function() { var g   = document.createElement('script'); g.type  = 'text/javascript'; g.async = true; g.id    = 'gauges-script'; g.src = 'http://weedygarden.net/demos/gauges-ipad/gauges.js'; document.getElementsByTagName('head')[0].appendChild(g); })();
 [5]: http://twitter.com/orderedlist