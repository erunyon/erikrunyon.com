---
title: 'A Tale of Woe: starring Rails 2.2, Mac OS X and a MySQL Upgrade'
author: Erik Runyon
layout: post
permalink: /2009/01/a-tale-of-woe-starring-rails-22-mac-os-x-and-a-mysql-upgrade/
categories:
  - Rails
  - Web Development
---
If you've used Rails 2.1 at all, you will no doubt be aware due to the incessant notifications, that Rails 2.2 will be dropping its MySQL driver. Therefore, in order to use Rails 2.2, you will need to install an updated version of MySQL. I found [one good resource][1] that got me most of the way there, however, after the upgrade, most of my tests, in all of my apps were failing.<!-- more -->

While trying to figure out what was going on, a couple of things became apparent. If I moved tests around or deleted specific tests (mainly update and destroy tests), it caused previously failing tests to pass. Also, setting "self.use\_transactional\_fixtures" to false in "test_helper.rb" caused most tests to pass. As I was checking on that further in one of my apps (one that I didn't delete all the comments from), I noticed this:

> "Every Active Record database supports transactions except MyISAM tables in MySQL.† Turn off transactional fixtures in this case; however, if you don't care one way or the other, switching from MyISAM to InnoDB tables is recommended."

Cue the lightbulb.

Jumping into mysql and running "show engines;" confirmed the bulb. InnoDB was disabled. So now we ned to remedy this little problem.

If you already have a 'my.cnf' file, you're ahead of the class, so please hold on while the rest of us catch up.

The MySQL package installer drops mysql in:

<pre>/usr/local/mysql</pre>

If you look in the support-files directory, they have several my.cnf sample files. So now we need to get one of these into play.

Copy

<pre>/usr/local/mysql/support-files/my-medium.cnf</pre>

to

<pre>/etc/my.cnf</pre>

At this time I'd like to welcome back those of you who already had a my.cnf file.

Now open your my.cnf file and uncomment the lines that start with "innodb_" (starting at line 123 in my config file). Save the file and restart MySQL. If you go back into mysql and rerun "show engines;", you should now see InnoDB support has been enabled.

Now when you run your tests, all should be well in the world again.

 [1]: http://craiccomputing.blogspot.com/2008/11/installing-rails-22-on-mac-os-x-mysql.html