type SproutProps = {
  size?: number
}

export function Sprout({ size = 28 }: SproutProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 28V16"
        stroke="#4F5E2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 17C16 11 11.5 7.5 5 8c0 6 4 9.5 11 9z"
        fill="#A7B97A"
        stroke="#4F5E2E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 14c0-5 3.5-8.5 11-8.5 0 5.5-3.5 9-11 8.5z"
        fill="#E6EDD3"
        stroke="#4F5E2E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
