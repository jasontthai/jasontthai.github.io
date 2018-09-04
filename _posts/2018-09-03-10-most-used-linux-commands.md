---
layout: post
title: My 10 Most Used Linux Commands
tags: blog
---

The script to run to display the most used commands (copied from [linux.byexamples.com](https://linux.byexamples.com/archives/332/what-is-your-10-common-linux-commands/)):
```
history | awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | grep -v "./" | column -c3 -s " " -t | sort -nr | nl |  head -n10
```

Here is the output from my computer:
```
     1	1229  12.2912%   gst    (git status)
     2	1046  10.461%    gd     (git diff)
     3	691   6.91069%   git
     4	655   6.55066%   make
     5	640   6.40064%   gl     (git pull)
     6	429   4.29043%   gco    (git checkout)
     7	404   4.0404%    gcam   (git commit -am)
     8	284   2.84028%   ls 
     9	244   2.44024%   st     (subl)
    10	203   2.0302%    http
```