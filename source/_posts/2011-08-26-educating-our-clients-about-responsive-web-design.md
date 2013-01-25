---
title: Educating Our Clients About Responsive Web Design
author: Erik Runyon
layout: post
permalink: /2011/08/educating-our-clients-about-responsive-web-design/
categories:
  - Mobile
  - Notre Dame
  - Web Development
---
A couple days ago in a post-meeting chat I mentioned to my Project Manager Extraordinaire [@GtownNick][1], that I’d like to extend our development time on custom sites by a couple of hours so we could spend a little more time to focus on responsive web design with each build. He responded that just the other day one of our clients was concerned because they resized the browser window on a recent project and elements of the design started to move around on the page. They stated that they would prefer to see a horizontal scroll-bar, rather than have the approved design change with the width of the window. I was confused by this this statement. Why would they not want the site to respond to different size screens?

After some thought I realized that their concerns and subsequent statement was entirely our fault.<!--more-->

Our development process and mobile strategy in the past consisted of three things:

1.  A primary design built on the 960 grid, which is client approved
2.  A “webkit” stylesheet for iOS, Android and friends that completely replaced the default style
3.  A “handheld” stylesheet for less capable devices

The result was a site that looked exactly like the Photoshop mockup, a second design the client might see if they visit on their iPhone or Android device, and a third that the client would probably never see. The “mobile” styles were pretty much drop-in since we follow a standard mark-up style on all of our sites, so it had little to no impact on the project timeline. However, with our recent adoption of RWD, I’ve found it’s helpful to have a little more time allotted to make sure the design responds well to different screens, and to be able to test on a variety of devices.

The problem is centered around the fact we really only explained our mobile approach to clients if they happened to ask about mobile. It’s just one of the things we included by default because it’s the “right thing to do”. But now that our approach is going to be a lot more visible, it’s time we have the conversation with each client BEFORE we enter the design stage. It’s on us to explain how designs will change and re-flow based on the window width. With a little education about the recent advances in web development, our clients will understand the benefits of this new approach affords their users. Our clients already accept that the final site will not look exactly the same in every browser when compared to the mockup. We already explain that older IE browsers won’t get rounded corners, drop shadows and some gradients.

Remember, we’re the ones that are reading the development blogs, trying all the new tricks and for the most part agree that RWD (when done right) is the future of web development. Our clients will most likely never read [A List Apart][2]. It’s up to us to be the educators and professionals we are, do what’s best for our clients, and help them to understand why we’re doing what we’re doing.

 [1]: http://twitter.com/GtownNick
 [2]: http://www.alistapart.com/