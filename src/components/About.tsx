import { Link } from '@tanstack/react-router'
import { Container } from '#/components/Container'
import { Sprout } from '#/components/plants/Sprout'
import { WavyBand } from '#/components/WavyBand'
import type { Note } from '#/content/notes'
import { site } from '#/content/site'

function PencilIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

export function About({ notes }: { notes: Note[] }) {
  const { about, hobbies, funFact } = site

  return (
    <section id="about" aria-labelledby="about-heading" className="pb-20">
      <WavyBand className="h-3" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <h2
              id="about-heading"
              className="font-hand text-plum-soft text-3xl"
            >
              {about.label}
            </h2>
            <p className="font-display mt-3 text-[clamp(30px,3.4vw,40px)] leading-snug font-normal">
              {about.intro}
            </p>

            <p className="mt-8 font-medium">{about.hobbiesLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <li
                  key={`${hobby.name}-${index}`}
                  className={`${
                    index % 2 === 0 ? 'bg-matcha-soft' : 'bg-marigold-soft'
                  } rounded-full px-4 py-1.5`}
                >
                  {hobby.name}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3">
              <span className="mt-0.5 shrink-0">
                <Sprout size={28} />
              </span>
              <p>
                <span className="font-medium">{about.funFactLabel}</span>{' '}
                {funFact}
              </p>
            </div>
          </div>

          <div
            id="notes"
            className="border-matcha border-t-2 border-dashed pt-8 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-12"
          >
            <h2 className="font-display flex items-center gap-3 text-[32px] leading-tight font-semibold">
              <PencilIcon />
              {about.notesHeading}
            </h2>
            <ol className="divide-matcha-soft mt-6 divide-y-2">
              {notes.slice(0, 3).map((note) => (
                <li key={note.slug} className="py-4 first:pt-0">
                  <p className="font-hand text-moss text-xl">
                    {note.date} · {note.tag}
                  </p>
                  <Link
                    to="/notes/$slug"
                    params={{ slug: note.slug }}
                    className="mt-1 inline-block font-bold hover:underline"
                  >
                    {note.title}
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              to="/notes"
              search={{}}
              className="text-moss mt-4 inline-block font-medium"
            >
              {about.notesLink.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
