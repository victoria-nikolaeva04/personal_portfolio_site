import { useEffect } from 'react'
import { site } from '#/content/site'

// Gives each page its own tab/screen-reader title instead of the one in index.html.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = `${title} | ${site.name}`
    return () => {
      document.title = previous
    }
  }, [title])
}
