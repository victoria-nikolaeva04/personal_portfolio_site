import { Container } from '#/components/Container'
import { site } from '#/content/site'

function SproutLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 28V16"
        stroke="#4F5E2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 17C16 11 11.5 7.5 5 8c0 6 4 9.5 11 9z"
        fill="#A7B97A"
        stroke="#4F5E2E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 14c0-5 3.5-8.5 11-8.500 0 5.500-3.500 9-11 8.500z"
        fill="#E6EDD3"
        stroke="#4F5E2E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  return (
    <header className="py-5">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <a href="#top" className="flex items-center gap-2">
          <SproutLogo />
          <span className="font-display text-[23px] leading-none font-semibold">
            {site.name}
          </span>
        </a>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="decoration-matcha underline-offset-4 hover:underline hover:decoration-wavy hover:decoration-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.nav.cta.href}
                className="bg-marigold text-plum inline-block rounded-full px-5 py-2 font-medium"
              >
                {site.nav.cta.label}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
