import clsx from "clsx";
import React from "react";

export interface SkillProps {
  name: String;
  icon: React.ReactElement;
  level: SkillLevel;
}

export enum SkillLevel {
  Beginner,
  Basic,
  Intermediate,
  Advanced,
}

const Skill = (props: SkillProps) => {
  const levelArray = Object.keys(SkillLevel).filter((key) =>
    isNaN(Number(key))
  );
  return (
    <div className="rounded-md bg-navy flex flex-col items-center justify-center shadow-sm tracking-widest p-4">
      <span className="text-6xl text-primary">{props.icon}</span>
      <h1 className="text-lightSlate text-xl font-bold py-3 text-center">
        {props.name}
      </h1>
      <div className="flex flex-row">
        {levelArray.map((_, index) => {
          return (
            <div key={index} className="flex flex-row items-center">
              <div
                className={clsx("w-3 h-3 rounded-full", {
                  "bg-primary": index <= props.level,
                  "bg-darkSlate": index > props.level,
                  'scale-150': index === props.level 
                })}
              />

              {index !== levelArray.length - 1 && (
                <div
                  className={clsx("w-8 h-1", {
                    "bg-primary": index < props.level,
                    "bg-darkSlate": index >= props.level,
                  })}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-lightSlate text-xs bg-lightNavy p-2 rounded-xl font-mono mt-5">{SkillLevel[props.level]}</div>
    </div>
  );
};

export default Skill;
