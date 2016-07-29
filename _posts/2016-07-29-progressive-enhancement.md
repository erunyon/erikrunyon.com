---
layout: post
title: Progressive Enhancement
date: 2016-07-29
categories: [Web Development, The Shift, a11y]
---
Progressive Enhancement can mean different things to different developers. To me, it means building in a way that doesn't lock out devices or browsers from consuming the primary content of a site. Let's get into some specifics.<!-- more -->

<img src="/images/2016/blocks-800w.jpg" srcset="/images/2016/blocks-800w.jpg 800w, /images/2016/blocks-1600w.jpg 1600w" sizes="100vw" alt="Wooden blocks spelling HTML">

## The short list

### Start with semantic HTML

HTML5 [introduced a number of semantic elements](https://www.w3.org/TR/html5/sections.html) (header, footer, main, etc.) to complement those that already existed. Some items to keep in mind:

1. Use only one `<main>` element, which should wrap the primary content of the page
2. Only use one H1. The w3c updated it's recommendation this year. [Regardless of sectioning, you should only use one H1](http://w3c.github.io/html/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements)
3. Place your primary header and footer inside `header` and `footer` elements
4. Save the `nav` element for your primary navigation. Not every list of links is a nav.

### Use ARIA landmarks

Even though the [W3C Validator](https://validator.w3.org/nu/) gives a warning stating it's not necessary, some accessiblity experts I've talked to believe we should (at least for now) still be adding ARIA landmark roles to semantic HTML 5 elements such as 'header' and 'main'. They can help assistive devices get around your site in an efficient way. [Check out the w3.org docs](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page#Examples) to get started.

### Include skip links

[Skip links](http://webaim.org/techniques/skipnav/) provide quick navigation to keyboard and assistive device users. Make sure they're near the top of your page.

### Test keyboard navigation

Not all accessibility issues are due to visual problems. There are a lot of users out there that either rely on (or prefer) to navigate without a mouse. Make sure the tab order makes sense, and that menues, including drop-downs, are navigable via keyboard.

### All tasks can be completed with js off (or broken)

Even though it may seem most users have javascript on, it's not safe for developers to assume so. Shoddy network connections can often cause requested resources to fail. If those failed requests include some or all of your javascript, the user could be left an unusable website. And as mobile becomes even more ubiquitous as time goes on, we should remember browsers such as Opera Mini that have somewhat [limited javascript support](https://dev.opera.com/articles/opera-mini-and-javascript/).

### Build mobile first

By starting with mobile styles and adding layout with media queries, browsers that don't support advanced layout (be they [Flexbox](https://www.w3.org/TR/css-flexbox-1/) or [CSS Grid](https://www.w3.org/TR/css3-grid-layout/)) should still get a perfectly readable site.

### Don't forget about performance

Believe it or not, performance, accessibility, and progressive enhancement are all very closely related. Slow and bloated sites can fail to load on some mobile devices. Use `srcset` to layer on larger images, but use small, highly optimized images by default. For background images, provide multiple versions so mobile devices aren't loading 2000px wide full-width background images.

## It's all in the approach

By building with progressive enhancement, not only will underpowered and/or old browsers still be able to read your content, but if something goes wrong with the network connection, your site will still be usable. Us developers need to constantly remind ourselves that not everyone is like us, with new phones, powerful laptops, blazing internet connections, and large external screens. By using progressive enhancement with a focus on performance, [you may open up your site/product to a whole new audience](http://blog.chriszacharias.com/page-weight-matters).
