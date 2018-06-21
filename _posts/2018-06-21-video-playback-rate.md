---
layout: post
title: "Video Playback Rate"
date: 2018-06-21
categories: Web Development
---
As a web developer who likes to keep up with all the latest and greatest in our profession, I find it difficult consume all of the media I've saved for later viewing or listening. I listen to all podcasts at 2x with little trouble. But what about videos?<!-- more -->

<figure class="alignright">
  <img src="/images/2018/youtube-playback-rate.png" alt="YouTube playback speed options ranging from 0.25 to 2">
  <figcaption>YouTube playback speed options</figcaption>
</figure>

Many conferences such as [Smashing Magazine](https://vimeo.com/smashingmagazine/videos) have started posting their videos online, typically on YouTube or Vimeo. YouTube has controls that allow adjustment of playback speed at quarter intervals, unfortunately, Vimeo does not. However, with a little console action, we can make any HTML5 video play at whatever speed we want.

<p><code class="javascript">document.querySelector('video').playbackRate = <em>1.5</em></code></p>

Adjust the numeric value at the end (1 == default, 2 == 2x) to whatever speed you find comprehensible. You can even use this to fine-tune YouTube's playback rate in case their provided values aren't exactly what you need.
