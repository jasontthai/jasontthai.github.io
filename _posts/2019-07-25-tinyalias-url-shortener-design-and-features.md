---
title: TinyAlias URL Shortener Design and Its Features
featured_img: /assets/img/tinyalias.png
tags: tech
toc: true
---
<style>

.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prevImg, .nextImg {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.nextImg {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prevImg:hover, .nextImg:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.textImg {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertextImg {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prevImg, .nextImg,.textImg {font-size: 11px}
}
</style>

I wrote about some of my thoughts about my URL shortener service TinayAlias and others here in this post [Things I've Learned Hosting a URL Shortener Service]({% post_url 2019-06-05-thoughts-on-url-shortener-service %}).

Even though TinyAlias is no longer operational, I feel the service did provide some interesting features compared to others. That's why I want to dedicate this post to mention its design and highlight a few interesting things I did for my service in terms of both backend and front end implementations. 

## Screenshots
<!-- Slideshow container -->
<div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
<div class="numbertextImg">1 / 5</div>
<img src="/assets/img/tinyalias-authentication.png" style="width:100%">
</div>

<div class="mySlides fade">
<div class="numbertextImg">2 / 5</div>
<img src="/assets/img/tinyalias-password.png" style="width:100%">
</div>

<div class="mySlides fade">
<div class="numbertextImg">3 / 5</div>
<img src="/assets/img/tinyalias-analytics.png" style="width:100%">
</div>

<div class="mySlides fade">
<div class="numbertextImg">4 / 5</div>
<img src="/assets/img/tinyalias-mindful.png" style="width:100%">
</div>

<div class="mySlides fade">
<div class="numbertextImg">5 / 5</div>
<img src="/assets/img/tinyalias-news.png" style="width:100%">
</div>

<!-- Next and previous buttons -->
<a class="prevImg" onclick="plusSlides(-1)">&#10094;</a>
<a class="nextImg" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span> 
<span class="dot" onclick="currentSlide(2)"></span> 
<span class="dot" onclick="currentSlide(3)"></span> 
<span class="dot" onclick="currentSlide(4)"></span> 
<span class="dot" onclick="currentSlide(5)"></span> 
</div>

## Design

![Design](/assets/img/tinyalias-diagram.png)

### Workflow

* The Main app handles the main logic of creating shortened URL and its metadata, user authentication, and other blocking operations.
* The Worker service receives a job from the job queue and executes tasks such as parsing request's geolocation, detecting spam, expiring URL, and other non-blocking operations.
* The Scheduler service runs as a cron to delegate jobs to the worker service.

### Repo
[https://github.com/zirius/tinyalias](https://github.com/zirius/tinyalias)

## Features

Some function and feature highlights

### User authentication

I added a user authentication flow that let you sign up, sign in, reset your password. Building this from scratch is quite fun. Sessions are Cookie-based and passwords are encrypted by `bcrypt` and stored in DB. 

### Password protected links and link expiration
Link passwords are encrypted securely and stored in DB. Scheduler service periodically sends expiration job to worker service to detect if any links have expired and marked them as invalid.

### Spam detection flow
This is one of the more interesting backend features I added. Whenever a URL is shortened, the main app will dispatch a spam detection job to the worker service. Worker service then calls Google [safebrowsing](https://safebrowsing.google.com/) API to detect if a URL is safe and update that URL status. The scheduler also periodically dispatch spam detection jobs to recheck existing URLs.

### Analytics
Whenever a link is clicked, the service will parse the location based on the user's IP address. This is then aggregated to show where the links are accessed geographically.

### Mindful mode
This is a fun feature that I added that makes the user wait for a few seconds before redirecting them to the original URL. The page also displays some quotes of the day provided by [https://favqs.com](https://favqs.com)

### News 
I also added a page to allow users to view trending news and get the shortened URL within the app. News is provided by [News API](https://newsapi.org/).

<script type="text/javascript">
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
## Conclusion
Designing and implementing TinyAlias from scratch is a fun side project for me. 



