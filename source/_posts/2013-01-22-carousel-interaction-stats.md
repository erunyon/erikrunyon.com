---
title: Carousel Interaction Stats
layout: post
permalink: /2013/01/carousel-stats/
categories: [Web Development, Stats]
---
Carousels. That gem of a web feature that clients love, and many developers hate. One thing is certain, they are the darling of HigherEd. In fact, they're loved so much, I've been assigned many times to retroactively add them to sites that have already been live for years. This led me ask how much are users really interacting with the carousels. To answer this question I added tracking to to the main feature on [ND.edu](http://www.nd.edu/) as well as four other Notre Dame sites with carousels, three of which are static, and one that automatically slides the features. Here's what I'm tracking:

1. Number of times the feature is switched by users
2. Total feature clicks
3. Total clicks per position

I'm also tracking interactions such as how many times the feature is switched using arrows vs. the dots (pagination), but that's not the focus of this article.
<!-- more -->
## The Numbers

These numbers were gathered from mid-October 2012 to January 22, 2013. The percentages are based on the number of clicks recorded through Google Analytics Events and compared to the number of visitors to the homepage. "Feature" refers to the individual calls-to-action that are either manually or automatically rototated in and out of view.

### ND.edu

Approximately 1% of visitors click on a feature. There was a total of 28,928 clicks on features for this time period. The feature was manually "switched/rotated" a total of 315,665 times. Of these clicks, 84% were on stories in position 1 with the rest split fairly evenly between the other four (~4% each).

![ND.edu Feature Click-through Rates][1]

### Static Carousels

I tracked the same interactions for three other Notre Dame sites, each with varying degrees of traffic and number of features in the carousel. The average number of feature clicks were between 1.7 and 2.3% which is higher than ND.edu and to be expected due to the different natures of the sites (ND.edu is more general traffic, these sites are specific audiences). The top slot on these sites averaged 48-62% of the total clicks, with subsequent features splitting the rest fairly evenly. The site with the most evenly distributed percentages based on position was the one with the fewest number of features (3).

### Auto-forwarding Carousel

We only have one site that automatically switches the feature (see Nielsen's [warning against Auto-Forwarding Carousels](http://www.nngroup.com/articles/auto-forwarding/)). This site averaged the highest number of clicks with 8.8% of homepage visitors clicking a feature. The first feature averaged 40%. The click-through percentage for subsequent features steadily declined for each feature starting with 18% for the second slot down to 11% for the last.

![Feature Click-through Rates for four ND properties][2]

## So What?

My question exactly. It's safe to say that whatever is in the first slot is going to draw the most attention (naturally). But what do these numbers give us that we can take back to our clients?

First, if they're going to insist on a carousel, they need to include compelling content that not only entices users to click, but can get their attention in the first place. Second, I might suggest keeping the number of features to a maximum of four (or better yet, three), as it appears that as the number of features increases, the click-throughs on sub-features decreases dramatically.

Finally, I'd suggest that the subject matter can make a big difference. For instance, when looking at the top five feature stories based on click-throughs for ND.edu in the time-frame mentioned above, the difference is [6,331 clicks for number one](http://www.nd.edu/features/message-from-the-students/) vs. [1,509 for number five](http://www.nd.edu/features/images/2012wwyff-great-leaders.jpg). And in the case of ND.edu, the top three are sports related, and the next two are from our "[Fighting For](http://www.nd.edu/fighting-for/)" series (which were advertised during football games).

If anyone has been tracking similar interactions on carousels, I'd be interested to know how your numbers compare.

## Update (five minutes after posting)

I think perhaps we should all just take [@lukew](https://twitter.com/lukew/status/293857685546360834)'s advice.

![basically that data tells me don't use carousels. - @lukew][3]

### Update Two

[Brad Frost](http://twitter.com/brad_frost) [posted a follow-up](http://bradfrostweb.com/blog/post/carousels/) with his thoughts on carousels.

### Update Three

[I posted some updated numbers](/2013/07/carousel-interaction-stats/) from the first six months of 2013.

## Other Articles (updated 2013-01-25)

I have been notified of other articles pertaining to carousels. [Contact me](/contact/) if you find others whether they're for or against. I'll include them here.

* [**Carousels**: Brad Frost](http://bradfrostweb.com/blog/post/carousels/)
* [**Slide Rules**: Bearded Studio](http://blog.bearded.com/post/41445520202/slide-rules)
* [**Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility**: Neilsen Norman Group](http://www.nngroup.com/articles/auto-forwarding/)
* [**That big sliding banner? Yeah, it’s rubbish**: Beantin](http://beantin.se/post/30991868949/sliding-banner-content-slider-carousel-rotator)
* [**Sliders Suck**: Brian Krogsgard](http://krogsgard.com/2013/sliders-suck/)
* [**Don’t Use Automatic Image Sliders or Carousels, Ignore the Fad**: ConversionXL](http://conversionxl.com/dont-use-automatic-image-sliders-or-carousels-ignore-the-fad/)
* [**Using carousels in higher education**](http://www.uofadmissionsmarketing.com/2013/02/using-carousels-in-higher-education.html) Added 2013-02-17
* [**Are homepage carousels effective?**](http://yorkwebteam.blogspot.co.uk/2013/03/are-homepage-carousels-effective-aka.html) Added 2013-04-15
* [**Should you use an auto-advancing carousel on your home page?**](http://www.lauradhamilton.com/should-you-use-an-auto-advancing-carousel-on-your-home-page) Added 2013-09-20

 [1]: /images/2013/nd-feature-click-through.png "ND.edu Feature Click-through Rates"
 [2]: /images/2013/click-through-rates.png "Feature Click-through Rates for four ND properties"
 [3]: /images/2013/carousel-lukew.png "basically that data tells me don't use carousels. - @lukew"

