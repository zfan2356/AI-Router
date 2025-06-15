import { defineClientConfig } from 'vuepress/client'
import './styles/index.scss'
import { setupThemeColors } from './themes/composables/theme-colors.js'

export default defineClientConfig({
  enhance({ app }) {},
  setup() {
    setupThemeColors()
  },
  rootComponents: [],
})
