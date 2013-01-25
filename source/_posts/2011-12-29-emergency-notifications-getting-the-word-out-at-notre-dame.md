---
title: 'Emergency Notifications: Getting the word out at Notre Dame'
author: Erik Runyon
layout: post
permalink: /2011/12/emergency-notifications-getting-the-word-out-at-notre-dame/
categories:
  - AgencyND
  - Mobile
  - Notre Dame
  - Web Development
---
Back in November, [Chas Grundy][1] [wrote about our emergency procedure for ND.edu][2]. When we implemented this feature for ND.edu, we based the functionality on a single-source file. This gave the ability to update the message on both ND.edu and [emergency.nd.edu][3] quickly and easily. The added bonus to this approach is that we could then use that same file to build a script that could be used on any Notre Dame site to display the emergency message. But I’m getting ahead of myself.<!--more-->

## The results

### nd.edu

As part of the ND.edu redesign, we created two different designs for the emergency bar. The first is the standard “notification” that we want people to notice, but not convey a feeling of true emergency. This corresponds to the “Level One: Local and Internal” from [Chas’ article][4].

![ND.edu in Notification mode][5]

When we really want to grab the audiences’ attention, we do two things. First, we increase the height of the emergency bar and change the color to red. Second, the feature story is replaced by the emergency notification. This is “Level Two: Local but Critical”.

![ND.edu in Emergency mode][6]

### m.nd.edu

Our mobile site monitors the same file, and in case of emergency the “Emergency” icon is tagged with a notification symbol. Viewing the section then displays the current message. Simple, but effective. We saw visits to this section jump exponentially during our snow closing back in February 2011.

<img class="noborder" title="Side-by-side display of the m.nd.edu homescreen notification icon and the notification message in the Emergency section." src="/images/notice-mobile-combo.jpg" alt="m.nd.edu emergency active" />

### Emergency Script

To further get the message out, we put together a javascript snippet that can exist on any university site. Each page load checks a central script, and in the case of an emergency, adds a bar to the top of the site and displays the emergency title along with a link to [emergency.nd.edu][3]. Below is an example of the Notre Dame News site in both previously mentioned states.

Level One:

![newsinfo.nd.edu in Notification mode][7]

Level Two:

![newsinfo.nd.edu in Emergency mode][8]

## The Payoff

The huge advantage to this approach is that we can display emergency information on dozens (soon to be hundreds) of Notre Dame sites by changing a single file. The script to display the message is available to all Notre Dame developers to include in their sites, and is a simple cut-and-paste install.

 [1]: http://twitter.com/chasgrundy
 [2]: http://grundyhome.com/2010/11/18/emergencies-and-web-design/
 [3]: http://emergency.nd.edu
 [4]: http://grundyhome.com/blog/archives/2010/11/18/emergencies-and-web-design/
 [5]: /images/notice-nd.jpg "ND.edu in Notification mode"
 [6]: /images/alert-nd.jpg "ND.edu in Emergency mode"
 [7]: /images/notice-newsinfo.jpg "newsinfo.nd.edu in Notification mode"
 [8]: /images/alert-newsinfo.jpg "newsinfo.nd.edu in Emergency mode"