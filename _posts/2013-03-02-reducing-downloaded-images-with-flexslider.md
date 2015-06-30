---
layout: post
title: "Reducing Downloaded Images with Flexslider"
date: 2013-03-03
categories: [Web Development, Performance]
---
Sometimes (read a lot of times) we have to put carousels on our sites. And even though [we've shown numbers that they're not effective](/2013/01/carousel-stats/), we end up adding them anyway. So in an ongoing effort to find ways to reduce the impact on performance, we look for simple to implement ways to cut down on the number of images loaded.<!-- more --> I was recently working on a client site where they needed the ability to easily update the images in the carousel. That means inline images. They also wanted six of them. And since the design called for a full-width carousel, this meant large images. More precisely, 436.2 KB worth of images. On [ND.edu](http://www.nd.edu) we use background images and media queries to serve up smaller images, and defer loading using classes. Can't do that this time. But what we can do is comment out the images in the template.

We use the [Flexslider](http://www.woothemes.com/flexslider/) plugin for our responsive carousels. Since the images in the carousel on this site are simply complementary to the accompanying text, if they don't display with javascript off, no big deal. So from there all we need to do is remove the comments from around the images we need to show. I initially tried to simply show the front image, which is classed with "flex-active-slide". For reasons I haven't dug into yet, Flexslider will not display correctly unless that image as well as the "clone" items are shown as well. We do this by stripping the comments from around the specified images on the "start" callback. Not ideal, but it does allow us to load just two of the six images. In this case, it takes us from 436.2 KB worth of images downloaded down to 156.1 KB. And then on the rare occasion that a user does choose to interact with the carousel, we use the "before" callback to strip the rest of the comments and load the remainder of the images. The reason we add the 'init' class on each item after stripping the content is so we don't update the DOM on each slide switch.

In the end, we're still loading full-size images on mobile, so there's definite room for improvement, but this method, in this case, does cut the site's size in half.

The code is below. It's been tested in IE 8 & 9, Firefox, Chrome and Safari. It's [published as a gist](https://gist.github.com/erunyon/5073909), so feel free to fork it and improve where you see fit.

<script src="https://gist.github.com/erunyon/5073909.js"></script>