---
layout: post
title: "Preloading Fonts May Delay Start Render"
date: 2019-11-18
categories: [Web Development]
---
This morning I learned that preloading custom fonts may have an adverse effect on load metrics, especially Start Render.

Our main site uses three custom fonts (four files). Up until this morning we were preloading them. The font display properties were already set to "swap". By removing the preload, it cut an average of one second off Start Render on iPhone 8, 3G connection tests.<!-- more -->

[Before](https://www.webpagetest.org/result/191116_X0_e4361201b45e09fb4c35b918df77f8d9/):
- Load Time: 3.951s
- Start Render: 3.767s
- Speed Index: 3.950s

[After](https://www.webpagetest.org/result/191118_ZG_b864a5fa5471c182a5e2732dfbc4a297/):
- Load Time: 4.021s
- Start Render: 2.785s
- Speed Index: 2.853s

It made sense after taking a closer look. Since we already had "font-display" set to "swap" we technically didn't need to preload them. By doing so, we were asking for four additional files to download before it was necessary.

The moral of the story? Be careful with "preload", and definitely test before and after.