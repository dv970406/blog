import React from "react";
import projectsData from "@/jsons/projects.json";
import Title from "@/components/atomics/Title";
import ProjectItem from "@/components/organisms/home/ProjectItem";
import ListWrapper from "@/components/molecules/wrappers/ListWrapper";
import SmoothScrollSection from "@/components/molecules/wrappers/SmoothScrollSection";

const Projects = () => {
  return (
    <SmoothScrollSection sectionId="projects">
      <Title title="PROJECTS" />

      <ListWrapper>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.title}
            isOdd={index % 2 === 1}
            priority={index === 0 || index === 1}
            {...project}
          />
        ))}
      </ListWrapper>
    </SmoothScrollSection>
  );
};

export default Projects;
