"use client";

import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  projectRef: RefObject<HTMLLIElement>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!projectRef.current) return;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsIntersecting(true);
        });
      },
      { threshold: 0.7 }
    );

    observer.observe(projectRef?.current);

    return () => {
      if (!projectRef.current) return;
      observer.unobserve(projectRef?.current);
    };
  }, []);

  return { isIntersecting };
};
