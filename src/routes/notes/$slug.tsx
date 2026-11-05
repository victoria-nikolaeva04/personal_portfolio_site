import { MDXProvider } from '@mdx-js/react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { BackLink } from '#/components/BackLink'
import { Container } from '#/components/Container'
import { mdxComponents } from '#/components/mdxComponents'
import { useDocumentTitle } from '#/components/useDocumentTitle'
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

// Faint matcha-soft ruled lines across the whole page, like notebook paper.
const ruledPaper = {
  backgroundImage:
    'repeating-linear-gradient(to bottom, transparent 0, transparent 31px, var(--color-matcha-soft) 31px, var(--color-matcha-soft) 32px)',
}

function NotePage() {
  const { note, Body, next } = Route.useLoaderData()
  const { notesCopy } = site
  useDocumentTitle(note.title)

  return (
    <main id="main" style={ruledPaper} className="bg-paper">
      <div className="relative mx-auto max-w-[860px] px-5 py-10 sm:px-8 sm:py-14">
        {/* The marigold margin line, running the full height of the page. */}
        <span
          aria-hidden="true"
          className="bg-marigold absolute inset-y-0 left-[30px] w-0.5 sm:left-[56px]"
        />
        <div className="pl-9 sm:pl-[72px]">
          <BackLink to="/notes" search={{}} label={notesCopy.backLabel} />
        </div>
        <article className="pl-9 sm:pl-[72px]">
          <p className="font-hand text-moss text-xl">
            {note.date} · {note.tag} · {note.readingMinutes}{' '}
            {notesCopy.minutesSuffix}
          </p>
          <h1 className="font-display mt-2 text-[clamp(30px,5vw,48px)] break-words leading-[1.1] font-semibold">
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
      </div>
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
