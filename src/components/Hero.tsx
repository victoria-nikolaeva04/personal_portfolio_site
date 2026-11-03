import { Container } from '#/components/Container'
import { site } from '#/content/site'

function GreenhouseWindow() {
  return (
    <svg
      viewBox="0 0 800 640"
      preserveAspectRatio="xMidYMax meet"
      className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-full w-full max-w-[900px]"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M40 640V380A360 360 0 0 1 760 380V640Z"
        fill="#E6EDD3"
        fillOpacity="0.55"
        stroke="#A7B97A"
        strokeWidth="2"
      />
      <g stroke="#A7B97A" strokeOpacity="0.45" strokeWidth="1.5">
        <path d="M400 20V640" />
        <path d="M40 380H760" />
        <path d="M220 68V640" />
        <path d="M580 68V640" />
      </g>
    </svg>
  )
}

export function Hero() {
  const { hero } = site

  return (
    <section
      id="top"
      aria-labelledby="top-heading"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-16 pb-24 text-center"
    >
      <GreenhouseWindow />
      <Container className="relative flex flex-col items-center">
        <img
          src={hero.photo}
          alt={hero.photoAlt}
          width={150}
          height={150}
          className="bg-matcha border-plum h-[150px] w-[150px] rounded-full border-[3px] object-cover"
        />
        <p className="bg-paper border-matcha mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
          <span
            className="bg-moss h-2.5 w-2.5 rounded-full"
            aria-hidden="true"
          />
          {site.statusLine}
        </p>
        <h1
          id="top-heading"
          className="font-display mt-6 text-[clamp(48px,6.4vw,88px)] leading-[1.05] font-semibold"
        >
          {hero.greeting} {site.name}.
        </h1>
        <p className="font-display mt-2 text-[clamp(28px,3.6vw,48px)] leading-tight">
          {hero.lead} <em className="text-moss italic">{hero.phrases[0]}</em>
        </p>
        <p className="text-plum-soft mt-4 text-lg">{hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="bg-plum text-cream rounded-full px-6 py-3 font-medium"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="border-plum text-plum rounded-full border-2 px-6 py-3 font-medium"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </Container>
      <div className="bg-plum absolute inset-x-0 bottom-0 h-[3px]" />
    </section>
  )
}
