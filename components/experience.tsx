import { cn } from "@/lib/utils";
import React from "react";

export default function Experience() {
  return (
    <>
      <h1 className="font-mono text-lg mb-8">Experience</h1>
      <ul className="space-y-10 border-l border-gray-800">
        <ExperienceItem
          position="Software Engineer"
          company="Fountane"
          current
        />

        <ExperienceItem position="Software Engineer" company="Fountane" />

        <ExperienceItem position="Software Engineer" company="Fountane" />
      </ul>
    </>
  );
}

const ExperienceItem = ({
  position,
  company,
  current = false,
}: {
  position: string;
  company: string;
  current?: boolean;
}) => (
  <div className="flex gap-4">
    <div
      className={cn("w-3 h-3 rounded-full mt-2 -translate-x-[50%]", {
        "bg-gray-500": current,
        "bg-gray-800 -pl-1": !current,
      })}
    ></div>
    <div className="font-mono">
      <div className="flex gap-4">
        <h2>{position}</h2>
        {current && (
          <span className="border rounded-full text-xs px-2 py-1 text-gray-300 border-gray-500">
            Current
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);
