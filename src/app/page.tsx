import Navbar from "@/components/Navbar";
import Container from "@/components/ui/container";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Container>
        <Hero/>
        <Projects/>
        <Skills/>
      </Container>
    </>
  );
}
