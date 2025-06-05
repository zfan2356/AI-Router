import { defineNoteConfig } from 'vuepress-theme-plume'

export const cpp = defineNoteConfig({
  dir: 'cpp',
  link: '/cpp/',
  sidebar: [
    {
      text: 'Language',
      collapsed: false,
      prefix: 'language',
      items: [
        'const',
        'move',
        'type_inference',
      ],
    },
    {
      text: 'Underlying',
      collapsed: false,
      prefix: 'underlying',
      items: [
        'compiler',
      ],
    },
    {
      text: 'Projects',
      collapsed: false,
      prefix: 'projects',
      items: [
        'tiny_cpp_projects',
      ],
    },
  ],
})
