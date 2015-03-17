---
layout: post
title: "Dynamically Populating Wufoo Form Fields Using Javascript"
date: 2015-03-16
categories: [Web Development, Javascript]
published: true
---
Wufoo is a great form service. Not only is the build interface quick and easy to understand, it works well for statically hosted sites such as this. However, unlike the traditional embedded forms we all know, it's not readibly obvious how to dynamically modify field data such as a username, or some info about the visitors environment. Luckily they provide a couple of different ways to do this.<!-- more-->

I've had two different use-cases where I've needed to populate hidden fields in a Wufoo form.

## Use-case One: Browser Information

In this instance, I needed information about the users browser on a diagnostic form. Step one is to find the name of the field using your favorite browser tools. Each field has a name such as "Field1". Armed with that information we can use the "defaultValues" option in the form embed code to supply values, even if the fields are hidden. So in my case, since some of the fields I was populating were the dimensions and userAgent, I used code similar to the following (not showing complete snippet):

<script src="https://gist.github.com/erunyon/b1cb181521a117998ac9.js"></script>

To mark a field as hidden, add the class "hide" to the "Add CSS Layout Keywords" field on the fields options on Wufoo.

## Use-case Two: Referral Information

This time I needed url param values from users arriving on the page from an email campaign. Since we already had the users information in the email, and were able to append it to the forms url, we can pull that information as a supplement to what they're filling in manually. To do this we would be using the same setup as our previous example, but with the addition of a bit of javascript to pull the query params.

<script src="https://gist.github.com/erunyon/c2f2680dbb9bf19b4e06.js"></script>

The above code makes use of the following javascript function [found on StackOverflow](http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript):

<script src="https://gist.github.com/erunyon/df2dead68c40a22a63dd.js"></script>

And that's all there is to it. Obviously you could do the same using server-side scripting if your stack allows, but for those cases when javascript is the only option, it's good to know it's possible.