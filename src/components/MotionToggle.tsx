import { toggleMotionPaused, useMotionPaused } from '#/components/motion'

export function MotionToggle() {
  const paused = useMotionPaused()
  const label = 'Pause animations'

  return (
    <button
      type="button"
      onClick={toggleMotionPaused}
      aria-pressed={paused}
      aria-label={label}
      title={paused ? 'Animations paused. Click to resume' : label}
      className="text-plum hover:bg-matcha-soft inline-flex h-9 w-9 items-center justify-center rounded-full"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        {paused ? (
          <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />
        ) : (
          <>
            <rect x="5" y="4" width="4.5" height="16" rx="1.2" />
            <rect x="14.5" y="4" width="4.5" height="16" rx="1.2" />
          </>
        )}
      </svg>
    </button>
  )
}
