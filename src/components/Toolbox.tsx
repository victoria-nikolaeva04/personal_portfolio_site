import { Container } from '#/components/Container'
import { PottedPlant } from '#/components/plants/PottedPlant'
import type { PottedPlantVariant } from '#/components/plants/PottedPlant'
import { site } from '#/content/site'

/* function Bracket({ className = '' }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className={`absolute top-full hidden lg:block ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0H28V8L8 28H0Z" className="fill-plum" />
    </svg>
  )
} */

const plantVariants: PottedPlantVariant[] = [
  'leafy',
  'snake',
  'flowers',
  'tree',
]

export function Toolbox() {
  const { toolboxCopy, toolbox } = site

  return (
    <section id="toolbox" aria-labelledby="toolbox-heading" className="py-20">
      <Container>
        <h2
          id="toolbox-heading"
          className="reveal font-display text-center text-[44px] leading-tight font-semibold"
        >
          {toolboxCopy.heading}
        </h2>
        <p className="font-hand text-plum-soft mt-1 text-center text-2xl">
          {toolboxCopy.note}
        </p>

        <div className="relative mt-12">
          <div className="grid grid-cols-2 items-end gap-x-6 gap-y-10 lg:grid-cols-4">
            {toolbox.map((group, groupIndex) => (
              <div
                key={group.name}
                className="border-plum flex flex-col items-center justify-end border-b-[6px] text-center lg:border-b-0"
              >
                <ul className="flex flex-wrap justify-center gap-2">
                  {group.items.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="bg-paper border-matcha rounded-full border px-3 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-hand mt-4 text-3xl">{group.name}</p>
                <PottedPlant
                  size={64}
                  variant={plantVariants[groupIndex % plantVariants.length]}
                  potColor={groupIndex % 2 === 0 ? 'marigold' : 'plum'}
                  rimColor={groupIndex % 2 === 0 ? 'plum' : 'marigold'}
                  className="mt-4 shrink-0"
                />
              </div>
            ))}
          </div>

          {/* <div className="bg-plum relative hidden h-[6px] w-full rounded-full lg:block">
            <Bracket className="left-[10%]" />
            <Bracket className="right-[10%] -scale-x-100" />
          </div> */}
        </div>
      </Container>
    </section>
  )
}
