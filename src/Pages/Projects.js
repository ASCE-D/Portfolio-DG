import React from "react";
import Project, { ProjectGrid } from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">My Projects</h1> */}
      <ProjectGrid projects={projectDetails} />
    </div>
      </section>
    </main>
  );
}

// function Projects() {
//   return (
   
//   );
// }

export default Projects;
