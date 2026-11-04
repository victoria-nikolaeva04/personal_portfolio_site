import { leafGroupStyle } from '#/components/plants/palette'
import type { PlantProps } from '#/components/plants/palette'

type Vine = {
  path: string
  leaves: { x: number; y: number; angle: number }[]
}

const vines: Vine[] = [
  {
    path: 'M26 70C22 82 29 92 23 106',
    leaves: [
      { x: 24, y: 82, angle: -60 },
      { x: 25, y: 96, angle: 60 },
    ],
  },
  {
    path: 'M40 73C45 85 38 97 43 109',
    leaves: [
      { x: 42, y: 86, angle: 60 },
      { x: 40, y: 100, angle: -60 },
    ],
  },
  {
    path: 'M54 70C58 80 52 90 57 102',
    leaves: [
      { x: 56, y: 80, angle: 60 },
      { x: 54, y: 93, angle: -60 },
    ],
  },
]

export function HangingPlant({
  size = 80,
  className,
  leafClassNames,
}: PlantProps) {
  return (
    <svg
      width={size}
      height={(size * 112) / 80}
      viewBox="0 0 80 112"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="40"
        cy="5"
        r="3"
        fill="none"
        className="stroke-plum-soft"
        strokeWidth="1.5"
      />
      <g
        fill="none"
        className="stroke-plum-soft"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M40 8L18 42" />
        <path d="M40 8V42" />
        <path d="M40 8L62 42" />
      </g>

      <g className={leafClassNames?.[0]} style={leafGroupStyle}>
        <path
          d="M40 44C40 34 32 28 24 30C26 40 32 46 40 44Z"
          className="fill-matcha"
        />
        <path
          d="M40 44C40 32 48 26 58 28C56 40 48 46 40 44Z"
          className="fill-moss"
        />
      </g>

      <path
        d="M16 44H64C64 62 54 72 40 72C26 72 16 62 16 44Z"
        className="fill-marigold"
      />
      <rect
        x="13"
        y="40"
        width="54"
        height="9"
        rx="4.5"
        className="fill-plum"
      />

      {vines.map((vine, index) => (
        <g
          key={vine.path}
          className={leafClassNames?.[index + 1]}
          style={{ ...leafGroupStyle, transformOrigin: 'top center' }}
        >
          <path
            d={vine.path}
            fill="none"
            className="stroke-moss"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {vine.leaves.map((leaf) => (
            <ellipse
              key={`${leaf.x}-${leaf.y}`}
              cx={leaf.x}
              cy={leaf.y}
              rx="3"
              ry="6"
              transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
              className="fill-matcha"
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
