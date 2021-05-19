---
layout: post
title: RSS and XSL Content-Type Requirement
date: 2021-05-19
categories: [Web Development, RSS]
---
We've provided Atom/RSS feeds for News and Events in our custom CMS at Notre Dame for well over a decade. However, if a visitor ended up on the url they were greeted with an unhelpful screen of XML. I decided to remedy this by appying some XSLT and styles to improve the user experience. However, even after reviewing several tutorials, I couldn't get it to work.
<!-- more -->

I was sure I had the templates and markup configured correctly. I even tested outside of the system using very basic test files. I finally started to question whether the Application-Type was correct. One tutorial mentioned making sure you served the correct type, but didn't go into detail as to what the type should be. Since the very beginning, we would serve our Atom/RSS feeds with **application/atom+xml; charset=utf-8** and **application/rss+xml; charset=utf-8** respectively. What I discovered is that the Application-Type instead should be **text/xml; charset=utf-8**. Once that was set in my test files everything started to work. Going back the Rails application and setting Application-Type in the "response.headers" and bingo, glorious formatting and styles.

I don't expect many users to end up seeing the results of this change. But for those that do, they'll have an explanation about what a feed is as well as links to more resources. So much better than a screen of XML.