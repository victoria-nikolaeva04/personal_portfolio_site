import { Link, createFileRoute } from '@tanstack/react-router'
import { BackLink } from '#/components/BackLink'
import { Container } from '#/components/Container'
import { loadNotes } from '#/content/notes'
import { site } from '#/content/site'

type NotesSearch = {
  tag?: string
}

export const Route = createFileRoute('/notes/')({
  validateSearch: (search: Record<string, unknown>): NotesSearch => ({
    tag:
      typeof search.tag === 'string' && search.tag !== ''
        ? search.tag
        : undefined,
  }),
  loader: () => loadNotes(),
  component: NotesPage,
})

const pillBase = 'rounded-full border-2 px-4 py-1 font-medium transition-colors'

function NotesPage() {
  const notes = Route.useLoaderData()
  const { tag } = Route.useSearch()
  const { notesCopy } = site

  const tags = [...new Set(notes.map((note) => note.tag))].sort()
  const visible = tag ? notes.filter((note) => note.tag === tag) : notes

  return (
    <main id="main" className="py-14">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <BackLink to="/" hash="about" label={notesCopy.backToHomeLabel} />
          <p className="font-hand text-plum-soft text-3xl">{notesCopy.note}</p>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] leading-[1.05] font-semibold">
            {notesCopy.heading}
          </h1>

          <nav
            aria-label="Filter notes by tag"
            className="mt-8 flex flex-wrap gap-2"
          >
            <Link
              to="/notes"
              search={{}}
              aria-current={tag ? undefined : 'page'}
              className={`${pillBase} ${
                tag
                  ? 'border-matcha text-plum'
                  : 'border-moss bg-matcha-soft text-moss'
              }`}
            >
              {notesCopy.allLabel}
            </Link>
            {tags.map((item) => (
              <Link
                key={item}
                to="/notes"
                search={{ tag: item }}
                aria-current={tag === item ? 'page' : undefined}
                className={`${pillBase} ${
                  tag === item
                    ? 'border-moss bg-matcha-soft text-moss'
                    : 'border-matcha text-plum'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {visible.length === 0 ? (
            <p className="font-hand text-plum-soft mt-10 text-2xl">
              {notesCopy.emptyMessage}
            </p>
          ) : (
            <ol className="divide-matcha-soft mt-10 divide-y-2">
              {visible.map((note) => (
                <li key={note.slug} className="py-6 first:pt-0">
                  <p className="font-hand text-moss text-xl">
                    {note.date} · {note.tag}
                  </p>
                  <h2 className="font-display mt-1 text-[28px] leading-tight font-semibold">
                    <Link
                      to="/notes/$slug"
                      params={{ slug: note.slug }}
                      className="hover:underline"
                    >
                      {note.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-lg">{note.summary}</p>
                  <p className="text-plum-soft mt-2 text-sm">
                    {note.readingMinutes} {notesCopy.minutesSuffix}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Container>
    </main>
  )
}
