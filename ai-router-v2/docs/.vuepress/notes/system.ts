import { defineNoteConfig } from 'vuepress-theme-plume'

export const system = defineNoteConfig({
  dir: 'system',
  link: '/system/',
  sidebar: [
    {
      text: 'Inference',
      prefix: 'inference',
      collapsed: false,
      items: [
        'flash_attention',
        'kvcache',
        'mqa_gqa',
        'page_attention',
        'paper',
      ],
    },
    {
      text: 'Pre-Train',
      prefix: 'pre-train',
      collapsed: false,
      items: [
        'model_parallel',
        'pp_communication',
      ],
    },
    {
      text: 'Quant',
      prefix: 'quant',
      collapsed: false,
      items: [
        'introduce',
        'pytorch_quant',
      ],
    },
    {
      text: 'RL',
      prefix: 'rl',
      collapsed: false,
      items: [
        'introduce',
      ],
    },
  ],
})
