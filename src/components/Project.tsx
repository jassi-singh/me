import React from "react";
export interface ProjectInterface {
  name: string;
  url?: string;
  githubUrl: string;
  description: string;
  techStack: string[];
  image: string;
}
const Project = (props: ProjectInterface) => {
  return (
    <div className="grid grid-cols-5 gap-6 place-items-center">
      <div className="opacity-20 lg:opacity-100 col-span-full lg:col-[1/4] row-span-full relative bg-primary rounded-md">
        <img
          className="opacity-75 hover:opacity-100 object-cover h-full rounded-md"
          src={props.image}
          alt={props.image}
        />
      </div>

      <div className="col-span-full lg:col-[3/-1] p-4 row-span-full relative flex flex-col lg:items-end justify-center">
        <h1 className="text-3xl font-bold text-primary">{props.name}</h1>
        <p className="text-sm text-lightSlate p-4 bg-navy rounded-md my-4 w-fit">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.techStack.map((tech, index) => (
            <div
              key={index}
              className="px-2 py-1 text-xs text-slate font-mono"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex mt-2">
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            Github
          </a>
          {props.url && (
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="text-primary ml-2"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
