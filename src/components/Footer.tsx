import { Container } from '#/components/Container'
import { site } from '#/content/site'

export function Footer() {
  return (
    <footer className="bg-plum border-matcha border-t text-[#E6EDD3]">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 pt-8">
        <p>
          {site.footer.credit} {site.name}
        </p>
        <p>{site.footer.updated}</p>
      </Container>
      {/* Reserved space for THE Snail */}
      <div className="h-20" aria-hidden="true" />
    </footer>
  )
}
