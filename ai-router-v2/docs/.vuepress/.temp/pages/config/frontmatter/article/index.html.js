import comp from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/docs/.vuepress/.temp/pages/config/frontmatter/article/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/frontmatter/article/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客文章\",\"createTime\":\"2024/03/03 11:01:03\",\"permalink\":\"/config/frontmatter/article/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.07,\"words\":322},\"filePathRelative\":\"notes/theme/config/frontmatter/post.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
