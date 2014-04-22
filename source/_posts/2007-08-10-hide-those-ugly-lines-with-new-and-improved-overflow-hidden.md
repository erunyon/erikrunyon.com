---
title: Hide those ugly lines with new and improved overflow:hidden!
author: Erik Runyon
layout: post
permalink: /2007/08/hide-those-ugly-lines-with-new-and-improved-overflow-hidden/
categories:
  - Web Development
---
Ok, so let’s say you’re doing image replacement on an unordered list. Since we’re all good boys and girls here, we include the actual text inside the link tag and spin it off the left of the screen with text-indent. Well if you’re a Firefox user (or test with it), then you may recall seeing the border generated around the navigation and going off the left of the screen (see below).<!-- more -->

<img src="/images/2007/08/example.png" title="example.png" alt="example.png" border="0" />

It’s one of those things that I never really thought much about. But last week a co-worker of mine showed me a really simple way of getting rid of those lines. Enter “overflow: hidden”.

For those of you using Firefox, I have two examples below. The first is without the overflow attribute, the second is with.

## Without overflow:hidden

<ul id="nav1">
  <li id="nav1_1">
    <a href="#" onclick="return false;">First Item</a>
  </li>
  <li id="nav1_2">
    <a href="#" onclick="return false;">Second Item</a>
  </li>
  <li id="nav1_3">
    <a href="#" onclick="return false;">Third Item</a>
  </li>
</ul>

## With overflow:hidden

<ul id="nav2">
  <li id="nav2_1">
    <a href="#" onclick="return false;">First Item</a>
  </li>
  <li id="nav2_2">
    <a href="#" onclick="return false;">Second Item</a>
  </li>
  <li id="nav2_3">
    <a href="#" onclick="return false;">Third Item</a>
  </li>
</ul>

Special thanks to [Chaz][1] for the tip.

 [1]: http://grundyhome.com/