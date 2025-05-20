import { defineNoteConfig } from 'vuepress-theme-plume'

export const cpp = defineNoteConfig({
  dir: 'cpp',
  link: '/cpp/',
  sidebar: [
    {
      text: 'C++',
      collapsed: false,
      items: [
        'const',
        'move',
        'type_inference',
        'modern_cpp_features',
        'tiny_cpp_projects',
      ],
    },
  ],
})
