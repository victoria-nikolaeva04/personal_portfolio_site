import { createFileRoute } from '@tanstack/react-router'
import { About } from '#/components/About'
import { Contact } from '#/components/Contact'
import { Experience } from '#/components/Experience'
import { Hero } from '#/components/Hero'
import { Projects } from '#/components/Projects'
import { loadNotes } from '#/content/notes'
import { Toolbox } from '#/components/Toolbox'

export const Route = createFileRoute('/')({
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
