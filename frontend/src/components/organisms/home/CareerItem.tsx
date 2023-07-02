"use client";

import { useIntersectionObserver } from "@/hooks/IntersectionObserver";
import React, { useRef } from "react";

interface ICareerItem {
  duration: string;
  company: string;
  position: string;
  introduce: string;
  task: string;
  performances: {
    topic: string;
    descriptions: string[];
  }[];
}
const CareerItem = ({
  duration,
  company,
  position,
  introduce,
  task,
  performances,
}: ICareerItem) => {
  const careerRef = useRef<HTMLLIElement>(null);

  const { isIntersecting } = useIntersectionObserver(careerRef);

  return (
    <li
      ref={careerRef}
      className={`flex flex-col gap-4 lg:justify-between lg:gap-20 lg:flex-row opacity-0
       ${isIntersecting && "animate-appear-bottom-to-top"}
      `}
    >
      <div className="flex flex-col gap-4 lg:w-1/4">
        <h2 className={`tracking-wider uppercase text-gradient text-title `}>
          {company}
        </h2>
        <div>
          <h3 className="flex items-center justify-between text-sub">
            Duration:
            <p>{duration}</p>
          </h3>

          <h3 className="flex items-center justify-between text-sub">
            Position:
            <p>{position}</p>
          </h3>
        </div>
      </div>
      <div className="lg:w-3/4">
        <h3 className="text-subtitle">기업소개</h3>
        <p className="mt-2 ml-6 list-disc list-item text-cute">{introduce}</p>
        <br />
        <h3 className="text-subtitle">진행업무</h3>
        <p className="mt-2 ml-6 list-disc list-item text-cute">{task}</p>
        <br />
        <h3 className="text-subtitle">기여성과</h3>
        {performances.map((performance, index) => (
          <React.Fragment key={performance.topic}>
            <h4 className="ml-2 text-sub text-custom-blue">
              성과{index + 1}: {performance.topic}
            </h4>
            <ul>
              {performance.descriptions.map((description, index) => (
                /* 인터랙션 될 위험 없으므로 index를 key로 줘도 무방 */
                <li
                  key={index}
                  className="mb-1 ml-8 list-disc list-item text-cute"
                >
                  {description}
                </li>
              ))}
            </ul>
            <br />
          </React.Fragment>
        ))}
      </div>
    </li>
  );
};

export default CareerItem;
