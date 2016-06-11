---
layout: post
title: "The 13 Foot Website"
date: 2014-02-20
categories: [Web Development, RWD]
published: true
---
A photo from [BDConf San Diego (July 2013)](http://bdconf.com/events/san-diego-2013/) has popped up [here](https://twitter.com/Brett_FM/status/359372438129233920) and [there](https://twitter.com/mj3ns/status/359411090603528192) on the web in the months following, most recently in An Event Apart [Flickr](http://www.flickr.com/photos/zeldman/12637861493/in/pool-aeaatlanta14) [set](http://www.flickr.com/photos/zeldman/12637727195/in/pool-aeaatlanta14). Quite often, as in this case, it is lacking context around what's actually being depicted. The photo shows a responsive website printed out at the width of an iPhone. The reason it's notable is because the result is a rather long website. However, this depiction of the site doesn't actually get served to mobile devices.<!-- more -->

<figure class="alignright">
  <a href="https://twitter.com/lukew/status/359375570569687040">
    <img src="/images/2014/13-ft-nd-prop.jpg" alt="ND.edu if not optimized for mobile" title="ND.edu if not optimized for mobile">
    <figcaption>Image courtesy of @lukew</figcaption>
  </a>
</figure>

Over the past couple of years [I've presented](https://speakerdeck.com/erunyon) on the topics of [Responsible RWD](https://speakerdeck.com/erunyon/building-a-university-website-with-rwd-responsible-web-development), performance, RESS, and the like. Much of it has made reference to [www.nd.edu](https://www.nd.edu/) which makes use of [RESS](/2012/05/a-case-for-ress/) to deliver different markup to different form factors while (mostly) maintaining content parity. The main difference is that while the "desktop" version is extremely long, the "mobile" version is much smaller at approximately 2.something iPhone 5 screens tall. However, all of the content for the "desktop" version is available through primary and secondary navigation. The image was created by taking the full version of ND.edu, reducing the width to 320px wide, and taking a screenshot. The final product is a printout of the site that's 2.5 inches wide and over 13 feet long (approx 3 meters for those of you lucky enough to be on the metric system).

What the prop is meant to depict is how ridiculously long the mobile version of the site _would_ have been if we did _not_ optimize. I've used it in several presentations, and I think it makes the case for optimization quite nicely. Unfortunately, the original message is not always conveyed along with the image. Therefore, the response has typically been some internet teeth gnashing over how silly it is that such a site would ever be served to small screen devices. **My point exactly**.