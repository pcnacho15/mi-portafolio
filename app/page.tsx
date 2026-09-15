import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";
import { Experience } from "./_components/experience";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { BackgroundEffects } from "./_components/background-effects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
