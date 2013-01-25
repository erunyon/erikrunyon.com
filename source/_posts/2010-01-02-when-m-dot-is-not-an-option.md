---
title: 'When &#8220;m.&#8221; is Not an Option'
author: Erik Runyon
layout: post
permalink: /2010/01/when-m-dot-is-not-an-option/
categories:
  - Mobile
  - Notre Dame
  - Web Development
---
Over the past year at Notre Dame, we’ve really started to embrace and experiment with offering a mobile experience for a number of the projects that have made their way through our offices. There are a couple of obstacles that make this process difficult.

1.  A separate “m.” address is not an option
2.  Creating and testing mobile styles is rarely part of the project budget

This has led to some commonly used shortcuts that have allowed us to, at the very least, provide a serviceable mobile experience with very little effort.<!-- more -->

## The basic mobile stylesheet

At the very least, you should set up a ‘handheld’ stylesheet.

<pre>&lt;link href="/stylesheets/mobile.css" media="handheld" rel="stylesheet" type="text/css" /&gt;</pre>

A number of things to keep in mind.

*   Keep your images under control by using width/max-width.
*   Use display:none liberally for content that is of little or no use to your mobile visitors.
*   Your mobile site doesn’t need all the pretty of the non-mobile version. If you include a lot of images, you’re going to end up with frustrated users.

Now, how do you test this? If you have a WAP enabled phone, you’re all set. I don’t. I have, however, found that Opera’s small screen view will give you a fairly accurate reading on your sites mobile friendliness. All you need to do is select “View > Small Screen”. [MobiForge also has a guide to mobile emulators that you may find handy][1].

## Targeting the iPhone/iPod Touch (or Webkit)

Here’s where the fun starts.

<pre>&lt;link rel="apple-touch-icon" href="/images/iphone.png" /&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;link href="/stylesheets/iphone.css" media="only screen and (max-device-width: 480px)" rel="stylesheet" type="text/css" /&gt;
</pre>

At this point, you can go one of two routes:

1.  Over-ride your existing screen stylesheet to make everything look nice on the iPhone, or
2.  Use javascript to eliminate your screen stylesheets and start fresh.

I highly advise you go with the latter. Here’s why.

For any sizable site that has a lot of complex css, you’ll find you’re spending way too much time tracking down which element in your screen stylesheet is blowing-out the width of your iPhone display. It’s much easier to start from scratch, and simply borrow from main css. Remember, we’re going for speed here. This isn’t in the budget.

Here’s how:

<pre>if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
  for (var i=0; i&lt;document.styleSheets.length; i++) {
    if (document.styleSheets[i].href != null &#038;&#038; document.styleSheets[i].href.lastIndexOf("iphone") == -1) {
      document.styleSheets[i].disabled = true;
    }
  }
  window.scrollTo(0,1);
}
</pre>

This simply loops through your stylesheets and disables all but your iphone.css. If you want to target additional webkit browsers, then you need to add them to the if statement:

<pre>if(
  (navigator.userAgent.match(/iPhone/i)) || 
  (navigator.userAgent.match(/iPod/i)) || 
  (navigator.userAgent.match(/Android/i)) || 
  (navigator.userAgent.match(/webOS/i))
) {
</pre>

One of recent side project sites, on which I was able to spend time with the iPhone css was [Game Day][2]. Currently the iPhone/iPod account for 4% of the sites total traffic. The next mobile platform is Blackberry coming in at 0.26%. So yes, spend some time on your iphone.css. If you don’t have an iPhone or iPod to test on, download the latest iPhone SDK from Apple (membership to the developer connection is free). It includes an iPhone emulator that will work just as well for testing.

One of the great things about playing with custom styles for the iPhone is you get to play with all those fancy new Webkit and CSS3 features you can’t use in your day-to-day sites. So go ahead, you now have permission to experiment with gradients, drop shadows, RGBA, etc. Now if only we could serve up these sites as html5.

 [1]: http://mobiforge.com/testing/story/a-guide-mobile-emulators
 [2]: http://gameday.nd.edu