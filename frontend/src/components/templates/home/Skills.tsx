import Title from "@/components/atomics/Title";
import Skill from "@/components/organisms/home/Skill";
import Image from "next/image";
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
];
const Skills = () => {
  return (
    <section className="h-screen py-4">
      <Title title="SKILLS" />

      <ul className="grid grid-cols-3 gap-4 mt-10">
        {LOGOS.map((logo) => (
          <Skill key={logo} logo={logo} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
