import { createFileRoute } from '@tanstack/react-router'
import { About } from '#/components/About'
import { Contact } from '#/components/Contact'
import { Experience } from '#/components/Experience'
import { Hero } from '#/components/Hero'
import { Projects } from '#/components/Projects'
import { Section } from '#/components/Section'
import { Toolbox } from '#/components/Toolbox'
import { site } from '#/content/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Section id="work-areas" heading={site.sections.workAreas} />
        <Experience />
        <Projects />
        <Toolbox />
        <About />
        <Contact />
      </main>
    </>
  )
}
