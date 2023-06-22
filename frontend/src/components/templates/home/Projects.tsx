import React from "react";
import projectsData from "@/jsons/projects.json";
import Title from "@/components/molecules/Title";
import Project from "@/components/organisms/home/Project";

const Projects = () => {
  return (
    <section id="projects" className="py-4 mb-60 scroll-smooth">
      <Title title="PROJECTS" />

      <ul className="flex flex-col gap-32 mt-10">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            isOdd={index % 2 === 1}
            priority={index === 0 || index === 1}
            {...project}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
