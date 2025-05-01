"use client";

import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  return (
    <div className="flex flex-col xl:flex-row justify-center xl:items-center xl:gap-x-8 gap-y-8 text-white">
      <ProjectsContent />
    </div>
  );
}
