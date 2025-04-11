import { GitContributors } from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
