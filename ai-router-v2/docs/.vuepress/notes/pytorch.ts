import { defineNoteConfig } from 'vuepress-theme-plume'

export const pytorch = defineNoteConfig({
  dir: 'pytorch',
  link: '/pytorch/',
  sidebar: [
    {
      text: 'PyTorch',
      collapsed: false,
      items: [
        'basic',
        'gradient',
      ],
    },
  ],
})
