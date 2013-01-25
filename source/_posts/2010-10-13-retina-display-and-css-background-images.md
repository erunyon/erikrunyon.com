---
title: Retina Display and CSS Background Images
author: Erik Runyon
layout: post
permalink: /2010/10/retina-display-and-css-background-images/
categories:
  - AgencyND
  - Mobile
  - Notre Dame
  - Web Development
tags:
  - agencynd
---
<figure>[<img class="alignright" src="/images/mdotnd-ip-small.png" alt="m.nd.edu" />][1]</figure> 

Anyone who owns an iPhone 4 has experienced the beautiful new [Retina Display][2]. Text is amazing, colors are vibrant, but apps and sites that are not updated to handle this display usually look less than stellar. This is because the Retina Display, which has a display that is twice the resolution of most devices, scales images up so they appear to be the “correct size”. The solution to this is to target these devices using a [media query][3] and replace the graphics with a higher-quality version.<!--more-->

## Use case: m.nd.edu

My first opportunity to work with and fix this issue was for [m.nd.edu][1]. The first step may also be the most difficult. Through trial and error I worked with our designer [Jim Gosz][4] to re-create the entire interface in both standard and double resolution. For this article, I’ll focus on the home-screen icons, displayed here at double the size to accommodate the Retina Display. Below is a screen-shot from the iPhone 4 simulator which shows how the images appear pixelated due to scaling.

<figure>[<img src="/images/mdotnd-ip4-before-preview.png" alt="iPhone 4 before" />][5]
<figcaption>iPhone 4 with scaled-up icons.</figcaption></figure>

### Bring in the Big Guns

The [original icon][6] size on the home-screen is 57×57 pixels. For the Retina Display, Jim created additional [icons at 114×114][7]. I chose to follow the naming convention Apple uses in its SDK to target the high-res images by adding the suffix “@2x” to the file-name. So for low-res devices, if the standard icon is “icon-news.png”, the RD devices would be “icon-news@2x.png”. To get these into the mix, I added a media query into the css file that targets the Retina Display:

<pre>@media all and (-webkit-min-device-pixel-ratio: 2) {
    #home-news a {background-image:url(images/icon-news@2x.png);}
}</pre>

**Updated 2012-3-2 to include -o, -moz and w3c standards:**

<pre>@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
	only screen and (-o-min-device-pixel-ratio: 3/2),
	only screen and (min--moz-device-pixel-ratio: 1.5),
	only screen and (min-device-pixel-ratio: 1.5) {
		#home-news a {background-image:url(images/icon-news@2x.png);}
}</pre>

However, after refreshing the screen, the images look like this:

<figure>[<img src="/images/mdotnd-ip4-unscaled-preview.png" alt="iPhone 4 unscaled" />][8]
<figcaption>iPhone 4 hi-res un-scaled</figcaption></figure>

Obviously not ideal. This is where the [background-size][9]property comes in. By adding

<pre>#homenav li a {background-size:57px 57px;}</pre>

to the Retina Display portion of the style-sheet, the 114px images will display at 57px and thereby make everything appear at the proper scale. The background-size property will also accept “auto” as a value. So I could have used “background-size:57px auto;”. With this in place, the icons appear as below:

<figure>[<img src="/images/mdotnd-ip4-scaled-preview.png" alt="iPhone 4 scaled" />][10]
<figcaption>iPhone 4 hi-res</figcaption></figure>

I think we can all agree that looks much better. Is this something I’ll use on every site I build? Probably not. Creating multiple versions of each graphic is labor intensive. But for mobile specific sites, it’s definitely worth it. Especially since we’ll be seeing more devices arriving soon with similar screens.

**UPDATE** (2012-04-27): I added [an additional article][11] to show how to use this technique with css image sprites

## Further reading:

* <a href="http://www.w3.org/TR/css3-mediaqueries/">W3C Media Queries</a>
* <a href="http://webkit.org/blog/55/high-dpi-web-sites/">High DPI Web Sites</a>
* <a href="http://aralbalkan.com/3331">How to make your web content look stunning on the iPhone 4′s new Retina display</a>

 [1]: http://m.nd.edu
 [2]: http://www.apple.com/iphone/features/retina-display.html
 [3]: http://www.w3.org/TR/css3-mediaqueries/
 [4]: http://www.humanradiator.com/
 [5]: /wp-content/mdotnd-ip4-before.png
 [6]: http://m.nd.edu/webkit/css/images/icon-news.png
 [7]: http://m.nd.edu/webkit/css/images/icon-news@2x.png
 [8]: /images/mdotnd-ip4-unscaled.png
 [9]: http://www.w3.org/TR/css3-background/#the-background-size
 [10]: /wp-content/mdotnd-ip4-scaled.png
 [11]: /2012/04/hi-res-retina-display-css-sprites/