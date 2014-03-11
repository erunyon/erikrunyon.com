---
title: Why I Stopped Using 8 Decimal Point Widths and You Should Too
author: Erik Runyon
layout: post
permalink: /2012/07/why-i-stopped-using-8-decimal-point-widths-and-you-should-too/
categories:
  - CSS
  - Web Development
---
Flexible grids, flexible media and media queries. The three basic building-blocks of Responsive Web Design. And though most of the public debate lately has focused on the second, developers have quietly grumbled about the first. Not an outcry by any means, but minor complaints and frustrations. One of these complaints is centered around browsers and the differences in their rounding of our lovely six to twelve decimal widths. In some of my early responsive sites, I spent way too much time fighting these rounding errors, and some to no avail. Which leads me to a topic I’ve wanted to discuss for some time, but have been holding off until I was positive about my views. But today’s post by [John Albin Wilkins](http://www.palantir.net/blog/responsive-design-s-dirty-little-secret) has prompted me to get something down in writing.<!-- more -->

## The Problem

As Mr. Wilkins so eloquently points out, browser vendors can’t agree on how to round decimal numbers. This leads to problems for us developers when it comes to building our pixel-perfect Photoshop designed layouts. In my opinion, the problem isn’t the browsers inconsistencies. The problem is that we’re still trying to replicate 960 grid Photoshop documents as web sites. If we weren’t, would we honestly be giving our columns widths of 24.2485AHHHHH%? Answer: no.

## My Process

Over the past several months I’ve intentionally avoided building in a way that produces crazy-long decimal widths. Instead, I start by building the basic styles and blocks of a site with no widths. Then as the screen size increases, media queries are introduced and blocks are floated, I visually compare the work-in-progress to the client approved design. What I don’t do is overlay the browser window with the Photoshop document. Why? Because there’s no point. When we use the exact widths from a mockup to calculate our columns, those columns are only going to be perfect at the exact width of the mockup. So why go to the pain and frustration of calculating those numbers when we should be progressively building the site and in the process adding widths, margins and padding that **honor the spirit and not the pixel-perfection of the mockup**.

We’ve made great strides over the past year educating and demonstrating to our clients that the mockups we present to them are only approximations of the final product. Mobile has been key in persuading and explaining to them the advantages and strengths of responsive design. Clients are *finally* ok with the fact that the design will not appear exactly the same on every OS, browser and device. By continuing to base our grids off a fixed pixel width mentality, we’re contradicting ourselves.

So yes, some decimal points are probably going to be necessary. But if we're building mobile first, they're probably not going to exceed three(ish) decimal places. And if that's the case, probably won't suffer from browser rounding errors.

**Update 2012-07-31**: Philip Zastrow (designer/developer with the [ND Web Team](http://twitter.com/NDWebTeam) [posted a follow-up to this article](http://www.phanza.com/2012/07/31/the-broken-design-process).