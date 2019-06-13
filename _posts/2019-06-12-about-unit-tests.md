---
published: true
layout: post
tags: blog mapbox leafletjs
title: About Unit Tests
---
Today while trying to deploy some of my codes, I ran into an issue such that the build kept failing. Turned out that some of my unit tests were failing. The unit tests did pass before, which is why all the builds until now have been successful. How come they failed today? Upon investigating more, it turns out there is a timestamp validation in the code which has been successfully validated until now but the unit test did not cover that case. I ended up deploying a hotfix to unblock the build.

For more context, my unit test was similar to this one (conceptually):
```javascript
void sampleTest() {
  // This test will pass until 2020-01-01 12:00:00
  assertTrue(System.currentTimeMillis() < 1577836800000L);
}
```
As you can see, this test will run fine until it not. For my specific test, the validation stopped working today.
I learned a hard lesson today. As a code reviewer, it is important to not only look at codes but also the unit tests and see if they cover all the possible cases. Otherwise, we will have to spend a lot of time debugging issues like this.
