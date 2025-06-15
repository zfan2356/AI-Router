#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# pre-commit 重试函数
run_pre_commit() {
  local retry_count=0
  local max_retries=3
  local command="$1"

  while [ $retry_count -lt $max_retries ]; do
    if $command; then
      return 0
    fi
    retry_count=$((retry_count + 1))
    if [ $retry_count -eq $max_retries ]; then
      echo "pre-commit 检查失败次数超过 $max_retries 次，终止脚本"
      exit 1
    fi
    echo "pre-commit 检查失败，第 $retry_count 次重试..."
  done
}

# 运行 pre-commit 检查
run_pre_commit "pre-commit run --all-files"

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

cd ..

run_pre_commit "pre-commit run --all-files"
