import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
  {
    text: '算法',
    icon: 'material-symbols:article-outline',
    link: '/notes/algorithm/README.md',
    activeMatch: '^/algorithm/',
  },
  {
    text: 'C++',
    icon: 'material-symbols:article-outline',
    link: '/notes/cpp/README.md',
    activeMatch: '^/cpp/',
  },
  {
    text: 'Python',
    icon: 'material-symbols:article-outline',
    link: '/notes/python/README.md',
    activeMatch: '^/python/',
  },
  {
    text: 'CUDA',
    icon: 'material-symbols:article-outline',
    link: '/notes/cuda/README.md',
    activeMatch: '^/cuda/',
  },
  {
    text: 'System',
    icon: 'material-symbols:article-outline',
    link: '/notes/system/README.md',
    activeMatch: '^/system/',
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '常见问题', link: '/faq/', icon: 'wpf:faq' },
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
      { text: '主题工具', link: '/tools/', icon: 'jam:tools' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      {
        text: 'Vuepress',
        icon: 'logos:vue',
        items: [
          { text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue' },
          { text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    items: [
      { text: '更新日志', link: '/changelog/' },
      { text: '参与贡献', link: '/contributing/' },
    ],
  },
])
