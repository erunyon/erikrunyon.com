---
title: What I Learned Today About ActionView
author: Erik Runyon
excerpt: "I ran across a couple of ActionView tidbits that were new to me, so I thought I'd share."
layout: post
permalink: /2009/01/what-i-learned-today-about-actionview/
categories:
  - Rails
  - Ruby
  - Web Development
---
I ran across a couple of ActionView tidbits that were new to me, so I thought I’d share.

You can comment out ERb delimiters in your view by adding a pound sign before the equal sign.

<pre><code class="erb">
&lt;%#= str %&gt;
</code></pre>
<!-- more -->
When rendering a collection, you have access to a zero-based “partial_*counter*” variable that increments on each iteration.

<pre><code class="erb">
&lt;%= div_for(entry) do %&gt;
	&lt;%= entry_counter %&gt;
&lt;% end  %&gt;
</code></pre>

Todays lesson brought you by chapter 10 of “The Rails Way” by Obie Fernandez.