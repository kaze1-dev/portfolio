import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </>
  );
}