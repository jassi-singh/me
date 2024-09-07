import React from "react";

export interface SkillProps {
  name: String;
  icon: React.ReactElement;
}

const Skill = (props: SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl sm:text-6xl text-primary">{props.icon}</div>
      <h1 className="text-lightSlate text-sm font-mono py-3 text-center">
        {props.name}
      </h1>
    </div>
  );
};

export default Skill;
