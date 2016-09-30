---
layout: post
title: Tech Adoption
date: 2016-09-30
categories: [Web Development, The Shift]
---
This month on [#startYourShift](https://twitter.com/search?f=tweets&vertical=default&q=%23startYourShift), we're talking about Tech Adoption. I find this topic fascinating personally, since during my career I've been accused of both adopting technology too quickly, and of being a wet blanket by blocking the implementation of the new and shiny. Let's take a look back at some of them, as well as my personal viewpoint on tech adoption.<!-- more -->

[<img class="alignright" src="/images/2016/the-shift.png" alt="The Shift">](https://twitter.com/startyourshift)

## Erik is moving too fast

Let's look at two basic examples.

I started playing around with CSS fairly early in its life. Simply having the ability to drop the "font" tag was a huge win. And with showcases like CSS Zen Garden (launched in May 2003) it made convincing nay-sayers much easier to sway. So imagine my surprise when I started my first full-time web job in 2004 (up till then web was a side-job to my full-time design jobs), when I had to spend a considerable amount of time convincing my new co-workers that we should be using CSS instead of tables for layout. In their defense, they had been using tables for a long time and were very fast at building with tables. And in that business, time was a big factor. It took employee turnover for me to win that battle.

Fast forward to 2010. Responsive Web Design was new on the horizon. [Ethan Marcotte](https://twitter.com/beep) had just [published his article on A List Apart in May](http://alistapart.com/article/responsive-web-design). We had all been working our "m-dot" sites, and it was quickly becoming apparent that targeting each device on its own was going to become untenable. So when we started building client sites using RWD, we were welcomed with pushback. Up until this point we worked in the typical Photoshop mockup to pixel-perfect website workflow. Some clients even went so far as to overlay the approved design over the finished site and would let us know when things were a pixel off here or there. But when those pixel-perfect sites started to shift based on screen size, opinions were made known. This was totally on us. We did not talk to our clients about RWD before implementing it. Once we did, and explained the reasons and advantages, they were more than happy to join us on the RWD bandwagon.

You may look at those two examples and think, well yeah, obviously you're going to adopt those technologies. But that's the thing. Both had their detractors in their early days. "CSS doesn't have enough support". "RWD takes too long". But to many of us, it was obvious that these technologies were the future of the web. Not adopting them as soon as possible was a disservice to the projects we were working on. The trick is figuring out which technologies are definitely the way forward, and which are going to be a distraction, and will probably suffer from deprecation or replacement by something superior in the near term.

## Erik is being a Luddite

Unlike the previous examples, the reasons for not adopting a new technology vary widely from when we do. There are many reasons for not adopting new tech.

1. It doesn't fit the needs of the project
2. Lack of consensus with the development team
3. Already locked in to equivalent tech
4. We don't have time to learn every new library/technology. [See this interview with Lyza Danger Gardner about keeping pace with web technologies](http://www.creativebloq.com/web-design/lyza-gardner-keeping-pace-web-technologies-61620829)
5. Time
6. No, seriously. Nobody has that kind of time

Our primary app is a proprietary CMS that as of today (2016-09-30) hosts 527 university websites. It launched nine years ago, and is still going strong today. Obviously it's had many upgrades along the way. It was started on a pre-1.0 version of [Ruby on Rails](http://rubyonrails.org/), and is now on Rails 4. It originally made use of Prototype/Scriptaculous, but was long ago moved to [jQuery](http://jquery.com/). We've added support for [Sass](http://sass-lang.com/), and [Autoprefixer](https://autoprefixer.github.io/). Unfortunately, there was a little [HAML](http://haml.info/) added at one point (since removed). Each of these additions and changes have been very deliberate. There has been discussion of moving to React, or Angular, or whatever. But we need to keep in mind that we work at a university. Developers come and go, but this nine-year-old app will continue to run. Adopting too many varying technologies reduces our ability to hire experts in those technologies. It's also not uncommon for a popular framework to release a new version that is not compatible with previous releases. When dealing with an application of this size, that's a scary hurdle to face.

Believe me, I want to play with new tech just like other devs, and I think we absolutely should… but I'm also practical. That's why I'm all for creating fun throw-away apps using the flavor of the month while still being very judicious about what we let into our primary production applications.

## The up-and-comers are coming

So what new tech is on the way that I'm excited about? We're already making use of [Flexbox](https://www.w3.org/TR/css-flexbox-1/) (thanks Autoprefixer!). I'm really looking forward to [CSS Grid Layouts](https://www.w3.org/TR/css-grid-1/). I personally believe [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and [Progressive Web App's](https://developers.google.com/web/progressive-web-apps/) are going to be huge. We're planning changes to our CMS that will allow our users to leverage [responsive images](http://responsiveimages.org/).

My primary message to the developers out there that stumble across an exciting new tech is this: build something with it. Create a demo app. Really dig into its intricacies. Find all the pros and cons you can, even if it's a tech that you can't use in production at this time. That way, if and when the opportunity does arise, you'll know if it's a good fit. Just be as sure as you can that it's something you're willing to support down the road even if the project is abandoned or replaced by something better. Because if there's one thing we've learned over the years is that there's always going to be a better solution soon. Our job as technologists is to pick those with staying power, and not just the what the developer community is telling us we should be using.
