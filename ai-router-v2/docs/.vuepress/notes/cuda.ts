import { defineNoteConfig } from 'vuepress-theme-plume'

export const cuda = defineNoteConfig({
  dir: 'cuda',
  link: '/cuda/',
  sidebar: [
    {
      text: 'CUDA',
      collapsed: false,
      items: [
        'gemm',
        'hardware',
        'memory',
      ],
    },
    {
      text: 'ThunderKittens',
      collapsed: false,
      prefix: 'kittens',
      items: [
        'ptx_inline',
      ],
    },
    {
      text: 'Exercises',
      collapsed: false,
      prefix: 'exercise',
      items: [
        'chapter01',
      ],
    },
  ],
})
