import { fillClass, leafGroupStyle } from '#/components/plants/palette'
import type { PaletteColor, PlantProps } from '#/components/plants/palette'

export type PottedPlantVariant = 'leafy' | 'snake' | 'flowers' | 'tree'

type PottedPlantProps = PlantProps & {
  potColor?: PaletteColor
  rimColor?: 'plum' | 'marigold'
  variant?: PottedPlantVariant
}

type LeafGroupProps = {
  className?: string
  children: React.ReactNode
}

function LeafGroup({ className, children }: LeafGroupProps) {
  return (
    <g className={className} style={leafGroupStyle}>
      {children}
    </g>
  )
}

function Flower({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle cx={x} cy={y} r="6" className="fill-marigold" />
      <circle cx={x} cy={y} r="2.5" className="fill-plum" />
    </>
  )
}

function Foliage({
  variant,
  leafClassNames,
}: {
  variant: PottedPlantVariant
  leafClassNames?: string[]
}) {
  const cls = (index: number) => leafClassNames?.[index]

  switch (variant) {
    case 'snake':
      return (
        <>
          <LeafGroup className={cls(0)}>
            <path
              d="M24 40C20 26 22 12 26 4C31 14 32 28 30 40Z"
              className="fill-matcha"
            />
          </LeafGroup>
          <LeafGroup className={cls(1)}>
            <path
              d="M30 40C29 24 33 8 38 2C42 12 41 28 37 40Z"
              className="fill-moss"
            />
          </LeafGroup>
          <LeafGroup className={cls(2)}>
            <path
              d="M37 40C37 30 43 20 50 16C50 28 46 36 42 40Z"
              className="fill-matcha"
            />
          </LeafGroup>
          <LeafGroup className={cls(3)}>
            <path
              d="M24 40C22 32 16 26 11 24C11 32 15 38 24 40Z"
              className="fill-moss"
            />
          </LeafGroup>
        </>
      )
    case 'flowers':
      return (
        <>
          <LeafGroup className={cls(0)}>
            <path
              d="M30 40C26 32 20 28 16 22"
              fill="none"
              className="stroke-moss"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <Flower x={16} y={17} />
          </LeafGroup>
          <LeafGroup className={cls(1)}>
            <path
              d="M32 40V14"
              fill="none"
              className="stroke-moss"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <Flower x={32} y={9} />
          </LeafGroup>
          <LeafGroup className={cls(2)}>
            <path
              d="M34 40C38 32 44 28 48 22"
              fill="none"
              className="stroke-moss"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <Flower x={48} y={17} />
          </LeafGroup>
          <LeafGroup className={cls(3)}>
            <path
              d="M32 40C28 36 22 36 18 38C22 42 28 42 32 40Z"
              className="fill-matcha"
            />
            <path
              d="M32 40C36 36 42 36 46 38C42 42 36 42 32 40Z"
              className="fill-matcha"
            />
          </LeafGroup>
        </>
      )
    case 'tree':
      return (
        <>
          <path
            d="M32 40V24"
            fill="none"
            className="stroke-plum-soft"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <LeafGroup className={cls(0)}>
            <circle cx="32" cy="16" r="10" className="fill-matcha" />
          </LeafGroup>
          <LeafGroup className={cls(1)}>
            <circle cx="22" cy="25" r="8" className="fill-moss" />
          </LeafGroup>
          <LeafGroup className={cls(2)}>
            <circle cx="42" cy="25" r="8" className="fill-moss" />
          </LeafGroup>
          <LeafGroup className={cls(3)}>
            <circle cx="28" cy="12" r="4" className="fill-matcha-soft" />
          </LeafGroup>
        </>
      )
    case 'leafy':
    default:
      return (
        <>
          <LeafGroup className={cls(0)}>
            <path
              d="M32 40C32 28 22 22 12 24C13 36 22 42 32 40Z"
              className="fill-matcha"
            />
          </LeafGroup>
          <LeafGroup className={cls(1)}>
            <path
              d="M32 40C32 26 42 18 54 20C53 34 43 42 32 40Z"
              className="fill-moss"
            />
          </LeafGroup>
          <LeafGroup className={cls(2)}>
            <path
              d="M32 40C27 30 28 16 32 6C37 16 38 30 32 40Z"
              className="fill-matcha"
            />
          </LeafGroup>
          <LeafGroup className={cls(3)}>
            <path
              d="M32 40C30 32 24 28 18 28C19 36 24 40 32 40Z"
              className="fill-matcha-soft"
            />
          </LeafGroup>
        </>
      )
  }
}

export function PottedPlant({
  size = 64,
  potColor = 'marigold',
  rimColor = 'plum',
  variant = 'leafy',
  className,
  leafClassNames,
}: PottedPlantProps) {
  return (
    <svg
      width={size}
      height={(size * 70) / 64}
      viewBox="0 0 64 70"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Foliage variant={variant} leafClassNames={leafClassNames} />
      <path d="M14 46H50L45 69H19Z" className={fillClass[potColor]} />
      <rect
        x="10"
        y="40"
        width="44"
        height="9"
        rx="4.5"
        className={fillClass[rimColor]}
      />
    </svg>
  )
}
