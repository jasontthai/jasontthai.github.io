# Welcome to my site

I am currently a software engineer at [Nauto](https://www.nauto.com) where I am working on BE services for fleet web and mobile applications.

Some of my previous companies include:

* [CastAR](http://castar.com) where I built an ecommerce and gaming platform.
* [Yahoo](https://yahoo.com) where I built content publishing and analytics tool.

<br> <!-- line break -->
# Blog Posts
{% for post in site.posts %}
{{ post.date | date_to_string }} [{{ post.title }}]({{ post.url }})
{% endfor %}
