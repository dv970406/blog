"use client";

import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  projectRef: RefObject<HTMLLIElement>
) => {
  const [isIntersectProject, setIsIntersectProject] = useState(false);

  useEffect(() => {
    if (!projectRef.current) return;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsIntersectProject(true);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(projectRef?.current);

    return () => {
      if (!projectRef.current) return;
      observer.unobserve(projectRef?.current);
    };
  }, []);

  return { isIntersectProject };
};
