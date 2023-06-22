import Bio from "@/components/organisms/home/Bio";
import Greeting from "@/components/organisms/home/Greeting";
import Image from "next/image";
import React from "react";

const Information = () => {
  return (
    <section className="h-screen mb-60">
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src="/valley.svg"
        alt="valley"
        className="absolute inset-x-0 w-full h-auto top-1/3 lg:top-auto"
        priority
      />

      <div className="absolute  max-w-[500px] bottom-5">
        <Greeting />
        <Bio />
      </div>
    </section>
  );
};

export default Information;
