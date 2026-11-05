# Personal Portfolio Site

My personal portfolio, built for recruiters and peers to see my work and how I think. The theme is a  greenhouse (I am a growing developer, after all).

## Sections

- **Hero:** photo, greeting, and a typing line
- **Experience:** work timeline, education, and resume download
- **Projects:** project cards, each with its own case-study page
- **Toolbox:** skills grouped by area
- **About:** "Off the Clock", hobbies, and the latest Field Notes
- **Contact:** links to email, LinkedIn, and GitHub

Field Notes (`/notes`) are short posts with tag filtering. Each project also has a page at `/projects/<slug>`.

## Tech stack

TypeScript, React 19, TanStack Router, Tailwind CSS v4, MDX, and Vite.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server on port 3000        |
| `npm run build`   | Create a production build in `dist/`          |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Run ESLint                                    |
| `npm run check`   | Check formatting with Prettier                |
| `npm run format`  | Format with Prettier and auto-fix with ESLint |

## Editing content

Almost everything on the site lives in `src/content/`, so changing text rarely means touching components.

- **`site.ts`:** the name, hero, experience, education, projects, toolbox, hobbies, fun fact, contact links, and all the small bits of copy.
- **`notes/<slug>.mdx`:** one file per Field Note. Each exports a `meta` object (`title`, `date`, `tag`, `summary`). Reading time is calculated at build time.
- **`projects/<slug>.mdx`:** the case study for a project. Each exports `meta` (`title`, `role`, `team`, `dates`, `stack`, `links`). The slug must match the project's `slug` in `site.ts`. A project without an MDX file still gets a page built from its `site.ts` data.

Add a new note or project by creating the file. It shows up automatically.

## Project structure

```
src/
  components/   Page sections (Hero, Experience, ...), plants/ for the SVG art
  content/      Site copy and the MDX notes and case studies
  routes/       File-based routes (home, notes, projects)
  styles.css    Theme colors, fonts, and reusable animations
```

## Design

- **Palette:** plum, matcha green, cream, and marigold
- **Fonts:** Fraunces (headings), DM Sans (body), Caveat (handwritten notes)
- **Responsive:** every mobile adjustment uses Tailwind's `max-sm:` prefix, so the desktop layout is unaffected by phone tweaks.

## Accessibility

- A skip link, one `h1` per page, and landmarks on every page
- Each page sets its own document title, and focus moves to the new page's content after navigation, with the title announced to screen readers
- A **Pause animations** button in the header stops the typing text, floating pollen, and crawling snail. The choice is remembered, and the OS "reduce motion" setting is respected too
- Text colors meet WCAG AA contrast

The decorative animations all live in `src/styles.css`. Add `data-motion-paused` handling there if you add new endless ones.
