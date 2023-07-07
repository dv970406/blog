import Title from "@/components/atomics/Title";
import GridWrapper from "@/components/molecules/wrappers/GridWrapper";
import SkillItem from "@/components/organisms/home/SkillItem";
import React from "react";

const SKILLS_ARRAY = [
  {
    name: "React",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=be128c49226b4ec0ab56885207a321e6&pm=c",
  },
  {
    name: "Typescript",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=e5fca57570354824b850c75053b380e7&pm=c",
  },
  {
    name: "NextJS",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=98c7aed680394947bef1daf398e0d2f2&pm=c",
  },
  {
    name: "React-Query",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=ad5fbe651e01483988d2762b82270ae6&pm=c",
  },
  { name: "GraphQL" },
  {
    name: "Relay",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=f22af122a6504c4398eda640b8dc93fd&pm=c",
  },
  {
    name: "Styled-Components",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=07f7bcfba3fc449a853da385c2a7baf8&pm=c",
  },
  {
    name: "TailwindCSS",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=239eebb1f7514738a28c2429a37f6ea0&pm=c",
  },
  {
    name: "Recoil",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&p=cce3feb88f964bd4b5b698340c95bdfd&pm=c",
  },
];
const Skills = () => {
  return (
    <section className="py-4 mb-40 ">
      <Title title="SKILLS" />

      <GridWrapper>
        {SKILLS_ARRAY.map(({ name, href }) => (
          <SkillItem key={name} name={name} href={href} />
        ))}
      </GridWrapper>
    </section>
  );
};

export default Skills;
