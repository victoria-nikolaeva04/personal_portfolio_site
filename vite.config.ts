import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import mdx from '@mdx-js/rollup'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const WORDS_PER_MINUTE = 200

// Works out each note's reading time at build time and adds it to the file as
// `export const readingMinutes`, so the browser never has to render a note
// just to count its words.
const noteReadingTime = (): Plugin => ({
  name: 'note-reading-time',
  enforce: 'pre',
  transform(code, id) {
    if (!/[/\\]notes[/\\][^/\\]+\.mdx$/.test(id.split('?')[0])) return
    const text = code
      .replace(/^export const meta = \{[\s\S]*?^\}$/m, ' ')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#*_`>\-[\]()]/g, ' ')
    const words = text.split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))
    return `${code}

export const readingMinutes = ${minutes}
`
  },
})

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    noteReadingTime(),
    { enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) },
    viteReact({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
})

export default config
