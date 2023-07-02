import Title from "@/components/atomics/Title";
import GridWrapper from "@/components/molecules/wrappers/GridWrapper";
import SkillItem from "@/components/organisms/home/SkillItem";
import React from "react";

const LOGOS = [
  "React",
  "Typescript",
  "NextJS",
  "React-Query",
  "GraphQL",
  "Relay",
  "Styled-Components",
  "TailwindCSS",
  "Recoil",
];
const Skills = () => {
  return (
    <section className="h-screen py-4">
      <Title title="SKILLS" />

      <GridWrapper>
        {LOGOS.map((logo) => (
          <SkillItem key={logo} logo={logo} />
        ))}
      </GridWrapper>
    </section>
  );
};

export default Skills;
