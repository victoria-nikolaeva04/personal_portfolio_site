import { useEffect, useState } from 'react'
import { Sprout } from '#/components/plants/Sprout'

type TypingLineProps = {
  lead: string
  phrases: string[]
  className?: string
}

const TYPE_MS = 85
const DELETE_MS = 45
const PAUSE_MS = 1800
const NEXT_MS = 350

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function TypingLine({ lead, phrases, className }: TypingLineProps) {
  const [reduced, setReduced] = useState(prefersReducedMotion)
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const phrase = phrases[index] ?? ''
  const finished = !deleting && length === phrase.length

  useEffect(() => {
    if (reduced || phrases.length === 0) return

    let delay: number
    let step: () => void

    if (finished) {
      delay = PAUSE_MS
      step = () => setDeleting(true)
    } else if (deleting) {
      if (length === 0) {
        delay = NEXT_MS
        step = () => {
          setDeleting(false)
          setIndex((current) => (current + 1) % phrases.length)
        }
      } else {
        delay = DELETE_MS
        step = () => setLength(length - 1)
      }
    } else {
      delay = TYPE_MS
      step = () => setLength(length + 1)
    }

    const timer = window.setTimeout(step, delay)
    return () => window.clearTimeout(timer)
  }, [reduced, phrases.length, finished, deleting, length])

  if (phrases.length === 0) return null

  const fullSentence = `${lead} ${reduced ? phrases[0] : phrase}`

  return (
    <p className={className}>
      <span className="sr-only">{fullSentence}</span>
      <span aria-hidden="true">
        {lead}{' '}
        <em className="text-moss italic">
          {reduced ? phrases[0] : phrase.slice(0, length)}
        </em>
        {!reduced && (
          <>
            <span className="typing-cursor bg-marigold ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-full" />
            <span className="ml-2 inline-block h-7 w-7 align-middle">
              {finished && <Sprout size={28} className="typing-pop" />}
            </span>
          </>
        )}
      </span>
    </p>
  )
}
