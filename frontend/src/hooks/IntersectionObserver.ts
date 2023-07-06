"use client";

import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  elementRef: RefObject<HTMLLIElement>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsIntersecting(true);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(elementRef?.current);

    return () => {
      if (!elementRef.current) return;
      observer.unobserve(elementRef?.current);
    };
  }, []);

  return { isIntersecting };
};
