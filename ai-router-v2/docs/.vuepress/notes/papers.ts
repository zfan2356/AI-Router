import { defineNoteConfig } from 'vuepress-theme-plume'

export const papers = defineNoteConfig({
  dir: 'papers',
  link: '/papers/',
  sidebar: [
    {
      text: 'Papers',
      collapsed: false,
      items: [
        'summary_record',
        'transformer',
      ],
    },
  ],
})
