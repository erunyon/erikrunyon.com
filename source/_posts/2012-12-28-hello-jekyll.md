---
title: Hello Jekyll, Goodbye Wordpress
layout: post
permalink: /2012/12/hello-jekyll/
categories: [Web Development, Ruby]
---
My holiday vacation project this year was to migrate this blog off Wordpress into a system that better fits my brain. After quite a bit of research I decided on [Jekyll][1]. I decided to move off Wordpress because I often found myself fighting with the admin and editor just to do simple things. I was fine working in the HTML view, but I prefer the simplicity of writing in Textile or Markdown.

So why Jekyll?

1. I can write my posts in [Markdown][2].
2. It uses [Liquid][3] for its templating. I've been using Liquid for a long time, so I'm very comfortable with it.
3. Jekyll sites can be hosted for free on [GitHub Pages][4].
<!-- more -->
## Moving out of Wordpress

First thing I did was install the [Disqus][5] plugin and migrate my legacy comments into it. This allowed me to keep my comment history. Second I installed the [Wordpress to Jekyll plugin][6]. This handy little plugin provides an export option that will produce a zip file containing all posts and pages nicely coverted to Markdown. What it doesn't do is bring any associated images along with it. That has to be done manually. I moved my wp-content images into a root "images" folder and did a simple find/replace to update the paths. Depending on the complexity of your posts, you may be golden at that point. I had to fix around five or six posts which contained either bad characters or messy converted Markdown.

## Moving into Jekyll

If you're not married to your theme, you might be better off using [Jekyll Bootstrap][7]. Even if you don't use it, Jekyll Bootstrap has a lot of good info. I chose to keep my previous theme, so that added some time to my migration. Once I had everything set up and running locally, [I set up my GitHub repo][8], [pointed the A record with my domain name provider][9] and I was off to the races. The only issue I have with using GitHub Pages is that [they don't allow custom plugins][10]. There are a couple of features I had to forego because of this, but I'm willing to accept this in the short term.

## Conclusion

Even though this is only the first post created using the new system, I think it's going to work out quite well.

## Resources

* [Jekyll project on GitHub][1]
* [Wordpress to Jekyll Exporter][6]
* [Using Jekyll with GitHub Pages][8]
* [Jekyll Bootstrap][7]

 [1]: https://github.com/mojombo/jekyll
 [2]: http://daringfireball.net/projects/markdown/
 [3]: http://wiki.shopify.com/UsingLiquid
 [4]: http://pages.github.com/
 [5]: http://wordpress.org/extend/plugins/disqus-comment-system/
 [6]: https://github.com/benbalter/wordpress-to-jekyll-exporter
 [7]: http://jekyllbootstrap.com/
 [8]: https://help.github.com/articles/using-jekyll-with-pages
 [9]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages
 [10]: https://github.com/mojombo/jekyll/issues/325