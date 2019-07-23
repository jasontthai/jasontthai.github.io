---
title: How to Deploy to Github Page Using Travis CI
featured_img: /assets/img/logo-travisci-wide1.jpg
tags: tech
published: true
---

![travisci](/assets/img/logo-travisci-wide1.jpg)

Follow up for my post [How to Deploy to Github Page Using CircleCI 2.0 + Custom Jekyll Dependencies]({% post_url 2019-07-22-how-to-deploy-a-github-page-using-circleci-20-custom-jekyll-gems %}). This is a guide to set up automatic build and deployment using Travis CI as opposed to CircleCI

## Travis CI
Travis CI is also very  powerful continuous integration tool, which allows rapid builds and deployment of your projects.  Open source projects are supported and get free builds so as long as your static website is located on a public repository on Github, you won't have to pay anything to use it.

## Deploy to Github Page with Travis CI
The first step is to grant Travis CI access to your repo. This is done by adding a personal access key to allow read and write access so that Travis CI can read and push your changes. You can find out how to do it [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line). In your Travis repo setting, set an environment variable `GITHUB_TOKEN` with the token value you've just created.

Next step is to configure the build and deployment step so Travis CI knows what to do
### Create  `.travis.yml` with the following content:

{% raw %}
```yaml
language: ruby
cache: bundler
branches:
  only:
  - source
script:
  - JEKYLL_ENV=production bundle exec jekyll build --destination site
deploy:
  provider: pages
  skip-cleanup: true
  local-dir: ./site
  target-branch: master
  email: deploy@travis-ci.org
  name: Deployment Bot
  github-token: $GITHUB_TOKEN
  keep-history: true
  on:
    branch: source
```
{% endraw %}

The `.travis.yml` file declares the steps for Travis CI to execute, you can see that we are telling Travis CI to build the site using the source code from branch **source** and deploy the changes on branch **master**. Configuring on Travis CI is a little simpler than CircleCI as the tool takes care of caching the dependencies under the hood. 

After you have created these files, commit and push the changes to **source** branch. You will see a new build will start in Travis CI, which will execute all the steps mentioned above and put the new changes of your site on **master** branch. You may see something similar to this on Travis CI:

![travisci-build](/assets/img/travisci-build.png)

Once it's done, your changes will be available for viewing.

For other configurations, you can also check out Travis CI's guide [here](https://docs.travis-ci.com/user/deployment/pages/)


## Conclusion
I hope this guide is also useful in helping you set up automatic build and deployment of your personal site on Github Page. Using CI tools definitely helps free you from the limitation and restriction of Github Pages.