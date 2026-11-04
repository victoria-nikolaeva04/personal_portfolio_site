import { Container } from '#/components/Container'
import { Snail } from '#/components/plants/Snail'
import { site } from '#/content/site'

export function Footer() {
  return (
    <footer className="bg-plum border-matcha relative border-t text-[#E6EDD3]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-full h-8 overflow-hidden [container-type:inline-size]"
        aria-hidden="true"
      >
        <Snail size={48} className="crawl absolute bottom-px left-0" />
      </div>
      <Container className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8">
        <p>
          {site.footer.credit} {site.name}
        </p>
        <p>{site.footer.updated}</p>
      </Container>
    </footer>
  )
}
