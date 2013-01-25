---
title: 'Accessibility Basics: Access Keys'
author: Erik Runyon
layout: post
permalink: /2011/09/accessibility-basics-access-keys/
categories:
  - Accessibility
  - Web Development
---
As developers, there’s a number of things we should be sure to include into each site we build to help with accessibility. One of the most basic of these is access keys.<!-- more -->

## Access Keys

Access keys are a very simple accessibility tool to implement. By doing so, it allows users to navigate to specified sections of your site via keyboard shortcuts (alt + key on Windows, or control + key on Macintosh, although some browsers use [other modifiers][1]). So for instance, to add an access key to your header, to allow users to get back to your homepage, you would use the following:<!--more-->

    <h1><a href="/" accesskey="1">Title of My Site</h1>

 

This would allow a user to hit “control + 1″ (or “alt + 1″) on any page of your site to get back to the homepage.

Now one of the difficulties with access keys is letting your users know they exist. One option is to add a title attribute alongside each accesskey, which could tip-off users when they mouse over the element for future reference, like so:

    <h1><a href="/" accesskey="1" title="Homepage shortcut key = 1">Title of My Site</h1>

 

There are other ways to advertise access keys which I won’t get into here (see the [Wikipedia entry][2] for suggestions).

So which keys should you use you ask? That’s a great question. There’s nothing in the HTML spec indicating which keys/values should be used, but there are sets that have become widely adopted around the web. According to the UK Government accessibility guidelines, you should use the following:

<table>
  <caption><abbr>UK</abbr> Government Shortcuts</caption> <tr>
    <th>
      Access key
    </th>
    
    <th>
      Target
    </th>
  </tr>
  
  <tr>
    <td>
      S
    </td>
    
    <td>
      Skip navigation
    </td>
  </tr>
  
  <tr>
    <td>
      1
    </td>
    
    <td>
      Home page
    </td>
  </tr>
  
  <tr>
    <td>
      2
    </td>
    
    <td>
      What’s new
    </td>
  </tr>
  
  <tr>
    <td>
      3
    </td>
    
    <td>
      Site map
    </td>
  </tr>
  
  <tr>
    <td>
      4
    </td>
    
    <td>
      Search
    </td>
  </tr>
  
  <tr>
    <td>
      5
    </td>
    
    <td>
      <abbr>FAQ</abbr>s
    </td>
  </tr>
  
  <tr>
    <td>
      6
    </td>
    
    <td>
      Help
    </td>
  </tr>
  
  <tr>
    <td>
      7
    </td>
    
    <td>
      Complaints procedure
    </td>
  </tr>
  
  <tr>
    <td>
      8
    </td>
    
    <td>
      Terms and conditions
    </td>
  </tr>
  
  <tr>
    <td>
      9
    </td>
    
    <td>
      Feedback form
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
      Access key details
    </td>
  </tr>
</table>

I’m ok with this list, although I think it’s missing important access keys, as well as including others that I haven’t needed in, well, ever. I typically try to include access keys to the homepage (“1”), content (I use “c”), navigation (“s”) and search (“4”).

<div class="note">
  <h4>
    Resources
  </h4>
  
  <ul>
    <li>
      <a href="http://clagnut.com/blog/193/">Clagnut – Accesskey standards</a>
    </li>
    <li>
      <a href="http://en.wikipedia.org/wiki/Access_key">Wikipedia – Access Keys</a>
    </li>
    <li>
      <a href="http://www.direct.gov.uk/en/Hl1/Help/DG_020463">Directgov – Access key scheme</a>
    </li>
  </ul>
</div>

 [1]: http://www.direct.gov.uk/en/Hl1/Help/DG_020463
 [2]: http://en.wikipedia.org/wiki/Access_key