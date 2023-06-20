import React from "react";
import projectsData from "@/jsons/projects.json";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="min-h-screen mb-60">
      <h1 className="tracking-widest text-title">PROJECTS</h1>
      <ul className="flex flex-col gap-32 mt-20">
        {projectsData.map((project, index) => (
          <li
            key={project.title}
            className="flex flex-col justify-between gap-20 lg:flex-row"
          >
            <Image
              src={`/thumbnails/${project.thumbnail}`}
              className={`${index % 2 === 1 && "lg:order-1"} rounded-lg w-1/2`}
              alt={project.title}
              width={600}
              height={600}
              priority={index === 1 || index === 2}
            />
            <div className={`flex flex-col justify-between w-1/2 gap-6 `}>
              <h2
                className={`tracking-wider uppercase text-gradient text-title ${
                  index % 2 === 1 ? "md:text-left" : "md:text-right"
                }`}
              >
                {project.title}
              </h2>
              <div className="flex flex-col gap-6">
                <p className="break-words text-sub">{project.description}</p>
                <ul
                  className={`flex flex-wrap gap-2 ${
                    index % 2 !== 1 && "md:place-self-end"
                  }`}
                >
                  {project.stacks.map((stack) => (
                    <li
                      key={stack}
                      className="py-1 px-2 border-[1px] rounded-lg border-custom-darkgray text-cute"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <ul
                  className={`flex gap-6 ${
                    index % 2 !== 1 && "md:place-self-end"
                  }`}
                >
                  {project.github && (
                    <li>
                      <Link href={project.github}>
                        <Image
                          src={"/github.png"}
                          width={25}
                          height={25}
                          alt={project.title}
                        />
                      </Link>
                    </li>
                  )}
                  {project.link && (
                    <li>
                      <Link href={project.link}>
                        <Image
                          src={"/link.png"}
                          width={25}
                          height={25}
                          alt={project.title}
                        />
                      </Link>
                    </li>
                  )}
                  {project.review && (
                    <li>
                      <Link href={project.review}>
                        <Image
                          src={"/bulb.png"}
                          width={25}
                          height={25}
                          alt={project.title}
                        />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
