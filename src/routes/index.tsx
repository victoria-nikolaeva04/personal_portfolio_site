import { createFileRoute } from '@tanstack/react-router'
import { About } from '#/components/About'
import { Experience } from '#/components/Experience'
import { Hero } from '#/components/Hero'
import { Projects } from '#/components/Projects'
import { Section } from '#/components/Section'
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
        <About />
        <Section id="contact" heading={site.sections.contact} />
      </main>
    </>
  )
}
