import { Container } from '#/components/Container'
import { Snail } from '#/components/plants/Snail'
import { site } from '#/content/site'

export function Footer() {
  return (
    <footer className="bg-plum border-matcha border-t text-[#E6EDD3]">
      <Container className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8">
        <Snail size={48} className="absolute bottom-full left-8 mb-px" />
        <p>
          {site.footer.credit} {site.name}
        </p>
        <p>{site.footer.updated}</p>
      </Container>
    </footer>
  )
}
