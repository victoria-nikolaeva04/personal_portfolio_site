import { leafGroupStyle } from '#/components/plants/palette'
import type { PlantProps } from '#/components/plants/palette'

export function Sprout({ size = 28, className, leafClassNames }: PlantProps) {
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
        className="stroke-moss"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <g className={leafClassNames?.[0]} style={leafGroupStyle}>
        <path
          d="M16 17C16 11 11.5 7.5 5 8c0 6 4 9.5 11 9z"
          className="fill-matcha stroke-moss"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <g className={leafClassNames?.[1]} style={leafGroupStyle}>
        <path
          d="M16 14c0-5 3.5-8.5 11-8.5 0 5.5-3.5 9-11 8.5z"
          className="fill-matcha-soft stroke-moss"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
