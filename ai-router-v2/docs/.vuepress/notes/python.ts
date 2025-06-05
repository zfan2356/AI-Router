import { defineNoteConfig } from 'vuepress-theme-plume'

export const python = defineNoteConfig({
  dir: 'python',
  link: '/python/',
  sidebar: [
    {
      text: 'Language',
      collapsed: false,
      prefix: 'language',
      items: [
        'thread',
      ],
    },
    {
      text: 'PyTorch',
      collapsed: false,
      prefix: 'pytorch',
      items: [
        'basic',
        'gradient',
      ],
    },
  ],
})
