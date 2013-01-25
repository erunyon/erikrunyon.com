---
title: The Wii U from a Web Developers Perspective
author: Erik Runyon
layout: post
permalink: /2012/12/the-wii-u-from-a-web-developers-perspective/
categories: [RWD, Web Development]
---
<img class="alignright size-full wp-image-389 noborder" title="Wii U Browser Logo" src="/images/250px-Wii_U_Internet_Browser_logo.png" alt="Wii U Browser Logo" /> In the early days of RWD, it became evident that we could not (and should not) tie our breakpoints to the widths of popular devices. I’d like to think this is a fairly popular view these days. This is partially due to the influx of internet capable devices all with differing screen sizes and resolutions. Though a majority of these are phones and tablets, this also includes gaming consoles. In September, [Anna Debenham][1] wrote an article on A List Apart titled “[Testing Websites in Game Console Browsers][2]” where she wrote about the emergence of browsers in popular gaming consoles and the variety of input types that comes with them.<!--more-->

[<img class="alignright size-medium wp-image-390" title="A List Apart screenshot on Wii U" src="/images/alistapart-tab-300x169.jpg" alt="A List Apart screenshot on Wii U" width="300" height="169" />][3]As an owner of the original Wii, I’ve had a small amount of experience with using a console browser. However, using the Opera browser on the original Wii was painful at best. It looked terrible, the controls were awkward, and the rendering engine was woefully out of date. So to say I wasn’t excited about the topic of console browsing is an understatement. However, to the delight of my children, we recently acquired a Wii U, so as a responsible developer does, I set about testing our responsive sites on this new internet enabled device.
<!-- more -->
## Responsive Layout

[<img class="alignright size-medium wp-image-393" title="Notre Dame Provost" src="/images/provost-composite-300x270.jpg" alt="Notre Dame Provost" />][4]The majority of my sites that I checked rendered pretty well, so this section will be pretty short. I did find a few instances where fonts were an issue. I haven’t had a chance to track it down yet, but the font stack “Georgia, ‘Times New Roman’, serif” that we use in the title bar of our university template at Notre Dame results in a very not serif font (see Provost screen shot). There is also one instance on the [ND.edu][5] homepage where some text is missing entirely. The biggest issue I’m noticing is vertical height. The 480px high screen is encroached upon by a url bar at the top (approx 30px) and a toolbar at the bottom (approx 48px) which leaves us with about 402px of vertical height to play with. Note: when mirroring the browser on the television, it lacks the toolbar at the bottom giving more vertical space (see WeedyGarden and ND.edu composites below). This screams for [vertical media queries][6]. This will also benefit users who for some odd reason use their phone browsers in landscape mode. I checked several sites built with RWD, and for the most part I’d hazard to say that if you’re doing a thorough job testing your sites on a variety of devices, you should be fine on the Wii U.

## Controls and Navigation

[<img class="alignright size-medium wp-image-391 noborder" title="Wii U Gamepad (image courtesy of Nintendo)" src="/images/gamepad-front-black-300x158.jpg" alt="Wii U Gamepad (image courtesy of Nintendo)" />][7] This is where things got interesting. There has been a lot of discussion surrounding input and how users interact with our sites. These discussions usually center around keyboard, mouse and touch, with the occasional dive into assistive devices. The Wii U essentially provides both touch and what feels (to me) like an odd keyboard interface.

### Touch

The screen can and will accept input from fingers, but not multi-touch, and I’ve found that it is much more responsive and accurate when using the stylus. Finger touches can be hit or miss, occasionally requiring more than one attempt. Scrolling with with the stylus is also much more fluid. Average users may not notice the lack of responsiveness with finger touches, but anyone who’s spent any serious time with an iOS device may grow a little frustrated (aka, my children). Initially, my oldest child (9) was having trouble getting the gamepad to accept input because he was he was using too light of a touch.

### Non-touch

[<img class="alignright size-medium wp-image-394 noborder" title="WeedyGarden composite" src="/images/weedy-composite-296x300.jpg" alt="WeedyGarden composite" />][8]The Wii U also happens to have a button or eleven that can be used to navigate sites. The left analog stick scrolls and is quite sensitive, which allows scrolling at variable speeds. The right analog stick allows for easy zooming in and out, *unless meta viewport has “user-scalable=0″*. The d-pad on the left allows for selecting links on a page. The nice part is that it starts from the current location in the viewport. So for instance, if a user used the analog stick to scroll halfway down the page and then hit “right” on the d-pad, it would (most of the time) select the nearest clickable element. From there the “A” button could be used to click the link. It’s not completely accurate, but does a fairly good job. If there are no links on the screen, pressing up/down on the d-pad will simply scroll the page. Speaking of buttons, here’s what they do:

*   **R** (shoulder) – Forward
*   **L** (shoulder) – Back (B also works)
*   **Y** – Bookmarks
*   **X** – Activate/deactivate TV mirroring
*   **A** – Select (click)

After a bit of practice, I found that I could very quickly navigate and interact with a site with very minimal touch/stylus interaction. Where it tended to get more difficult was on link-heavy sites such as Reddit. One note, the [Nintendo website][9] makes note that it’s possible to tilt the controller to scroll the screen (like [Instapapers][10] tilt-to-scroll feature), but I couldn’t get it to work.

## Tech Specs

[<img class="alignright size-medium wp-image-392" title="University of Notre Dame composite" src="/images/nd-composite-300x256.jpg" alt="University of Notre Dame composite" />][11] Finally, lets discuss the capabilities of the browser. First off, it’s a [NetFront][12] NX v2.1 browser which uses [WebKit][13] as the engine. Even though [not all WebKit’s are created equal][14], this bodes well for the future of the browser. The actual screen resolution is 854 x 480 @ 158 ppi 16:9 (slightly larger than the Wii’s 800px Opera browser), but reports as 980px *if there is no meta viewport specified*. As in most new devices these days, Flash does not exist.

**html5test**: 258 and 4 bonus points  
Of note, it scores 0 on Microdata, Web applications, Workers and Local multimedia. It does not support Geolocation, but does support Device Orientation (even though it can only use it in landscape). For Storage, we get Session Storage and Local Storage, but not IndexDB or Web SQL Database.

**User Agent**: Mozilla/5.0 (Nintendo WiiU) AppleWebKit/534.52 (KHTML, like Gecko) NX/2.1.0.8.21 NintendoBrowser/1.0.0.7494.US

**Ringmark**: App cache and geolocation failed

## Conclusion

I’ll be honest. This is no iPad. When I want to look up something fast, this is not going to be a go-to device. However, in early tests, it appears to be extremely capable. So I can guarantee there will be a segment of the populace that will be using this device to visit your site, so you might want to check your stats. At the very least, it gives you a reason to buy one as a test device.

## Resources

*   [http://en.wikipedia.org/wiki/Wii\_U\_GamePad][15]
*   [http://en.wikipedia.org/wiki/Wii\_U\_Internet_Browser][16]
*   <http://www.nintendo.com/wiiu/built-in-software#/internetbrowser>

 [1]: http://maban.co.uk/
 [2]: http://www.alistapart.com/articles/testing-websites-in-game-console-browsers/
 [3]: /images/alistapart-tab.jpg
 [4]: /images/provost-composite.jpg
 [5]: http://nd.edu/
 [6]: http://boagworld.com/dev/vertical-media-queries/
 [7]: /images/gamepad-front-black.jpg
 [8]: /images/weedy-composite.jpg
 [9]: http://www.nintendo.com/wiiu/built-in-software#/internetbrowser
 [10]: http://www.instapaper.com/
 [11]: /images/nd-composite.jpg
 [12]: http://en.wikipedia.org/wiki/NetFront
 [13]: http://en.wikipedia.org/wiki/WebKit
 [14]: http://www.quirksmode.org/blog/archives/2009/10/there_is_no_web.html
 [15]: http://en.wikipedia.org/wiki/Wii_U_GamePad
 [16]: http://en.wikipedia.org/wiki/Wii_U_Internet_Browser