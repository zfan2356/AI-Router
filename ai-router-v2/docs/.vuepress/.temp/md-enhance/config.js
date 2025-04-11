import ChartJS from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeDemo from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import MarkMap from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "/Users/zhangfan/zfan2356/github/AI-Router/ai-router-v2/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
};
