import { Container } from '#/components/Container'
import { Leaf } from '#/components/plants/Leaf'
import { TypingLine } from '#/components/TypingLine'
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
        stroke="#c3d88eff"
        strokeWidth="2"
      />
      <g stroke="#c3d88ebe" strokeOpacity="0.45" strokeWidth="1.5">
        <path d="M400 20V640" />
        <path d="M40 380H760" />
        <path d="M220 68V640" />
        <path d="M580 68V640" />
      </g>
    </svg>
  )
}

const pollen = [
  {
    color: 'bg-marigold',
    left: '30%',
    bottom: '28%',
    delay: '0s',
    sway: '14px',
  },
  {
    color: 'bg-matcha',
    left: '42%',
    bottom: '38%',
    delay: '1.1s',
    sway: '-10px',
  },
  {
    color: 'bg-marigold',
    left: '60%',
    bottom: '30%',
    delay: '2.2s',
    sway: '12px',
  },
  {
    color: 'bg-matcha',
    left: '70%',
    bottom: '40%',
    delay: '3.4s',
    sway: '-14px',
  },
  {
    color: 'bg-marigold',
    left: '24%',
    bottom: '40%',
    delay: '4.5s',
    sway: '10px',
  },
  {
    color: 'bg-matcha',
    left: '52%',
    bottom: '26%',
    delay: '5.6s',
    sway: '-12px',
  },
  {
    color: 'bg-marigold',
    left: '66%',
    bottom: '22%',
    delay: '6.8s',
    sway: '9px',
  },
  {
    color: 'bg-matcha',
    left: '36%',
    bottom: '22%',
    delay: '7.9s',
    sway: '-9px',
  },
]

function PollenDots() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {pollen.map((dot, index) => (
        <span
          key={index}
          className={`pollen ${dot.color} absolute h-2 w-2 rounded-full opacity-0`}
          style={
            {
              left: dot.left,
              bottom: dot.bottom,
              animationDelay: dot.delay,
              '--pollen-sway': dot.sway,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

export function Hero() {
  const { hero } = site

  return (
    <section
      id="top"
      aria-labelledby="top-heading"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-16 pb-36 text-center md:pb-24"
    >
      <GreenhouseWindow />
      <PollenDots />
      <Container className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <Leaf
            size={22}
            className="pointer-events-none absolute top-6 -left-8 -rotate-[50deg]"
          />
          <Leaf
            size={16}
            color="moss"
            className="pointer-events-none absolute top-16 -left-9 -rotate-[95deg]"
          />
          <img
            src={hero.photo}
            alt={hero.photoAlt}
            width={150}
            height={150}
            className="bg-matcha border-plum h-[150px] w-[150px] rounded-full border-[3px] object-cover"
          />
          <Leaf
            size={22}
            className="pointer-events-none absolute top-6 -right-8 rotate-[50deg]"
          />
          <Leaf
            size={16}
            color="moss"
            className="pointer-events-none absolute top-16 -right-9 rotate-[95deg]"
          />
        </div>
        {/*  <p className="bg-paper border-matcha mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
          <span
            className="bg-moss h-2.5 w-2.5 rounded-full"
            aria-hidden="true"
          />
          {site.statusLine}
        </p> */}
        <h1
          id="top-heading"
          className="font-display mt-6 text-[clamp(48px,6.4vw,88px)] leading-[1.05] font-semibold"
        >
          {hero.greeting} {site.name}.
        </h1>
        <TypingLine
          lead={hero.lead}
          phrases={hero.phrases}
          className="font-display mt-2 text-[clamp(28px,3.6vw,48px)] leading-tight"
        />
        {/* <p className="text-plum-soft mt-4 text-lg">{hero.subtitle}</p> */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="lift bg-plum text-cream rounded-full px-6 py-3 font-medium"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="lift border-plum text-plum rounded-full border-2 px-6 py-3 font-medium"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </Container>
      <div className="bg-plum absolute inset-x-0 bottom-0 h-[3px]" />
    </section>
  )
}
