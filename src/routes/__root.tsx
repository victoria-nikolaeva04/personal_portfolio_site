import { useEffect, useRef, useState } from 'react'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { site } from '#/content/site'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

// A single-page app swaps content without a real page load, so screen readers
// hear nothing. After each navigation, move focus to the new page's <main> and
// announce its title.
function RouteAnnouncer() {
  const pathname = useRouterState({
    select: (state) => state.resolvedLocation?.pathname,
  })
  const previous = useRef<string | undefined>(undefined)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!pathname) return
    // The first page load is not a navigation.
    if (previous.current === undefined) {
      previous.current = pathname
      return
    }
    if (previous.current === pathname) return
    previous.current = pathname

    const main = document.getElementById('main')
    if (main) {
      main.setAttribute('tabindex', '-1')
      main.focus({ preventScroll: true })
    }
    setMessage(document.title)
  }, [pathname])

  return (
    <div role="status" aria-live="polite" className="sr-only">
      {message}
    </div>
  )
}

function RootComponent() {
  return (
    <>
      <div className="flex min-h-screen flex-col [&>main]:flex-1">
        <a
          href="#main"
          className="bg-moss text-paper absolute top-2 left-2 z-50 -translate-y-20 rounded px-4 py-2 focus:translate-y-0"
        >
          {site.skipLink}
        </a>
        <Header />
        <RouteAnnouncer />
        <Outlet />
        <Footer />
      </div>
      {import.meta.env.DEV && (
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
    </>
  )
}
