import SectionLabel from "@/components/section-label";

type ProjectCard = {
  lang: string;
  name: string;
  description: string;
  stat: string;
  href: string;
};

const projects: ProjectCard[] = [
  {
    lang: "Go",
    name: "forge",
    description: `Distributed Key Generation Service. Range-based reservation with transactional locks. <200ms p95 at 2,000 concurrent users.`,
    stat: "★ 1 · distributed systems · k6",
    href: "https://github.com/jassi-singh/forge",
  },
  {
    lang: "Go",
    name: "mini-gatekeeper",
    description:
      "Thundering Herd solver using Redis distributed locking and Pub/Sub to prevent cache stampedes.",
    stat: "concurrency · Redis · Pub/Sub",
    href: "https://github.com/jassi-singh/mini-gatekeeper",
  },
  {
    lang: "TypeScript",
    name: "react-masonry",
    description:
      "Responsive masonry layout component for React. Zero dependencies.",
    stat: "★ 2 · npm package",
    href: "https://github.com/jassi-singh/react-masonry",
  },
  {
    lang: "TypeScript",
    name: "flight-simulator",
    description:
      "State-driven frontend simulation with deterministic state transitions and high-frequency UI updates.",
    stat: "state machine · frontend",
    href: "https://github.com/jassi-singh/flight-simulator",
  },
];

export default function Projects() {
  return (
    <section className="mb-[72px]" id="projects">
      <SectionLabel>projects</SectionLabel>
      <div className="grid grid-cols-1 gap-px border border-terminal-border bg-terminal-border sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.href}
            className="block bg-terminal-bg p-6 transition-colors duration-150 hover:bg-terminal-hover"
            href={p.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="mb-2.5 text-[12px] tracking-[0.06em] text-terminal-accent">
              {p.lang}
            </div>
            <h3 className="mb-2 text-[15px] font-medium text-terminal-fg">
              {p.name}
            </h3>
            <p className="text-[14px] leading-relaxed text-terminal-muted">
              {p.description}
            </p>
            <div className="mt-3.5 text-[12px] text-terminal-dim">{p.stat}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
