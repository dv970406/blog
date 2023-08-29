import Career from "@/components/templates/home/Career";
import Contact from "@/components/templates/home/Contact";
import Information from "@/components/templates/home/Information";
import Projects from "@/components/templates/home/Projects";
import Skills from "@/components/templates/home/Skills";

export default function Home() {
  return (
    <>
      <Information />
      <Projects />
      <Career />
      {/* <Skills /> */}
      <Contact />
    </>
  );
}
