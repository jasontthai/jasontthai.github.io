---
layout: page
title: Posts
sidebar_link: true
---

{% for post in site.posts %}
{{ post.date | date_to_string }} [{{ post.title }}]({{ post.url }})
{% endfor %}
