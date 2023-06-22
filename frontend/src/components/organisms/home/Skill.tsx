import Image from "next/image";
import React from "react";

interface ISkill {
  logo: string;
}
const Skill = ({ logo }: ISkill) => {
  return (
    <li key={logo} className="flex flex-col items-center">
      <Image src={`/skills/${logo}.svg`} width={64} height={64} alt="react" />
      <p className="text-center text-main">{logo}</p>
    </li>
  );
};

export default Skill;
