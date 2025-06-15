import { defineNoteConfig } from 'vuepress-theme-plume'

export const algorithm = defineNoteConfig({
  dir: 'algorithm',
  link: '/algorithm/',
  sidebar: [
    {
      text: '李沐deep learning notes',
      collapsed: true,
      prefix: 'limu',
      items: [
        'linear_regression',
        'softmax',
        'cnn',
        'modern_cnn',
        'rnn',
        'attention',
        'transformer',
      ],
    },
    {
      text: 'LLM notes',
      collapsed: false,
      prefix: 'llm',
      items: [
        'optimizer',
        'mla',
        'mtp',
        'moe',
        'ppo',
      ],
    },
  ],
})
