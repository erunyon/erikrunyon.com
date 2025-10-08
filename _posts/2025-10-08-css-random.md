---
layout: post
title: "CSS random()"
date: 2025-10-08
categories: [CSS, Web Development]
---
Safari recently implemented a non-standard (yet?) CSS random() function (currently only in WebKit, and not yet part of any CSS specification). Since many recent CSS features are directly aimed at replacing common JavaScript functionality, I expected this function to do the same. While it has some neat use cases, it doesn't cover most of the scenarios where I currently use JavaScript’s Math.random().
<!-- more -->

## What it does

The basic format of the function follows the pattern "random(min, max, step)". For instance, if you want to assign an element a random height between 50px and 200px, you would use "height: random(50px, 200px)". You can also include a "step" value like so "height: random(50px, 200px, 50px)" where the values will always be a multiple of 50. You can see more examples on the WebKit post ["Rolling the Dice with CSS random()"](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) and Frontend Masters ["Very Early Playing with random() in CSS"](https://frontendmasters.com/blog/very-early-playing-with-random-in-css/).

## What it doesn't

Currently, random() can only be used in numeric or color contexts — not in selectors or string values like URLs or text content. I have two primary use cases, and one just for fun. All three are marked-up as I would expect to use them if they were supported in the CodePen below.

### Random items from a collection

A common pattern on many Notre Dame sites would be to show a random item from a collection. These could be content such as faculty spotlights, recent publications, or student profiles. We always know how many we're choosing from, and they're always contained to a specific section. So being able to use CSS to show a random child using ":nth-child" would be fantastic.

### Random images

Less common is showing random images. This could be in a feature area on the homepage, or even a decorative background image. This would require the ability to concatenate a string with the random number.

### Random numbers

A "just for fun" feature would be displaying the value from the random() function. My initial thought would be a CSS only dice roller. The demo in the pen would require being able to display the random value in an "::after" pseudo element.

<iframe height="500" style="width: 100%;" scrolling="no" title="Wishlist - Random Content with CSS random()" src="https://codepen.io/erunyon/embed/QwyvabM?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/erunyon/pen/QwyvabM">
  Wishlist - Random Content with CSS random()</a> by Erik Runyon (<a href="https://codepen.io/erunyon">@erunyon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

While none of these examples are difficult to accomplish with JavaScript, it's always nice use CSS alone when possible. What use cases do you have for CSS random() that aren't currently supported.