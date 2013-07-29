---
layout: post
title: "Google Chromecast"
date: 2013-07-28
categories: [Review, RWD]
---
I'm a big fan of the AppleTV, so when Google announced the [Chromecast](http://www.google.com/intl/en/chrome/devices/chromecast/) for $35, I was immediately intrigued. The first thing you need to know is that it will not replace your AppleTV (if you have one). It has nowhere near the features of Apple's $99 hobby device, but that doesn't mean it's not interesting.

<!--more-->

<img src="/images/2013/cc-hand.jpg" alt="Chromecast dongle" title="Chromecast dongle" class="alignright">

Rather than serving as a stand-alone device, the Chromecast serves as a way to get content from specific applications on other devices to the television. When you view the input channel for the Chromecast, there is pretty much zero interface. Just the name of the device, time and network name/strength. In this way, it's practically a "dumb" device that requires input and direction from outside sources. More on this later.

## Setup

<img src="/images/2013/cc-set-me-up.jpg" alt="Chromecast setup" title="Chromecast setup" class="alignright">

Setup is fairly simple. The device is simply a HDMI device that you plug directly into your television. It does require additional power, and this can come from either an outlet, or as I opted to do, a USB port on the back of the television. Once you flip to the correct input, the TV will display setup instructions pointing you to a website. I'm terrible when it comes to reading instructions, so I immediately grabbed my iPad to do the setup. Apparently that's [not supported at this time](/images/2013/cc-ipad.jpg). After switching to my laptop, I was instructed to download a DMG file that contained the setup app. This located the device and connected it to my WiFi.

<img src="/images/2013/cc-extension-open.jpg" alt="Chromecast extension open" title="Chromecast extension open" class="alignright">

The last step is to install an extension in Chrome. This extension allows you to broadcast a single tab to the Chromecast. Simply click the tab and select the name of your device. I was incredibly creative and named mine "Chromecast".

## From an iPad

At this time, YouTube and Netflix are the only supported apps on the iPad. We can expect this list to grow once developers get their hands on the SDK. Surprisingly missing from the list is Chrome for iOS.

### YouTube

<img src="/images/2013/cc-youtube.jpg" alt="Chromcast icon on YouTube" title="Chromcast icon on YouTube" class="alignright"> YouTube functionality is pretty straight forward. Click the Chromecast icon and select the name of your device. The content is then streamed directly to the Chromecast bypassing the iPad. The video on the iPad will then display "Playing on Chromecast". The interface on the iPad then becomes the controller.

### Netflix

<img src="/images/2013/cc-netflix-iphone.jpg" alt="Now Playing on Netflix for iPhone" title="Now Playing on Netflix for iPhone" class="alignright"> Other than the icon being in a different location, the functionality for Netflix is pretty much the same as YouTube. All streaming is passed to the Chromecast, and the iPad/iPhone is then just a controller, allowing you to do whatever else you wish on the tablet. To verify this, I started a Netflix stream and promptly shut down the iPad. Not only did the video continue, but when I instead opened Netflix on my phone, I was presented with a banner informing me what was already streaming, and allowed me to pick up control from there.

## Mirroring from Chrome

<figure class="alignright"><img src="/images/2013/cc-nd-narrow.jpg" alt="ND.edu narrow" title="ND.edu narrow"><figcaption>ND.edu viewed at 400px wide as mirrored on the TV</figcaption></figure> As with any new device I get my hands on, one of the first thing I tested was [ND.edu](http://www.nd.edu/). The site appeared full-screen on the TV with none of the browser chrome, just the site. It showed what appeared to be exact same size/dimensions as my laptop (1440x900). Out of curiosity, I increased the resoltion of my screen and the TV scaled appropriately by simply shrinking the content and filling the screen with the browser. When I scaled the width of the site, the Chromecast scales its view as well by adding black to both sides and centering the viewport. The same behavior occurs when opening the developer tools or shrinking the browser vertically. If you edit the DOM, hiding an element for instance, it will also disappear on the TV. From what I can tell, it always scales the the television display to show exactly the same number of pixels both horizontally and vertically as on the source tab.

<figure>
  <img src="/images/2013/cc-side-by-side.jpg" alt="Polar side-by-side" title="Polar side-by-side" class="aligncenter">
  <figcaption>Polar mirrored on the TV (left) from Chrome (right)</figcaption>
</figure>

A nice visual aid the extension adds to the browser tab is to wrap the favicon of the site in a projection screen that pulses blue. This is a quick way to remember which tab you're currently broadcasting. At any time, the extension can be used to switch which tab is broadcasting. Simply open the tab you want to broadcast and select "Cast this tab" from the extension.

<figure class="alignright">
  <img src="/images/2013/cc-tabs.jpg" alt="Altered browser tabs" title="Altered browser tabs">
  <figcaption>Regular and Chromecast tabs for ND.edu and Polarb.com</figcaption>
</figure>

If you're expecting perfect mirroring, you're going to be disappointed. Gaming will not be possible, at least not on my network. There is a 1-2 second lag when scrolling through a site. Certainly not a problem if you're just demoing something. How much of this is due to network latency, I don't know. I get a fairly decent signal from my router in the test location, but there were a couple of times I received a notification that "Computer performance may be affecting playback quality."

A big test for me was Hulu. There are a number of shows I watch on Hulu, so the prospect of being able to do this in other rooms beyond my AppleTV equipped room was appealing. The result was "meh" (technical term). SD video played pretty well. HD video was kind of hit or miss. There were times when it ran great, sometimes audio and video didn't match up, and yet other times where it was completely unusable. When testing a second TV with slightly better router location, the results were that I didn't get repeats of the poorer performances from the other location, but I didn't get better performance either.

For those concerned about needing to detect another device/browser, don't be. When checking the user agent and IP, they're exactly the same as the source device.

## Conclusion

<figure class="alignright">
  <img src="/images/2013/cc-netflix2.jpg" alt="Netflix Play screen on iPad" title="Netflix Play screen on iPad">
  <figcaption>Netflix Play screen on iPad</figcaption>
</figure>

If you already have an AppleTV on all your televisions, you won't need this device. However, if you have an open HDMI port and could benefit from "yet another Netflix streaming device" with the added bonus of browser mirroring, you really can't go wrong at $35. I find the way that it functions as a simple interface between your phone and/or tablet and television to be rather interesting. It opens up all kinds of possibilities for interaction on peripheral screens. Even if you don't pick one up now, it would be worth your time to keep an eye on what Google, and more importantly, third party developers do with the device in the future.

### Links

- [Chromecast site](http://www.google.com/intl/en/chrome/devices/chromecast/)
- [Chromecast commercial](http://www.youtube.com/watch?v=cKG5HDyTW8o)