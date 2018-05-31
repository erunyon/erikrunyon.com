---
layout: post
title: "Mind Your Cloudfront Headers"
date: 2018-05-31
categories: AWS
---
The following is a lesson learned about CDN's and proper use of Headers. I'm going to preface this post with a disclaimer&hellip; I am neither CDN nor an AWS expert.<!-- more -->

At work we use a S3 bucket with a Cloudfront distribution to serve our commonly used static assets such as various versions of the university mark and monogram, audio files, webclips, etc. Not knowing much about how CDN's cache files, I set it up with a total of eight whitelisted headers including Referer, and a number of the "CloudFront-Is" headers. At the time, our hit rate was ranging between 42-52%, which is not great. After some research, and a chat with our AWS rep, I reduced that down to two headers: Accept and Origin. The result is the hit rate jumped to average around 82%.

<figure>
  <img src="/images/2018/cloudfront-cache.png" alt="AWS Cloudfront graph showing a rise from 52% average hit rate to 82%">
  <figcaption>The change was made around April 17</figcaption>
</figure>

What I didn't take into account when I set up Cloudfront is that most of those headers I whitelisted make no difference when serving static content. Another lesson learned is that Cloudfront takes into account all the whitelisted headers when serving up files. So even if one request has only a single header difference from a second request (could be mobile vs. desktop device), they're considered unique enough to warrant a cache miss. So by reducing the number of headers, more requests end up being served from cache.
