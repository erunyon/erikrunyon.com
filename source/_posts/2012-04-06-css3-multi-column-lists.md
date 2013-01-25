---
title: CSS3 Multi-column lists
author: Erik Runyon
layout: post
permalink: /2012/04/css3-multi-column-lists/
categories:
  - AgencyND
  - CSS
  - Web Development
---
Over the past couple of months, our group over at the [@NDWebTeam][1] has been redesigning the main [ND.edu][2] website. What we quickly realized is that ND.edu has a lot of lists. And since part of our design process was to have the site scale from mobile to wide-screen, we wanted to make use of css3 columns to shiny-up those lists. In the past, we would have floated the list items with set widths, but this is 2012 and we don’t want to do that anymore. Outlined below is the progression our designer [Philip Zastrow][3] and I went through to get these lists functioning how they should.

So first thing to do is set the column count and gap. This is where we ran into our first problem.<!--more-->

## Issue 1: Items breaking over columns

As you can see from the image below, long list items have a tendency to break on to the next column.

![Orphan list content](/images/2012/list-orphan.png)

When reading lists of items in a multi-column layout, it’s awkward when part of an item breaks on to the next column. Perhaps messing with the display properties of the li would fix it. So after adding display of inline-block, SUCCESS! All of the items content stays together. Enter the next issue.

## Issue 2: Missing bullets

Now we introduced another issue. Bullets are gone.

![Lists with no bullets](/images/2012/list-nobull.png)

My initial thought was the inline-block was hiding the bullets somehow, so I tried messing with the margin and padding. After some frustration and web searching, [I find this][4]. If you inspect a list item in its purest form, it has a display of “list-item”. By setting “inline-block” on our li’s we lost the bullet. No problem! By making use of “content”, we can add that right back in. The downside of this, is that you’ll have to set up the sub-lists as well. So now we’re up to this:

## Issue 3: Multiple items per line

Pay close attention to the third and fourth item in the image below.

![Side-by-side list items](/images/2012/list-side-by-side-lis.png)

Since we were mostly dealing with list items with a lot of text, we didn’t notice right away that some of the list items were showing up on the same line. The answer to this is a little more straight-forward. Just set a width of 100% on the li’s and done.

## Finishing Touches: Scaling

As mentioned at the beginning, we’re building for all screen sizes here. So initially, we should have NO column counts set. Depending on the content and how the columns scale, column counts should gradually increase as the screen width increases. Once all the styles are in place, we end up with nicely formatted lists as shown below (includes a sub-list):

![Final list styles](/images/2012/list-final-lis.png)

To see an example of these lists in action, [check out the demo page][5]. Just make sure you use a browser that supports “column-count” (Firefox 2+, Chrome 4+, Opera 11.1+, Safari 3.1+ or IE 10+). Change the browser width to view the changes in behavior on the final list.

 [1]: http://twitter.com/NDWebTeam
 [2]: http://nd.edu/
 [3]: http://phanza.com/
 [4]: http://www.w3.org/TR/CSS2/generate.html#lists
 [5]: /demos/css3-column-lists/