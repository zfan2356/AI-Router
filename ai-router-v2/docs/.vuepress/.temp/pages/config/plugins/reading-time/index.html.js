import comp from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/docs/.vuepress/.temp/pages/config/plugins/reading-time/index.html.vue"
const data = JSON.parse("{\"path\":\"/config/plugins/reading-time/\",\"title\":\"阅读统计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"阅读统计\",\"createTime\":\"2024/03/06 15:23:39\",\"permalink\":\"/config/plugins/reading-time/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.74,\"words\":221},\"filePathRelative\":\"notes/theme/config/plugins/reading-time.md\",\"bulletin\":false}")
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
