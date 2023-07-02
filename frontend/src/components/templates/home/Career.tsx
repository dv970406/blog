import Title from "@/components/atomics/Title";
import React from "react";
import careersData from "@/jsons/careers.json";
import CareerItem from "@/components/organisms/home/CareerItem";
import ListWrapper from "@/components/molecules/wrappers/ListWrapper";
import SmoothScrollSection from "@/components/molecules/wrappers/SmoothScrollSection";

const Career = () => {
  return (
    <SmoothScrollSection sectionId="career">
      <Title title="CAREER" />
      <ListWrapper>
        {careersData.map((career) => (
          <CareerItem key={career.company} {...career} />
        ))}
      </ListWrapper>
    </SmoothScrollSection>
  );
};

export default Career;
