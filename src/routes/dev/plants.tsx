import { createFileRoute, redirect } from '@tanstack/react-router'
import { Container } from '#/components/Container'
import { HangingPlant } from '#/components/plants/HangingPlant'
import { Leaf } from '#/components/plants/Leaf'
import { PottedPlant } from '#/components/plants/PottedPlant'
import { Snail } from '#/components/plants/Snail'
import { Sprout } from '#/components/plants/Sprout'
import type { PottedPlantVariant } from '#/components/plants/PottedPlant'

export const Route = createFileRoute('/dev/plants')({
  beforeLoad: () => {
    if (import.meta.env.PROD) {
      throw redirect({ to: '/' })
    }
  },
  component: PlantsGallery,
})

const variants: PottedPlantVariant[] = ['leafy', 'snake', 'flowers', 'tree']

function Specimen({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <figure className="bg-paper border-plum flex flex-col items-center gap-3 rounded-[28px] border-2 p-6">
      <div className="flex min-h-[160px] items-end justify-center">
        {children}
      </div>
      <figcaption className="font-hand text-2xl">{label}</figcaption>
    </figure>
  )
}

function PlantsGallery() {
  return (
    <main id="main" className="py-12">
      <Container>
        <h1 className="font-display text-[44px] font-semibold">Plants</h1>
        <p className="text-plum-soft mt-1">
          Dev only. Redirects to / in production.
        </p>

        <h2 className="font-display mt-10 text-2xl font-semibold">
          PottedPlant
        </h2>
        <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {variants.map((variant, index) => (
            <Specimen key={variant} label={variant}>
              <PottedPlant
                size={128}
                variant={variant}
                potColor={index % 2 === 0 ? 'marigold' : 'plum'}
                rimColor={index % 2 === 0 ? 'plum' : 'marigold'}
              />
            </Specimen>
          ))}
        </div>

        <h2 className="font-display mt-10 text-2xl font-semibold">
          Everything else
        </h2>
        <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          <Specimen label="HangingPlant">
            <HangingPlant size={120} />
          </Specimen>
          <Specimen label="Sprout">
            <Sprout size={64} />
          </Specimen>
          <Specimen label="Leaf">
            <Leaf size={56} />
          </Specimen>
          <Specimen label="Snail">
            <Snail size={120} />
          </Specimen>
        </div>
      </Container>
    </main>
  )
}
