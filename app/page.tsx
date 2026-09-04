import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/Skills";
import Experience from "@/components/experience"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <TechStack />
    </>
  );
}