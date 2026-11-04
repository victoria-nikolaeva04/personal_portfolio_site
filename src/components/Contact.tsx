import { Container } from '#/components/Container'
import { leafGroupStyle } from '#/components/plants/palette'
import { site } from '#/content/site'

function TopWave() {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="-mb-px block h-[clamp(40px,5vw,80px)] w-full"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 80V40C240 0 480 0 720 40S1200 80 1440 40V80Z"
        className="fill-plum"
      />
    </svg>
  )
}

function WateringCanScene() {
  return (
    <svg
      viewBox="0 0 320 340"
      className="view-scope group h-auto w-full max-w-[320px]"
      aria-hidden="true"
      focusable="false"
    >
      <g className="group-hover:tip" style={{ transformOrigin: '200px 110px' }}>
        <path
          d="M165 62C165 25 235 25 235 62"
          fill="none"
          stroke="#A7B97A"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M258 82C305 82 305 136 256 136"
          fill="none"
          stroke="#A7B97A"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M142 122L76 138"
          stroke="#A7B97A"
          strokeWidth="14"
          strokeLinecap="butt"
        />
        <ellipse
          cx="68"
          cy="139"
          rx="7"
          ry="17"
          transform="rotate(-14 68 139)"
          fill="#4F5E2E"
        />
        <rect x="140" y="62" width="120" height="92" rx="18" fill="#A7B97A" />
        <path
          d="M140 108H260"
          stroke="#4F5E2E"
          strokeWidth="4"
          strokeOpacity="0.6"
        />
        <rect
          x="152"
          y="76"
          width="10"
          height="64"
          rx="5"
          fill="#E6EDD3"
          fillOpacity="0.6"
        />
      </g>

      <g fill="#E6EDD3">
        <circle
          cx="84"
          cy="182"
          r="4"
          className="group-hover:drip opacity-0"
          style={{ animationDelay: '0s' }}
        />
        <circle
          cx="78"
          cy="182"
          r="3.5"
          className="group-hover:drip opacity-0"
          style={{ animationDelay: '0.07s' }}
        />
        <circle
          cx="86"
          cy="182"
          r="4.5"
          className="group-hover:drip opacity-0"
          style={{ animationDelay: '0.14s' }}
        />
        <circle
          cx="74"
          cy="182"
          r="3"
          className="group-hover:drip opacity-0"
          style={{ animationDelay: '0.21s' }}
        />
        <circle
          cx="81"
          cy="182"
          r="4"
          className="group-hover:drip opacity-0"
          style={{ animationDelay: '0.28s' }}
        />
      </g>

      <g className="grow-scroll">
        <g className="group-hover:sway-3" style={leafGroupStyle}>
          <path
            d="M50 262V226"
            stroke="#A7B97A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M50 238C50 218 30 213 20 217C22 235 36 243 50 238Z"
            fill="#A7B97A"
          />
          <path
            d="M50 230C50 210 70 206 82 210C80 228 66 236 50 230Z"
            fill="#E6EDD3"
          />
        </g>
      </g>
      <rect x="16" y="262" width="68" height="12" rx="4" fill="#E8A33D" />
      <path d="M22 274H78L71 320H29Z" fill="#E8A33D" />
    </svg>
  )
}

const buttonBase =
  'lift rounded-full px-6 py-3 font-medium focus-visible:outline-matcha'

export function Contact() {
  const { contactCopy, contact } = site

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <TopWave />
      <div className="bg-plum pt-8 pb-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="font-hand text-marigold text-3xl">
              {contactCopy.note}
            </p>
            <h2
              id="contact-heading"
              className="reveal font-display text-cream mt-2 text-[clamp(36px,4.4vw,56px)] leading-tight font-semibold"
            >
              {contactCopy.heading}
            </h2>
            <p className="text-matcha-soft mt-4 max-w-[52ch] text-lg">
              {contactCopy.roles}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {contact.map((link) => {
                const isEmail = link.href.startsWith('mailto:')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(isEmail
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`${buttonBase} ${
                      isEmail
                        ? 'bg-marigold text-plum'
                        : 'border-matcha text-cream border-2'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WateringCanScene />
          </div>
        </Container>
      </div>
    </section>
  )
}
