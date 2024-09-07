import { cn } from "@/lib/utils";
import React from "react";

export default function Experience() {
  return (
    <>
      <h1 className="font-mono text-lg mb-8">Experience</h1>
      <ul className="space-y-10 border-l border-neutral-800">
        <ExperienceItem
          position="Software Engineer"
          company="Fountane"
          present
        />

        <ExperienceItem position="Full Stack Intern" company="Curer" />

        <ExperienceItem position="Full Stack Intern" company="Flunkey" />
      </ul>
    </>
  );
}

const ExperienceItem = ({
  position,
  company,
  present = false,
}: {
  position: string;
  company: string;
  present?: boolean;
}) => (
  <div className="flex gap-4">
    <div
      className={cn("w-3 h-3 rounded-full mt-2 -translate-x-[50%]", {
        "bg-neutral-800 dark:bg-neutral-500": present,
        "bg-neutral-500 dark:bg-neutral-800": !present,
      })}
    ></div>
    <div className="font-mono">
      <div className="flex gap-4">
        <h2>{position}</h2>
        {present && (
          <span className="border rounded-full text-xs px-2 py-1 text-neutral-500 border-neutral-600">
            Present
          </span>
        )}
      </div>
      <p className="text-sm text-neutral-500">{company}</p>
    </div>
  </div>
);
