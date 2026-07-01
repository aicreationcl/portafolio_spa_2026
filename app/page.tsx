import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Trajectory } from "@/components/sections/Trajectory";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <TechStack />
      <Projects />
      <Trajectory />
      <Contact />
    </main>
  );
}
