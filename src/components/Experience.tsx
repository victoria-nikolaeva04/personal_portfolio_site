import { Container } from '#/components/Container'
import { Sprout } from '#/components/Sprout'
import { site } from '#/content/site'

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  )
}

function Vine() {
  return (
    <svg
      viewBox="0 0 24 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute top-0 left-0 h-full w-6"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 0C23 8 1 17 12 25S1 42 12 50S23 67 12 75S1 92 12 100"
        pathLength={1}
        fill="none"
        stroke="#4F5E2E"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function Experience() {
  const { experience, jobs, education } = site

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-14"
    >
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <h2
            id="experience-heading"
            className="font-display text-[44px] leading-tight font-semibold"
          >
            {experience.heading}
          </h2>
          <p className="text-plum-soft mt-4 text-lg">{experience.intro}</p>
          <a
            id="resume"
            href={experience.resumeHref}
            download
            className="bg-plum text-cream mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
          >
            <DownloadIcon />
            {experience.resumeLabel}
          </a>

          {education.map((item, itemIndex) => (
            <div
              key={`${item.school}-${itemIndex}`}
              className="bg-matcha-soft mt-6 rounded-3xl p-5"
            >
              <p className="font-hand text-plum-soft text-2xl">
                {experience.educationLabel}
              </p>
              <h3 className="font-display mt-1 text-[22px] font-semibold">
                {item.degree}
              </h3>
              <p className="text-moss mt-1 font-medium">
                {item.school}  · {item.graduation}            
              <p className="mt-1">
                {experience.minorLabel}: {item.minor}
              </p>
              </p>
              <p className="mt-2">{item.honors}</p>
              <p className="mt-4 text-sm font-medium">
                {experience.courseworkLabel}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {item.coursework.map((course, index) => (
                  <li
                    key={`${course}-${index}`}
                    className="bg-paper rounded-full px-3 py-1 text-sm"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative">
          <Vine />
          <ol className="space-y-5 pl-12">
            {jobs.map((job, jobIndex) => (
              <li key={`${job.company}-${jobIndex}`} className="relative">
                <span className="bg-cream border-moss absolute top-4 -left-[54px] flex h-9 w-9 items-center justify-center rounded-full border-2">
                  <Sprout size={24} />
                </span>
                <article className="bg-paper border-plum rounded-[26px] border-2 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-[25px] leading-tight font-semibold">
                      {job.role}
                    </h3>
                    <p className="bg-marigold-soft rounded-full px-3 py-1 text-sm">
                      {job.dates}
                    </p>
                  </div>
                  <p className="text-moss mt-1 font-medium">
                    {job.company} · {job.location}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    {job.bullets.map((bullet, index) => (
                      <li key={`${bullet}-${index}`}>{bullet}</li>
                    ))}
                  </ul>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <li
                        key={`${tag}-${index}`}
                        className="bg-matcha-soft rounded-full px-3 py-1 text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
