---
title: A Note on ActiveRecord Serialization and Objects
author: Erik Runyon
layout: post
permalink: /2009/04/a-note-on-activerecord-serialization-and-objects/
categories:
  - Rails
  - Ruby
  - Web Development
---
Let’s say you’re serializing a ruby object for later use in a field of another model.

    class Foo < ActiveRecord::Base
      serialize :bar
    end
<!-- more -->
In this instance, assume an object of type “Bar” is what’s being serialized. After save, the data appears fine, but when you retrieve the data, instead of your Object you end up with yaml that looks like this:

<pre>[#&lt;YAML::Object:0x3fcade8 @ivars={"attributes_cache"=&gt;{}, "attributes"=&gt;{"updated_at"=&gt;"2008-11-04 19:33:05", "id"=&gt;"1", "message"=&gt;"Hello World!", "created_at"=&gt;"2008-11-04 19:33:05"}}, @class="Bar"&gt;</pre>

This most likely means that the model of the object being serialized is not loaded yet. This can be resolved by simply doing:

    class Foo < ActiveRecord::Base
      Bar
    
      serialize :bar
    end

This will load the model before serialization occurs and you’ll be all set.