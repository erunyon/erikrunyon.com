---
layout: post
title: "New AMP Issue Detected"
date: 2019-06-07T09:32:18-04:00
categories: [Search, Web Development]
---
I recently received an email from Google Search Console with the title "New AMP issue detected for site nd.edu". I have not optimized [www.nd.edu](https://www.nd.edu/) for AMP at all. Partly because I'm not a fan of AMP, and partly because it doesn't need it. The site was built with performance as a driving factor.

> Search Console has identified that your site is affected by 1 new AMP related issue. This means that AMP may be negatively affected in Google Search results. We encourage you to fix this issue.

So what was the issue?<!-- more -->

> The tag 'img' should be replaced with an equivalent 'amp-img' tag.

<figure>
  <img src="/images/2019/amp-issue.png" alt="New AMP Issue">
  <figcaption>The tag 'img' should be replaced with an equivalent 'amp-img' tag.</figcaption>
</figure>

Ummmm, no.

If what Google found was an actual technical or performance issue, I'd appreciate being informed. But when they're reporting that a site, that gets a Mobile Performance score of 100 on their own Lighthouse tool, should replace a standard HTML tag with a non-standard tag, well that's just not ok.