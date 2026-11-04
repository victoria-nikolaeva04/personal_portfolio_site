import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-12 text-[clamp(28px,3vw,34px)] leading-tight font-semibold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="font-display mt-8 text-2xl font-semibold" {...props} />
  ),
  p: (props) => <p className="mt-4 text-lg" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-6 text-lg" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-6 text-lg" {...props} />
  ),
  a: (props) => (
    <a
      className="text-moss decoration-matcha font-medium underline underline-offset-4"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  code: (props) => (
    <code
      className="bg-matcha-soft rounded px-1.5 py-0.5 text-[0.9em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-moss text-paper mt-6 overflow-x-auto rounded-[16px] p-5 text-[15px] leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  img: (props) => (
    <img
      className="border-plum mt-6 w-full rounded-[20px] border-2"
      loading="lazy"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-matcha font-display mt-6 border-l-4 pl-5 text-xl italic"
      {...props}
    />
  ),
}
