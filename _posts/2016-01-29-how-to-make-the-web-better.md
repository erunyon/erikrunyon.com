---
layout: post
title: "How to Make the Web Better"
date: 2016-01-29
categories: [Web Development, The Shift]
---
This is the first in a series prompted by a [Sparkbox initiative](http://seesparkbox.com/foundry/introducing_the_shift) called "The Shift". The idea being the first Monday of each month a topic will be announced, and then on the last Friday, everyone taking part in the topic post a link to their article with the hashtag [#startYourShift](https://twitter.com/search?f=tweets&vertical=default&q=%23startYourShift). This months topic: "How to Make the Web Better".<!-- more -->

<a href="https://twitter.com/startyourshift"><img class="alignright" src="/images/2016/the-shift.png" alt="The Shift"></a>

Sparkbox left this months topic intentionally vague, which leaves it open to many areas of discussion. But before we get into how we can make the web better, let's take a step back and think about what makes the web great.

## A Look Back

Those of us who create websites for a living often get inundated with web vs. native app debates. One of the strongest arguments for the web has always been that anyone with a browser can access the content, not just those with a specific devices or operating system. And that certainly is one of its greatest strengths. Universal access has always been at the core of the web. In fact, [the opening sentence of the first web site](http://info.cern.ch/hypertext/WWW/TheProject.html) states the WorldWideWeb is an "information retrieval initiative aiming to give universal access to a large universe of documents". For the most part our industry has done fairly well with this goal. Sure, we've had our run-ins with table-based layouts, and proprietary plugins, but over the past six years or so, we've made a strong effort to come back to the original intent of the web. With the latest features in HTML and CSS, Flash has mostly disappeared from a vast majority of developers toolkits. Some browsers are dropping support for most plugins, and [Oracle recently announced that it's deprecating its Java browser plugin](https://blogs.oracle.com/java-platform-group/entry/moving_to_a_plugin_free).

## How to Make the Web Better

I enjoy working with the latest and greatest web technologies as much as the next developer, but we shouldn't require users to be running a top-of-the-line computer with high-speed internet in order to access our content. Too often we add [over-the-top animations and scroll-jacking](/2013/10/flash-is-dead-long-live-flash/) to pages in order to make them "flashy".  But in all honesty, how often are these features added for the readers benefit? We need to be careful not to sacrifice accessiblity for design by doing such things as [replacing the DOM with canvas](http://farukat.es/journal/2015/02/708-how-flipboard-chose-form-over-function-their-web-version), or creating pages that measure in the tens of megabytes.

I'm not saying we shouldn't be creative, or add fun animations/interactions. These additions can certainly delight the user and add to the user experience. More and more our site owners are asking for fun interactions. What I _AM_ saying is that we need to be careful about what we're adding and why. If we don't consider underpowered devices and less than stellar internet connections early in the design and build process, what we'll end up with are pages that may crash, severely lag, or simply not load for a percentage of users. But if we take the time to test for the features we can, and be considerate about those we can't (such as bandwidth speed), we can create engaging experiences that can be accessed by everyone, while still providing more of an "experience" for those users and devices that support the latest features.

To make the web better is to remember its original intent. We need to make sure we build with [progressive enhancement](http://alistapart.com/article/understandingprogressiveenhancement) in mind. We should value universal access over the experience. Because what good is well-crafted content if users are prevented from consuming it?
