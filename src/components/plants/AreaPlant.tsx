import { PottedPlant } from '#/components/plants/PottedPlant'
import type { PottedPlantVariant } from '#/components/plants/PottedPlant'
import type { AreaId } from '#/content/site'
import type { PaletteColor } from '#/components/plants/palette'

type AreaPlantProps = {
  area: AreaId
  size?: number
  potColor?: PaletteColor
  rimColor?: 'plum' | 'marigold'
  className?: string
}

const variantByArea: Record<AreaId, PottedPlantVariant> = {
  build: 'snake',
  think: 'leafy',
  design: 'flowers',
  lead: 'tree',
}

/**
 * The potted plant for each work area. Think gets a marigold bud and Lead gets
 * a small marigold flag. The extra headroom (viewBox starts at y = -14) is where
 * the flag pole and bud sit.
 */
export function AreaPlant({
  area,
  size = 64,
  potColor = 'marigold',
  rimColor = 'plum',
  className,
}: AreaPlantProps) {
  return (
    <svg
      width={size}
      height={(size * 84) / 64}
      viewBox="0 -14 64 84"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <PottedPlant
        size={64}
        variant={variantByArea[area]}
        potColor={potColor}
        rimColor={rimColor}
      />
      {area === 'think' && (
        <g>
          <path
            d="M32 6V-2"
            fill="none"
            className="stroke-moss"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="-4" r="4" className="fill-marigold" />
        </g>
      )}
      {area === 'lead' && (
        <g>
          <path
            d="M32 8V-12"
            fill="none"
            className="stroke-plum-soft"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M32 -12L46 -7L32 -2Z" className="fill-marigold" />
        </g>
      )}
    </svg>
  )
}
