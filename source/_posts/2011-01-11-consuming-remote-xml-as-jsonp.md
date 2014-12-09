---
title: Consuming Remote XML as JSONP
author: Erik Runyon
layout: post
permalink: /2011/01/consuming-remote-xml-as-jsonp/
categories:
  - Mobile
  - PHP
  - Web Development
---
## It’s All About Sharing Content

One of the basic tenets behind the internet is sharing data. Initially, that was primarily done with HTML. But with the rise of web applications, sometimes plain HTML just won’t do. That’s where API’s and feeds come in. An application [with a proper API][1] allows other applications to query it for content and get that content back in a variety of formats, be it XML, JSON, or HTML. [Feeds][2] on the other hand are a one-way distribution of data, usually in XML format.<!-- more -->

## The Problem

Notre Dame’s mobile site ([m.nd.edu][3]) is built solely on remote data. Every module draws from an external feed of either XML or javascript or in the case of the Map module, an API. This isn’t a problem since m.nd.edu is built in PHP, which has a well-established ability to fetch remote data and manipulate it. I’m in the process of converting the m.nd.edu application into a native iPhone app using [PhoneGap][4]. However, PhoneGap-based applications cannot contain PHP code. As a result I’m converting each of those modules to javascript and HTML. Unfortunately, javascript suffers from one very big drawback when it comes to consuming data -  it’s only allowed to access files that exist on the domain running the script. The only exception to this is [JSONP][5].<!--more-->

## The Solution

The majority of the external feeds utilized by m.nd.edu are XML/RSS, so this presents a problem when the app needs JSONP. The easiest solution is to make use of a proxy script which creates JSONP from a XML feed. Here’s the rough-draft:

<pre><code class="php"> &lt;?php header('content-type: application/json; charset=utf-8'); if( strlen($_GET["feed"]) &gt;= 13 ) { $xml = file_get_contents(urldecode($_GET["feed"])); if($xml) { $data = @simplexml_load_string($xml, "SimpleXMLElement", LIBXML_NOCDATA); $json = json_encode($data); echo isset($_GET["callback"]) ? "{$_GET[�callback�]}($json)" : $json; } } ?&gt; </code></pre>

So what we have here is fairly basic. First off, the script is set to respond with the content type of “application/json”. PHP gets the XML from the remote source, then converts it to a SimpleXML object. This object can then be converted to JSON using the [json_encode() function][6] which has been available since PHP 5.2.1. The script outputs plain JSON. If a callback function is specified, it will wrap the output in the callback. I wouldn’t recommend using this as-is in production as it’s lacking some error-checking, but it’s enough to get started. At this point, you can use it with jQuery like so:

<pre><code class="javascript"> $.getJSON("http://yoursite.com/xml2json.php?callback=?", {feed:"http://agency.nd.edu/agencynd-team.xml"}, function(data) { // process data here } }); </code></pre>

So there you have it. We can now consume remote XML data using javascript. If anyone more familiar with PhoneGap knows of an easier/better way of dealing with this kind of a problem, please share.

### Update 2012-02-04

Ben Alman ([@cowboy][7]) has released an open-source solution:

*   [Project page for Simple PHP Proxy][8]
*   [Github repo for Simple PHP Proxy][9]

 [1]: http://en.wikipedia.org/wiki/Api
 [2]: http://en.wikipedia.org/wiki/News_feed
 [3]: http://m.nd.edu
 [4]: http://phonegap.com
 [5]: http://en.wikipedia.org/wiki/Json#JSONP
 [6]: http://php.net/manual/en/function.json-encode.php
 [7]: http://twitter.com/cowboy
 [8]: http://benalman.com/projects/php-simple-proxy/
 [9]: https://github.com/cowboy/php-simple-proxy