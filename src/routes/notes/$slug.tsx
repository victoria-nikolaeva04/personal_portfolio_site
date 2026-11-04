import { MDXProvider } from '@mdx-js/react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { BackLink } from '#/components/BackLink'
import { Container } from '#/components/Container'
import { mdxComponents } from '#/components/mdxComponents'
import { loadNote } from '#/content/notes'
import { site } from '#/content/site'

export const Route = createFileRoute('/notes/$slug')({
  loader: async ({ params }) => {
    const entry = await loadNote(params.slug)
    if (!entry) throw notFound()
    return entry
  },
  component: NotePage,
  notFoundComponent: NoteNotFound,
})

// Faint matcha-soft ruled lines with a marigold margin line, like notebook paper.
const notebookPaper = {
  backgroundImage: [
    'linear-gradient(to right, transparent 47px, var(--color-marigold) 47px, var(--color-marigold) 49px, transparent 49px)',
    'repeating-linear-gradient(to bottom, transparent 0, transparent 31px, var(--color-matcha-soft) 31px, var(--color-matcha-soft) 32px)',
  ].join(', '),
}

function NotePage() {
  const { note, Body, next } = Route.useLoaderData()
  const { notesCopy } = site

  return (
    <main id="main" className="py-14">
      <Container>
        <div className="mx-auto max-w-[680px]">
          <BackLink to="/notes" search={{}} label={notesCopy.backLabel} />
        </div>
        <article
          style={notebookPaper}
          className="bg-paper border-matcha-soft mx-auto max-w-[680px] rounded-[8px] border-2 py-10 pr-6 pl-[72px] shadow-sm sm:pr-10"
        >
          <p className="font-hand text-moss text-xl">
            {note.date} · {note.tag} · {note.readingMinutes}{' '}
            {notesCopy.minutesSuffix}
          </p>
          <h1 className="font-display mt-2 text-[clamp(34px,5vw,48px)] leading-[1.1] font-semibold">
            {note.title}
          </h1>

          <MDXProvider components={mdxComponents}>
            <Body />
          </MDXProvider>

          <nav
            aria-label="Note pages"
            className="mt-12 flex flex-wrap items-center justify-between gap-4"
          >
            <Link
              to="/notes"
              search={{}}
              className="rounded-full border-2 border-plum px-6 py-3 font-medium text-plum"
            >
              {notesCopy.backLabel}
            </Link>
            {next && (
              <Link
                to="/notes/$slug"
                params={{ slug: next.slug }}
                className="bg-plum text-cream rounded-full px-6 py-3 font-medium"
              >
                {notesCopy.nextLabel}
              </Link>
            )}
          </nav>
        </article>
      </Container>
    </main>
  )
}

function NoteNotFound() {
  const { notesCopy } = site

  return (
    <main id="main" className="py-24 text-center">
      <Container>
        <p className="font-hand text-plum-soft text-3xl">
          {notesCopy.notFoundNote}
        </p>
        <h1 className="font-display mt-2 text-[clamp(36px,5vw,56px)] leading-tight font-semibold">
          {notesCopy.notFoundHeading}
        </h1>
        <p className="mx-auto mt-4 max-w-[48ch] text-lg">
          {notesCopy.notFoundBody}
        </p>
        <Link
          to="/notes"
          search={{}}
          className="bg-plum text-cream mt-8 inline-block rounded-full px-6 py-3 font-medium"
        >
          {notesCopy.backLabel}
        </Link>
      </Container>
    </main>
  )
}
