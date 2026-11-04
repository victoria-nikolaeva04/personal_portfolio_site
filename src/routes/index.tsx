import { createFileRoute } from '@tanstack/react-router'
import { About } from '#/components/About'
import { Contact } from '#/components/Contact'
import { Experience } from '#/components/Experience'
import { Hero } from '#/components/Hero'
import { Projects } from '#/components/Projects'
import { loadNotes } from '#/content/notes'
import { site } from '#/content/site'
import type { AreaId } from '#/content/site'
import { Toolbox } from '#/components/Toolbox'

type HomeSearch = {
  area?: AreaId
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    area: site.areas.find((item) => item.id === search.area)?.id,
  }),
  loader: () => loadNotes(),
  component: Home,
})

function Home() {
  const notes = Route.useLoaderData()

  return (
    <>
      <main id="main">
        <Hero />
        {/* <Section id="work-areas" heading={site.sections.workAreas} /> */}
        <Experience />
        <Projects />
        <Toolbox />
        <About notes={notes} />
        <Contact />
      </main>
    </>
  )
}
