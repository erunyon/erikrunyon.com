---
title: 'Print Styles &#8211; Your First Step to Basic Mobile'
author: Erik Runyon
layout: post
permalink: /2010/01/print-styles-your-first-step-to-basic-mobile/
categories:
  - Mobile
  - Web Development
---
In [my last article][1], I made mention that you should at least include a basic mobile stylesheet for your site. The easiest way to accomplish this is to piggy-back your print style. What? You say you don't have a print stylesheet? Bad developer. In this article, we're going to run through the very basics of a print style, and move on to basic mobile in the next.<!-- more -->

## A Basic Print Style

<pre>&lt;link rel="stylesheet" href="/css/print.css" type="text/css" media="print" /&gt;</pre>

There are several things to keep in mind when creating a print stylesheet:

### Background images and colors will not be seen\*

[<img src="/images/2010/print-preview.png" class="alignright" alt="Print Preview" />][2]

Yes, you've spent a lot of time making your site beautiful. When someone prints your page for future reading/reference, they don't need the glamour-shot version. They need something simple that's not going to cost them a hundred dollars worth of ink to print.

### Hide the junk

If you're a typical site, you'll have a bunch of navigation, maybe some ads, thumbnails from Flickr, etc. That's the junk. Users that are printing a page don't care about it at that moment in time. Right now, content really is king. This is a great time to use "display:none" on anything and everything that's not related to the content at hand.

### Keep it simple, readability is the key

So by now you've accepted that your print stylesheet does not have to look the same as the site itself. However, you do need to take some steps to keep some branding. This is going to require some inline images if you want your logo and such to show up. If this print-friendly image is different from what you want to show in your screen style, you can include it in the same element and simply hide it. Then you'll have it available for the print style.

Next up are links. Links in your content are part of the story. Be sure to include a little css to show the user where the links would go should they actually be able to click them:

<pre>#content a:link:after {content:" [" attr(href) "] "; font-size:90%;}</pre>

Setting up a print stylesheet is not a difficult undertaking and should be part of every design. It's a great way to help your users. If you're curious, you can [view the print stylesheet for this site][3] to see how little css it takes to achieve a basic print style.

## Other Resources

*   [Printing Web documents and CSS][4]
*   [CSS-Tricks Finally Gets A Print Stylesheet | CSS-Tricks][5]
*   [printFancy][6]

If you're a higher-ed developer, you can find some higher-ed specifics:

*   [Don't lose your identity ñ Create an effective print style sheet][7]
*   [Print Stylesheets ‚Äì University Web Developers][8]

** By default, browsers don't print background colors or images. Here's a section of the print dialog in Firefox. Note that these check boxes are off by default.* ![Print Dialog][9]

 [1]: /2010/01/02/when-m-dot-is-not-an-option/
 [2]: /images/2010/print-full.png "View Print Style"
 [3]: /wp-content/themes/weedy-beta/css/print.css
 [4]: http://css-discuss.incutio.com/?page=PrintStylesheets
 [5]: http://css-tricks.com/css-tricks-finally-gets-a-print-stylesheet/
 [6]: http://printfancy.com/
 [7]: http://doteduguru.com/id3876-dont-loose-your-identity-create-an-effective-print-style-sheet.html
 [8]: http://cuwebd.ning.com/group/css/forum/topics/1763934:Topic:29074
 [9]: /images/2010/print-dialog.png