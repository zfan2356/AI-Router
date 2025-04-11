import { defineClientConfig } from 'vuepress/client'
import Demos from './themes/components/Demos.vue'
import { setupThemeColors } from './themes/composables/theme-colors.js'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Demos', Demos)
  },
  setup() {
    setupThemeColors()
  },
})
