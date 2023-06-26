import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISocialLinkItem {
  name: string;
  href: string;
}
const SocialLinkItem = ({ name, href }: ISocialLinkItem) => {
  return (
    <li
      key={name}
      className="py-1 px-2 border-[1px] rounded-lg border-custom-lightgray hover:border-blue-transition hover:text-custom-blue"
    >
      <Link href={href} className="flex gap-2" target="_blank">
        <Image src={`/${name}.png`} width={24} height={24} alt={name} />
        <p className="text-sub ">{name}</p>
      </Link>
    </li>
  );
};

export default SocialLinkItem;
