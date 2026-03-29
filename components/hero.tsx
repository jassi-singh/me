import Link from "next/link";
import SocialIconLinks from "@/components/social-icon-links";

export default function Hero() {
  return (
    <div className="mb-20" id="about">
      <div className="mb-1.5 flex items-baseline gap-2.5">
        <span className="select-none text-[14px] text-terminal-accent">$</span>
        <h1 className="text-[clamp(30px,5vw,44px)] font-normal leading-[1.2] tracking-[-0.02em] text-terminal-fg">
          Jaswinder Singh
          <span
            className="ml-1 inline-block h-3.5 w-2 translate-y-px bg-terminal-accent align-middle animate-cursor-blink"
            aria-hidden
          />
        </h1>
      </div>
      <p className="mt-6 max-w-[32rem] text-[15px] leading-[1.75] text-terminal-muted">
        Backend engineer at <span className="text-terminal-fg">Fountane</span>
        .
        <br />
        Building reliable Go microservices, distributed systems,
        <br />
        and tools I want to exist.
      </p>
      <SocialIconLinks className="mt-6" />
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Link
          className="inline-flex items-center gap-2 border border-terminal-accent px-[18px] py-2.5 text-[13px] tracking-[0.06em] text-terminal-accent transition-colors duration-150 hover:bg-terminal-accent hover:text-terminal-bg"
          href="/#projects"
        >
          view projects
        </Link>
      </div>
    </div>
  );
}
