---
layout: post
title: "Designing Web Content for watchOS"
date: 2018-06-06
categories: [Web Development, Apple]
---
On Monday Apple announced that it was bringing Webkit to the Apple Watch with WatchOS 5. This will allow users to open links from the Mail and Messages apps directly on their watches. Naturally, as web developers, we wonder how this will work with our already responsive websites. Well here's the basics.<!-- more -->

The only specifics I've been able to track down so far is a video from WWDC 2018 titled, as you may have guessed, [Designing Web Content for watchOS](https://developer.apple.com/videos/play/wwdc2018/239/). Here's what we know so far.

To start with, if you want your link to display nicely when displayed to the user in Mail or Messages, be sure to use [Open Graph](http://ogp.me/) image and title tags. This will provide a nice preview prior to interaction.

## Interaction
When a user opens the link on the watch, they can scroll using either the crown or touch. They can also double-tap to zoom in and back out again.

## Limits
According to the video, Webkit on the watch has been optimized for reading, so there are certain features that have been disabled "at this time". These include video, Service Workers, and web fonts. I find that last one the most interesting from a design standpoint. It makes it that much more important to provide good fallbacks in font-family stacks.

## How it Works by Default
If you don't do anything to optimize your content, the watch will attempt to adapt already responsive sites to fit on the watch display. It does this by preserving 320 CSS pixel layouts and computing the initial scale to fit within the watch screen. So even if you set an initial scale of 1 at 320pt, the watch will scale it down to 0.49 initial scale at 156pt. It also reports its dimensions as 320x357 CSS pixels rather than the actual watch screen dimensions. It will also avoid horizontal scrolling.

## Optimizing Layout
Now if you want to optimize your content specifically, you'll need to add yet another meta tag.

`<meta name="disabled-adaptations" content="watch">`

This will tell the watch to ignore its default adaptations and display as instructed in the CSS. So even if you have a media query at min-width 320px, the watch will not use it since its screen is smaller. Essentially, this meta tag will allow Webkit to treat the display width as the [true width of Apple Watch](https://support.apple.com/kb/sp766?locale=en_US), which are 272x340px for the 38mm, and 312x390px for the 42mm watch.

## Forms
To my suprise, the watch will work with forms. They make a point in the video to stress the importance of using proper input types such as `tel` and `date`. When interacting with an input, the watch will go full-screen with the input interface, so it's very important (as it always has been) to use proper label markup to ensure the user gets a title at the top of the screen indicating which input they're interacting with.

## Reader Mode
On text-heavy pages, Webkit Reader Mode will automatically activate. It will function very similar to Safari's Reader Mode. It will start by looking for content within an `<article>` tag. It will also apply styles to basic semantic markup. You can provide further hints to Reader Mode by using [`itemprop` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop) to indicate content such as title, author, etc.

## Conclusion
This serves as a reminder how important it is for developers to not assume too much about device sizes and capabilities. As time goes on, we're going to run into more of these use-cases. It also highlights the importance of focusing on content and semantic markup.

## Reference
I'll update this article with more links and information as they become available.

- [Designing Web Content for watchOS](https://developer.apple.com/videos/play/wwdc2018/239/)
