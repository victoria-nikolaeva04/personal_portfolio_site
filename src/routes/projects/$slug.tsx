import { MDXProvider } from '@mdx-js/react'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { Container } from '#/components/Container'
import { mdxComponents } from '#/components/mdxComponents'
import { loadCaseStudy } from '#/content/projects'
import { site } from '#/content/site'

export const Route = createFileRoute('/projects/$slug')({
  loader: async ({ params }) => {
    const project = site.projects.find((item) => item.slug === params.slug)
    const study = await loadCaseStudy(params.slug)
    if (!project && !study) throw notFound()

    return { slug: params.slug, study }
  },
  component: CaseStudyPage,
  notFoundComponent: CaseStudyNotFound,
})

const pillLink =
  'rounded-full border-2 border-plum px-6 py-3 font-medium text-plum'

function CaseStudyPage() {
  const { slug, study } = Route.useLoaderData()
  const { caseStudyCopy, projectsCopy, projects } = site

  // Every project in site.ts gets a page. An MDX file adds the full write-up;
  // without one, the page is built from the project's own data.
  const project = projects.find((item) => item.slug === slug)
  const meta = study?.meta

  const title = meta?.title ?? project?.title ?? ''
  const stack = meta?.stack ?? project?.stack ?? []
  const images = project?.images ?? []
  const links =
    meta?.links ??
    [
      project?.github && {
        label: projectsCopy.githubLabel,
        href: project.github,
      },
      project?.liveUrl && {
        label: projectsCopy.liveLabel,
        href: project.liveUrl,
      },
    ].filter((link) => !!link)

  const details = [
    meta && { label: caseStudyCopy.roleLabel, value: meta.role },
    meta && { label: caseStudyCopy.teamLabel, value: meta.team },
    meta && { label: caseStudyCopy.timelineLabel, value: meta.dates },
    { label: caseStudyCopy.toolsLabel, value: stack.join(', ') },
  ]
    .filter((detail) => !!detail)
    .filter((detail) => detail.value !== '')

  const position = projects.findIndex((item) => item.slug === slug)
  const canStep = position !== -1 && projects.length > 1
  const nextSlug = canStep
    ? projects[(position + 1) % projects.length].slug
    : undefined
  const previousSlug = canStep
    ? projects[(position - 1 + projects.length) % projects.length].slug
    : undefined

  const Body = study?.Body

  return (
    <main id="main" className="py-14">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <Link
            to="/"
            hash="work"
            aria-label={caseStudyCopy.backToProjectsLabel}
            title={caseStudyCopy.backToProjectsLabel}
            className="text-plum hover:text-moss mb-6 inline-flex h-10 w-10 items-center justify-start"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="font-display text-[clamp(40px,5.5vw,64px)] leading-[1.05] font-semibold">
            {title}
          </h1>

          <div
            className={`bg-matcha border-plum mt-8 flex h-[240px] items-center justify-center overflow-hidden rounded-[28px] border-2 p-6`}
          >
            {project?.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                className="h-full w-full rounded-lg object-cover object-top"
              />
            )}
          </div>

          <dl className="border-matcha mt-8 grid grid-cols-1 gap-x-6 gap-y-5 border-y-2 border-dashed py-6 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-hand text-plum-soft text-2xl">
                  {detail.label}
                </dt>
                <dd className="font-medium">{detail.value}</dd>
              </div>
            ))}
          </dl>

          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-matcha-soft inline-block rounded-full px-4 py-1.5 font-medium"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}

          {images.length > 0 && (
            <ul
              aria-label={caseStudyCopy.galleryLabel}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {images.map((image) => (
                <li key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="border-plum aspect-[16/10] w-full rounded-[20px] border-2 object-cover object-top"
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <MDXProvider components={mdxComponents}>
              {Body ? (
                <Body />
              ) : (
                <>
                  {project && (
                    <p className="mt-4 text-lg">{project.description}</p>
                  )}
                  <p className="font-hand text-plum-soft mt-6 text-2xl">
                    {caseStudyCopy.comingSoon}
                  </p>
                </>
              )}
            </MDXProvider>
          </div>

          {previousSlug && nextSlug && (
            <nav
              aria-label="Project pages"
              className="border-matcha mt-14 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed pt-8 pb-8"
            >
              <Link
                to="/projects/$slug"
                params={{ slug: previousSlug }}
                className={pillLink}
              >
                {caseStudyCopy.previousLabel}
              </Link>
              <Link
                to="/projects/$slug"
                params={{ slug: nextSlug }}
                className="bg-plum text-cream rounded-full px-6 py-3 font-medium"
              >
                {caseStudyCopy.nextLabel}
              </Link>
            </nav>
          )}
        </div>
      </Container>
    </main>
  )
}

function CaseStudyNotFound() {
  const { caseStudyCopy } = site

  return (
    <main id="main" className="py-24 text-center">
      <Container>
        <p className="font-hand text-plum-soft text-3xl">
          {caseStudyCopy.notFoundNote}
        </p>
        <h1 className="font-display mt-2 text-[clamp(36px,5vw,56px)] leading-tight font-semibold">
          {caseStudyCopy.notFoundHeading}
        </h1>
        <p className="mx-auto mt-4 max-w-[48ch] text-lg">
          {caseStudyCopy.notFoundBody}
        </p>
        <Link
          to="/"
          hash="work"
          className="bg-plum text-cream mt-8 inline-block rounded-full px-6 py-3 font-medium"
        >
          {caseStudyCopy.backLabel}
        </Link>
      </Container>
    </main>
  )
}
