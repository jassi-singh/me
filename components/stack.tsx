import SectionLabel from "@/components/section-label";

const rows: [string, string][] = [
  ["primary", "Go, TypeScript, Python"],
  ["backend", "Microservices, REST APIs, concurrency, Pub/Sub"],
  ["data", "PostgreSQL, Redis, SQLite (GORM), MSSQL"],
  ["infra", "Docker, AWS (EC2, S3), GitHub Actions, CI/CD"],
  ["frontend", "Next.js, React, Tailwind"],
  ["testing", "k6 load testing, unit tests"],
];

export default function Stack() {
  return (
    <section className="mb-[72px]" id="stack">
      <SectionLabel>stack</SectionLabel>
      <table className="w-full border-collapse">
        <tbody>
          {rows.map(([label, value], i) => (
            <tr
              key={label}
              className="border-b border-terminal-border first:border-t"
            >
              <td className="w-[140px] py-3.5 align-top text-[13px] text-terminal-dim">
                {label}
              </td>
              <td className="py-3.5 align-top text-[14px] leading-relaxed text-terminal-fg">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
