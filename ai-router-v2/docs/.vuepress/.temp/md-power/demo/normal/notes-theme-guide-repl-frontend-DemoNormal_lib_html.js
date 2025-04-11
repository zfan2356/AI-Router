import { ref } from "vue"
export default ref({
  "jsLib": [
    "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js"
  ],
  "cssLib": [
    "https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
  ],
  "script": "$(\"#message\").text(\"So Awesome!\");\nconst datetime = $(\"#datetime\");\nsetInterval(() => {\n  datetime.text(dayjs().format(\"YYYY-MM-DD HH:mm:ss\"));\n}, 1e3);\n",
  "css": "#app {\n  font-size: 2em;\n  text-align: center;\n}",
  "html": "<div id=\"app\">\n  <h3>vuepress-theme-plume</h3>\n  <p id=\"message\"></p>\n  <datetime id=\"datetime\"></datetime>\n</div>"
})