import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Bilibili from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import Youtube from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Youtube.vue'
import CodePen from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodePen.vue'
import JSFiddle from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/JsFiddle.vue'
import Replit from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Replit.vue'
import CodeSandbox from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodeSandbox.vue'
import Plot from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import CanIUse from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'
import FileTreeItem from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'
import ArtPlayer from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/ArtPlayer.vue'
import AudioReader from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/AudioReader.vue'
import VPDemoBasic from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import Abbreviation from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Abbreviation.vue'
import VPTimeline from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimeline.vue'
import VPTimelineItem from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimelineItem.vue'
import VPCollapse from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapse.vue'
import VPCollapseItem from '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapseItem.vue'
import '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/styles/chat.css'

import '/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('VideoBilibili', Bilibili)
    app.component('VideoYoutube', Youtube)
    app.component('CodePenViewer', CodePen)
    app.component('JSFiddleViewer', JSFiddle)
    app.component('ReplitViewer', Replit)
    app.component('CodeSandboxViewer', CodeSandbox)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('CanIUseViewer', CanIUse)
    app.component('FileTreeItem', FileTreeItem)
    app.component('ArtPlayer', ArtPlayer)
    app.component('AudioReader', AudioReader)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
    app.component('Abbreviation', Abbreviation)
    app.component('VPTimeline', VPTimeline)
    app.component('VPTimelineItem', VPTimelineItem)
    app.component('VPCollapse', VPCollapse)
    app.component('VPCollapseItem', VPCollapseItem)
  }
})
