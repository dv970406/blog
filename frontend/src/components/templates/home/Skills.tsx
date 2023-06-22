import Title from "@/components/atomics/Title";
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
          <li key={logo} className="flex flex-col items-center">
            <Image
              src={`/skills/${logo}.svg`}
              width={64}
              height={64}
              alt="react"
            />
            <p className="text-center text-main">{logo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
