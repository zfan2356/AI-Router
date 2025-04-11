import { defineNoteConfig } from 'vuepress-theme-plume'

export const python = defineNoteConfig({
  dir: 'python',
  link: '/python/',
  sidebar: [
    {
      text: 'Python',
      collapsed: false,
      items: [
        'thread',
      ],
    },
  ],
})
