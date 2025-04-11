import './articleTagColors.css'
export const articleTagColors = {"markdown":"m5lo","教程":"bbm8","预览":"y4bc","标签":"f7ri","算法":"mueo","QA":"y4bc","paper":"3hx0","cpp":"pspq","cuda":"pspq","python":"jkf4","pytorch":"m5lo","system":"0ags","inference":"30hd","quant":"v7y3","pre-train":"3hx0","rl":"2w12","指南":"y4bc","快速开始":"160j","部署":"jkf4","i18n":"3hx0"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
