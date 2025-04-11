import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-diff.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-error-level.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-focus.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-word-highlight.css"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"
import { enhanceTwoslash } from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/shiki-twoslash/lib/client/index.js"
import "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/shiki-twoslash/lib/client/styles/twoslash.css"
export default {
  enhance({ app }) {
    enhanceTwoslash(app)
  },
  setup() {
    setupCollapsedLines()
  },
}
