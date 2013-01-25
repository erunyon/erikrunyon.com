---
title: 'RVM Ruby 1.9 and the MySQL Gem &#8212; Friends at last on x86_64'
author: Erik Runyon
layout: post
permalink: /2009/11/rvm-ruby-19-and-the-mysql-gem-friends-at-last-on-x86_64/
categories:
  - Rails
  - Ruby
  - Web Development
---
One of our production Rails apps is running on Ruby 1.9. The problem this introduces is that our dev environments must be able to run multiple versions of Ruby side-by-side. There’s nothing unique about this, it comes with the Ruby/Rails territory. After upgrading to Snow Leopard, I decided to give [Ruby Version Manager][1] a try. The install of RVM and the subsequent Ruby installs were a breeze. However, when it came time to install the MySQL gem, I ran into a brick wall. No matter what I tried, I kept getting install errors.<!-- more -->

I’m running the standard MacOSX package install from [mysql.com][2] (Mac OS X 10.5 x86_64). I tried setting my ARCHFLAGS to the correct architecture, pointing to the correct config, and nothing helped. After Google turned up nothing, I decided to bother the nice folks in the #rvm channel. There I was given a handy little tip that goes as follows:

1.  Uninstall the version of Ruby you’re trying to install the MySQL gem on
2.  place the following in your ~/.rvmrc file: 
    <pre>rvm_archflags="-arch x86_64"</pre>

3.  Reinstall Ruby using RVM
4.  Install the ruby gem: 
    <pre>export ARCHFLAGS="-arch x86_64" ; gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config</pre>
    
    (use the correct path to your MySQL config file. If you installed mysql with MacPorts, it will be in /opt somewhere).</li> </ol> 
    The problem turned out to be that RVM was not installing the x86_64 version of Ruby 1.9. And if Ruby’s architecture doesn’t match MySQL’s, then you have problems. Once they match, then it’s back to Ruby bliss.

 [1]: http://rvm.beginrescueend.com/
 [2]: http://dev.mysql.com/downloads/