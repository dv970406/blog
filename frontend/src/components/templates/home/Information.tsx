import Bio from "@/components/organisms/home/Bio";
import Greeting from "@/components/organisms/home/Greeting";
import React from "react";

const Information = () => {
  return (
    <section className="h-screen">
      <div className="">
        <Greeting />
        <Bio />
      </div>
    </section>
  );
};

export default Information;
