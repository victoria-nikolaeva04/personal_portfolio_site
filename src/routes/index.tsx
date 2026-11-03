import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/components/Hero'
import { Section } from '#/components/Section'
import { site } from '#/content/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Section id="work-areas" heading={site.sections.workAreas} />
        <Section id="experience" heading={site.sections.experience} />
        <Section id="work" heading={site.sections.work} />
        <Section id="about" heading={site.sections.about} />
        <Section id="contact" heading={site.sections.contact} />
      </main>
    </>
  )
}
