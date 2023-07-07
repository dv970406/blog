import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISkillItem {
  name: string;
  href?: string;
}

const SkillItem = ({ name, href }: ISkillItem) => {
  return href ? (
    <li className="group">
      <Link className="flex flex-col items-center" href={href} target="_blank">
        <Image src={`/skills/${name}.svg`} width={64} height={64} alt={name} />
        <p className="text-center transition-colors duration-300 text-main group-hover:text-custom-blue">
          {name}
        </p>
      </Link>
    </li>
  ) : (
    <li className="flex flex-col items-center ">
      <Image src={`/skills/${name}.svg`} width={64} height={64} alt={name} />
      <p className="text-center text-main ">{name}</p>
    </li>
  );
};

export default SkillItem;
