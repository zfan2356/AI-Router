#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
cd ai-router-v2
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy v2'

git config --global init.defaultBranch main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:zfan2356/AI-Router.git main:gh-pages

cd -
