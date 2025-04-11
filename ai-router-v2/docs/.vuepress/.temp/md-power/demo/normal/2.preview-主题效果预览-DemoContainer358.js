import { ref } from "vue"
export default ref({
  "jsLib": [],
  "cssLib": [],
  "script": "const a = \"So Awesome!\";\nconst app = document.querySelector(\"#app\");\napp.appendChild(window.document.createElement(\"small\")).textContent = a;\n",
  "css": "#app {\n  font-size: 2em;\n  text-align: center;\n}",
  "html": "<div id=\"app\">\n  <h3>vuepress-theme-plume</h3>\n</div>"
})