import { fillClass } from '#/components/plants/palette'
import type { PaletteColor } from '#/components/plants/palette'

type LeafProps = {
  size?: number
  color?: PaletteColor
  className?: string
}

export function Leaf({ size = 24, color = 'matcha', className }: LeafProps) {
  return (
    <svg
      width={size}
      height={(size * 4) / 3}
      viewBox="0 0 24 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 30C4 24 2 12 12 2C22 12 20 24 12 30Z"
        className={fillClass[color]}
      />
      <path
        d="M12 28V10"
        className="stroke-moss"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.6"
        fill="none"
      />
    </svg>
  )
}
