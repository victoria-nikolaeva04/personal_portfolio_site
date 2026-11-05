type WavyBandProps = {
  className?: string
}

const WAVE_VIEWBOX = '0 0 1440 84'
const WAVE_CURVE = 'M0 30C180 5 360 5 540 30S900 55 1080 30S1300 8 1440 30'

const LEAVES = [
  { x: 135, y: 16, angle: -30 },
  { x: 270, y: 11, angle: 25 },
  { x: 675, y: 44, angle: -35 },
  { x: 810, y: 49, angle: 30 },
  { x: 1275, y: 12, angle: -25 },
]

const waveClass =
  'pointer-events-none absolute inset-x-0 block h-[var(--wave-h)] w-full'

function TopWave() {
  return (
    <svg
      viewBox={WAVE_VIEWBOX}
      preserveAspectRatio="xMidYMax slice"
      className={`${waveClass} bottom-full`}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(0 24)">
        <path d={`${WAVE_CURVE}V60H0Z`} fill="#E6EDD3" />
        <path
          d={WAVE_CURVE}
          pathLength={1}
          fill="none"
          stroke="#4F5E2E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {LEAVES.map((leaf) => (
          <path
            key={leaf.x}
            d="M0 0C6-6 6-14 0-18C-6-14-6-6 0 0Z"
            fill="#4F5E2E"
            transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle})`}
          />
        ))}
      </g>
    </svg>
  )
}

function BottomWave() {
  return (
    <svg
      viewBox={WAVE_VIEWBOX}
      preserveAspectRatio="xMidYMax slice"
      className={`${waveClass} top-full rotate-180`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`${WAVE_CURVE}V60H0Z`}
        fill="#E6EDD3"
        transform="translate(0 24)"
      />
    </svg>
  )
}

export function WavyBand({ className = '' }: WavyBandProps) {
  return (
    <div
      className={`bg-matcha-soft relative my-[var(--wave-h)] [--wave-h:clamp(56px,6vw,112px)] ${className}`.trim()}
    >
      <TopWave />
      <BottomWave />
    </div>
  )
}
