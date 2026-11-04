import { leafGroupStyle } from '#/components/plants/palette'

type SnailProps = {
  size?: number
  className?: string
  shellClassName?: string
  bodyClassName?: string
}

export function Snail({
  size = 48,
  className,
  shellClassName,
  bodyClassName,
}: SnailProps) {
  return (
    <svg
      width={size}
      height={(size * 32) / 48}
      viewBox="0 0 48 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={bodyClassName} style={leafGroupStyle}>
        <path
          d="M3 29C3 25 7 23 12 23H36C38 23 38 21 38 19V14H42V21C44 22 46 24 46 26C46 28 45 29 43 29Z"
          className="fill-matcha"
        />
        <g
          fill="none"
          className="stroke-moss"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M39 14L37 7" />
          <path d="M41 14L44 7" />
        </g>
        <circle cx="37" cy="6" r="1.5" className="fill-moss" />
        <circle cx="44.5" cy="6" r="1.5" className="fill-moss" />
      </g>
      <g className={shellClassName} style={leafGroupStyle}>
        <circle cx="22" cy="16" r="11" className="fill-marigold" />
        <path
          d="M22 16C22 14 24 13 25 14C27 15 26 19 23 20C19 21 16 18 17 14C18 9 24 8 28 11"
          fill="none"
          className="stroke-plum-soft"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
