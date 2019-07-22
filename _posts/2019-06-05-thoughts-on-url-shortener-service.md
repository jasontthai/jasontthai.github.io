---
layout: post
title: Things I've Learned Hosting a URL Shortener Service
tags: blog
featured_img: /assets/img/tinyalias.png
---

![tinyalias](/assets/img/tinyalias.png)

TinyAlias is no longer in service but I am still hosting it on Heroku so you can try out its functionality. Access the heroku app here: [https://tinyalias.herokuapp.com](https://tinyalias.herokuapp.com) (It may take sometimes to wake up since this service is now hosted for free)

After hosting my own custom url shortener service [TinyAlias](https://tinyalias.com) for about 6 months, I learned a few things:

There are many available services on the internet. Some provide more functionalities than the others.
<br>
Most people use the service for spam and phishing purposes - Same link is shortened multiple times.
<br>
Determining if links are safe is hard - Most services are not able to provide such information.
<br>
Links are mostly distributed through emails - Most links are images embedded in emails.
<br>
A lot of users are robos - They can be configured to use the service in a programmatical way. 
<br>
Links are auto rejected by various websites - They all have mechanisms to block the shortened links on their sites.
<br>

That said, a lot of companies use shortened links with their own vanity domains which feature thair brands to promote their service and that is a good use case for the service.
Also it is great to send someone a short link rather than a very long one, which is the main purpose of these services.



