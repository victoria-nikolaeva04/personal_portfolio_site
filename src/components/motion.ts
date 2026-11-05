import { useSyncExternalStore } from 'react'

// Whether the visitor has paused the decorative animations (typing text,
// floating pollen, crawling snail). Remembered between visits.
const STORAGE_KEY = 'motion-paused'
const listeners = new Set<() => void>()

function readStored() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

let paused = typeof window !== 'undefined' && readStored()

// styles.css stops the CSS animations when this attribute is on <html>.
function applyToDocument() {
  document.documentElement.toggleAttribute('data-motion-paused', paused)
}

if (typeof window !== 'undefined') applyToDocument()

export function toggleMotionPaused() {
  paused = !paused
  applyToDocument()
  try {
    window.localStorage.setItem(STORAGE_KEY, paused ? '1' : '0')
  } catch {
    // Storage can be blocked; the choice just won't be remembered.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useMotionPaused() {
  return useSyncExternalStore(
    subscribe,
    () => paused,
    () => false,
  )
}
