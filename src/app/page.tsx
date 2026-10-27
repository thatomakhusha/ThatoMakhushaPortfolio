import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
    </>
  );
}
