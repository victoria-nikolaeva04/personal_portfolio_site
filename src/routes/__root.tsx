import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { site } from '#/content/site'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

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
