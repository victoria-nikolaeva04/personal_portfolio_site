import { createElement } from 'react'
import type { ComponentType } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

/** The `meta` object every src/content/notes/<slug>.mdx file exports. */
export type NoteMeta = {
  title: string
  date: string
  tag: string
  summary: string
}

export type Note = NoteMeta & {
  slug: string
  readingMinutes: number
}

type NoteModule = {
  default: ComponentType
  meta: NoteMeta
}

const WORDS_PER_MINUTE = 200

const modules = import.meta.glob<NoteModule>('./notes/*.mdx')
const slugOf = (path: string) => path.replace(/^.*\/(.+)\.mdx$/, '$1')

function readingMinutes(Body: ComponentType) {
  const html = renderToStaticMarkup(createElement(Body))
  const text = html
    .replace(/<pre[\s\S]*?<\/pre>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

const loaders = new Map(
  Object.entries(modules).map(([path, load]) => [slugOf(path), load]),
)

let cache: Promise<Note[]> | undefined

/** Every note, newest first. */
export function loadNotes(): Promise<Note[]> {
  cache ??= Promise.all(
    Object.entries(modules).map(async ([path, load]) => {
      const mod = await load()
      return {
        ...mod.meta,
        slug: slugOf(path),
        readingMinutes: readingMinutes(mod.default),
      }
    }),
  ).then((notes) => notes.sort((a, b) => b.date.localeCompare(a.date)))
  return cache
}

export async function loadNote(slug: string) {
  const load = loaders.get(slug)
  if (!load) return undefined

  const [mod, notes] = await Promise.all([load(), loadNotes()])
  const index = notes.findIndex((note) => note.slug === slug)
  return {
    note: notes[index],
    Body: mod.default,
    next: notes.at(index + 1),
  }
}
