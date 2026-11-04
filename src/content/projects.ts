import type { ComponentType } from 'react'
import type { AreaId } from '#/content/site'

export type CaseStudyStatus = 'shipped' | 'in-progress' | 'classwork'

export type CaseStudyLink = {
  label: string
  href: string
}

/** The `meta` object every src/content/projects/<slug>.mdx file exports. */
export type ProjectMeta = {
  title: string
  areas: AreaId[]
  status: CaseStudyStatus
  role: string
  team: string
  dates: string
  stack: string[]
  links: CaseStudyLink[]
}

type CaseStudyModule = {
  default: ComponentType
  meta: ProjectMeta
}

const modules = import.meta.glob<CaseStudyModule>('./projects/*.mdx')

const loaders = new Map(
  Object.entries(modules).map(([path, load]) => [
    path.replace(/^.*\/(.+)\.mdx$/, '$1'),
    load,
  ]),
)

export async function loadCaseStudy(slug: string) {
  const load = loaders.get(slug)
  if (!load) return undefined

  const mod = await load()
  return { meta: mod.meta, Body: mod.default }
}
