---
layout: post
title: "Ditching Feedburner"
date: 2013-04-20
categories: [Web Development]
---
Let's be honest. Google has made their feelings perfectly clear when it comes to feeds. Feedburner has been languishing for years. They were working on a half-baked new interface only for it to disappear. They [deprecated its API](http://googlecode.blogspot.com/2011/05/spring-cleaning-for-some-of-our-apis.html). It's obvious the service is no longer actively supported, and with the recent sun-setting of Google Reader, I have no faith it will stick around much longer. So rather than wait for that to happen, I decided to move on now.<!--more-->

So first of all, if you're a subscriber to this site (reading on an app, instead of the site itself), consider updating the feed address to use [the canonical feed](http://weedygarden.net/atom.xml).

Since I'm only using Feedburner for stats purposes and not for email subscriptions or newsletters, moving is a little easier for me. The service I decided to use is [URI.LV](http://uri.lv/). What I like about URI.LV is that it does not take over your feed. Subscribers will use your feeds url, then through some configuration, traffic is routed through URI.LV for stats purposes. The advantage of this is if down the road I decide to switch to something else, my subscribers will already be using my feed and not someone else's. There's even a [WordPress extension](http://wordpress.org/extend/plugins/urilv-feed/) if you need it. Lastly, if you're moving from Feedburner like I am, then there's a tutorial on how to [permanently route your traffic](http://uri.lv/feeds/migrate).

I haven't had a chance to look into it yet, but [URI.LV also has an API](http://uri.lv/api). I'll be digging into it shortly to see how I can hook it into Panic's [Status Board app](http://www.panic.com/statusboard/).

<img class="alignright noborder" alt="URI.LV Traffic Chart" title="URI.LV Traffic Chart" src="/images/2013/uri-lv.png">

So what do you get with the app? Well that depends. Almost all of the features are free. This includes daily statistics and RSS reader data. As you can [see from the graph](/images/2013/uri-lv.png), I've only been using the service since April 4, so there's not a lot of data. But hovering over a day displays a breakdown of feed traffic including Direct, Newsletter, RSS Readers and Other. I mentioned at the top of the article that I don't currently offer email subscriptions or a newsletter, so it wasn't a concern. URI.LV does offer a newlsetter feature, but I haven't tried it out, so I can't say how well it works.

If you decide to become a paid subscriber ([see the Features page for a handy table](http://uri.lv/features)) you get all the free features with the addition of Weekly Analytics, Display tracking, Clicks tracking, Emails and Webhooks, and a Full JSON API (vs a JSON file on free accounts). I'm still on the free tier, but depending on what I decide to do with the API, I'll probably buy the subscription soon. At $24/year, its really a no-brainer. Besides, paying for a valuable service is a good way to ensure it sticks around.

So as I mentioned, I'm still pretty new to the service, but it looks very promising. What I think will be really interesting is to see what happens to RSS reader traffic when Google Reader dies this summer. Right now "Feedfetcher-Google" is the easily number one in my list of RSS readers. Let's hope people find a good alternative. For the record, I've switched to [Feedly](feedly.com).

## Update 2013-04-21

<img class="alignright noborder" alt="URI.LV Traffic Chart in Status Board" title="URI.LV Traffic Chart in Status Board" src="/images/2013/uri-lv-status-board.png">

I mentioned above that I wanted to try URI.LV with Status Board. Well it turns out the free version of URI.LV offers a daily updated json file that's compatible with Status Board (as [mentioned on the Features page](http://uri.lv/features)). Kudos to the developers baking it right in.