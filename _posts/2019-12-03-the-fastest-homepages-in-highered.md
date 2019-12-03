---
layout: post
title: "The Fastest Homepages in HigherEd"
date: 2019-12-03
categories: [HigherEd,Web Development,Performance]
bodyclass: "top10"
---
I've been tracking performance on homepages within higher education since 2012. My [current list of domains clocks in at 1,769](https://github.com/erunyon/highered-homepages). I figured it would be fun to take the performance stats from that list and compile a list of the ten fastest when tested under mobile conditions.<!-- more -->

## The Criteria

- Must be an accredited, degree-granting higher education institution
- Must be the primary URL for a university, college, or campus. May include campuses that fall under a larger umbrella.
- Must not be a school or medical facility that exists under a parent university (that includes business schools, law schools, etc.)
- Must not be a specialty school such as chiropractic or cosmetology
- Must be "mobile friendly" employing responsive web design principles, without being mobile-specific

## The Methodology

All data is compiled using [WebPageTest](https://www.webpagetest.org/) with the following settings:

- Dulles, VA Location
- iPhone 8 iOS 12
- 3G (1.6 Mbps) Connection

Rather than determining the rankings from a single metric, scores are based on the average of the following stats:

- Render Start
- Visually Complete
- Load Time
- Speed Index

## Honorable Mention

Before we get to the results, I would point out that [Wasthenaw Community College](http://www.wccnet.edu/) would have made the list but it does not meet the "mobile friendly" criteria. I bring it up to point out that modern web practices don't necessarily equate to faster. There are plenty of non-responsive sites in my source list, but WCC was fast enough to warrant mention.

## The Results

While the results below are for mobile sites, it does not necessarily mean the sites are also fast at larger sizes. To that end, I also include desktop stats for each. The "Mobile Stats" and "Desktop Stats" titles for each site link to the WebPageTest results in case you want to get into the weeds of each one.

### #10 - [Connecticut State Colleges & Universities](http://www.ct.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-ct.jpg" loading="lazy" alt="Connecticut's homepage as viewed on an iPhone 8"></figure>

This site could move up in the list with a couple improvements. The first improvement would be to use optimized images in the hero space. It's currently serving a 1,826px wide and 183 KB image on mobile. Resizing and compressing that image could result in an image of 26KB. A second improvement would be to add a preconnect for a couple Typekit domains. One in particular is blocking rendering because it's being loaded by javascript. A preconnect could load a Typekit CSS file faster by doing the DNS handshake earlier.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_R1_6d83f95c790399721a1c8b1ad97dcf5f/)

- Render Start: 5.1s
- Visually Complete: 9.0s
- Load Time: 8.9s
- Speed Index: 6,334
- Download Size: 648 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-ct.png" class="inline-block" loading="lazy" alt="Lighthouse score 78 88 64 82 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_9R_134a3318787f6d04a68abf65c83b3bb7/)

- Render Start: 1.0s
- Visually Complete: 1.9s
- Load Time: 1.7s
- Speed Index: 1,099
- Download size: 642 KB

### #9 - [Southeastern Illinois College](https://sic.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-sic.jpg" loading="lazy" alt="SIC's homepage as viewed on an iPhone 8"></figure>

SIC would see big improvements by implementing lazy loading for images. The site currently downloads 31 images on initial load, but only about five of those are necessary for first paint.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_52_a45fd1819240e74dc43f85033c4e4723/)

- Render Start: 5.9s
- Visually Complete: 7.8s
- Load Time: 8.6s
- Speed Index: 7,342
- Download Size: 686 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-sic.png" class="inline-block" loading="lazy" alt="Lighthouse score 76 95 50 88 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_QV_204ab28f7c56fe03dafd9d18610bd429/)

- Render Start: 1.4s
- Visually Complete: 5.0s
- Load Time: 2.3s
- Speed Index: 2,635
- Download size: 1.1 MB

### #8 - [Wayne State University](https://wayne.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-wayne.jpg" loading="lazy" alt="Wayne State's homepage as viewed on an iPhone 8"></figure>

Similar to CSU, Wayne State is serving a single-size image in its hero space with 1600px wide at 311 KB. The same image, when sized appropriately for mobile could come in at around 47 KB. Another issue is that the site currently has ten unique DNS lookups. It may also help to self host some files and use preconnect for others to reduce the number of DNS lookups and shave some time off start render.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_WE_1a0c891c204750200b61056d83b6441c/)

- Render Start: 4.5s
- Visually Complete: 8.4s
- Load Time: 8.2s
- Speed Index: 6,154
- Download Size: 623 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-wayne.png" class="inline-block" loading="lazy" alt="Lighthouse score 90 100 86 100 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_8D_c5d254efb5131c61a109a9828d2406ac/)

- Render Start: 1.2s
- Visually Complete: 2.4s
- Load Time: 2.3s
- Speed Index: 1,826
- Download size: 650 KB

### #7 - [Keene State College](https://www.keene.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-keene.jpg" loading="lazy" alt="Keene State's homepage as viewed on an iPhone 8"></figure>

Keene has a decent loading strategy. It's serving correctly sized images, but could benefit from lazy loading the images below the initial calls-to-action.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_Z3_8544f8dda064a556fc709133235e574a/)

- Render Start: 3.7s
- Visually Complete: 4.8s
- Load Time: 10.3s
- Speed Index: 3,969
- Download Size: 666 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-keene.png" class="inline-block" loading="lazy" alt="Lighthouse score 81 100 93 92 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_57_cae432c07fe2881ce05878df1423bb1e/)

- Render Start: 700ms
- Visually Complete: 1.6s
- Load Time: 2.4s
- Speed Index: 809
- Download size: 750 KB

### #6 - [University of Texas at Tyler](https://www.uttyler.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-uttyler.jpg" loading="lazy" alt="UTT's homepage as viewed on an iPhone 8"></figure>

If you load the desktop version of UT Tyler and open the nav, you'll notice there are images behind eight of the navigation items. The issue is that those images are also loaded on mobile, but do not display. This results in unnecessary downloads and bandwidth waste. It would also be worth the time to perform a javascript audit as the two largest files on mobile are javascript files. If all of that javascript **is** necessary, it might help to defer the code that isn't required for first paint and load it later.

This site is the only instance in the list where the desktop download size is much larger than mobile. This is due to the hero video at the top of the site. If I were basing the rankings on desktop stats, it's highly unlikely UTT would make the list.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_DE_a90f1094712f32e52b986b38859f41d3/)

- Render Start: 2.9s
- Visually Complete: 8.9s
- Load Time: 9.8s
- Speed Index: 3,914
- Download Size: 995 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-uttyler.png" class="inline-block" loading="lazy" alt="Lighthouse score 76 95 79 94 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_5X_94dedcb41acdd323128d01870f0198d1/)

- Render Start: 800ms
- Visually Complete: 9.2s
- Load Time: 5.2s
- Speed Index: 3,733
- Download size: 4.5 MB

### #5 - [Heriot Watt University](https://hw.ac.uk/)

<figure class="alignright w-third"><img src="/images/2019/mobile-hw.jpg" loading="lazy" alt="Heriot Watt's homepage as viewed on an iPhone 8"></figure>

Not much to say about this site. It sizes images correctly and lazy loads them. The initial load is quite lean. It's loading critical CSS in head. It's even using "font-display:swap" for custom fonts.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_1H_f52ec1d7660bb2092fe02e6eedaad081/)

- Render Start: 3.7s
- Visually Complete: 5.6s
- Load Time: 10s
- Speed Index: 3,723
- Download Size: 333 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-hw.png" class="inline-block" loading="lazy" alt="Lighthouse score 99 100 93 98 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_Y0_98f731e1f7f6418f6d26e26d3fa0f0bb/)

- Render Start: 1.7s
- Visually Complete: 2.1s
- Load Time: 2.4s
- Speed Index: 1,733
- Download size: 155 KB

### #4 - [Massachusetts Institute of Technology](https://web.mit.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-mit.jpg" loading="lazy" alt="MIT's homepage as viewed on an iPhone 8"></figure>

Easily the biggest issue on this site is image sizing and compression. While there are few images, the ones that exist are much larger than necessary.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_NZ_023f3f30886f00036bfc81d2b413ef2e/)

- Render Start: 3.0s
- Visually Complete: 5.4s
- Load Time: 7.8s
- Speed Index: 4,189
- Download Size: 674 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-mit.png" class="inline-block" loading="lazy" alt="Lighthouse score 75 100 79 92 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_FX_ffa3b452ffff7007d058980583cede4f/)

- Render Start: 500ms
- Visually Complete: 1.2s
- Load Time: 1.8s
- Speed Index: 612
- Download size: 765 KB

### #3 - [West Virginia University](https://www.wvu.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-wvu.jpg" loading="lazy" alt="West Virginia's homepage as viewed on an iPhone 8"></figure>

Much like the sites above, WVU could see the most improvements through correctly sized, compressed, and lazy-loaded images. For instance, the full-width image below the Apply section (on mobile) measures 1920px wide and 314 KB. The same image sized appropriately and compressed would come in at 90 KB.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_YF_b95cc449fd40b30b114620c78eff551e/)

- Render Start: 3.3s
- Visually Complete: 5.7s
- Load Time: 8.1s
- Speed Index: 3,664
- Download Size: 747 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-wvu.png" class="inline-block" loading="lazy" alt="Lighthouse score 97 100 93 96 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_FJ_753eb8f2151ec1165cbf16876357be21/)

- Render Start: 800ms
- Visually Complete: 2.0s
- Load Time: 2.4s
- Speed Index: 1,270
- Download size: 718 KB

### #2 - [Grand Valley State University](https://www.gvsu.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-gvsu.jpg" loading="lazy" alt="Grand Valley's homepage as viewed on an iPhone 8"></figure>

I've met the Grand Valley team on multiple occasions, and I'm familiar with their long-time focus on performance. Since I don't have any obvious suggestions for improvement, I asked if they'd provide a statement on why performance is important. [Brent Swisher](http://brentswisher.com/), a Senior Web Developer for the [GVSU web team](https://www.gvsu.edu/webteam/) had this to say:

> At the most basic level, we focus on performance because we want to make websites that we would enjoy using. We always try to keep our students in mind and use hard data to justify our work. With around 40% of our traffic coming from mobile sources, we have a lot of users accessing our site with potentially slow connections. If we didn't focus on performance, we would be leaving almost half our users with a sub-par experience. Performance also continues to grow as a factor for SEO, so we try to stay ahead of the curve there.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_9J_94de8cdeca1177205b848258f3858b71/)

- Render Start: 2.8s
- Visually Complete: 4.9s
- Load Time: 8.6s
- Speed Index: 3,849
- Download Size: 295 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-gvsu.png" class="inline-block" loading="lazy" alt="Lighthouse score 100 98 86 92 PWA False"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_77_6345d9d264dcd8dc5ba10cb0825b72b7/)

- Render Start: 700ms
- Visually Complete: 1s
- Load Time: 1.3s
- Speed Index: 775
- Download size: 229 KB

### #1 - [University of Notre Dame](https://www.nd.edu/)

<figure class="alignright w-third"><img src="/images/2019/mobile-nd.jpg" loading="lazy" alt="Notre Dame homepage as viewed on an iPhone 8"></figure>

Web performance has been important to the [Notre Dame webteam](https://marcomm.nd.edu/web/) for a long time. And while it doesn't dictate design or strategy, it's part of the conversation.

Spending time focusing on performance isn't only about creating a fast website, it's about creating an optimal experience for everyone regardless of device or connection speed.

#### [Mobile Stats](https://www.webpagetest.org/result/191124_AJ_a003bdb80534c59657754d2a71921fa9/)

- Render Start: 2.8s
- Visually Complete: 3.9s
- Load Time: 4.0s
- Speed Index: 2,841
- Download Size: 186 KB

#### Google Lighthouse

<figure><img src="/images/2019/lighthouse-nd.png" class="inline-block" loading="lazy" alt="Lighthouse score 100 100 100 100 PWA True"></figure>

#### [Desktop Stats](https://www.webpagetest.org/result/191124_PE_71e0344a80079e5da820947fcbd0a203/)

- Render Start: 900ms
- Visually Complete: 1.1s
- Load Time: 1.1s
- Speed Index: 954
- Download size: 417 KB

## Test Your Site

I would advise anyone who has a hand in managing a college or university home page to test your site using Google Lighthouse and [WebPageTest](https://www.webpagetest.org/). If you want to use the same settings I used for this list, see "[The Methodology](#the-methodology)" section above. If you want to know approximately where your site ranks in the overall list, [contact me](/contact/) from your institution email address.

{:.callout}
If you need help improving the performance of your site, or would like actionable data, [I can help](/perf/).
