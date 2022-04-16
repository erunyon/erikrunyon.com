---
layout: post
title: Connecting to the PassKit API with Ruby
date: 2022-02-07
categories: [Web Development, Ruby]
---
We were recently testing [PassKit](https://passkit.com/) as a way of managing membership cards for giving societies. Passkit is very up-front that they are not a CRM and strongly suggest using their API for integrating with outside systems, or for editing pretty much any data. To kick the tires, we set up some very basic scripts to connect to the Passkit API.
<!-- more -->

[A REST example](https://docs.passkit.io/protocols/member/#section/Authentication) can be found on their docs. The example below shows [how to get a programs's info using Ruby](https://gist.github.com/erunyon/dd62cf77af9c70d6822e9775ce19be9f).

<script src="https://gist.github.com/erunyon/dd62cf77af9c70d6822e9775ce19be9f.js"></script>

The process consists of two steps:

1. Generate the payload and token using the [jwt](https://github.com/jwt/ruby-jwt) gem.
2. Connect to the API endpoint using [HTTParty](https://github.com/jnunemaker/httparty) passing the token value with the "Authorization" header.

That's it! From there you can modify the HTTParty path for whatever endpoint you need. Just be sure to adjust the verb and "body" in the call accordingly.

- [PassKit API docs](https://docs.passkit.io/protocols/member/#section/Introduction)
