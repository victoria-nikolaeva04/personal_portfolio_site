import type { ReactNode } from 'react'
import { Container } from '#/components/Container'

type SectionProps = {
  id: string
  heading: string
  level?: 1 | 2
  children?: ReactNode
  className?: string
}

export function Section({
  id,
  heading,
  level = 2,
  children,
  className = '',
}: SectionProps) {
  const headingId = `${id}-heading`
  const Heading = level === 1 ? 'h1' : 'h2'

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 max-sm:py-14 ${className}`.trim()}
    >
      <Container>
        <Heading id={headingId} className="text-4xl font-semibold">
          {heading}
        </Heading>
        {children}
      </Container>
    </section>
  )
}
