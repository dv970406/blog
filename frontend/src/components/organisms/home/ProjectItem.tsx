"use client";
import { useIntersectionObserver } from "@/hooks/IntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface IProjectItem {
  isOdd: boolean;
  title: string;
  thumbnail: string;
  github: string;
  link: string;
  review: string;
  priority: boolean;
  description: string;
  stacks: string[];
}
const ProjectItem = ({
  isOdd,
  title,
  thumbnail,
  github,
  link,
  review,
  priority,
  description,
  stacks,
}: IProjectItem) => {
  const projectRef = useRef<HTMLLIElement>(null);

  const { isIntersectProject } = useIntersectionObserver(projectRef);
  return (
    <li
      ref={projectRef}
      key={title}
      className={`flex flex-col items-center gap-4 lg:justify-between lg:gap-20 lg:flex-row  opacity-0
       ${isIntersectProject && "animate-appear-bottom-to-top"}
      `}
    >
      <Image
        src={`/thumbnails/${thumbnail}`}
        className={`${isOdd && "lg:order-1"} rounded-lg lg:w-1/2 `}
        alt={title}
        width={600}
        height={600}
        priority={priority}
      />
      <div className={`flex flex-col justify-between lg:w-1/2 gap-6 `}>
        <h2
          className={`tracking-wider uppercase text-gradient text-title ${
            isOdd ? "md:text-left" : "md:text-right"
          }`}
        >
          {title}
        </h2>
        <div className="flex flex-col gap-6">
          <p className="break-words text-sub">{description}</p>
          <ul
            className={`flex flex-wrap gap-2 ${!isOdd && "md:place-self-end"}`}
          >
            {stacks.map((stack) => (
              <li
                key={stack}
                className="py-1 px-2 border-[1px] rounded-lg border-custom-lightgray text-cute"
              >
                {stack}
              </li>
            ))}
          </ul>
          <ul className={`flex gap-6 ${!isOdd && "md:place-self-end"}`}>
            {github && (
              <li>
                <Link target="_blank" href={github}>
                  <Image
                    src={"/github.png"}
                    width={25}
                    height={25}
                    alt={title}
                  />
                </Link>
              </li>
            )}
            {link && (
              <li>
                <Link target="_blank" href={link}>
                  <Image src={"/link.png"} width={25} height={25} alt={title} />
                </Link>
              </li>
            )}
            {review && (
              <li>
                <Link target="_blank" href={review}>
                  <Image src={"/bulb.png"} width={25} height={25} alt={title} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
