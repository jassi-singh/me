import SectionLabel from "@/components/section-label";

type ExpItem = {
  company: string;
  metaLines: string[];
  title: string;
  /** One or more paragraphs for scanability */
  body: string[];
  tags: string[];
};

const items: ExpItem[] = [
  {
    company: "Fountane",
    metaLines: ["Apr 2023 – Present", "Hyderabad"],
    title: "Software Engineer II",
    body: [
      "Sub-led 7–10 engineers on a multi-tenant hospitality/PMS platform—turning client requirements into designs for the team and tech lead—and shipped HMS modules 25% faster than the prior baseline. Built and operated core Go microservices and REST APIs with deliberate lifecycle patterns; owned PostgreSQL and Redis reservation workflows for consistency and zero-downtime deploys; delivered Stripe/FortisPay with JWT-based RBAC.",
      "Automated 5+ mission-critical paths using MSSQL triggers and jobs, cutting manual intervention about 10%. Owned Dockerized CI/CD (including GitHub Actions), reducing release effort roughly 15% and improving deployment reliability.",
    ],
    tags: [
      "Go",
      "PostgreSQL",
      "Redis",
      "MSSQL",
      "Docker",
      "Stripe",
      "JWT/RBAC",
      "GitHub Actions",
    ],
  },
  {
    company: "Maven Lifecare (Curer)",
    metaLines: ["Nov 2021 – Apr 2023", "Remote"],
    title: "Software Engineer Intern",
    body: [
      "End-to-end React Native delivery: payment gateways and backend APIs, RTC/RTM, deep linking, and localization—targeting roughly 10% better accessibility and usability on key flows.",
      "Added video calling and FCM push notifications (engagement lift ~5% on measured surfaces). Shipped production builds to Play Store and App Store with stable release cadence.",
    ],
    tags: [
      "React Native",
      "Payments",
      "RTC/RTM",
      "FCM",
      "TypeScript",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mb-[72px]" id="experience">
      <SectionLabel>experience</SectionLabel>
      <div>
        {items.map((item) => (
          <div
            key={item.company}
            className="grid grid-cols-1 gap-2 border-b border-terminal-border py-5 first:border-t sm:grid-cols-[160px_1fr] sm:gap-6"
          >
            <div className="text-[13px] leading-relaxed text-terminal-dim">
              <strong className="mb-0 block font-normal text-terminal-fg">
                {item.company}
              </strong>
              {item.metaLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
            <div>
              <h3 className="mb-2 text-[15px] font-medium text-terminal-fg">
                {item.title}
              </h3>
              <div className="space-y-3">
                {item.body.map((paragraph, i) => (
                  <p
                    key={`${item.company}-${i}`}
                    className="text-[14px] leading-[1.75] text-terminal-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-terminal-border px-2 py-0.5 text-[12px] tracking-[0.03em] text-terminal-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
