import { defineNoteConfig } from 'vuepress-theme-plume'

export const algorithm = defineNoteConfig({
  dir: 'algorithm',
  link: '/algorithm/',
  sidebar: [
    {
      text: '算法',
      collapsed: false,
      items: [
        'linear_regression',
        'softmax',
        'multilayer_perceptron',
        'cnn',
        'modern_cnn',
        'rnn',
        'attention',
        'transformer',
        'moe',
      ],
    },
  ],
})
