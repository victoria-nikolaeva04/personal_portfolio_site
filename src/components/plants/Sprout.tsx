import type { CSSProperties } from 'react'
import { leafGroupStyle } from '#/components/plants/palette'
import type { PlantProps } from '#/components/plants/palette'

type SproutProps = PlantProps & {
  /** Draw the outline in on mount: stem first, then the two leaves. */
  draw?: boolean
}

// pathLength="1" lets the `draw` utility use a dash of exactly one path.
function drawProps(draw: boolean, step: number) {
  if (!draw) return { className: '' }
  return {
    pathLength: 1,
    className: 'draw',
    style: { animationDelay: `${step * 0.35}s` } as CSSProperties,
  }
}

export function Sprout({
  size = 28,
  className,
  leafClassNames,
  draw = false,
}: SproutProps) {
  const stem = drawProps(draw, 0)
  const leftLeaf = drawProps(draw, 1)
  const rightLeaf = drawProps(draw, 2)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 28V16"
        {...stem}
        className={`stroke-moss ${stem.className}`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <g className={leafClassNames?.[0]} style={leafGroupStyle}>
        <path
          d="M16 17C16 11 11.5 7.5 5 8c0 6 4 9.5 11 9z"
          {...leftLeaf}
          className={`fill-matcha stroke-moss ${leftLeaf.className}`}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <g className={leafClassNames?.[1]} style={leafGroupStyle}>
        <path
          d="M16 14c0-5 3.5-8.5 11-8.5 0 5.5-3.5 9-11 8.5z"
          {...rightLeaf}
          className={`fill-matcha-soft stroke-moss ${rightLeaf.className}`}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
