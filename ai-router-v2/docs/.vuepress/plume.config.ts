import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNavbar } from './navbar.js'
import { zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/plume.png',

  profile: {
    avatar: '/plume.png',
    name: 'AI Router',
    description: 'zfan notes for llm and infra',
    location: 'China',
    organization: 'zfan',
  },

  social: [
    { icon: 'github', link: 'https://github.com/zfan2356/AI-Router' },
  ],
  navbarSocialInclude: ['github'],

  footer: {
    copyright: 'Copyright © 2021-present zfan',
  },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
  },

  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
    },
  },
  autoFrontmatter: { exclude: ['**/*.snippet.*'] },

  bulletin: {
    layout: 'top-right',
    lifetime: 'always',
    // title: '🎉 公告 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/guide/features/bulletin/',
  },
})
