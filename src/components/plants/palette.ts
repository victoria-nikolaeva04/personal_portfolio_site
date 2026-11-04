import type { CSSProperties } from 'react'

export type PaletteColor =
  | 'plum'
  | 'plum-soft'
  | 'matcha'
  | 'matcha-soft'
  | 'moss'
  | 'marigold'
  | 'marigold-soft'
  | 'paper'
  | 'cream'

// Written out in full so Tailwind can see every class name.
export const fillClass: Record<PaletteColor, string> = {
  plum: 'fill-plum',
  'plum-soft': 'fill-plum-soft',
  matcha: 'fill-matcha',
  'matcha-soft': 'fill-matcha-soft',
  moss: 'fill-moss',
  marigold: 'fill-marigold',
  'marigold-soft': 'fill-marigold-soft',
  paper: 'fill-paper',
  cream: 'fill-cream',
}

export type PlantProps = {
  size?: number
  className?: string
  /** One class name per leaf group, so each leaf can be animated separately. */
  leafClassNames?: string[]
}

// Lets a transform (rotate, scale) on a leaf group pivot around its own base.
export const leafGroupStyle: CSSProperties = {
  transformBox: 'fill-box',
  transformOrigin: 'bottom center',
}
