import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-6 mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mt-6 mb-4">{children}</h4>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-neutral-400 hover:underline italic"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,

    ...components,
  };
}
