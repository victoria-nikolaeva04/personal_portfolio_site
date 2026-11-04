import { Link } from '@tanstack/react-router'
import { Container } from '#/components/Container'
import { Sprout } from '#/components/plants/Sprout'
import { site } from '#/content/site'

export function Header() {
  return (
    <header className="bg-cream/95 sticky top-0 z-40 py-2 backdrop-blur border-b border-marigold-soft shadow-lg">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link to="/" hash="top" className="flex items-center gap-2">
          <Sprout />
          <span className="font-display text-[23px] leading-none font-semibold">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  to="/"
                  hash={link.href.replace('#', '')}
                  className="decoration-matcha underline-offset-4 hover:underline hover:decoration-wavy hover:decoration-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                hash={site.nav.cta.href.replace('#', '')}
                className="bg-marigold text-plum inline-block rounded-full px-5 py-1 font-medium"
              >
                {site.nav.cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
