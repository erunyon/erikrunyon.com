---
layout: post
title: "Jekyll Part Two: Enter the Octopress"
date: 2013-02-19
categories: [Web Development, Ruby]
---
In a previous post I wrote about [moving from Wordpress to Jekyll](/2012/12/hello-jekyll/) where I was ultimately hosting this site in [GitHub Pages](http://pages.github.com/). While that setup was great, and an easy way to get started, I wanted to have a little more freedom to play with plugins and additional/custom functionality. To that end I migrated the system into [Octopress](http://octopress.org/) and reverted to hosting with the same server from which I was running the previous Wordpress install. I had waited to cancel the hosting service just in case I decided to do this.<!--more-->

## So what's different?

<img class="alignright noborder" alt="Octopress Logo" title="Octopress Logo" src="/images/2013/octopress.png">

Octopress comes with [quite a few handy plugins](http://octopress.org/docs/blogging/plugins/) built-in. I was particularly interested in [Archives](/archives/) and excerpts. So to move from GitHub Pages to Octopress, I set up a new repo, pulled over my theme and posts and was fairly quickly off to the races. I did take a little time to move my CSS into SASS and of course spend some time hacking around the theme. I didn't have to touch the individual posts beyond adding the 'read more' marker, some of which already existed from the Wordpress export.

## Deploying

The nice thing about GitHub Pages is that to publish, all one has to do is push to the master branch and GitHub takes care of building the site for you. But as I mentioned before, there are limitations. Due to security concerns, they don't allow custom plugins. As I really didn't feel like installing Jekyll on my server, I changed my workflow slightly. With the help of a bash alias, a simple `blogpush` takes care of building the site locally (`rake generate`) and then kicks off a "rsync" of all files (`rake deploy`) to the server. The whole process only takes about 10-20 seconds (size of site will effect time to publish).

## Resources

If you want to play with Jekyll, below are some links to the project, how to use GitHub pages as well as other projects to get you on your way. Enjoy and happy hacking.

- [Jekyll GitHub repo](https://github.com/mojombo/jekyll)
- [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages)
- [Jekyll-Bootstrap](http://jekyllbootstrap.com/)
- [Octopress](http://octopress.org/)