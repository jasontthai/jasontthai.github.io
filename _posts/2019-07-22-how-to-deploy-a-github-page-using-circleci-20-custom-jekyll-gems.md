---
title: How to Deploy to Github Page Using CircleCI 2.0 + Custom Jekyll Dependencies
featured_img: >-
  https://repository-images.githubusercontent.com/65252/f2b7c780-70b6-11e9-85d2-f4bda8708a2d
tags: blog
published: true
---

![jekyll](https://repository-images.githubusercontent.com/65252/f2b7c780-70b6-11e9-85d2-f4bda8708a2d)

Since I have been playing with [Github Pages](https://pages.github.com/) to host my own website, I notice although there is a lot of automation out of the box to host the static website, Github only supports a few jekyll dependencies which can view [here](https://pages.github.com/versions/). This makes it restricting when you want to use a custom Jekyll gem or your own plugin. After doing a bit of research, I have figured out a way to also enable automatic deployment of your own site while also has the ability to use your own dependencies not supported yet by Github Page. One of the ways is to use CircleCI for automatic build and deployment of your static site to your Github Page repo.

Note: this tutorial assumes that you already know how to host your static site on Github Page. Otherwise, you can check out some  [guides](https://help.github.com/en/categories/github-pages-basics) available on Github.

## CircleCI
CircleCI is a very  powerful continuous integration tool, which allows rapid builds and deployment of your projects.  Open source projects are supported and get free builds so as long as your static website is located on a public repository on Github, you won't have to pay anything to use it. CircleCI also supports one job build for private project so you can also use it for your personal private project.

## Deploy to Github Page with CircleCI
The first step is to grant CircleCI access to your repo. This is done by adding a deploy key to allow read and write access so that CircleCI can read and push your changes. You can find out how to do it [here](https://circleci.com/docs/2.0/gh-bb-integration/#enable-your-project-to-check-out-additional-private-repositories)

Next step is to configure the build and deployment step so CircleCI knows what to do
### Create  `.circleci/config.yml` with the following content:

{% raw %}
```yaml
version: 2
jobs:
  deploy:
    docker:
      - image: circleci/ruby:2.4.3-node-browsers
        environment:
          USER_NAME: XXX <- replace with your github username
          USER_EMAIL: XXX <- replace with your email
    steps:
      - checkout
      - run:
          name: install dependencies
          command: |
            gem update --system
            gem install bundler
      - restore_cache:
          keys:
            - v1-gem-cache-{{ arch }}-{{ .Branch }}-{{ checksum "Gemfile.lock" }}
            - v1-gem-cache-{{ arch }}-{{ .Branch }}-
            - v1-gem-cache-{{ arch }}-
      - run: bundle install --path .bundle && bundle clean
      - save_cache:
          paths:
            - ~/.bundle
          key: v1-gem-cache-{{ arch }}-{{ .Branch }}-{{ checksum "Gemfile.lock" }}

      - run: JEKYLL_ENV=production bundle exec jekyll build
      - deploy:
          name: Deploy Release to GitHub
          command: |
            if [ $CIRCLE_BRANCH == 'source' ]; then
              bash .circleci/deploy.sh
            fi
workflows:
  version: 2
  build:
    jobs:
      - deploy:
          filters:
            branches:
              only: source
```
{% endraw %}

The `config.yml` file declares the steps for CircleCI to execute, you can see that we are telling CircleCI to checkout the repo, update bundler, restore gems cache, run `bundle install` , save gems cache, build the static site by executing `JEKYLL_ENV=production bundle exec jekyll build` and finally if the code is pushed to **source** branch, the script `deploy.sh` is executed.

### Create `.circleci/deploy.sh` with the following content:
```bash
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout master
git pull origin master

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' ! -name '.circleci' -exec rm -rf {} \;
mv _site/* .
rm -R _site/

git add -fA
git commit --allow-empty -m "$(git log source -1 --pretty=%B)"
git push -f origin master

echo "deployed successfully"
```

Here we are telling CircleCI to checkout the **master** branch of the repo. For personal website, Github Page uses master branch to render the site. By default, Github Page will build the site and use the contents under `_site` directory to render the site. However, since we are using CircleCi to build the site, we just have to copy all the contents under `_site` that have already been built and put them in the root directory, that way Github Page can render the contents.

After you have created these files, commit and push the changes to **source** branch. You will see a new build will start in CircleCI, which will execute all the steps mentioned above and put the new changes of your site on **master** branch. Once it's done, your changes will be available for viewing.

### Added benefit: Custom Jekyll Dependencies + Plugins
As I mentioned, if we let Github Page handle the build of our site, only a limited number of dependencies and plugins are supported. However, now we have switched to CircleCI and build the site ourselves, this comes with an additional benefit which is all the Jekyll dependencies and plugins are now supported. Some of you may be aware that [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) is not yet supported by Github Page, but now you can take advantage of the new additional features of this dependency.

## Other thoughts
I also thought about separating the source code of the site in a separate repo so CircleCI can read from this source repo and build and make changes to the actual Github Page repo. This provides the benefits of decoupling the source and the generated sites. For now, I leave this as an exercise so you can find out more about the functionalities of CircleCI.
