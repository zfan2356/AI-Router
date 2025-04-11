import { defineNotesConfig } from 'vuepress-theme-plume'
import { algorithm } from './algorithm'
import { papers } from './papers'
import { pytorch } from './pytorch'
import { system } from './system'
import { cpp } from './cpp'
import { cuda } from './cuda'
import { python } from './python'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    algorithm,
    system,
    cuda,
    cpp,
    pytorch,
    python,
    papers,
  ],
})
