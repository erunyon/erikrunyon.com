---
title: Hi-res/Retina Display CSS Sprites
author: Erik Runyon
layout: post
permalink: /2012/04/hi-res-retina-display-css-sprites/
categories:
  - Apple
  - CSS
  - Mobile
  - Web Development
---
My 2010 article about [hi-res background images][1] gave a pretty simple example of how to replace a background image with a 2x version for the fancy hi-res devices that are hitting the markets. In this example, I’ll show you how to do the same, but with an image sprite. And to wrap things up, I’ll leave you with a limitation of the technique.<!--more-->

If you’re the impatient type, you can jump right to the [demo page][2].

The technique is fairly simple. If you have a current sprite file, you will need to double the dimensions of the file and replace the icons with 2x versions in the same layout as the 1x, just at double the distance from the images edge. If you load up the sprites from the example page, you will see in [the 1x file][3] that the gray-scale flag of Ireland is 500px down the page as represented by the following style:

<pre><code class="css">.icn.ireland {background-position:0 -500px;}</code></pre>

If you compare that to [the 2x file][4], you will see that Ireland is 1000 pixels down. The same math should be followed for the x-axis as well. Once you have your two files set up, one of which is an exact 2x version of the original, you simply over-ride the styles in a media query. We use the following to set up our default icons:

<pre><code class="css">.icn {width:32px; height:25px; margin:0 0 20px; text-indent:100%; white-space:nowrap; overflow:hidden; background:url(flags.png) 0 0 no-repeat;}
.icn.usa {background-position:0 0;}
.icn.england {background-position:0 -250px;}</code></pre>

And then to replace those with our hi-res versions, we would add the following:

<pre><code class="css">@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 only screen and (-o-min-device-pixel-ratio: 3/2),
 only screen and (min--moz-device-pixel-ratio: 1.5),
     only screen and (min-device-pixel-ratio: 1.5) {
       .icn {background-image:url(flags@2x.png);
            -moz-background-size:900px 1300px;
             -ie-background-size:900px 1300px;
              -o-background-size:900px 1300px;
        -webkit-background-size:900px 1300px;
                 background-size:900px 1300px;
      }
}</code></pre>

All we’re doing is pointing to the @2x version of the file, and then setting a background-size to the exact width and height as our original sprite. Technically, we could put the background-size declaration on the original .icn class, but it will work either way.

## The Problem

Shortly after the new iPad hit the streets, there was a flurry of discussion in the developer community about a limitation with jpg files. As [Duncan Davidson reported][5], jpg’s of a certain size would not display unless saved as progressive jpg’s. I ran into a similar issue with png’s and the iPhone4(s) and new iPad.

If you visit [the demo page][2] (and if you’re using one of the previously mentioned devices), you will not see the middle set of icons. The only difference between the second and third set is 100px of width on the sprite. So if you’re working with a very large sprite, and want to create a hi-res version, keep this limitation in mind or you will end up getting very frustrated (as I did) until I figured out what was going on. As an FYI, the sprite that fails is 2100x2600px (5,460,000 pixels), and the one following that works fine is 2000x2600px (5,200,000 pixels).

 [1]: /2010/10/retina-display-and-css-background-images/
 [2]: /demos/hi-res-retina-sprites/
 [3]: /demos/hi-res-retina-sprites/flags.png
 [4]: /demos/hi-res-retina-sprites/flags@2x.png
 [5]: http://duncandavidson.com/blog/2012/03/webkit_retina_bug