import { Link } from '@tanstack/react-router'
import type { LinkProps } from '@tanstack/react-router'

type BackLinkProps = Pick<LinkProps, 'to' | 'hash' | 'search'> & {
  label: string
}

export function BackLink({ label, ...linkProps }: BackLinkProps) {
  return (
    <Link
      {...linkProps}
      aria-label={label}
      title={label}
      className="text-plum hover:text-moss mb-6 inline-flex h-10 w-10 items-center justify-start"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
    </Link>
  )
}
