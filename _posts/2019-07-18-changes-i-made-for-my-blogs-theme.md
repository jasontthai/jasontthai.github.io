---
title: Changes I Made for My Blog's Theme
tags: blog
featured_img: https://repository-images.githubusercontent.com/65252/f2b7c780-70b6-11e9-85d2-f4bda8708a2d
---

The stock theme that I am currently using is from [https://github.com/jekyll/minima](https://github.com/jekyll/minima). I like it for its cleanliness and simplicty as the name implies.

But as you know I enjoy customizing things my way so I did make a few changes to make this blog a bit more to my liking (for now. After all I have switched themes a few times). Here are a couple of new additions that I added.

### Added subscribe feature through email or RSS
I am currently trying out [feedburner](https://feedburner.google.com) to handle subscription for the blog.

### Use excerpt and introduce hover effects on the post.
If you visit my homepage, you will notice each post contains an excerpt and if you hover over the post, you'll see a fading effect. The suggestion was made my the maintainer of Jekyll's theme and I ended up implementing it.

You can see my PR here: [https://github.com/jekyll/minima/pull/382](https://github.com/jekyll/minima/pull/382)

### Added next and previous post link
IF you view a post, at the end of the post there is are hyperlinks to the next and previous posts to save you some clicks.

### Added pagination and style each post as a card view.
Kudos to [prashanthmadi.github.io](prashanthmadi.github.io) for adding pagination and the card view that looks really nice.

You can see the changes to add pagination [here](https://github.com/prashanthmadi/prashanthmadi.github.io/commit/d09b4351f0a8e34318847f14f854b5be2f06b4d6) and the card view [here](https://github.com/prashanthmadi/prashanthmadi.github.io/commit/78bc5e44c80f7bb1cbe129691701d79d3e8bdbb5#diff-891082c144b1c9ddb0047d67a7b4181f).

Below is the snippet of my homepage changes:

{% gist 7cc4269a6ea78743616b64a9d8c4dcef %}

{% gist 2547bf7ccc911229f6dee3d3c9c27f52 %}

### Added all posts page grouped by year-month
This is a nice way to view all the available posts on the same page. Here is the code to render this page:
{% gist 23b552da7884e8a06805ac4f15576c1a %}
