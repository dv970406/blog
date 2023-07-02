import React from "react";

interface ISmoothScrollSection {
  sectionId: string;
  children: React.ReactNode;
}
const SmoothScrollSection = ({ sectionId, children }: ISmoothScrollSection) => {
  return (
    <section id={sectionId} className="py-4 mb-40 scroll-smooth">
      {children}
    </section>
  );
};

export default SmoothScrollSection;
